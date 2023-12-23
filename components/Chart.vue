<template>
  <main class="custom_scroll md:pt-20 pt-10">
    <section
      class="lg:flex lg:space-y-0 space-y-4 gap-10 items-center justify-between"
    >
      <div
        id="main"
        class="sm:rounded-xl overflow-hidden overflow-x-auto h-[369px] w-full px-5 pb-10 bg-[#FFFFFF]"
      >
        <div class="flex justify-between sticky left-0 items-center gap-2 pt-5">
          <div class="flex gap-2 items-center">
            <img class="pt-1" src="../assets/svg/money.svg" alt="money" />
            <h1 class="font-medium xl:text-3xl text-xl whitespace-nowrap">
              122 552 250,80 {{ $t("summ") }}
            </h1>
          </div>
          <div class="flex mr-4">
            <a-select
              v-if="is_mount"
              v-model:value="store.selectedMonth[$t('uz')]"
              :options="options[$t('uz')]"
              class="placeholder-black"
            ></a-select>
            <img
              class="-ml-5 mt-3 w-2 h-2 scale-150"
              src="@/assets/svg/strelka.svg"
              alt=""
            />
          </div>
        </div>
        <!-- chart -->
        <div class="mt-12 row">
          <div class="mt-4 col-md-6 mt-md-0">
            <div class="card z-index-2">
              <div class="card-body">
                <div class="chart -ml-4">
                  <GradientLineChart class="h-[212px] min-w-[651px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- chart 2 -->
      <div
        id="main"
        class="flex items-center justify-center relative h-[369px] lg:w-[300px] w-full px-10 bg-[#FFFFFF] py-8 sm:rounded-xl"
      >
        <div class="max-w-[311px]">
          <h1 class="lg:text-sm text-2xl lg:font-normal font-medium">
            {{ $t("visited_count") }}
          </h1>
          <p class="font-medium lg:text-3xl text-[22px] py-2">1.345.987</p>
          <div class="text-white font-medium py-5">
            <div
              class="bg-[#EF9B00] w-44 h-44 rounded-full flex flex-col space-y-1 items-center justify-center"
            >
              <h1 class="text-sm">{{ $t("mobile") }}</h1>
              <p class="text-xl">1.148.541</p>
            </div>
            <div
              class="bg-[#4684CE] w-28 h-28 rounded-full ml-32 -mt-16 flex flex-col space-y-1 items-center justify-center"
            >
              <h1>{{ $t("website") }}</h1>
              <p>9.999.999</p>
            </div>
          </div>
        </div>
        <div>
          <img
            class="absolute top-5 right-5 cursor-pointer reload"
            src="@/assets/svg/reload.svg"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const is_mount = ref(false);

const store = reactive({
  selectedMonth: {Uz: "May", Уз: "Май"},
});

const focus = () => {
  console.log("focus");
};

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

definePageMeta({
  layout: "default",
  middleware: ["auth"],
});

const data = ref([]);

const options = ref({
  Uz: [
    {
      value: "Yanvar",
      label: "Yanvar",
    },
    {
      value: "Fevral",
      label: "Fevral",
    },
    {
      value: "Mart",
      label: "Mart",
    },
    {
      value: "April",
      label: "April",
    },
    {
      value: "May",
      label: "May",
    },
    {
      value: "Iyun",
      label: "Iyun",
    },
    {
      value: "Iyul",
      label: "Iyul",
    },
    {
      value: "Avgust",
      label: "Avgust",
    },
    {
      value: "Sentabr",
      label: "Sentabr",
    },
    {
      value: "Oktabr",
      label: "Oktabr",
    },
    {
      value: "Noyabr",
      label: "Noyabr",
    },
    {
      value: "Dekabr",
      label: "Dekabr",
    },
  ],
  Уз: [
    {
    value: "Январь",
    label: "Январь",
  },
  {
    value: "Февраль",
    label: "Февраль",
  },
  {
    value: "Март",
    label: "Март",
  },
  {
    value: "Апрель",
    label: "Апрель",
  },
  {
    value: "Май",
    label: "Май",
  },
  {
    value: "Июнь",
    label: "Июнь",
  },
  {
    value: "Июль",
    label: "Июль",
  },
  {
    value: "Август",
    label: "Август",
  },
  {
    value: "Сентябрь",
    label: "Сентябрь",
  },
  {
    value: "Октябрь",
    label: "Октябрь",
  },
  {
    value: "Ноябрь",
    label: "Ноябрь",
  },
  {
    value: "Декабрь",
    label: "Декабрь",
  },
  ]
});

onMounted(() => {
  data.value = {
    May: [
      { order: 100, sum: "34.568.150" },
      { order: 150, sum: "25.508.120" },
      { order: 110, sum: "30.500.100" },
      { order: 50, sum: "5.560.150" },
      { order: 200, sum: "50.500.150" },
      { order: 127, sum: "24.020.150" },
      { order: 20, sum: "4.568.150" },
      { order: 200, sum: "50.500.150" },
      { order: 127, sum: "24.020.150" },
      { order: 20, sum: "4.568.150" },
      { order: 100, sum: "34.568.150" },
      { order: 150, sum: "25.508.120" },
      { order: 110, sum: "30.500.100" },
      { order: 50, sum: "5.560.150" },
      { order: 200, sum: "50.500.150" },
      { order: 127, sum: "24.020.150" },
      { order: 20, sum: "4.568.150" },
      { order: 200, sum: "50.500.150" },
      { order: 127, sum: "24.020.150" },
      { order: 20, sum: "4.568.150" },
      { order: 100, sum: "34.568.150" },
      { order: 150, sum: "25.508.120" },
      { order: 110, sum: "30.500.100" },
      { order: 50, sum: "5.560.150" },
      { order: 200, sum: "50.500.150" },
      { order: 127, sum: "24.020.150" },
      { order: 20, sum: "4.568.150" },
      { order: 200, sum: "50.500.150" },
      { order: 127, sum: "24.020.150" },
      { order: 20, sum: "4.568.150" },
    ],
  };
  is_mount.value = true;
});
</script>

<style lang="scss" scoped>
.scale-x-125 {
  --tw-scale-x: 1.4;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
</style>
