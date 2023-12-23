<template>
  <main>
    <Navbar>{{ $t("comments") }}</Navbar>
    <section class="px-5 py-5 space-y-5 max-h-[83vh] overflow-y-auto min-h-[83vh]">
      <div v-for="i in useCategory.store.getCategories">
        <img
          class="w-full h-[25vw] rounded-[10px] object-cover"
          :src="baseUrlImage + '/'+i.image"
          alt=""
        />
        <ul class="flex flex-wrap gap-10 whitespace-nowrap">
          <li>
            <h1 class="text-sm font-medium">Nomi</h1>
            <ul class="md:text-lg text-[16px]">
              <li><b>Uz:</b> {{i.uz}}</li>
              <li><b>Ru:</b> {{i.ru}}</li>
            </ul>
          </li>
          <li>
            <h1 class="text-sm font-medium">Description</h1>
            <ul class="md:text-lg text-[16px]">
              <li><b>Uz:</b> {{i.uz_description}}</li>
              <li><b>Ru:</b> {{i.ru_description}}</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script setup>
import {useCategoryStore } from "@/store"
const useCategory =  useCategoryStore();
const runtimeconfig = useRuntimeConfig();
const baseUrlImage = ref(runtimeconfig.public.apiBaseUrl?.slice(0, -3));
const baseUrl = runtimeconfig.public.apiBaseUrl;

onMounted(() => {{
  useCategory.getAllCategories();
}})
</script>

<style lang="scss" scoped></style>
