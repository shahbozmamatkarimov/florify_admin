<template>
  <main>
    <Navbar>Social networks</Navbar>
    <section class="lg:px-10 sm:px-5 px-0 pt-5">
      <ul class="space-y-5">
        <li v-for="i in 6" v-if="isLoading.isLoadingType('getAllNetworks')" class="flex items-end gap-5 animate-pulse">
          <p class="bg-gray-300 h-[50px] w-[50px] rounded-full"></p>
          <p class="border-b-2 border-gray-300 w-[500px] h-1"></p>
          <p class="w-6 h-6 bg-gray-300 rounded-full"></p>
        </li>
        <li v-else
          v-for="(i, index) in social_networks"
          class="flex items-center gap-5"
        >
          <img :src="i[0]" alt="" />
          <input
            v-if="
              store.networks[i[1]] && store.edit !== social_networks[index][1]
            "
            :id="i[1]"
            :value="store.networks[i[1]]"
            disabled
            type="text"
            class="!border-0 focus:ring-0 !outline-0 !shadow-none !bg-transparent w-[500px] !rounded-none !border-b-2"
          />
          <input
            v-else
            :id="i[1]"
            :value="store.networks[i[1]]"
            @change="editSocialNetworks(i[1])"
            type="text"
            class="!border-0 focus:ring-0 !outline-0 !shadow-none !bg-transparent w-[500px] !rounded-none !border-b-2"
          />
          <div v-if="store.networks[i[1]]" class="flex gap-5">
            <i
              @click="store.edit = social_networks[index][1]"
              class="bx bx-pencil cursor-pointer text-lg"
            ></i>
            <i
              @click="
                deleteNetworks(
                  store.networks[social_networks[index][1] + '_id']
                )
              "
              class="bx bx-trash cursor-pointer text-lg"
            ></i>
          </div>
          <img
            v-else
            @click="editSocialNetworks(i[1])"
            class="cursor-pointer"
            src="@/assets/social/plus.svg"
            alt=""
          />
        </li>
      </ul>
    </section>
  </main>
</template>

<script setup>
import { useLoadingStore } from "@/store";
import axios from "axios";
import phone from "@/assets/social/phone.svg";
import additional_phone from "@/assets/social/additional_phone.svg";
import email from "@/assets/social/email.svg";
import facebook from "@/assets/social/facebook.svg";
import instagramm from "@/assets/social/instagramm.svg";
import telegram from "@/assets/social/telegram.svg";

const runtimeconfig = useRuntimeConfig();
const baseUrl = runtimeconfig.public.apiBaseUrl;
const isLoading = useLoadingStore();
isLoading.addLoading("getAllNetworks");

const social_networks = [
  [phone, "phone"],
  [additional_phone, "additional_phone"],
  [email, "email"],
  [facebook, "facebook"],
  [instagramm, "instagramm"],
  [telegram, "telegram"],
];
const store = reactive({
  networks: {},
  edit: false,
  delete: false,
});

function editSocialNetworks(name) {
  const token = localStorage.getItem("token");
  const link = document.getElementById(name).value;
  isLoading.addLoading("getAllNetworks");
  if (link) {
    axios
      .post(
        baseUrl + "/socialNetwork",
        {
          name,
          link,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        console.log(res);
        store.edit = false;
        getAllNetworks();
      })
      .catch((err) => {
        isLoading.removeLoading("getAllNetworks");
        store.edit = false;
        console.log(err);
      });
  }
}

function getAllNetworks() {
  isLoading.addLoading("getAllNetworks");
  const token = localStorage.getItem("token");
  store.networks = [];
  axios
    .get(baseUrl + "/socialNetwork", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      console.log(res);
      for (let i of res.data.data?.social_networks) {
        console.log(i);
        store.networks[i.name] = i.link;
        store.networks[i.name + "_id"] = i.id;
      }
      console.log(store.networks);
      isLoading.removeLoading("getAllNetworks");
    })
    .catch((err) => {
      console.log(err);
      isLoading.removeLoading("getAllNetworks");
    });
}

function deleteNetworks(id) {
  isLoading.addLoading("getAllNetworks");
  const token = localStorage.getItem("token");
  axios
    .delete(baseUrl + "/socialNetwork/" + id, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      console.log(res);
      getAllNetworks();
    })
    .catch((err) => {
      console.log(err);
      isLoading.removeLoading("getAllNetworks");
    });
}

onMounted(() => {
  getAllNetworks();
});
</script>

<style lang="scss" scoped></style>
