import { defineStore } from "pinia";
import { useLoadingStore } from "./loading";
import axios from "axios";

export const useCategoryStore = defineStore("category", () => {
  const runtimeconfig = useRuntimeConfig();
  const baseUrl = runtimeconfig.public.apiBaseUrl;
  const isLoading = useLoadingStore();

  const store = reactive({
    createModal: false,
    getCategories: "",
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
    const formData = new FormData();
    for (let i of Object.keys(create)) {
      formData.append(i, create[i]);
    }
    axios
      .post(baseUrl + `/category`, formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getOneProduct(id, isType) {
    if (isType == "product") {
      state.openEditModal = false;
    } else {
      state.editProductId = id;
      state.openEditModal = true;
      state.editProduct = true;
    }
    state.isLoading = true;
    fetch(baseUrl + `/product/id/${id}`)
      .then((res) => res.json())
      .then((res) => {
        if (isType == "product") {
          state.showProduct = [res.data.product];
        } else {
          state.showProduct = res.data.product;
        }
        state.isLoading = false;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getAllCategories() {
    isLoading.addLoading("getAllCategories");
    axios
      .get(baseUrl + "/category")
      .then((res) => {
        console.log(res);
        store.getCategories = res.data?.data.categories
        isLoading.removeLoading("getAllCategories");
      })
      .catch((err) => {
        console.log(err);
        isLoading.removeLoading("getAllCategories");
      });
  }

  return { store, create, createCategory, getAllCategories };
});
