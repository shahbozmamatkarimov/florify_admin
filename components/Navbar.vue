<template>
  <main>
    <section
      class="sm:bg-transparent bg-white sm:border-b-2 lg:px-10 px-5 mb-1"
    >
      <nav class="flex items-center w-full z-50 -mt-1">
        <div class="w-full flex items-center md:h-32 h-[75px] justify-between">
          <div
            class="flex items-center gap-1 self-center md:text-2xl text-[22px] font-semibold whitespace-nowrap"
          >
            <h1><slot></slot></h1>
            <img
              class="font-semibold text-3xl"
              src="../assets/svg/star.svg"
              alt="star"
            />
          </div>
          <div class="sm:flex hidden w-auto justify-between gap-6">
            <form class="lg:block hidden">
              <div class="relative xl:min-w-[380px]">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  <img src="../assets/svg/search.svg" alt="search" />
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block xl:min-w-full h-12 pl-10 md:text-lg outline-none rounded-lg bg-white"
                  :placeholder="`${$t('search')}...`"
                  required
                />
              </div>
            </form>
            <button
              type="submit"
              @click="is_search = !is_search"
              class="bg-white lg:hidden rounded-lg px-4 py-2"
            >
              <img src="../assets/svg/search.svg" alt="search" />
            </button>
            <button
              type="button"
              class="text-white bg-white rounded-lg px-4 py-2"
            >
              <img src="../assets/svg/bell.svg" alt="search" />
            </button>
            <div>
              <button
                @click="useCategory.store.createModal = true"
                type="button"
                class="flex items-center gap-2 text-white bg-[#088178] hover:bg-[#08817970] font-medium rounded-lg px-5 py-2.5"
              >
                <img src="../assets/svg/plus.svg" alt="search" />
                <span class="xl:block hidden">Mahsulot qo'shish</span>
              </button>
            </div>
          </div>
          <div class="flex sm:hidden gap-5">
            <img
              class="cursor-pointer"
              @click="is_search = !is_search"
              src="../assets/svg/search.svg"
              alt="search"
            />
            <img
              class="cursor-pointer"
              src="../assets/svg/menu.svg"
              alt="search"
            />
          </div>
        </div>
      </nav>
      <form
        :class="is_search ? 'h-[48px]' : '!h-0'"
        class="w-full duration-700 overflow-hidden"
      >
        <div class="relative lg:hidden w-full">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <img src="../assets/svg/search.svg" alt="search" />
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full h-12 pl-10 outline-none rounded-lg bg-white"
            :placeholder="`${$t('search')}...`"
            required
          />
        </div>
      </form>
    </section>

    <section>
      <!-- Main modal -->
      <div
        v-if="useCategory.store.createModal"
        tabindex="-1"
        aria-hidden="true"
        class="flex justify-center items-center bg-[#8c8cee0d] backdrop-blur-[1px] fixed top-0 left-0 right-0 z-50 w-full md:inset-0 overflow-hidden"
      >
        <div class="relative lg:ml-[260px] w-full max-h-full">
          <!-- Modal content -->
          <form
            @submit.prevent="handleSubmit"
            class="relative w-full sm:p-5 bg-[#F4F4F6] overflow-hidden dark:bg-gray-700"
          >
            <!-- Modal header -->
            <div
              class="flex items-start sm:-mx-5 justify-between p-4 border-b rounded-t dark:border-gray-600"
            >
              <div
                class="flex items-center gap-1 self-center text-2xl font-semibold whitespace-nowrap"
              >
                <h1 v-if="isLoading.modal.edit">Mahsulot tahrirlash</h1>
                <h1 v-else>Mahsulot qo'shish</h1>
                <img
                  class="font-semibold text-3xl"
                  src="../assets/svg/star.svg"
                  alt="star"
                />
              </div>
              <button
                @click="() => closeModal()"
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="defaultModal"
              >
                <i class="bx bx-x text-2xl"></i>
              </button>
            </div>
            <!-- Modal body -->
            <div
              :class="store.is_submit ? 'pointer-events-none' : ''"
              class="xl:gap-16 gap-5 p-5 bg-white rounded-t-xl md:flex justify-between w-full overflow-x-hidden overflow-y-auto md:max-h-[calc(100vh_-_170px)] max-h-[calc(100vh_-_245px)]"
            >
              <div class="flex flex-col w-full">
                <div class="space-y-5 pb-5 w-[80%]">
                  <label class="flex gap-3" for="name"
                    ><span>Kategoriya nomi <i class="text-[#FF6161]">*</i></span
                    ><img src="../assets/svg/warn.svg" alt="img" />UZ</label
                  >
                  <a-input
                    id="name"
                    size="large"
                    v-model:value="useCategory.create.uz"
                    :placeholder="`${$t('enter_pr_name')}`"
                    class="-mt-1.5"
                    show-count
                    :maxlength="70"
                    required
                  />
                </div>
                <div class="space-y-5 pb-5 w-[80%]">
                  <label class="flex gap-3" for="name"
                    ><span>Kategoriya nomi <i class="text-[#FF6161]">*</i></span
                    ><img src="../assets/svg/warn.svg" alt="img" />RU</label
                  >
                  <a-input
                    id="name"
                    size="large"
                    class="-mt-2"
                    v-model:value="useCategory.create.ru"
                    :placeholder="`${$t('enter_pr_name')}`"
                    show-count
                    :maxlength="70"
                    required
                  />
                </div>
                <div class="pb-5 space-y-5">
                  <label class="flex gap-3" for="description"
                    ><span
                      >Kategoriya tavsifi <i class="text-[#FF6161]">*</i></span
                    ><img src="../assets/svg/warn.svg" alt="img" />UZ</label
                  >
                  <div>
                    <a-textarea
                      id="description"
                      v-model:value="useCategory.create.uz_description"
                      :placeholder="`${$t('write_description')}`"
                      :auto-size="{ minRows: 3, maxRows: 6 }"
                      required
                    />
                  </div>
                </div>
                <div class="pb-5 space-y-5">
                  <label class="flex gap-3" for="description"
                    ><span
                      >Kategoriya tavsifi <i class="text-[#FF6161]">*</i></span
                    ><img src="../assets/svg/warn.svg" alt="img" />RU</label
                  >
                  <div>
                    <a-textarea
                      id="description"
                      v-model:value="useCategory.create.ru_description"
                      :placeholder="`${$t('write_description')}`"
                      :auto-size="{ minRows: 3, maxRows: 6 }"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="text-[#555555] xl:max-w-[400px] max-w-[380px] w-full">
                <h1 class="text-lg">
                  {{ $t("gallery") }} <i class="text-[#FF6161]">*</i>
                </h1>

                <!---------------------------- Main Image -------------------------------------->

                <div
                  class="mt-6 border border-gray-200 rounded-xl xl:max-w-[400px] max-w-[380px] w-full xl:h-[360px] h-[340px] relative"
                  v-if="useCategory.create.file"
                >
                  <img
                    v-if="isLoading.modal.edit && store.file"
                    class="w-full h-full opacity-50 absolute object-cover rounded-xl"
                    :src="store.file"
                    alt="img"
                  />
                  <img
                    v-else
                    class="w-full h-full opacity-50 absolute object-cover rounded-xl"
                    :src="baseUrlImage + useCategory.create.file"
                    alt="img"
                  />
                  <label
                    for="imageMain"
                    class="flex flex-col hover:bg-[#0000002a] cursor-pointer top-0 z-10 h-full rounded-xl relative justify-center items-center"
                  >
                    <img
                      class="scale-150 mx-auto py-2"
                      src="../assets/svg/whiteplaceholder.svg"
                      alt="img"
                    />
                    <p class="text-[#FFFFFF]">
                      R<span class="lowercase">asmni o‘zgartirish</span>
                    </p>
                  </label>
                </div>
                <label
                  v-else
                  for="imageMain"
                  class="flex flex-col mt-6 gap-3 text-center justify-center items-center xl:max-w-[400px] max-w-[380px] w-full xl:h-[360px] h-[340px] bg-[#F9F9F9] border rounded-xl border-dashed border-[#F9F9F9]"
                >
                  <div>
                    <img
                      class="scale-150 mx-auto py-2"
                      src="../assets/svg/upload.svg"
                      alt="img"
                    />
                    <p class="w-[210px]">
                      <span class="normal-case">{{ $t("drop_image") }}</span>
                    </p>
                    <p class="text-sm font-medium">
                      <span class="normal-case">{{ $t("accepts") }}</span>
                    </p>
                  </div>
                </label>
                <input
                  @change="(e) => uploadFile(e, 1)"
                  class="w-0 h-0 overflow-hidden"
                  type="file"
                  accept="image/*"
                  id="imageMain"
                />
              </div>
            </div>
            <!-- Modal footer -->
            <div class="px-5 sm:pb-0 pb-5 bg-white rounded-b-xl">
              <div
                class="flex items-center justify-between space-x-2 py-3 border-t border-gray-200 rounded-b dark:border-gray-600"
              >
                <button
                  @click="() => closeModal()"
                  data-modal-hide="defaultModal"
                  type="button"
                  class="text-gray-500 whitespace-nowrap bg-white hover:bg-red-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium max-w-[400px] w-full py-2 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  {{ $t("cancel") }}
                </button>
                <button
                  v-if="!store.is_submit"
                  data-modal-hide="defaultModal"
                  type="submit"
                  class="bg-[#F9F9F9] hover:bg-[#b8b4b4] max-w-[400px] w-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  :disabled="store.is_submit ? true : false"
                >
                  <span>Tayyor</span>
                </button>
                <button
                  v-else
                  disabled="true"
                  type="button"
                  class="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-gray-100 hover:text-blue-700 focus:z-10 border border-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
                >
                  <svg
                    aria-hidden="true"
                    role="status"
                    class="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="#1C64F2"
                    ></path>
                  </svg>
                  Yuklanmoqda...
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import axios from "axios";
import { useNotification } from "@/composables/notification";
import { useCategoryStore, useLoadingStore } from "@/store";

