import authReducer, { loginAC, logoutAC, setMeAC, setRegistrationFailedAC } from "./authReducer"

const initialState = {
    profile: null,
    isAuth: true
}
const testProfile = {
    nickname: "RasQa",
    image: "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png",
    age: 21,
    description: "I'ma cool boy!🤘"
}
it("description should be correct after login", () => {
    const action = loginAC(testProfile);
    const newState = authReducer(initialState, action);
    expect(newState.profile.description).toBe("I'ma cool boy!🤘");
})
it("isAuth should be false after logout", () => {
    const action = logoutAC();
    const newState = authReducer(initialState, action);
    expect(newState.isAuth).toBe(false);
})
it("registration should fail", () => {
    const action = setRegistrationFailedAC();
    const newState = authReducer(initialState, action);
    expect(newState.isRegistrationFailed).toBe(true);
});