import appReducer, { setInitializedAC } from "./appReducer"

const initialState = {
    initialized: false
}
it("user should be initialized after setting", () => {
    const action = setInitializedAC();
    const newState = appReducer(initialState, action);
    expect(newState.initialized).toBe(true);
})