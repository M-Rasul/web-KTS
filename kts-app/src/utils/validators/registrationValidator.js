
export const registrationValidator = (values) => {
    
    // INITIALIZING ERRORS
    const errors = {};

    // CHECKING IF INPUTS ARE NOT EMPTY
    if(!values.email) {
        errors.email = "Email required";
    }
    if(!values.nickname) {
        errors.nickname = "Nickname required";
    }
    if(!values.age) {
        errors.age = "Age required";
    }
    if(!values.password) {
        errors.password = "Password required";
    }

    // RETURNING ERRORS
    return errors;
};