import axios from "axios";
const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    withCredentials: false,
    headers: {
        "Content-Type": "application/json",
        // "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY4ODkxMzYzMSwiaWF0IjoxNjg4ODI3MjMxLCJqdGkiOiI2ZjhmYTgwY2MwYjI0NDlkOTRiZjcxNTgxZmQ0YTEwZSIsInVzZXJfaWQiOjN9._80DoXN8a69vVCEzcDLSptP4ZezkhdBXzL9dTM1EKfM"
    }
  });
 export const authAPI = {
    // GET
    getCSRF() {
        return instance.get("user-auth/login/");
    },
    me() {
        return instance.get("me");
    },

    // POST
    signIn(email, password) {
        return instance.post("user-auth/login/", {
            email,
            password
        });
    },
    signOut() {
        return instance.post("logout");
    },
}
export const contentAPI = {
    
    // GET
    getEvents() {
        return instance.get("/kts/content/events");
    },
    getBooks() {
        return instance.get("/kts/content/books");
    },
    getVideos() {
        return instance.get("/kts/content/videos");
    },
    getFiles() {
        return instance.get("/kts/content/files");
    },
    getPodcasts() {
        return instance.get("/kts/content/podcasts");
    },
    getChosenContent(id, contentType) {
        return instance.get(`/kts/content/${contentType}/${id}`);
    },
    getComments(contentId) {
        return instance.get(`/kts/comment/for_content/${contentId}/`);
    },

    // POST
    addComment(content_id, text) {
        return instance.post("/kts/comments", {
            content_id,
            text
        })
    },

    // UPDATE
    approve(id, type) {
        return instance.patch(`kts/content/${type}/${id}/`, {
            content: {
                isApproved: true,
            }
        })
    }
}
export const userAPI = {

    // GET
    getUser(id) {
        return instance.get(`/kts/users/${id}`);
    }
}