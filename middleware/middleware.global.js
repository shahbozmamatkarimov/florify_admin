import { defineNuxtRouteMiddleware } from "#app";
import { useProfileStore } from "@/store";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const isRoute = [
    "login",
    "forgot_password",
    "otp_verification",
    "checking_phone",
    "new_password",
    "register",
  ].includes(to.name);
  if (!isRoute) {
    try {
      if (process.client) {
        const token = localStorage.getItem("token");
        if (token || token != undefined || token != null) {
          const useProfile = useProfileStore();
          const parts = token.split(".");
          const exp = parts[1];
          let decodedPayload;
          if (exp) {
            decodedPayload = JSON.parse(atob(exp));
          } else {
            return;
          }
          console.log(decodedPayload);
          const experition = decodedPayload.exp;
          const now = +Date.now().toString().slice(0, 10);
          console.log(now, experition);
          console.log(now >= experition);
          if (now >= experition) {
            console.log(now >= experition);
            localStorage.removeItem("token");
            if (!isRoute) {
              return navigateTo("/login");
            }
          }
          useProfile.getProfile();
        } else if (!isRoute) {
          return navigateTo("/login");
        }
      }
    } catch (error) {
      console.log(error);
      if (!isRoute) {
        return navigateTo("/login");
      }
    }
  }
});
