import { StoreApi, UseBoundStore, create } from "zustand";
import { createAPI } from "./DataUtil";

interface User {
    username: string,
    rolename: string,
    rolerank: number,
    sessionkey: string,
    errorMessage: string,
    isLoggedIn: boolean,
    login: (username: string, password: string) => Promise<void>,
    logout: () => void,
}

async function loginUser(apiUrl: string, username: string, password: string): Promise<User> {
    apiUrl = apiUrl + "user/";
    const postData = createAPI(apiUrl, "").postData;
    const user = await postData<User>("login", { username, password });
    return user;
}
let userstore: UseBoundStore<StoreApi<User>>;

const keyname = "userstore";
export function useUserStore() {
    if (!userstore) {
        userstore = create<User>(
            (set) => {
                const storedvalue = sessionStorage.getItem(keyname);
                const initialvals = storedvalue ?
                    JSON.parse(storedvalue)
                    : { username: "", rolename: "", rolerank: "", sessionkey: "", errorMessage: "", isLoggedIn: false, }
                return {
                    ...initialvals,
                    logout: () => {
                        const newstate = { username: "", rolename: "", rolerank: 0, sessionkey: "", errorMessage: "", isLoggedIn: false };
                        sessionStorage.setItem(keyname, JSON.stringify(newstate))
                        set(newstate);
                    },
                    login: async (username: string, password: string) => {
                        const roleval = username.toLowerCase().startsWith("x") && password != "" ? "admin" : "user";
                        const newstate = { username: username, role: roleval, isLoggedIn: true };
                        sessionStorage.setItem(keyname, JSON.stringify(newstate));
                        set(newstate);
                    }
                }
            }
        )
    }
    return userstore;
}
;