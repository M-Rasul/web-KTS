
// AFTER LOGIN IS SUCCESSFUL
export const onLoginSuccess = (access, refresh) => {

    // SETTING LOCAL STORAGE
    localStorage.setItem("access", access);
    localStorage.setItem("refresh", refresh);
};

// UPDATE ACCESS TOKEN
export const updateToken = (access) => {

    // SETTING ACCESS TOKEN
    localStorage.setItem("access", access);
};