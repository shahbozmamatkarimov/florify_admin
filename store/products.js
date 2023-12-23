import { defineStore } from "pinia";
import axios from "axios";

export const useProductsStore = defineStore("products", () => {
  const runtimeconfig = useRuntimeConfig();
  const baseUrl = runtimeconfig.public.apiBaseUrl;

  const state = reactive({
    products: [],
    isLoading: true,
    currentPage: 0,
    total_count: 0,
    total_pages: 0,
    page: 1,
    showProduct: "",
    openEditModal: false,
    editProduct: false,
    editProductId: "",
    quantity: "All",
  });

  const allProducts = computed(() => state.products);
  const showProductById = computed(() => state.showProduct);

  function getProducts() {
    const salesmanId = localStorage.getItem("salesman_id")
    state.isLoading = true;
    console.log(state.quantity);
    axios
      .get(baseUrl + `/product/salesmanId/${salesmanId}/${state.page}/10/${state.quantity}`)
      .then((res) => {
        if (
          res.message === "Token vaqti tugagan!" ||
          res.message === "Token topilmadi!"
        ) {
          router.push("/login");
        }
        console.log(res.data.data?.records);
        console.log(res.data.data?.pagination);
        state.products = res.data.data?.records;
        state.currentPage = res.data.data?.pagination?.currentPage;
        state.total_count = res.data.data?.pagination?.total_count;
        state.total_pages = res.data.data?.pagination?.total_pages;
        state.isLoading = false;
      })
      .catch((err) => {
        console.log(err);
        state.isLoading = false;
      });
  }

  function getOneProduct(id, isType) {
    if (isType == 'product') {
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
        if (
          res.message === "Token vaqti tugagan!" ||
          res.message === "Token topilmadi!"
        ) {
          router.push("/login");
        }
        if (isType == 'product') {
          state.showProduct = [res.data.product];
        }else {
          state.showProduct = res.data.product;
        }
        state.isLoading = false;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return { state, getProducts, getOneProduct, allProducts, showProductById };
});
