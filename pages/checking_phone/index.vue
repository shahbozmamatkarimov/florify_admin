<template>
  <main class="min-h-screen bg-white grid grid-cols-2">
    <section class="overflow-hidden p-10 h-screen">
      <img
        class="w-full h-full object-cover rounded-l-2xl"
        src="../../assets/svg/login.svg"
        alt="img"
      />
    </section>
    <section
      class="flex flex-col w-full items-center min-h-screen justify-center px-6 py-8 mx-auto"
    >
      <div
        class="w-full shadow-md shadow-white backdrop-blur-sm rounded-lg md:mt-0 max-w-sm xl:p-0"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <form class="space-y-6 md:space-y-10" @submit.prevent="sendPhone">
            <label for="tel" class="block mb-2 text-lg font-medium"
              >Telefon raqam</label
            >
            <div>
              <a-input
                id="tel"
                @input="phoneMask"
                v-model:value="phone"
                autofocus
                type="text"
                prefix="+998"
                bordered="false"
                class="font-medium input w-full focus:border-0 border-0 -pl-3 focus:outline-0 outline-0 focus:ring-0 ring-0 placeholder-[#555555]"
                autocomplete="tel"
                placeholder="__-___-__-__"
                required
              />
              <hr />
            </div>
            <button
              type="submit"
              class="text-white w-full bg-[#5C0099] border border-[#5C0099] active:bg-white active:text-[#5C0099] h-12 rounded-xl"
            >
              Kodni jo'natish
            </button>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>
<script setup>
definePageMeta({
  layout: "false",
  middleware: ["auth"],
});

const phone = ref("");
const router = useRouter();

// send otp --------------------
const sendPhone = () => {
  const phoneNumber = document.querySelector("#tel").value;
  console.log(phoneNumber.length);
  if (phoneNumber.length === 19) {
    fetch("https://florify-market.onrender.com/api/salesman/sendOtp", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone: phone.value }),
    })
      .then((res) => {
        console.log(res);
        localStorage.setItem("phone", phone.value);
        router.push("/otp_verification");
      })
      .catch((error) => {
        notification.warning(error);
        console.log(error);
      });
  } else {
    notification.warning("Iltimos, telefon raqamini to'liq kiriting!");
  }
};

function phoneMask() {
  console.log(phone.value);
  let phoneNumber = phone.value.replace(/\D/g, "");

  // Define the positions for spaces
  const spacePositions = [2, 6, 9, 12];

  // Insert spaces at specified positions
  for (var i = 0; i < spacePositions.length; i++) {
    if (phoneNumber.length > spacePositions[i]) {
      phoneNumber =
        phoneNumber.slice(0, spacePositions[i]) +
        "-" +
        phoneNumber.slice(spacePositions[i]);
    }
  }

  // Update the input value
  phone.value = phoneNumber.slice(0, 12);
}
</script>
<style lang="scss" scoped>
// phone
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");

$gray0: #f6f8ff;
$primary0: #636983;

body {
  padding: 0;
  margin: 0;
  height: 100%;
  font-family: "Roboto", sans-serif;
}
*::-webkit-scrollbar {
  width: 4px;
}

*::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

*::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

.wrapper {
  background-color: $gray0;
  width: 100%;
  min-height: 600px;
  height: 100vh;
  p {
    margin: 0;
  }
  .containers {
    padding-top: 40px;
  }
  .buttons {
    width: 600px;
    text-align: center;
    margin: 0 auto;
  }
  .title {
    text-align: center;
    padding: 40px 0;
    font-size: 40px;
    font-weight: 300;
    color: $primary0;
  }

  .line {
    width: 50%;
    margin: 50px auto 0 auto;
    height: 1px;
    background-color: #c3d2e3;
  }
}

.container {
  width: 100%;
  padding: 10px 0;
  text-align: center;
  .card {
    max-width: 400px;
    background-color: white;
    padding: 60px 40px;
    border-radius: 10px;
    border: 1px solid #e3e3e3;
    margin: 0 auto;
  }
}

.phone-block {
  position: relative;

  .flag {
    float: left;
  }

  input[type="tel"] {
    padding: 5px;
    width: 100%;
    border: 1px solid #e3e3e3;
    outline: none;
    padding: 10px 10px 10px 100px;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: #fbfcff;
    height: 40px;
    color: #777;
    transition: all 0.3s;

    &:focus {
      border: 1px solid #ccc;
      & ~ .phone {
        top: -4px;
        left: -4px;
        box-shadow: 2px 5px 10px -2px rgba(34, 60, 80, 0.2);
      }
    }
  }
  .phone {
    position: absolute;
    top: 0px;
    left: 0px;
    padding: 10px;
    height: 40px;
    width: 90px;
    box-sizing: border-box;
    background-color: #fbfcff;
    border-radius: 10px;
    border: 1px solid #e3e3e3;
    transition: all 0.3s;
    box-shadow: 0px 0px 0px -1px rgba(34, 60, 80, 0.2);

    &:hover {
      .list-code {
        visibility: visible;
        opacity: 1;
        box-shadow: 2px 5px 10px -2px rgba(34, 60, 80, 0.2);
      }
    }
  }

  .list-code {
    width: 200px;
    height: 150px;
    background-color: white;
    opacity: 0;
    transition: all 0.3s;
    padding: 5px;
    position: relative;
    left: -10px;
    top: 10px;
    padding: 10px;
    border-radius: 10px;
    box-sizing: border-box;
    visibility: hidden;

    .scroll-block {
      width: 100%;
      height: 100%;
      overflow-y: scroll;
      box-sizing: border-box;
    }

    .country-code,
    .country-name {
      font-size: 12px;
      text-align: left;
    }

    ul {
      margin: 0;
      padding: 0;
      li.line-country {
        width: calc(100% - 10px);
        padding-left: 5px;
        padding-top: 3px;
        padding-bottom: 3px;
        cursor: pointer;
        color: #777;
        display: grid;
        grid-template-columns: 27px 35px 1fr;
        border-radius: 5px;

        &:hover {
          font-weight: 600;
          background-color: $gray0;
        }
      }
    }
  }
}
</style>
