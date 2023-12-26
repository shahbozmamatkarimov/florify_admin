import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("isLogged", () => {
  const router = useRouter();
  const runtimeconfig = useRuntimeConfig();
  const baseUrl = runtimeconfig.public.apiBaseUrl;

  const form = reactive({
    phone: "",
    password: "",
  });

  const register = reactive({
    phone: "",
    password: "",
    email: "",
    username: "",
    secret_key: "",
  });

  function checkAuth() {
    if (process.client) {
      const id = localStorage.getItem("salesman_id");
      const token = localStorage.getItem("token");
      fetch(baseUrl + `/salesman/profile/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (
            res.message === "Token vaqti tugagan!" ||
            res.message === "Token topilmadi!"
          ) {
            if (router.currentRoute.value.fullPath == "login") return;
            router.push("/login");
          }
          return true;
        })
        .catch((err) => {
          console.log(err);
          router.push("/login");
        });
    }
  }

  function adminRegister() {
    axios
      .post(baseUrl + "/admin/register", register)
      .then((res) => {
        console.log(res);
        if (res.data.statusCode == 201){
          router.push("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return { checkAuth, form, register, adminRegister };
});
