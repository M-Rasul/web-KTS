
// VALIDATOR FOR LOGIN FORM
export const loginValidator = (values) => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Email required!';
    }

    if (!values.password) {
        errors.password = 'Password required!';
    }

    return errors;
};