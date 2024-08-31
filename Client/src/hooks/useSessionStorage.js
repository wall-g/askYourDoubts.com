const useSessionStorage = (key) => {
    const setValue = (value) => {
        try {
            sessionStorage.setItem(key, value);
        } catch (error) {
            console.log(error);
        }
    }

    const getValue = () => {
        try {
            const item = sessionStorage.getItem(key);
            return item;
        } catch (error) {
            console.log(error);
        }
    }

    const clearValue = () => {
        try {
            sessionStorage.removeItem(key);
        } catch (error) {
            console.log(error);
        }
    }

    return { setValue, getValue, clearValue };
}

export default useSessionStorage