export const useOtpStore = () => {
    const state = reactive({
        otp: "",
        phone: "",
        is_true: false,
    })

    const setPhone = (phone) => {
        console.log(phone);
        state.phone = phone
    }

    return { state, setPhone }
}