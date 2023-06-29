import { contentReducer, setContentAC } from "./contentReducer"

const initialState = {
    events: null,
    books: null,
    videos: null,
    files: null,
    podcasts: null,
    contentType: "files"
}
const files = [
    {
        content: {
            name: "JS: From zero to advanced",
            description: "Learn the basics of the JavaScript to be ready for frameworks",
            image: null,
            isApproved: true
        },
        file: "some.pdf"
    }
];
it("files length should be 1 after getting it from server", () => {
    const action = setContentAC(files);
    const newState = contentReducer(initialState, action);
    expect(newState.files.length).toBe(1);
})