<template>
  <main>
    <Navbar>{{ $t("dashboard") }}</Navbar>
    <!-- <section class="p-10">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg">
          <div class="grid grid-cols-3 gap-4 mb-4">
            <div
              class="flex items-center justify-center h-24 rounded bg-gray-50"
            >
              <p class="text-2xl text-gray-400">
                <svg
                  class="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div
              class="flex items-center justify-center h-24 rounded bg-gray-50"
            >
              <p class="text-2xl text-gray-400">
                <svg
                  class="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div
              class="flex items-center justify-center h-24 rounded bg-gray-50"
            >
              <p class="text-2xl text-gray-400">
                <svg
                  class="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
          </div>
          <div
            class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50"
          >
            <p class="text-2xl text-gray-400">
              <svg
                class="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div
              class="flex items-center justify-center rounded bg-gray-50 h-28"
            >
              <p class="text-2xl text-gray-400">
                <svg
                  class="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div
              class="flex items-center justify-center rounded bg-gray-50 h-28"
            >
              <p class="text-2xl text-gray-400">
                <svg
                  class="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div
              class="flex items-center justify-center rounded bg-gray-50 h-28"
            >
              <p class="text-2xl text-gray-400">
                <svg
                  class="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div
              class="flex items-center justify-center rounded bg-gray-50 h-28"
            >
              <p class="text-2xl text-gray-400">
                <svg
                  class="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
          </div>
          <div
            class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50"
          >
            <p class="text-2xl text-gray-400">
              <svg
                class="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div
              class="flex items-center justify-center rounded bg-gray-50 h-28"
            >
              <p class="text-2xl text-gray-400">
                <svg
                  class="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div
              class="flex items-center justify-center rounded bg-gray-50 h-28"
            >
              <p class="text-2xl text-gray-400">
                <svg
                  class="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div
              class="flex items-center justify-center rounded bg-gray-50 h-28"
            >
              <p class="text-2xl text-gray-400">
                <svg
                  class="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div
              class="flex items-center justify-center rounded bg-gray-50 h-28"
            >
              <p class="text-2xl text-gray-400">
                <svg
                  class="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
    </section> -->
    <div
      class="lg:px-10 sm:px-5 md:pb-20 pb-16 overflow-hidden custom_scroll overflow-y-auto max-h-[82vh]"
    >
      <section class="-mt-8 lg:mb-10 mb-4">
        <Chart />
      </section>
      <section class="bg-white py-5 sm:rounded-xl whitespace-nowrap">
        <div class="flex items-center justify-between px-5">
          <h1 class="text-2xl font-medium">{{ $t("order") }}</h1>
          <img class="cursor-pointer reload" src="@/assets/svg/reload.svg" />
        </div>

        <div class="relative px-5 overflow-x-auto sm:rounded-lg">
          <div class="flex items-center justify-between py-4 bg-white">
            <div class="relative lg:h-full lg:w-full w-0 h-0 overflow-hidden">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              >
                <svg
                  class="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                id="table-search-users"
                type="search"
                class="block p-2 pl-10 h-[46px] text-sm border-0 focus:ring-0 border-gray-300 rounded-lg w-80 bg-[#F4F4F6]"
                :placeholder="`${$t('search')}...`"
              />
            </div>
            <div class="flex gap-14">
              <div class="flex gap-5">
                <a-space class="h-[46px]" direction="vertical" :size="12">
                  <a-date-picker
                    :placeholder="`${$t('select_date')}...`"
                    v-model:value="value1"
                  />
                </a-space>
                <img
                  class="-ml-14 z-10"
                  src="@/assets/svg/calendar.svg"
                  alt=""
                />
              </div>
              <div class="flex status mr-4">
                <a-select
                  v-if="is_mount"
                  v-model:value="store.status[$t('uz')]"
                  :options="options[$t('uz')]"
                  class="placeholder-black"
                ></a-select>
                <img
                  class="-ml-6 mt-5 w-2 h-2 scale-150"
                  src="@/assets/svg/strelka.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <hr class="py-3" />
          <table class="w-full md:mx-0 -mx-5 text-sm text-left">
            <thead class="overflow-hidden font-semibold">
              <tr class="bg-[#F4F4F6] rounded-xl overflow-hidden">
                <th scope="col" class="p-4">
                  <div class="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      class="w-4 h-4 focus:ring-0 bg-gray-100 lg:border-[rgba(0, 0, 0, 0.20)] rounded"
                    />
                  </div>
                </th>
                <th scope="col" class="sm:px-6 px-2 py-3">
                  {{ $t("order_id") }}
                </th>
                <th scope="col" class="sm:px-6 px-2 py-3">{{ $t("date") }}</th>
                <th scope="col" class="sm:px-6 px-2 py-3">{{ $t("summa") }}</th>
                <th scope="col" class="sm:px-6 px-2 py-3">
                  {{ $t("payment_status") }}
                </th>
                <th scope="col" class="sm:px-6 px-2 py-3">
                  {{ $t("view_details") }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="i in orders"
                :key="i.id"
                class="bg-white rounded-xl text-sm border-b hover:bg-[#F4F4F6]"
              >
                <th class="p-4">
                  <div class="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      class="w-4 h-4 focus:ring-0 bg-gray-100 lg:border-[rgba(0, 0, 0, 0.20)] rounded"
                    />
                  </div>
                </th>
                <th
                  scope="row"
                  class="flex font-semibold text-[#088178] items-center sm:px-6 px-2 py-4 whitespace-nowrap"
                >
                  {{ i.id }}
                </th>
                <td class="sm:px-6 px-2 py-4">{{ i.date }}</td>
                <td class="sm:px-6 px-2 py-4">
                  {{ i.sum }}
                </td>
                <td class="sm:px-6 px-2 py-4 font-medium">
                  <button
                    v-if="i.status === 'To\'langan'"
                    class="bg-[#0881780D] px-3 py-1.5 rounded-md text-[#088178]"
                  >
                    {{ i.status }}
                  </button>
                  <button
                    v-else
                    class="bg-[#FCF1DF] px-3 py-1.5 rounded-md text-[#F2B855]"
                  >
                    {{ i.status }}
                  </button>
                </td>
                <td class="sm:px-6 px-2 py-4">
                  <button
                    class="text-white bg-[#088178] font-medium px-3 py-1 rounded-md"
                  >
                    {{$t("in_detail")}}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <nav class="py-5 sticky left-0">
            <ul class="flex items-center -space-x-px h-10 text-base">
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-200 rounded-l-md hover:bg-gray-100"
                >
                  <span class="sr-only">Previous</span>
                  <svg
                    class="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                </a>
              </li>
              <li
                v-for="i in 5"
                :key="i"
                :class="
                  i == 1
                    ? 'bg-[#5C0099] text-white hover:bg-[#5C0099]'
                    : 'bg-white'
                "
                class="flex cursor-pointer items-center justify-center px-4 h-10 leading-tight text-gray-500 border border-gray-200 hover:bg-gray-100"
              >
                {{ i }}
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span class="sr-only">Next</span>
                  <svg
                    class="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>

          <!-- Edit user modal -->
          <div
            class="fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div class="relative w-full max-w-2xl max-h-full">
              <!-- Modal content -->
              <form
                action="#"
                class="relative bg-white rounded-lg shadow dark:bg-gray-700"
              >
                <!-- Modal header -->
                <div
                  class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
                >
                  <h3
                    class="text-xl font-semibold text-gray-900 dark:text-white"
                  >
                    Edit user
                  </h3>
                  <button
                    type="button"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="editUserModal"
                  >
                    <svg
                      class="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                  </button>
                </div>
                <!-- Modal body -->
                <div class="p-6 space-y-6">
                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="first-name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >First Name</label
                      >
                      <input
                        id="first-name"
                        type="text"
                        name="first-name"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Bonnie"
                        required=""
                      />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="last-name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Last Name</label
                      >
                      <input
                        id="last-name"
                        type="text"
                        name="last-name"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Green"
                        required=""
                      />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Email</label
                      >
                      <input
                        id="email"
                        type="email"
                        name="email"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="example@company.com"
                        required=""
                      />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="phone-number"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Phone Number</label
                      >
                      <input
                        id="phone-number"
                        type="number"
                        name="phone-number"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="e.g. +(12)3456 789"
                        required=""
                      />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="department"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Department</label
                      >
                      <input
                        id="department"
                        type="text"
                        name="department"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Development"
                        required=""
                      />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="company"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Company</label
                      >
                      <input
                        id="company"
                        type="number"
                        name="company"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="123456"
                        required=""
                      />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="current-password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Current Password</label
                      >
                      <input
                        id="current-password"
                        type="password"
                        name="current-password"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="••••••••"
                        required=""
                      />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="new-password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >New Password</label
                      >
                      <input
                        id="new-password"
                        type="password"
                        name="new-password"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="••••••••"
                        required=""
                      />
                    </div>
                  </div>
                </div>
                <!-- Modal footer -->
                <div
                  class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
                >
                  <button
                    type="submit"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Save all
                  </button>
                </div>
              </form>
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

const is_mount = ref(false);

const store = reactive({
  status: { Uz: "Status", Уз: "Статус" },
});
const options = ref({
  Uz: [
    {
      value: "To'langan",
      label: "To'langan",
    },
    {
      value: "Kutilmoqda",
      label: "Kutilmoqda",
    },
  ],
  Уз: [
    {
      value: "Оплаченный",
      label: "Оплаченный",
    },
    {
      value: "Ожидающий",
      label: "Ожидающий",
    },
  ],
});

const orders = ref([
  {
    id: "#568914",
    date: "27 Okt, 2023",
    sum: "1 100 000 uzs",
    status: "To'langan",
  },
  {
    id: "#568924",
    date: "28 Okt, 2023",
    sum: "2 100 000 uzs",
    status: "Kutilmoqda",
  },
  {
    id: "#523545",
    date: "25 Okt, 2023",
    sum: "100 000 uzs",
    status: "To'langan",
  },
  {
    id: "#452321",
    date: "23 Okt, 2023",
    sum: "500 000 uzs",
    status: "Kutilmoqda",
  },
  {
    id: "#101221",
    date: "10 Okt, 2023",
    sum: "30 000 uzs",
    status: "Kutilmoqda",
  },
  {
    id: "#568921",
    date: "09 Okt, 2023",
    sum: "5 100 000 uzs",
    status: "Kutilmoqda",
  },
  {
    id: "#123456",
    date: "01 Okt, 2023",
    sum: "3 100 000 uzs",
    status: "To'langan",
  },
  {
    id: "#345645",
    date: "27 Okt, 2023",
    sum: "4 520 00 uzs",
    status: "To'langan",
  },
]);

onMounted(() => {
  is_mount.value = true;
});
</script>

<style lang="scss" scoped></style>