const { showLoading, showSuccess, showWarning, showError } = useNotification();
const useCategory = useCategoryStore();
const isLoading = useLoadingStore();

const runtimeconfig = useRuntimeConfig();
const baseUrlImage = ref(runtimeconfig.public.apiBaseUrl?.slice(0, -3));
const baseUrl = runtimeconfig.public.apiBaseUrl;

const price = ref();
const description = ref();
const options = ref([]);
const optionsId = ref([]);
const is_search = ref(false);
const colors = [
  {
    value: "#FFF",
    label: "Oq",
  },
  {
    value: "#FF6161",
    label: "Qizil",
  },
  {
    value: "#6161FF",
    label: "Ko'k",
  },
  {
    value: "#FF61FF",
    label: "Pushti",
  },
  {
    value: "#61FFFF",
    label: "Moviy",
  },
  {
    value: "#FFFF61",
    label: "Sariq",
  },
  {
    value: "#616161",
    label: "Qora",
  },
  {
    value: "#FFA07A",
    label: "Och qizil",
  },
  {
    value: "#8A2BE2",
    label: "Binafsha",
  },
  {
    value: "#32CD32",
    label: "Yashil",
  },
];

const isMount = ref(false);

const store = reactive({
  file: "",
  step: 2,
  is_submit: false,
  deletedFiles: [],
});

