import instance from "./axiosInterceptor";

 export const authAPI = {
    // GET

    // POST
    verifyToken(token) {
        return instance.post("/api/token/verify/", {
            token,
        })
    },
    refreshToken(refresh) {
        return instance.post("api/token/refresh/", {refresh});
    },
    signIn(email, password) {
        return instance.post("api/token/", {
            email,
            password
        });
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
export const usersAPI = {

    // GET
    getUser(id) {
        return instance.get(`/kts/user/${id}`);
    },

    // POST
    createUser(nickname, email, password, image, age, description) {
        return instance.post("kts/users/", {nickname, email, password, image, age, description});
    },
}