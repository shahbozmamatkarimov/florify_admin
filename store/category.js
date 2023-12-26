import { defineStore } from "pinia";
import { useLoadingStore } from "./loading";
import axios from "axios";

export const useCategoryStore = defineStore("category", () => {
  const runtimeconfig = useRuntimeConfig();
  const baseUrl = runtimeconfig.public.apiBaseUrl;
  const baseUrlImage = ref(runtimeconfig.public.apiBaseUrl?.slice(0, -3));
  const isLoading = useLoadingStore();

  const store = reactive({
    createModal: false,
    getCategories: "",
    delete_id: "",
  });
  const create = reactive({
    uz: "",
    ru: "",
    uz_description: "",
    ru_description: "",
    file: "",
  });

  function createCategory() {
    isLoading.addLoading("getAllCategories");
    isLoading.modal.create = false;
    isLoading.store.createModal = false;
    const formData = new FormData();
    console.log(create);
    for (let i of Object.keys(create)) {
      formData.append(i, create[i]);
    }
    axios
      .post(baseUrl + `/category`, formData)
      .then((res) => {
        console.log(res);
        getAllCategories();
      })
      .catch((err) => {
        console.log(err);
        isLoading.removeLoading("getAllCategories");
      });
  }

  function editCategory() {
    isLoading.addLoading("getAllCategories");
    isLoading.modal.edit = false;
    isLoading.modal.create = false;
    store.createModal = false;
    const formData = new FormData();
    console.log(create);
    for (let i of Object.keys(create)) {
      formData.append(i, create[i]);
    }
    axios
      .patch(baseUrl + `/category/${store.delete_id}`, formData)
      .then((res) => {
        console.log(res);
        getAllCategories();
      })
      .catch((err) => {
        console.log(err);
        isLoading.removeLoading("getAllCategories");
      });
  }

  function getAllCategories() {
    isLoading.addLoading("getAllCategories");
    axios
      .get(baseUrl + "/category")
      .then((res) => {
        console.log(res);
        store.getCategories = res.data?.data.categories;
        isLoading.removeLoading("getAllCategories");
      })
      .catch((err) => {
        console.log(err);
        isLoading.removeLoading("getAllCategories");
      });
  }

  function deleteCategory() {
    isLoading.addLoading("getAllCategories");
    isLoading.modal.delete = false;
    axios
      .delete(baseUrl + "/category/" + store.delete_id)
      .then((res) => {
        console.log(res);
        getAllCategories();
      })
      .catch((err) => {
        console.log(err);
        isLoading.removeLoading("getAllCategories");
      });
  }

  function getOneCategory() {
    isLoading.addLoading("getCategory");
    axios
      .get(baseUrl + "/category/" + store.delete_id)
      .then((res) => {
        console.log(res.data.data.category);
        const data = res.data.data.category;
        create.uz = data.uz;
        create.ru = data.ru;
        create.uz_description = data.uz_description;
        create.ru_description = data.ru_description;
        create.file = data.image;
        console.log(create);
      })
      .catch((err) => {
        console.log(err);
        isLoading.removeLoading("getCategory");
      });
  }

  return {
    store,
    create,
    createCategory,
    getAllCategories,
    deleteCategory,
    getOneCategory,
    editCategory,
  };
});
