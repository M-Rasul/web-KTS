import axios from "axios";
const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    withCredentials: false,
    headers: {
        "Content-Type": "application/json"
    }
  });
 export const authAPI = {
    signIn(userName, password) {
        return instance.post("drf-auth/login/", {
            username: userName,
            password
        });
    },
    signOut() {
        return instance.post("logout");
    },
    me() {
        return instance.get("me");
    }
}
export const contentAPI = {
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
    }
}
export const userAPI = {
    getUser(id) {
        return instance.get(`/kts/users/${id}`);
    }
}