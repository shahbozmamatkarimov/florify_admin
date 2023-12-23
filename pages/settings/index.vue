<template>
  <main>
    <Navbar>{{ $t("settings") }}</Navbar>
    <section class="grid lg:grid-cols-3 lg:px-10 sm:px-5 px-0 pt-5 gap-5">
      <ul
        :class="`${store.is_chat ? 'lg:block hidden' : ''}`"
        class="col-span-1 min-w-[200px] mb-20 text-gray-600 overflow-hidden sm:rounded-xl overflow-y-auto lg:min-h-[calc(100vh_-_170px)] min-h-[calc(100vh_-_200px)] max-h-[calc(100vh_-_170px)] bg-white"
        @click="store.is_chat = true"
      >
        <li class="px-10 py-3 flex gap-3 cursor-pointer" @click="step = 1">
          <div class="min-w-[24px] flex justify-center">
            <img
              v-show="step === 1"
              src="@/assets/settings/check1.svg"
              alt="check"
            />
            <img
              v-show="step !== 1"
              src="@/assets/settings/check.svg"
              alt="check"
            />
          </div>
          <p :class="{ 'text-[#5C0099]': step == 1 }">{{ $t("check") }}</p>
        </li>
        <hr />
        <li class="px-10 py-3 flex gap-3 cursor-pointer" @click="step = 2">
          <div class="min-w-[24px] flex justify-center">
            <img
              v-show="step === 2"
              src="@/assets/settings/session1.svg"
              alt="check"
            />
            <img
              v-show="step !== 2"
              src="@/assets/settings/session.svg"
              alt="check"
            />
          </div>
          <p :class="{ 'text-[#5C0099]': step == 2 }">{{ $t("session") }}</p>
        </li>
        <hr />
        <li class="px-10 py-3 flex gap-3 cursor-pointer" @click="step = 3">
          <div class="min-w-[24px] flex justify-center">
            <img
              v-show="step === 3"
              src="@/assets/settings/lang1.svg"
              alt="check"
            />
            <img
              v-show="step !== 3"
              src="@/assets/settings/lang.svg"
              alt="check"
            />
          </div>
          <p :class="{ 'text-[#5C0099]': step == 3 }">
            {{ $t("programm_lang") }}
          </p>
        </li>
        <hr />
        <li class="px-10 py-3 flex gap-3 cursor-pointer" @click="step = 4">
          <div class="min-w-[24px] flex justify-center">
            <img
              v-show="step === 4"
              src="@/assets/settings/bell1.svg"
              alt="check"
            />
            <img
              v-show="step !== 4"
              src="@/assets/settings/bell.svg"
              alt="check"
            />
          </div>
          <p :class="{ 'text-[#5C0099]': step == 4 }">{{ $t("notices") }}</p>
        </li>
        <hr />
      </ul>

      <div
        :class="`${store.is_chat ? 'max-w-full w-full' : 'lg:block hidden'}`"
        v-show="step === 1"
        class="relative col-span-2 pb-20 overflow-hidden overflow-y-auto lg:min-h-[calc(100vh_-_170px)] min-h-[calc(100vh_-_200px)] max-h-[calc(100vh_-_170px)] bg-white overflow-x-auto shadow-md sm:rounded-xl"
      >
        <h1
          class="sm:relative fixed sm:h-auto h-[75px] bg-white w-full top-0 left-0 flex items-center justify-between py-4 px-5 text-2xl font-semibold"
        >
          <img
            class="lg:hidden block cursor-pointer"
            @click="store.is_chat = false"
            src="@/assets/svg/leftArrow.svg"
            alt=""
          />
          {{ $t("check") }} <span></span>
        </h1>

        <hr class="-mx-10 sm:!mt-0 !-mt-2" />
      </div>

      <div
        :class="`${store.is_chat ? 'max-w-full w-full' : 'lg:block hidden'}`"
        v-show="step === 2"
        class="relative custom_scroll col-span-2 pb-20 overflow-hidden overflow-y-auto lg:min-h-[calc(100vh_-_170px)] min-h-[calc(100vh_-_200px)] max-h-[calc(100vh_-_170px)] bg-white overflow-x-auto shadow-md sm:rounded-xl"
      >
        <h1
          class="sm:relative fixed sm:h-auto h-[75px] bg-white w-full top-0 left-0 flex items-center justify-between py-4 px-5 text-2xl font-semibold"
        >
          <img
            class="lg:hidden block cursor-pointer"
            @click="store.is_chat = false"
            src="@/assets/svg/leftArrow.svg"
            alt=""
          />
          {{ $t("session") }} <span></span>
        </h1>
        <table class="w-full whitespace-nowrap text-sm text-left">
          <thead class="text-xs uppercase bg-gray-50">
            <tr class="font-medium text-gray-500">
              <th scope="col" class="px-6 py-4 text-black">№</th>
              <th scope="col" class="px-6 py-4">Platform</th>
              <th scope="col" class="px-6 py-4">Browser</th>
              <th scope="col" class="px-6 py-4">Device info</th>
              <th scope="col" class="px-6 min-w-[150px] py-4">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody
            class="pb-20 overflow-hidden overflow-y-auto lg:min-h-[calc(100vh_-_170px)] min-h-[calc(100vh_-_200px)] max-h-[calc(100vh_-_170px)]"
          >
            <tr
              v-for="i in 3"
              :key="i"
              class="font-medium border-b hover:bg-gray-50"
            >
              <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                {{ i }}
              </th>
              <td class="px-6 py-4">“Windows”</td>
              <td class="px-6 py-4">Chrome</td>
              <td class="px-6 py-4">MS-7A74</td>
              <td
                class="px-6 py-4 flex gap-2 text-right text-[#FF6161] font-medium"
              >
                <img src="@/assets/svg/block.svg" alt="" />
                Terminate
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        :class="`${store.is_chat ? 'max-w-full w-full' : 'lg:block hidden'}`"
        v-show="step === 3"
        class="relative col-span-2 pb-20 space-y-4 px-5 overflow-hidden overflow-y-auto lg:min-h-[calc(100vh_-_170px)] min-h-[calc(100vh_-_200px)] max-h-[calc(100vh_-_170px)] bg-white overflow-x-auto shadow-md sm:rounded-xl"
      >
        <h1
          class="sm:relative fixed sm:h-auto h-[75px] bg-white w-full top-0 left-0 flex items-center justify-between py-4 text-2xl font-semibold"
        >
          <img
            class="lg:hidden block cursor-pointer"
            @click="store.is_chat = false"
            src="@/assets/svg/leftArrow.svg"
            alt=""
          />
          {{ $t("programm_lang") }} <span></span>
        </h1>

        <hr class="-mx-10 sm:!mt-0 !mt-0" />

        <div class="flex items-center">
          <input
            id="default-radio-1"
            type="radio"
            v-model="store.lang"
            @click="
              () => {
                $i18n.locale = 'ru';
                addStorage('ru');
              }
            "
            value="ru"
            name="default-radio"
            class="w-4 h-4 text-[#5C0099] focus:ring-0 bg-transparent p-2 border-[#5C0099]"
          />
          <label
            for="default-radio-1"
            class="cursor-pointer ml-2 text-sm font-medium"
            >Русский</label
          >
        </div>
        <hr class="-mx-10" />
        <div class="flex items-center">
          <input
            id="default-radio-2"
            type="radio"
            v-model="store.lang"
            @click="
              () => {
                $i18n.locale = 'uz';
                addStorage('uz');
              }
            "
            value="uz"
            name="default-radio"
            class="w-4 h-4 text-[#5C0099] focus:ring-0 bg-transparent p-2 border-[#5C0099]"
          />
          <label
            for="default-radio-2"
            class="cursor-pointer ml-2 text-sm font-medium"
            >Uzbek</label
          >
        </div>
        <hr class="-mx-10" />
      </div>
      <div
        :class="`${store.is_chat ? 'max-w-full w-full' : 'lg:block hidden'}`"
        v-show="step === 4"
        class="relative col-span-2 pb-20 space-y-4 px-5 overflow-hidden overflow-y-auto lg:min-h-[calc(100vh_-_170px)] min-h-[calc(100vh_-_200px)] max-h-[calc(100vh_-_170px)] bg-white overflow-x-auto shadow-md sm:rounded-xl"
      >
        <h1
          class="sm:relative fixed sm:h-auto h-[75px] bg-white w-full top-0 left-0 flex items-center justify-between py-4 text-2xl font-semibold"
        >
          <img
            class="lg:hidden block cursor-pointer"
            @click="store.is_chat = false"
            src="@/assets/svg/leftArrow.svg"
            alt=""
          />
          {{ $t("notices") }} <span></span>
        </h1>

        <hr class="-mx-10 sm:!mt-0 !-mt-0" />

        <div class="flex justify-between items-center">
          <div>
            <h1 class="font-semibold">{{ $t("email") }}</h1>
            <p class="text-gray-600">{{ $t("missed_activity") }}</p>
          </div>

          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" checked />
            <div
              class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#5C0099]"
            ></div>
          </label>
        </div>
        <hr class="-mx-10" />
        <div class="flex justify-between items-center">
          <div>
            <h1 class="font-semibold">{{ $t("order") }}</h1>
            <p class="text-gray-600">{{ $t("order_message") }}</p>
          </div>

          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" checked />
            <div
              class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#5C0099]"
            ></div>
          </label>
        </div>
        <hr class="-mx-10" />
      </div>
    </section>
  </main>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
});

const store = reactive({
  is_chat: false,
  lang: "en",
});

const addStorage = (lang) => {
  store.lang = lang;
  localStorage?.setItem("language", lang);
};

onBeforeMount(() => {
  store.lang = localStorage?.getItem("language");
});

const step = ref(1);
</script>

<style lang="scss" scoped></style>