const create = reactive({
  name: "",
  description: "",
  price: "",
  color: [],
  category_id: { Uz: "Kategoriyani tanlang", Уз: "Выберите категорию" },
  salesman_id: "",
  quantity: "",
});

function closeModal() {
  useCategory.store.createModal = false;
  isLoading.modal.edit = false;
}

function uploadFile(e, number) {
  if (!e.target.files[0].type.includes("image")) {
    showWarning("Iltimos, rasm kiriting!");
    return;
  }

  const file = e.target.files[0];
  store.file = URL.createObjectURL(file);
  useCategory.create.file = file;
}

const handleSubmit = () => {
  if (isLoading.modal.edit) {
    useCategory.editCategory();
  } else {
    useCategory.createCategory();
  }
};

// function deleteStaticFile(id, file_name) {
//   axios
//     .delete(baseUrl + "/image/delete/" + id + "/" + file_name)
//     .then((res) => {})
//     .catch((err) => {
//       console.log(err);
//       showError("Xatolik yuz berdi!");
//     });
// }

onBeforeMount(() => {
  isMount.value = true;
});

onMounted(() => {
  create.salesman_id = localStorage.getItem("salesman_id");
});
</script>

<style lang="scss" scoped>
label {
  cursor: pointer;
  text-transform: uppercase;
  font-size: 18px;
}

// upload image

/* you can make up upload button and sample style by using stylesheets */
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>

phone additional_phone email address facebook instagram telegram
