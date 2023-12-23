import { defineStore } from "pinia";

export const useCardStore = defineStore("card", () => {
  const runtimeconfig = useRuntimeConfig();
  const baseUrl = runtimeconfig.public.apiBaseUrl;

  const store = reactive({
    products: [],
    isLoading: true,
    modal: false,
  });

  const allProducts = computed(() => store.products);
  const showProductById = computed(() => store.showProduct);

  function getProducts() {
    store.isLoading = true;
    fetch(baseUrl + `/product/page?page=${store.page}`)
      .then((res) => res.json())
      .then((res) => {
        if (
          res.message === "Token vaqti tugagan!" ||
          res.message === "Token topilmadi!"
        ) {
          router.push("/login");
        }
        console.log(res.data?.records);
        console.log(res.data?.pagination);
        store.products = res.data?.records;
        store.currentPage = res.data?.pagination?.currentPage;
        store.total_count = res.data?.pagination?.total_count;
        store.total_pages = res.data?.pagination?.total_pages;
        store.isLoading = false;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getOneProduct(id) {
    store.openEditModal = true;
    store.isLoading = true;
    fetch(baseUrl + `/product/${id}`)
      .then((res) => res.json())
      .then((res) => {
        if (
          res.message === "Token vaqti tugagan!" ||
          res.message === "Token topilmadi!"
        ) {
          router.push("/login");
        }
        console.log(res);
        store.showProduct = res;
        store.isLoading = false;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return { store, getProducts, getOneProduct, allProducts, showProductById };
});
