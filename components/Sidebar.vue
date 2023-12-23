<template>
  <main>
    <section>
      <aside
        id="default-sidebar"
        class="fixed top-0 left-0 min-h-screen bg-white md:flex hidden flex-col justify-between z-40 w-64 h-screen"
        aria-label="Sidebar"
      >
        <div class="px-8 overflow-y-auto">
          <div class="flex items-center h-32">
            <img class="w-24 h-7" src="../assets/svg/logo.svg" alt="logo" />
          </div>
          <div
            v-if="!useProfile.store.salesmanInfo?.phone"
            class="flex animate-pulse gap-2 mb-16 cursor-pointer"
          >
            <div
              class="flex items-center justify-center min-w-[44px] h-11 w-11 object-cover shadowPhoto overflow-hidden bg-[#7012af74] rounded-full"
            ></div>
            <div class="flex flex-col gap-1 justify-center">
              <h1
                class="font-medium truncate min-w-full w-full rounded-full h-4 bg-gray-100"
              ></h1>
              <p
                class="font-medium truncate min-w-[105px] w-full rounded-full h-4 bg-gray-100"
              ></p>
            </div>
            <p class="ml-5 my-auto">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 9L12 15L6 9"
                  stroke="#454545"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </p>
          </div>
          <div v-else class="flex gap-2 mb-16 cursor-pointer">
            <div
              class="flex items-center justify-center min-w-[44px] h-11 w-11 object-cover shadowPhoto overflow-hidden bg-[#7112AF] rounded-full"
            >
              <img
                v-if="useProfile.store.salesmanInfo?.image?.length"
                class="h-full w-full object-cover"
                :src="baseUrlImage + '/' + useProfile.store.salesmanInfo?.image"
                alt="Photo"
              />
              <img
                v-else
                class="h-6 w-6"
                src="@/assets/nodata/userplaceholder.svg"
                alt="Photo"
              />
            </div>
            <div class="flex flex-col justify-center">
              <h1 class="font-medium truncate max-w-[100px]">
                {{ useProfile.store.salesmanInfo?.username }}
              </h1>
              <p class="text-sm text-[#999999]">
                +998{{ useProfile.store.salesmanInfo?.phone?.slice(4) }}
              </p>
            </div>
            <p class="ml-5 my-auto">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 9L12 15L6 9"
                  stroke="#454545"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </p>
          </div>
          <ul class="space-y-3 font-medium">
            <li v-for="i in sidebar" :key="i.id">
              <router-link
                :to="i.path"
                class="flex items-center h-12 w-44 p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <img id="icon" :src="i.icon" alt="icon" />
                <img class="hidden" id="icon1" :src="i.icon1" alt="icon" />
                <span class="ml-3">{{ i[$t("uz")] }}</span>
              </router-link>
            </li>
          </ul>
        </div>
        <button @click="logOut" class="flex gap-2 p-10 text-[#FF6161]">
          <img src="../assets/svg/logout.svg" alt="img" />
          {{ $t("logout") }}
        </button>
      </aside>
    </section>
    <section>
      <aside
        class="fixed w-full md:hidden z-50 bottom-0 h-[72px] py-[10px] bg-white"
      >
        <ul class="my-auto grid grid-cols-5 justify-center">
          <li class="mx-auto" v-for="i in sidebar" :key="i.id">
            <router-link
              :to="i.path"
              class="flex flex-col items-center justify-center h-12 max-w-fit text-gray-900 rounded-lg"
            >
              <img id="icon" :src="i._icon" alt="icon" />
              <img class="hidden" id="icon1" :src="i.icon1" alt="icon" />
              <p class="text-[10px]">{{ i.title }}</p>
            </router-link>
          </li>
        </ul>
      </aside>
    </section>
  </main>
</template>

<script setup>
import { sidebar } from "../constants/sidebar";
import { useProfileStore } from "@/store";
const useProfile = useProfileStore();

const runtimeconfig = useRuntimeConfig();
const baseUrlImage = ref(runtimeconfig.public.apiBaseUrl?.slice(0, -4));

function logOut() {
  localStorage.removeItem("token");
  navigateTo("/login");
}
</script>

<style lang="scss" scoped>
@media (max-w-768px) {
  .router-link-exact-active {
    background: #5c00990d;
    border-radius: 10px;
  }
}

.router-link-exact-active {
  color: #5c0099;
  #icon {
    display: none;
  }
  #icon1 {
    display: block;
  }
}
</style>
