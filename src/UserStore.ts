import { create } from "zustand";
import { createAPI } from './DataUtil';


interface IUser {
    username: string,
    rolevalue: string,
    isLoggedIn: boolean,
    sessionkey: string,
    login: (username: string, password: string) => Promise<void>,
    logout: () => void,
}
const keyname = "userstore";


async function loginUser(url: string, username: string, password: string): Promise<{ username: string, role: string }> {
    const postData = createAPI(url).postData;
    const user = await postData("login", { username, password }) as { username: string; role: string; };

    if (!user) {
        throw new Error('Failed to login');
    }

    return user;
}

const urlval = "http://localhost:5086/api/";

export const createUserStore = () => create<IUser>(
    (set) => {
        const storedvalue = sessionStorage.getItem(keyname);
        const initialvals = storedvalue ?
            JSON.parse(storedvalue)
            : { username: "", role: "", isLoggedIn: false, }
        return {
            ...initialvals,
            logout: () => {
                const newstate = { username: "", role: "", isLoggedIn: false };
                sessionStorage.setItem(keyname, JSON.stringify(newstate))
                set(newstate);
            },
            login: async (username: string, password: string) => {
                const user = await loginUser(urlval, username, password);
                const newstate = { ...user, isLoggedIn: true };
                sessionStorage.setItem(keyname, JSON.stringify(newstate));
                set(newstate);
            }
        }
    }
);