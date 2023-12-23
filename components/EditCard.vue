<template>
  <main class="bg-blue-50">
    <section>
      <form
        @submit.prevent="handleSubmit"
        tabindex="-1"
        class="flex justify-center min-h-screen items-center bg-[#8080804c] absolute top-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <ul class="rounded-xl font-medium p-5 space-y-6 w-[30rem]">
          <li>
            <section class="m-4">
              <div
                class="credit-card w-full sm:w-auto shadow-lg mx-auto rounded-xl bg-white"
                x-data="creditCard"
              >
                <header class="flex flex-col justify-center items-center">
                  <div
                    class="relative"
                    x-show="card === 'front'"
                    x-transition:enter="transition ease-out duration-300"
                    x-transition:enter-start="opacity-0 transform scale-90"
                    x-transition:enter-end="opacity-100 transform scale-100"
                  >
                    <li
                      class="flex scale-[0.8] relative mb-10 backdrop-blur-sm flex-col h-[240px] z-20 w-[476px] px-5 text-[#FFFFFF] rounded-2xl bg-[#6E10AD]"
                    >
                      <div
                        class="bg-[#5C009966] -z-10 rounded-2xl top-2 left-2 absolute min-h-[240px] w-[458px]"
                      ></div>
                      <div
                        class="bg-[#9c39de2a] -z-20 rounded-2xl top-4 left-4 absolute min-h-[240px] w-[436px]"
                      ></div>
                      <button
                        class="text-xs rounded-ee-2xl -mx-5 rounded-ss-2xl bg-[#DE4EC9] h-6 w-28"
                      >
                        Asosiy kartam
                      </button>
                      <p class="pt-20 text-3xl font-bold"></p>
                      <p class="pt-8 text-2xl">8600 60** **** 1224</p>
                      <div class="flex pt-3 justify-between">
                        <div class="flex gap-5 items-center">
                          <p class="text-sm">MADRAXIMOV RAHMATULLOH</p>
                          <p>02/27</p>
                        </div>
                        <i class="uppercase">uzcard</i>
                      </div>
                    </li>
                    <div
                      class="front bg-transparent text-lg w-full text-white px-12 absolute left-0 bottom-12"
                    >
                      <p
                        class="number mb-5 sm:text-xl"
                        x-text="cardNumber !== '' ? cardNumber : '0000 0000 0000 0000'"
                      ></p>
                      <div class="flex flex-row justify-between">
                        <p
                          x-text="cardholder !== '' ? cardholder : 'Card holder'"
                        ></p>
                        <div class="">
                          <span x-text="expired.month"></span>
                          <span x-show="expired.month !== ''">/</span>
                          <span x-text="expired.year"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="relative hidden"
                    x-show="card === 'back'"
                    x-transition:enter="transition ease-out duration-300"
                    x-transition:enter-start="opacity-0 transform scale-90"
                    x-transition:enter-end="opacity-100 transform scale-100"
                  >
                    <li
                      class="flex scale-[0.8] relative mb-10 backdrop-blur-sm flex-col h-[240px] z-20 w-[476px] text-[#FFFFFF] rounded-2xl bg-[#6E10AD]"
                    >
                      <div
                        class="bg-[#5C009966] -z-10 rounded-2xl top-2 left-2 absolute min-h-[240px] w-[458px]"
                      ></div>
                      <div
                        class="bg-[#9c39de2a] -z-20 rounded-2xl top-4 left-4 absolute min-h-[240px] w-[436px]"
                      ></div>
                      <div class="bg-[#0000009f] h-12 mt-12"></div>
                      <p
                        class="ml-auto mr-5 mt-10 h-10 w-20 border border-white"
                      ></p>
                    </li>
                    <img
                      class="w-full h-auto"
                      src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-back.png"
                      alt=""
                    />
                    <div
                      class="bg-transparent text-white text-xl w-full flex justify-end absolute bottom-20 px-8 sm:bottom-24 right-0 sm:px-12"
                    >
                      <div
                        class="border border-white w-16 h-9 flex justify-center items-center"
                      >
                        <p
                          x-text="securityCode !== '' ? securityCode : 'code'"
                        ></p>
                      </div>
                    </div>
                  </div>
                  <ul class="flex">
                    <li class="mx-2">
                      <img
                        class="w-16"
                        src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/computop.png"
                        alt=""
                      />
                    </li>
                    <li class="mx-2">
                      <img
                        class="w-14"
                        src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png"
                        alt=""
                      />
                    </li>
                    <li class="ml-5">
                      <img
                        class="w-7"
                        src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/mastercard-id-check.png"
                        alt=""
                      />
                    </li>
                  </ul>
                </header>
                <div class="mt-4 p-4">
                  <h1 class="text-xl font-semibold text-gray-700 text-center">
                    Karta ma'lumotlari
                  </h1>
                  <div class="">
                    <div class="my-3">
                      <input
                        type="text"
                        class="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring-0 focus:outline-none"
                        placeholder="Card holder"
                        maxlength="22"
                        x-model="cardholder"
                      />
                    </div>
                    <div class="my-3">
                      <input
                        type="text"
                        class="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring-0 focus:outline-none"
                        placeholder="Card number"
                        x-model="cardNumber"
                        x-on:keydown="format()"
                        x-on:keyup="isValid()"
                        maxlength="19"
                      />
                    </div>
                    <div class="my-3 flex flex-col">
                      <div class="mb-2">
                        <label for="" class="text-gray-700">Expired</label>
                      </div>
                      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        <select
                          name=""
                          id=""
                          class="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring-0 focus:outline-none"
                          x-model="expired.month"
                        >
                          <option value="" selected disabled>MM</option>
                          <option value="01">01</option>
                          <option value="02">02</option>
                          <option value="03">03</option>
                          <option value="04">04</option>
                          <option value="05">05</option>
                          <option value="06">06</option>
                          <option value="07">07</option>
                          <option value="08">08</option>
                          <option value="09">09</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                        </select>
                        <select
                          name=""
                          id=""
                          class="form-select appearance-none block w-full px-5 py-2 border focus:ring-0 rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:outline-none"
                          x-model="expired.year"
                        >
                          <option value="" selected disabled>YY</option>
                          <option value="2021">2021</option>
                          <option value="2022">2022</option>
                          <option value="2023">2023</option>
                          <option value="2024">2024</option>
                          <option value="2025">2025</option>
                          <option value="2026">2026</option>
                        </select>
                        <input
                          type="text"
                          class="block w-full col-span-2 px-5 py-2 border rounded-lg focus:ring-0 bg-white shadow-lg placeholder-gray-400 text-gray-700  focus:outline-none"
                          placeholder="Security code"
                          maxlength="3"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="flex items-center justify-between p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
                >
                  <button
                    @click="closeModal"
                    data-modal-hide="defaultModal"
                    type="button"
                    class="text-gray-500 bg-white hover:bg-red-500 hover:text-white rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 focus:z-10"
                  >
                    Bekor qilish
                  </button>
                  <button
                    data-modal-hide="defaultModal"
                    type="submit"
                    class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Saqlash
                  </button>
                </div>
              </div>
            </section>
          </li>
        </ul>
      </form>
    </section>
  </main>
</template>

<script setup>
import {useCardStore } from "@/store/card"
const card = useCardStore();

function closeModal(){
  card.store.modal = false;
}
</script>

<style lang="scss" scoped>
.form-select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  background-size: 1.5em 1.5em;
  -webkit-tap-highlight-color: transparent;
}

.submit-button:disabled {
  cursor: not-allowed;
  background-color: #d1d5db;
  color: #111827;
}

.submit-button:disabled:hover {
  background-color: #9ca3af;
}

.credit-card {
  max-width: 420px;
  margin-top: 3rem;
}

@media only screen and (max-width: 420px) {
  .credit-card .front {
    font-size: 100%;
    padding: 0 2rem;
    bottom: 2rem !important;
  }

  .credit-card .front .number {
    margin-bottom: 0.5rem !important;
  }
}
</style>
