<template>
  <main class="bg-[#203843]">
    <section class="flex flex-col items-center justify-center min-h-screen">
      <div
        class="flex bg-[#80808099] text-white flex-col items-center justify-center sm:w-[30rem] py-5 px-4 rounded-xl shadow-lg border"
      >
        <h1 class="h-10 text-2xl">Kodni kiriting</h1>
        <p>
          Biz <span>{{ phoneOtp?.slice(0, 9) }}</span> * * *
          <span>{{ phoneOtp?.slice(13, 19) }}</span> telefon raqamingizga kod
          yubordik
        </p>
        <div class="otp-field py-5">
          <input type="text" maxlength="1" autofocus />
          <input type="text" maxlength="1" />
          <input type="text" maxlength="1" />
          <input type="text" maxlength="1" />
        </div>
        <p
          class="cursor-pointer text-blue-600 hover:underline"
          @click="$router.push('/checking_phone')"
        >
          Telefon raqamini qaytadan kiritish
        </p>
      </div>
    </section>
  </main>
</template>
<script setup>
definePageMeta({
  middleware: ["auth"],
});
import { useAuthStore } from "@/store";
import { useRouter } from "vue-router";
const router = useRouter();
const useAuth = useAuthStore();

const phoneOtp = ref();

definePageMeta({
  layout: "false",
});

function submit() {
  console.log("object submitted");
  const inputs = document.querySelectorAll(".otp-field input");
  // 👇 Entered OTP
  let otp = "";
  inputs.forEach((input) => {
    otp += input.value;
    input.disabled = true;
    input.classList.add("disabled");
  });
  console.log(router.currentRoute.value.query);
  console.log("Hello");
  fetch("https://api.florify.uz/api/salesman/verifyLogin", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      phone: "+" + router.currentRoute.value.query?.login_phone.trim(),
      code: otp,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res, "res");
      if (String(res.message) == "phone must be a valid phone number") {
        router.push("/login");
      } else if (res.statusCode == 200) {
        console.log(res);
        localStorage.setItem("token", res.token);
        localStorage.setItem("salesman_id", res.data?.salesman?.id);
        router.push("/");
      } else {
        notification.warning("Kod mos kelmadi, iltimos qayta urinib ko'ring");
        inputs.forEach((input) => {
          input.value = "";
          input.disabled = false;
          input.classList.remove("disabled");
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

onMounted(() => {
  const inputs = document.querySelectorAll(".otp-field input");

  inputs.forEach((input, index) => {
    input.dataset.index = index;
    input.addEventListener("keyup", handleOtp);
    input.addEventListener("paste", handleOnPasteOtp);
  });

  function handleOtp(e) {
    const input = e.target;
    const value = input.value;
    const isValidInput = value.match(/[0-9a-z]/gi);
    input.value = "";
    input.value = isValidInput ? value[0] : "";

    const fieldIndex = input.dataset.index;
    if (fieldIndex < inputs.length - 1 && isValidInput) {
      input.nextElementSibling.focus();
    }

    if (e.key === "Backspace" && fieldIndex > 0) {
      input.previousElementSibling.focus();
    }
    if (fieldIndex == inputs.length - 1 && +isValidInput[0] != NaN) {
      submit();
    }
  }

  function handleOnPasteOtp(e) {
    const data = e.clipboardData.getData("text");
    const value = data.split("");
    if (value.length === inputs.length) {
      inputs.forEach((input, index) => (input.value = value[index]));
      submit();
    }
  }
});

onBeforeMount(() => {
  // phoneOtp.value = localStorage.getItem("phone");
  // if (!phoneOtp.value) {
  // router.push("/checking_phone");
  // }
  if (!router.currentRoute.value.query?.login_phone || !useAuth.form.password) {
    router.push("/login");
  }
});
</script>
<style lang="scss" scoped>
body {
  margin: 0;
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #282a36;
  height: 100vh;
  color: #fff;
}

.otp-field {
  display: flex;
}

.otp-field input {
  width: 50px;
  font-size: 32px;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  margin: 2px;
  border: 2px solid #55525c;
  background: #21232d;
  font-weight: bold;
  color: #fff;
  outline: none;
  transition: all 0.1s;
}

.otp-field input:focus {
  border: 2px solid #a527ff;
  box-shadow: 0 0 2px 2px #a527ff6a;
}

.disabled {
  opacity: 0.5;
}

.space {
  margin-right: 1rem !important;
}
</style>
