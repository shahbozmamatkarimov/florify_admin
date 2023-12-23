import { defineStore } from "pinia";
import axios from "axios";
import { useNotification } from "@/composables/notification";

export const useProfileStore = defineStore("profile", () => {
  const { showLoading, showSuccess, showWarning, showError } =
    useNotification();
  const runtimeconfig = useRuntimeConfig();
  const baseUrl = runtimeconfig.public.apiBaseUrl;
  const baseUrlImage = ref(runtimeconfig.public.apiBaseUrl?.slice(0, -4));

  const store = reactive({
    userImage: "",
    profile: "",
    editInfoModal: false,
    isLoading: false,
    salesmanInfo: "",
    isUsername: false,
    editStoreInfo: false,
    isEditLoading: false,
  });

  const profile = reactive({
    image: "",
    username: "",
    phone: "",
    address: "",
    email: "",
    store_address: "",
    store_phone: "",
  });

  function editProfile() {
    showLoading("Loading...");
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("salesman_id");
    const formData = new FormData();
    formData.append("file", profile.image);
    formData.append("username", profile.username);
    formData.append("phone", "+998" + profile.phone);
    formData.append("address", profile.address);
    formData.append("email", profile.email);
    if (profile.image == "delete") {
      axios
        .delete(baseUrl + "/salesman/image/" + id, null, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          showSuccess("Successfully");
          console.log(res);
          editUserProfile()
        })
        .catch((err) => {
          showSuccess("Error");
          editUserProfile()
          console.log(err);
        });
    }else {
      editUserProfile()
    }
    function editUserProfile() {
      axios
        .patch(baseUrl + "/salesman/profile/" + id, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          showSuccess("Successfully");
          console.log(res);
          store.salesmanInfo = res.data?.data?.salesman;
          setProfile(res?.data?.data?.salesman);
          store.editInfoModal = false;
          store.isUsername = false;
        })
        .catch((err) => {
          showSuccess("Successfully");
          if (err.response?.data?.message == "Bunday username band!") {
            showError("Error");
            store.isUsername = "Bunday username band!";
            return;
          } else {
            store.isUsername = false;
          }
          store.isLoading = false;
          store.editInfoModal = false;
          console.log(err);
        });
    }
  }

  function editProfileStore() {
    showLoading("Loading...");
    store.isLoading = true;
    store.editStoreInfo = false;
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("salesman_id");
    axios
      .patch(
        baseUrl + "/salesman/store/" + id,
        {
          store_address: profile.store_address,
          store_phone: profile.store_phone,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        showSuccess("Successfully");
        console.log(res);
        store.salesmanInfo = res.data?.data?.salesman;
        setProfile(res?.data?.data?.salesman);
      })
      .catch((err) => {
        showSuccess("Successfully");
        showError("Error");
        store.isLoading = false;
        console.log(err);
      });
  }

  function getProfile() {
    store.isLoading = true;
    if (process.client) {
      const id = localStorage.getItem("salesman_id");
      axios
        .get(baseUrl + `/salesman/${id}`)
        .then((res) => {
          if (
            res.message === "Token vaqti tugagan!" ||
            res.message === "Token topilmadi!"
          ) {
            router.push("/login");
          }
          console.log(res);
          store.salesmanInfo = res.data?.data?.salesman;
          setProfile(res?.data?.data?.salesman);
        })
        .catch((err) => {
          if (err.response.data.message == "Sotuvchi topilmadi!") {
            navigateTo("/login");
          }
          store.isLoading = false;
        });
    }
  }

  function setProfile(res) {
    store.profile = res;
    profile.username = res?.username;
    profile.address = res?.address;
    profile.store_phone = res?.store_phone;
    profile.store_address = res?.store_address;
    profile.phone = res?.phone?.slice(4);
    profile.image = res.image;
    store.userImage = baseUrlImage.value + "/" + res?.image;
    store.isLoading = false;
  }

  return { store, profile, editProfile, getProfile, editProfileStore };
});
