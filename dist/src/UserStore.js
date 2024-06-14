import { create } from "zustand";
import { createAPI } from './DataUtil';
const keyname = "userstore";
export async function loginUser(url, username, password) {
    const postData = createAPI(url).postData;
    const user = await postData("login", { username, password });
    if (!user) {
        throw new Error('Failed to login');
    }
    return user;
}
export const useUserStore = (url) => create((set) => {
    const storedvalue = sessionStorage.getItem(keyname);
    const initialvals = storedvalue ?
        JSON.parse(storedvalue)
        : { username: "", role: "", isLoggedIn: false, };
    return {
        ...initialvals,
        logout: () => {
            const newstate = { username: "", role: "", isLoggedIn: false };
            sessionStorage.setItem(keyname, JSON.stringify(newstate));
            set(newstate);
        },
        login: async (username, password) => {
            const user = await loginUser(url, username, password);
            const newstate = { ...user, isLoggedIn: true };
            sessionStorage.setItem(keyname, JSON.stringify(newstate));
            set(newstate);
        }
    };
});
