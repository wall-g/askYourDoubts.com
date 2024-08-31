const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const useValidation = () => {
    const validate = (values) => {
        let errors = {};
        if (!emailRegex.test(values.email)) {
            errors.email = 'email is invalid!';
        }
        if (values.email === '') {
            errors.email = 'email is required!';
        }
        if (values.password === '') {
            errors.password = 'password is required!';
        }
        if (values.username === '') {
            errors.username = 'username is required!';
        }
        if (values.password && values.password.length < 8) {
            errors.password = 'password must be at least 8 charaters long!'
        }
        return errors;
    }
    return validate;
}

export default useValidation;