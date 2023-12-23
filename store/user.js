import { defineStore } from "pinia";
import { useLoadingStore } from "./loading";
import axios from "axios";

export const useUsersStore = defineStore("users", () => {
  const runtimeconfig = useRuntimeConfig();
  const baseUrl = runtimeconfig.public.apiBaseUrl;
  const isLoading = useLoadingStore();

  const store = reactive({
    page: 1,
    getUsers: "",
    id: "",
    // pagination:
  });
  const create = reactive({
    phone: "",
    password: "",
    username: "",
  });

  function createUser() {
    if (isLoading.modal.edit) {
      updateUser();
      return;
    }
    isLoading.modal.create = false;
    isLoading.addLoading("getUsers");
    axios
      .post(baseUrl + `/salesman/register`, create)
      .then((res) => {
        console.log(res);
        getUsers();
      })
      .catch((err) => {
        console.log(err);
        isLoading.addLoading("getUsers");
      });
  }

  function getUsers() {
    isLoading.addLoading("getUsers");
    axios
      .get(baseUrl + `/salesman/pagination/${store.page}/10`)
      .then((res) => {
        console.log(res);
        store.getUsers = res.data.data?.records;
        isLoading.removeLoading("getUsers");
      })
      .catch((err) => {
        console.log(err);
        isLoading.removeLoading("getUsers");
      });
  }

  function deleteUser() {
    isLoading.addLoading("deleteUser");
    axios
      .delete(baseUrl + `/salesman/${store.id}`)
      .then((res) => {
        console.log(res);
        isLoading.removeLoading("deleteUser");
      })
      .catch((err) => {
        isLoading.removeLoading("deleteUser");
        console.log(err);
      });
  }

  function getDataById(id) {
    store.id = id;
    axios
      .get(baseUrl + `/salesman/${id}`)
      .then((res) => {
        console.log(res);
        const getById = res.data.data?.salesman;
        create.phone = getById.phone;
        create.username = getById.username;
        isLoading.modal.edit = true;
        isLoading.modal.create = true;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function updateUser() {
    // axios.put(baseUrl + `/salesman/${}`)
  }

  return { store, create, createUser, getUsers, deleteUser, getDataById };
});
