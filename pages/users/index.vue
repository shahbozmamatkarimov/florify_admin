<template>
  <main>
    <Navbar>{{ $t("comments") }}</Navbar>
    <section class="px-5 max-h-[83vh] overflow-y-auto min-h-[83vh]">
      <div class="flex flex-col w-full">
        <!-- Component Start -->
        <div class="flex justify-between text-lg font-medium">
          <h1></h1>
          <button
            @click="isLoading.modal.create = true"
            class="h-[40px] mt-2 px-[56px] rounded-lg text-white text-sm leading-4 bg-[#7112AF]"
          >
            <i class="bx bx-plus"></i> User qo'shish
          </button>
        </div>
        <div class="flex flex-col w-full mt-5">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div
              class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
            >
              <div class="shadow overflow-hidden rounded-lg">
                <table class="min-w-full text-sm">
                  <thead class="bg-[#7112AF] text-white text-xs uppercase font-medium">
                    <tr>
                      <th
                        scope="col"
                        class="px-4 py-4 text-left tracking-wider"
                      >
                        №
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-4 text-left tracking-wider"
                      >
                        Phone
                      </th>
                      <th
                      scope="col"
                      class="px-4 py-4 text-left tracking-wider"
                    >
                      Username
                    </th>
                      <th scope="col" class="px-4 py-4 min-w-[40px]"></th>
                    </tr>
                  </thead>
                  <tbody
                    v-if="isLoading.isLoadingType('getUsers')"
                    class="pointer-events-none"
                  >
                    <tr
                      v-for="i in 10"
                      :key="i.id"
                      :class="i % 2 == 0 ? 'bg-gray-800' : 'bg-black'"
                      class="bg-opacity-20 animate-pulse"
                    >
                      <td
                        v-for="i in 4"
                        :key="i"
                        class="px-4 h-[62px] py-4"
                      ></td>
                    </tr>
                  </tbody>
                  <tbody v-else>
                    <tr
                      v-for="(i, index) in useUsers.store.getUsers"
                      :key="i.id"
                      :class="index % 2 == 0 ? 'bg-gray-300' : ''"
                      class="bg-opacity-20 hover:bg-[#7112AF1A]"
                    >
                      <td class="px-4 py-4">{{ index+1 }}</td>
                      <td
                        class="px-4 items-center align-start w-40 whitespace-nowrap"
                      >
                        <p class="font-medium">{{ i.phone }}</p>
                      </td>
                      <td
                      class="px-4 items-center align-start w-40 whitespace-nowrap"
                    >
                      <p class="font-medium">{{ i.username }}</p>
                    </td>
                      <td
                        class="flex items-center justify-center mx-2 px-4 py-4 space-x-2 whitespace-nowrap"
                      >
                        <button
                          @click="() => useUsers.getDataById(i.id)"
                          class="bx bx-pencil hover:bg-gray-300 py-2 px-3 rounded-lg"
                        ></button>
                        <button
                          @click="
                            () => {
                              isLoading.modal.delete = true;
                              useUsers.store.id = i.id;
                            }
                          "
                          class="bx bx-trash hover:bg-gray-300 py-2 px-3 rounded-lg"
                        ></button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div
                  v-if="
                    !isLoading.isLoadingType('getUsers') &&
                    !useUsers.store.getUsers?.length
                  "
                >
                  <div
                    class="flex flex-col bg-[#F4F4F6] space-y-5 items-center justify-center font-medium mt-0.5 md:text-[16px] text-sm h-80"
                  >
                    <p>User mavjud emas</p>
                    <button
                      @click="isLoading.modal.create = true"
                      class="bg-[#7112AF] py-1.5 px-5 -mb-1 whitespace-nowrap rounded-full"
                    >
                      <i class="bx bx-plus add_test_plus"></i> User qo'shish
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Component End  -->
      </div>
    </section>
    <Pagination />

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
          Userni o'chirish
        </h1>
        <img
          @click="isLoading.modal.delete = false"
          class="hover:bg-[#7112AF1A] p-2 rounded-lg cursor-pointer"
          src="@/assets/svg/x.svg"
          alt="x"
        />
      </div>
      <p class="mt-12 text-[16px] leading-[19px]">
        Haqiqatan ham bu userni o'chirib tashlamoqchimisiz?
      </p>
      <div>
        <button
          @click="useUsers.deleteUser()"
          class="bg-[#7112AF] h-[40px] rounded-full overflow-hidden mt-10 w-full"
          v-loading="isLoading.isLoadingType('deleteUser')"
        >
          Userni o'chirish
        </button>
        <button
          @click="isLoading.modal.delete = false"
          class="h-[40px] rounded-[10px] mt-4 w-full"
        >
          Bekor qilish
        </button>
      </div>
    </a-modal>

    <a-modal v-model:open="isLoading.modal.create" centered>
      <div class="flex justify-between items-center w-full">
        <h1
          class="flex gap-[14px] items-center font-medium text-2xl leading-[29px]"
        >
          <i class="bx bx-user"></i>
          <span v-if="isLoading.modal.edit">Userni tahrirlash</span>
          <span v-else>User qo'shish</span>
        </h1>
        <!-- <h1
          v-else
          class="flex gap-[14px] items-center font-medium text-2xl leading-[29px]"
        >
          <i class="bx bxs-subject"></i>
          Fanni tahrirlash
        </h1> -->
        <img
          @click="isLoading.modal.create = false"
          class="hover:bg-[#7112AF1A] p-2 rounded-lg cursor-pointer"
          src="@/assets/svg/x.svg"
          alt="x"
        />
      </div>
      <!-- :class="
        isLoading.isLoadingType('modal')
          ? 'pointer-events-none animate-pulse'
          : ''
      " -->
      <form @submit.prevent="useUsers.createUser">
        <div class="mt-8">
          <div>
            <div class="space-y-3">
              <div class="grid gap-3">
                <input
                  type="text"
                  class="w-full"
                  v-model="useUsers.create.phone"
                  placeholder="Telefon raqam"
                  required
                />
                <input
                  v-model="useUsers.create.username"
                  type="text"
                  class="w-full"
                  placeholder="Username"
                  required
                />
                <input
                  v-model="useUsers.create.password"
                  type="text"
                  class="w-full"
                  placeholder="Password"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <button
          class="h-[40px] overflow-hidden w-full text-white bg-[#7112AF] mt-8 text-sm leading-4 font-medium rounded-full"
        >
        <span v-if="isLoading.modal.edit">Tahrirlash</span>
          <span v-else>Qo'shish</span>
          <Loading />
        </button>
      </form>
    </a-modal>
  </main>
</template>
<script setup>
import { useLoadingStore, useUsersStore } from "@/store";
const isLoading = useLoadingStore();
const useUsers = useUsersStore();
isLoading.addLoading('getUsers')

definePageMeta({
  // layout: "custom",
  middleware: ["auth"],
});

const store = reactive({
  is_chat: false,
});

onMounted(() => {
  useUsers.getUsers();
});
</script>
<style lang="scss" scoped></style>
