<template>
  <main class="min-h-screen bg-white grid grid-cols-2">
    <section class="overflow-hidden p-10 h-screen">
      <img
        class="w-full h-full object-cover rounded-l-2xl"
        src="../../assets/svg/login.svg"
        alt="img"
      />
    </section>
    <section class="flex items-center justify-center">
      <form
        class="flex flex-col font-medium w-96 space-y-9"
        @submit.prevent="handleSubmit"
      >
        <h1 class="font-bold text-3xl">Hisobga kirish</h1>
        <a-space direction="vertical">
          <a-input
            v-model:value="useAuth.form.phone"
            bordered="false"
            class="font-medium input w-full focus:border-0 border-0 focus:outline-0 outline-0 focus:ring-0 ring-0 placeholder-[#555555] -ml-3"
            minlength="13"
            maxlength="13"
            autocomplete="tel"
            placeholder="Telefon raqamingizni kiriting"
            required
          />
          <hr />
        </a-space>
        <a-space direction="vertical">
          <div class="flex">
            <a-input
              v-model:value="useAuth.form.password"
              :type="store.is_show ? 'text' : 'password'"
              bordered="false"
              autofocus
              class="font-medium input w-full focus:border-0 border-0 focus:outline-0 outline-0 focus:ring-0 ring-0 placeholder-[#555555] -ml-3"
              autocomplete="password"
              placeholder="Parolingizni kiriting"
              required
            />
            <img
              v-if="store.is_show"
              @click="store.is_show = !store.is_show"
              class="w-6 cursor-pointer"
              src="@/assets/svg/show.svg"
              alt=""
            />
            <img
              v-else
              @click="store.is_show = !store.is_show"
              class="w-6 cursor-pointer"
              src="@/assets/svg/hidden.svg"
              alt=""
            />
          </div>
          <hr />
          <button
          type="button"
          class="text-[#6188FF] text-center"
          @click="$router.push('/checking_phone')"
        >
          Parolni unutdingizmi?
        </button>
        </a-space>
        <button
          type="submit"
          class="text-white space-y-1 bg-[#5C0099] border border-[#5C0099] active:bg-white active:text-[#5C0099] h-12 rounded-xl"
        >
          Davom etish
        </button>
        <button
          type="button"
          class="text-[#6188FF] text-center"
          @click="$router.push('/register')"
        >
          Hisobingiz yo'qmi?
        </button>
      </form>
    </section>
  </main>
</template>
<script setup>
definePageMeta({
  middleware: ["auth"],
});
import { useAuthStore } from "@/store";
import { useNotification } from "../../composables/notification";
const { showLoading, showSuccess, showError } = useNotification();
const router = useRouter();
const useAuth = useAuthStore();

const runtimeconfig = useRuntimeConfig();
const baseUrl = runtimeconfig.public.apiBaseUrl;

definePageMeta({
  layout: "none",
});

const store = reactive({
  is_show: false,
});

const handleSubmit = () => {
  showLoading("So'rov tekshirilmoqda...");
  const data = {
    phone: useAuth.form.phone,
    password: useAuth.form.password,
  };
  fetch(baseUrl + "/admin/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (res.message == "Tasdiqlash kodi yuborildi") {
        router.push("/otp_verification?login_phone=" + useAuth.form.phone);
        showSuccess("Telefoningizga tasdiqlash kodi yuborildi");
        return;
      } else if (res.status == 200) {
        localStorage.setItem("token", res.access_token);
        localStorage.setItem("salesman_id", res.salesman?.id);
        router.push("/");
        showSuccess("Tizimga muvaffaqiyatli kirildi!");
      }
      if (res.statusCode == 400) {
        showError(res.message);
        return;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>
<style lang="scss" scoped></style>
