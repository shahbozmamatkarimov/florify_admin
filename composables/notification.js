export const useNotification = () => {
    const key = "updatable";

    const showLoading = (messageContent) => {
        message.loading({ content: messageContent, key: key, duration: 100 });
    };

    const showSuccess = (messageContent) => {
        setTimeout(() => {
            message.success({ content: messageContent, key: key, duration: 2 });
        }, 1000);
    };

    const showWarning = (messageContent) => {
        setTimeout(() => {
            message.warning({ content: messageContent, key: key, duration: 2 });
        }, 1000);
    };

    const showError = (messageContent) => {
        setTimeout(() => {
            message.error({ content: messageContent, key: key, duration: 2 });
        }, 1000);
    };

    return {
        showLoading,
        showSuccess,
        showWarning,
        showError,
    };
}