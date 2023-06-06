import axios from "axios";
const instance = axios.create({
    baseURL: 'https://some-domain.com/api/'
  });
 export const authAPI = {
    signIn(data) {
        instance.post("/login", {data});
    },
    signOut() {
        instance.post("/logout");
    },
    me() {
        instance.get("/me");
    }
}