<template>
  <main>
    <Navbar>Mahsulotlar</Navbar>
    <div
      class="lg:px-10 px-5 pb-20 overflow-hidden overflow-y-auto max-h-[82vh]"
    >
      <section>
        <ul
          class="flex md:gap-10 gap-5 overflow-x-auto overflow-hidden border-b-2 py-5 text-[#555555] -mt-2"
        >
          <li
            v-for="(i, index) in category[$t('uz')]"
            :key="i"
            :class="{ 'text-[#5C0099]': step == index }"
            class="leading-3 cursor-pointer duration-1000 pt-2 border-b-2 border-transparent font-bold"
            @click="step = index"
          >
            {{ i }}
            <span
              v-show="step == index"
              class="inline-block duration-1000 w-full border-b-2 border-[#5C0099]"
            ></span>
          </li>
        </ul>
      </section>
      <section class="flex items-center justify-between my-10">
        <nav
          class="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <button
            v-if="productStore.state.total_pages > 0"
            @click="returnPage"
            :class="productStore.state.page == 1 ? 'bg-gray-300' : ''"
            class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
          >
            <svg
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <button
            @click="
              () => {
                productStore.state.page =
                  productStore.state.page > 5
                    ? productStore.state.page + i - 5
                    : i;
                productStore.getProducts();
              }
            "
            v-for="i in productStore.state.total_pages >= 5
              ? 5
              : productStore.state.total_pages"
            :key="i"
            :class="
              productStore.state.page ==
              (productStore.state.page > 5
                ? productStore.state.page + i - 5
                : i)
                ? 'bg-[#5C0099] text-white'
                : ''
            "
            class="relative inline-flex items-center hover:bg-[#9630d9] px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
          >
            {{
              productStore.state.page > 5 ? productStore.state.page + i - 5 : i
            }}
          </button>
          <button
            v-if="productStore.state.total_pages > 0"
            @click="addPage"
            :class="
              productStore.state.total_pages <= productStore.state.page
                ? 'bg-gray-300'
                : ''
            "
            class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
          >
            <svg
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </nav>
        <nav
          class="flex items-center border cursor-pointer sm:border-[#666666] border-[#2424241A] rounded-lg sm:px-5 px-3 sm:bg-transparent bg-white py-2 gap-3 h-10"
        >
          <img class="h-6 w-6" src="../../assets/svg/filter.svg" alt="filter" />
          <span class="sm:block hidden">{{ $t("filter") }}</span>
        </nav>
      </section>
      <section
        v-if="productStore.state.isLoading"
        class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 flowersGrid gap-5"
      >
        <div v-for="i in 8" :key="i.id" class="max-w-sm bg-white rounded-lg">
          <img
            alt="img"
            class="rounded-t-lg animate-pulse cursor-pointer border w-full h-[166px] flowerImage object-cover"
            src="https://redthread.uoregon.edu/files/original/affd16fd5264cab9197da4cd1a996f820e601ee4.png"
            @click="open = true"
          />
          <div class="p-5">
            <div class="flex justify-between items-center">
              <button
                class="h-9 w-20 border pb-1 animate-pulse border-gray-200 bg-gray-200 font-medium rounded-lg"
              ></button>
              <img
                class="cursor-pointer"
                src="../../assets/svg/dot.svg"
                alt="actions"
              />
            </div>
            <div class="flex font-medium justify-between leading-10">
              <ul
                class="mb-3 text-[#666666] dark:text-gray-400 space-y-5 mt-3 w-full"
              >
                <li
                  v-for="i in 6"
                  :key="i"
                  class="h-5 rounded-lg bg-gray-200 animate-pulse"
                ></li>
                <li
                  class="h-5 rounded-lg bg-gray-200 w-1/2 text-lg font-semibold animate-pulse text-[#242424]"
                ></li>
                <li
                  class="h-5 rounded-lg bg-gray-200 w-1/2 text-lg font-semibold animate-pulse text-[#242424]"
                ></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section v-else-if="!productStore.allProducts?.length || false">
        <p
          class="flex flex-col items-center justify-center text-center bg-white rounded-xl shadow h-80 gap-5"
        >
          <img src="../../assets/svg/cartLoading.svg" alt="not_found" />
          Mahsulotlar topilmadi Figmaga qarab o'zgartiriladi...
        </p>
      </section>
      <section
        v-else
        class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 justify-center items-center flowersGrid gap-5"
      >
        <div
          v-for="i in productStore.allProducts"
          :key="i.id"
          class="max-w-sm w-full bg-white rounded-lg"
        >
          <img
            v-if="!i.images?.length"
            alt="img"
            class="rounded-t-lg cursor-pointer border w-full h-[166px] object-cover flowerImage"
            src="https://redthread.uoregon.edu/files/original/affd16fd5264cab9197da4cd1a996f820e601ee4.png"
            @click="open = true"
          />
          <img
            v-if="i.images?.length"
            class="rounded-t-lg cursor-pointer w-full h-[166px] object-cover flowerImage"
            :src="baseUrlImage + '/' + i.images[0]?.image"
            alt="img"
            @click="
              open = true;
              getOneProduct(i.id);
            "
          />
          <div class="p-5">
            <div class="flex justify-between items-center">
              <button
                v-if="i.quantity !== 0"
                class="h-[30px] px-[10px] border text-sm border-[#45D469] text-[#45D469] font-medium rounded-lg"
              >
                {{ $t("on_saling") }}
              </button>
              <button
                v-else
                class="h-[30px] px-[10px] text-sm border border-[#FF6161] text-[#FF6161] font-medium rounded-lg"
              >
                {{ $t("not_saling") }}
              </button>
              <a-dropdown :trigger="['click']">
                <a class="items-center ant-dropdown-link" @click.prevent>
                  <img
                    class="cursor-pointer"
                    src="../../assets/svg/dot.svg"
                    alt="actions"
                  />
                </a>
                <template #overlay>
                  <a-menu>
                    <a-menu-item @click="() => getOneEditProduct(i.id)">
                      {{ $t("change") }}
                    </a-menu-item>
                    <a-menu-item
                      key="1"
                      @click="
                        open = true;
                        getOneProduct(i.id);
                      "
                    >
                      {{ $t("show") }}
                    </a-menu-item>
                    <a-menu-divider />
                    <a-menu-item @click="() => deleteProduct(i.id)">
                      {{ $t("delete") }}
                    </a-menu-item>
                  </a-menu>
                </template>
              </a-dropdown>
            </div>
            <div class="flex font-medium justify-between leading-10">
              <ul class="mb-3 text-[#666666] dark:text-gray-400">
                <li>{{ $t("id") }}</li>
                <li>{{ $t("reyting") }}</li>
                <li>{{ $t("viewed") }}</li>
                <li>{{ $t("sale") }}</li>
                <li>{{ $t("other") }}</li>
                <li class="text-lg font-semibold text-[#242424]">
                  {{ i.name }}
                </li>
                <li class="text-[#000000]">
                  <span class="mr-1" v-if="$t('uz') != 'Uz'">{{ $t("from") }}</span>
                  <span>{{ i.price }}</span> {{ $t("summ") }}
                  <span v-if="$t('uz') == 'Uz'">{{ $t("from") }}</span>
                </li>
              </ul>
              <ul class="mb-3 text-end text-[#000000] dark:text-gray-400">
                <li>#{{ i.id }}</li>
                <li>{{ (i.likeCount / 50).toFixed(2) }}</li>
                <li>{{ i.watchedCount }}</li>
                <li>{{ i.soldProductCount }}</li>
                <li>{{ i.quantity }}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <!-- Main modal -->
        <div
          v-show="open"
          id="defaultModal"
          tabindex="-1"
          aria-hidden="true"
          class="flex justify-center items-center md:mt-0 mt-[70px] md:max-h-full max-h-[calc(100vh_-_140px)] lg:bg-[#8c8cee0d] lg:backdrop-blur-[1px] fixed top-0 left-0 right-0 h-full z-50 w-full md:inset-0 overflow-hidden"
        >
          <div
            class="relative lg:ml-[260px] bg-[#F9F9F9] md:py-0 py-5 w-full md:max-h-full max-h-[calc(100vh_-_140px)] h-full"
          >
            <!-- Modal content -->
            <div
              class="relative bg-white min-h-full overflow-y-auto md:max-h-full max-h-[calc(100vh_-_200px)] rounded-lg shadow dark:bg-gray-700"
            >
              <!-- Modal header -->
              <div
                class="flex items-center justify-between px-4 pt-1 pb-4 border-b rounded-t"
              >
                <div class="sticky top-40">
                  <ul
                    class="flex flex-wrap sticky top-40 text-sm font-medium text-center"
                  >
                    <li class="mr-2 sticky top-40">
                      <button
                        class="inline-block sticky top-40 p-4 pb-2 border-b-2 text-[#5C0099] rounded-t-lg border-[#5C0099]"
                      >
                        {{ $t("info") }}
                      </button>
                    </li>
                  </ul>
                </div>
                <button
                  type="button"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="defaultModal"
                  @click="open = false"
                >
                  <i class="bx bx-x text-2xl font-bold"></i>
                </button>
              </div>
              <!-- Modal body -->
              <div class="sm:px-10 px-5 py-5">
                <ul
                  class="space-y-6 imageContainer"
                  v-for="i in productStore.state.showProduct"
                  :key="i?.id"
                >
                  <li class="font-semibold text-lg text-[#242424]">
                    {{ i.name }}
                  </li>
                  <li class="flex gap-6 items-center">
                    <button
                      v-if="i.quantity !== 0"
                      class="h-[30px] px-[10px] border text-sm border-[#45D469] text-[#45D469] font-medium rounded-lg"
                    >
                      {{ $t("on_saling") }}
                    </button>
                    <button
                      v-else
                      class="h-[30px] px-[10px] text-sm border border-[#FF6161] text-[#FF6161] font-medium rounded-lg"
                    >
                      {{ $t("not_saling") }}
                    </button>
                    <p>#{{ i.id }}</p>
                  </li>
                  <li>{{ $t("product_image") }}</li>
                  <li
                    v-if="i.images?.length"
                    class="xl:flex hidden items-center relative gap-5 overflow-hidden overflow-x-auto"
                  >
                    <img
                      v-for="(img, index) in i.images"
                      :key="index"
                      :class="
                        index == 0
                          ? 'w-60 h-56 rounded-xl'
                          : 'w-40 h-40 rounded-xl'
                      "
                      :src="baseUrlImage + '/' + img.image"
                      alt="img"
                    />
                  </li>
                  <li
                    v-if="i.images?.length"
                    @scroll="(e) => hiddenButton(e)"
                    class="xl:hidden flex flex-col items-start relative gap-5 overflow-hidden overflow-x-auto"
                  >
                    <img
                      class="w-[440px] h-[450px] mainImage sticky left-0 rounded-xl"
                      :src="baseUrlImage + '/' + i.images[0].image"
                      alt="img"
                    />
                    <div class="flex gap-[14px]">
                      <img
                        v-for="(img, index) in i.images"
                        :key="index"
                        :class="
                          index == 0
                            ? 'hidden'
                            : 'w-[100px] h-[100px] rounded-xl'
                        "
                        :src="baseUrlImage + '/' + img.image"
                        alt="img"
                      />
                    </div>
                  </li>
                  <li>{{ $t("color") }}</li>
                  <li class="flex flex-wrap max-w-fit gap-2">
                    <p
                      v-for="(i, index) in i.color?.split(',')"
                      :class="`border w-8 h-8 rounded-full ${
                        i == '#FFF' ? 'border-gray-600' : 'border-white'
                      }`"
                      :style="`background: ${i}`"
                    ></p>
                  </li>
                  <hr />
                  <li>{{ $t("price") }}</li>
                  <li class="font-medium text-lg">
                    {{ i.price }} {{ $t("summ") }}
                  </li>
                  <hr />
                  <li>{{ $t("interest_rate") }}</li>
                  <li class="font-medium text-lg">10 %</li>
                  <hr />
                  <li>{{ $t("link_for_product") }}</li>
                  <li>
                    <a
                      class="text-[#6188FF] font-medium text-lg border-b border-[#6188FF]"
                      href="#"
                      >{{ i.name }}</a
                    >
                  </li>
                  <hr />
                  <li>{{ $t("reyting_of") }}</li>
                  <li class="flex gap-5 font-medium text-lg">
                    <img src="../../assets/svg/rating.svg" alt="rate" />
                    <p>0./5 (0 {{ $t("comment_of") }})</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section v-if="productStore.state.total_pages > 0">
        <div
          class="flex items-center center mt-20 justify-between border-t rounded-lg border-gray-200 bg-white px-4 py-3 sm:px-5"
        >
          <div
            class="flex items-center w-full sm:flex-1 sm:items-center lg:justify-between justify-center"
          >
            <div v-if="productStore.state.total_pages > 0">
              <p
                v-if="$t('uz') == 'Uz'"
                class="lg:block hidden text-sm text-gray-700"
              >
                <span class="font-medium">{{
                  productStore.state.total_count
                }}</span>
                {{ $t("pagination[0]") }}
                <span class="font-medium">{{
                  productStore.state.currentPage * 10 - 10 + 1
                }}</span>
                {{ $t("pagination[1]") }}
                <span class="font-medium">{{
                  productStore.state.currentPage * 10
                }}</span>
                {{ $t("pagination[2]") }}
              </p>
              <p v-else class="lg:block hidden text-sm text-gray-700">
                {{ $t("pagination[0]") }}
                <span class="font-medium">{{
                  productStore.state.currentPage * 10 - 10 + 1
                }}</span>
                {{ $t("pagination[1]") }}
                <span class="font-medium">{{
                  productStore.state.currentPage * 10
                }}</span>
                {{ $t("pagination[2]") }}
                <span class="font-medium">{{
                  productStore.state.total_count
                }}</span>
              </p>
            </div>
            <div class="text-center">
              <nav
                class="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <button
                  v-if="productStore.state.total_pages > 0"
                  @click="returnPage"
                  :class="productStore.state.page == 1 ? 'bg-gray-300' : ''"
                  class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
                >
                  <svg
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <button
                  @click="
                    () => {
                      productStore.state.page =
                        productStore.state.page > 5
                          ? productStore.state.page + i - 5
                          : i;
                      productStore.getProducts();
                    }
                  "
                  v-for="i in productStore.state.total_pages >= 5
                    ? 5
                    : productStore.state.total_pages"
                  :key="i"
                  :class="
                    productStore.state.page ==
                    (productStore.state.page > 5
                      ? productStore.state.page + i - 5
                      : i)
                      ? 'bg-[#5C0099] text-white'
                      : ''
                  "
                  class="relative inline-flex items-center hover:bg-[#9630d9] px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
                >
                  {{
                    productStore.state.page > 5
                      ? productStore.state.page + i - 5
                      : i
                  }}
                </button>
                <button
                  v-if="productStore.state.total_pages > 0"
                  @click="addPage"
                  :class="
                    productStore.state.total_pages <= productStore.state.page
                      ? 'bg-gray-300'
                      : ''
                  "
                  class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
                >
                  <svg
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </nav>
              <div v-if="productStore.state.total_pages > 0">
                <p
                  v-if="$t('uz') == 'Uz'"
                  class="lg:hidden block pt-2 text-center text-sm text-gray-700"
                >
                  <span class="font-medium">{{
                    productStore.state.total_count
                  }}</span>
                  {{ $t("pagination[0]") }}
                  <span class="font-medium">{{
                    productStore.state.currentPage * 10 - 10 + 1
                  }}</span>
                  {{ $t("pagination[1]") }}
                  <span class="font-medium">{{
                    productStore.state.currentPage * 10
                  }}</span>
                  {{ $t("pagination[2]") }}
                </p>
                <p
                  v-else
                  class="lg:hidden block pt-2 text-center text-sm text-gray-700"
                >
                  {{ $t("pagination[0]") }}
                  <span class="font-medium">{{
                    productStore.state.currentPage * 10 - 10 + 1
                  }}</span>
                  {{ $t("pagination[1]") }}
                  <span class="font-medium">{{
                    productStore.state.currentPage * 10
                  }}</span>
                  {{ $t("pagination[2]") }}
                  <span class="font-medium">{{
                    productStore.state.total_count
                  }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
});
import axios from "axios";
import { useNotification } from "../composables/notification";
import { useProductsStore } from "@/store/products";

const { showLoading, showSuccess, showWarning, showError } = useNotification();
const productStore = useProductsStore();

const runtimeconfig = useRuntimeConfig();
const baseUrlImage = ref(runtimeconfig.public.apiBaseUrl?.slice(0, -4));
const baseUrl = runtimeconfig.public.apiBaseUrl;
const router = useRouter();

const category = {
  Uz: ["Hammasi", "Sotuvdagilar", "Sotilganlar"],
  Уз: ["Все", "В продаже", "Распроданный"],
};

const open = ref(false);
const step = ref(0);

const store = reactive({
  showProduct: "",
  token: "",
});

const quantity = ["All", "on_sale", "saled"];

function addPage() {
  if (productStore.state.total_pages <= productStore.state.page) return;
  productStore.state.page += 1;
  productStore.getProducts();
}

function returnPage() {
  if (productStore.state.page < 2) return;
  productStore.state.page -= 1;
  productStore.getProducts();
}

function getOneEditProduct(id) {
  productStore.getOneProduct(id, "edit");
}

function getOneProduct(id) {
  productStore.getOneProduct(id, "product");

  // axios.get(baseUrl + `/product/getById/${id}`)
  //   .then((res) => {
  //     if (
  //       res.message === "Token vaqti tugagan!" ||
  //       res.message === "Token topilmadi!"
  //     ) {
  //       router.push("/login");
  //     }
  //     console.log(res);
  //     store.showProduct = [res];
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
}

function deleteProduct(id) {
  showLoading("So'rov yuborilmoqda...");
  fetch(baseUrl + `/product/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${store.token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (
        res.message === "Token vaqti tugagan!" ||
        res.message === "Token topilmadi!"
      ) {
        router.push("/login");
      }
      console.log(res);
      showSuccess(res.message);
      productStore.getProducts();
    })
    .catch((err) => {
      console.log(err);
    });
}

watch(
  () => step.value,
  () => {
    productStore.state.quantity = quantity[step.value];
    productStore.getProducts();
  }
);

onMounted(() => {
  const token = localStorage.getItem("token");
  productStore.getProducts();
});
</script>

<style lang="scss" scoped>
@media (max-width: 450px) {
  .mainImage {
    height: 400px;
  }
}

@media (max-width: 370px) {
  .mainImage {
    height: 370px;
  }
}
</style>
