import { StoreApi, UseBoundStore, create } from "zustand";
import { createAPI } from './DataUtil';

interface User {
    username: string,
    rolevalue: string,
    isLoggedIn: boolean,
    sessionkey: string,
    errorMessage: string,
    login: (username: string, password: string) => Promise<void>,
    logout: () => void,
}

async function loginUser(apiUrl: string, username: string, password: string): Promise<User> {
    const postData = createAPI(apiUrl, "").postData;
    const user = await postData<User>("login", { username, password });

    if (!user) {
        throw new Error('Failed to login');
    }

    return user;
}

const keyname = "userstore";
let userstore: UseBoundStore<StoreApi<User>>;

function getUserStore(apiUrl: string) {
    if (!userstore) {
        userstore = create<User>((set) => {
            const storedvalue = sessionStorage.getItem(keyname);
            const initialvals = storedvalue ?
                JSON.parse(storedvalue) :
                { username: "", rolevalue: "", isLoggedIn: false, sessionkey: "", errorMessage: "" };
            return {
                ...initialvals,
                logout: () => {
                    const newstate = { username: "", rolevalue: "", isLoggedIn: false, sessionkey: "", errorMessage: "" };
                    sessionStorage.setItem(keyname, JSON.stringify(newstate))
                    set(newstate);
                },
                login: async (username: string, password: string) => {
                    const user = await loginUser(apiUrl, username, password);
                    const loggedin = user.errorMessage == "" ? true : false;
                    const newstate = { ...user, isLoggedIn: loggedin };
                    sessionStorage.setItem(keyname, JSON.stringify(newstate));
                    set(newstate);
                }
            }
        })
    }
    return userstore;
};

export const createUserStore = (apiUrl: string) => getUserStore(apiUrl);