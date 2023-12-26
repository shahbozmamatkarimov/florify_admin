<template>
  <main>
    <Navbar>{{ $t("comments") }}</Navbar>
    <section
      class="px-5 py-5 space-y-16 max-h-[83vh] overflow-y-auto min-h-[83vh]"
    >
      <div v-if="isLoading.isLoadingType('getAllCategories')" v-for="i in 5" class="w-full h-[25vw] rounded-[10px] object-cover bg-gray-300 animate-pulse"></div>

      <div v-else v-for="i in useCategory.store.getCategories">
        <div class="relative">
          <div
            class="flex gap-5 py-2 text-xl absolute top-0 right-0 z-10 bg-white rounded-[10px] px-3 cursor-pointer"
          >
            <i @click="deleteCategory(i.id)" class="bx bx-trash"></i>
            <i @click="openEditModal(i.id)" class="bx bx-pencil"></i>
          </div>
          <img
            class="w-full h-[25vw] rounded-[10px] object-cover"
            :src="baseUrlImage + '/' + i.image"
            alt=""
          />
        </div>
        <ul class="flex flex-wrap gap-10 pt-4 whitespace-nowrap">
          <li>
            <h1 class="text-sm font-medium">Nomi</h1>
            <ul class="md:text-lg text-[16px]">
              <li><b>Uz:</b> {{ i.uz }}</li>
              <li><b>Ru:</b> {{ i.ru }}</li>
            </ul>
          </li>
          <li>
            <h1 class="text-sm font-medium">Description</h1>
            <ul class="md:text-lg text-[16px]">
              <li><b>Uz:</b> {{ i.uz_description }}</li>
              <li><b>Ru:</b> {{ i.ru_description }}</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>

    <!---------------- delete subject ----------------------->
    <a-modal
      v-model:open="isLoading.modal.delete"
      centered
      width="500"
      style="border-radius: 16px"
      class="max-w-fit rounded-2xl p-10 min-w-[400px] mx-auto"
      align-center
      close-icon="false"
    >
      <div class="flex justify-between items-center w-full">
        <h1
          class="flex gap-[14px] items-center font-medium text-2xl leading-[29px]"
        >
          <img
            class="w-6 h-6 !fill-blue-600"
            src="@/assets/svg/delete.svg"
            alt=""
          />
          Kategoriyani o'chirish
        </h1>
        <img
          @click="isLoading.modal.delete = false"
          class="hover:bg-[#7112AF1A] p-2 rounded-lg cursor-pointer"
          src="@/assets/svg/x.svg"
          alt="x"
        />
      </div>
      <p class="mt-12 text-[16px] leading-[19px]">
        Haqiqatan ham bu kategoriyani o'chirib tashlamoqchimisiz?
      </p>
      <div>
        <button
          @click="useCategory.deleteCategory"
          class="bg-[#7112AF] h-[40px] rounded-full text-white overflow-hidden mt-10 w-full"
          v-loading="isLoading.isLoadingType('deleteUser')"
        >
          O'chirish
        </button>
        <button
          @click="isLoading.modal.delete = false"
          class="h-[40px] rounded-[10px] mt-4 w-full"
        >
          Bekor qilish
        </button>
      </div>
    </a-modal>
  </main>
</template>

<script setup>
import { useCategoryStore, useLoadingStore } from "@/store";
const useCategory = useCategoryStore();
const isLoading = useLoadingStore();
const runtimeconfig = useRuntimeConfig();
const baseUrlImage = ref(runtimeconfig.public.apiBaseUrl?.slice(0, -3));
const baseUrl = runtimeconfig.public.apiBaseUrl;

isLoading.addLoading("getAllCategories");
function deleteCategory(id) {
  isLoading.modal.delete = true;
  useCategory.store.delete_id = id;
}

function openEditModal(id) {
  useCategory.store.createModal = true;
  isLoading.modal.edit = true;
  useCategory.store.delete_id = id;
  useCategory.getOneCategory();
}

onMounted(() => {
  {
    useCategory.getAllCategories();
  }
});
</script>

<style lang="scss" scoped></style>
