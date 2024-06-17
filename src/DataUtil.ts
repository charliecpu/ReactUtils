import { FieldValues } from "react-hook-form";
import { createUserStore } from "./UserStore";

export function createAPI(baseurl: string) {
    const u = createUserStore(baseurl);
    async function fetchData<T>(url: string): Promise<T> {
        url = baseurl + url;
        const r = await fetch(url, {
            headers: {
                "Authorization": `Bearer ${getApiKey()}`
            }
        });
        const data = await r.json();
        return data;
    }

    async function deleteData<T>(url: string): Promise<T> {
        url = baseurl + url;
        const r = await fetch(url, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${getApiKey()}`
            }
        });
        const data = await r.json();
        return data;
    }

    async function postData<T>(url: string, form: FieldValues): Promise<T> {
        url = baseurl + url;
        const r = await fetch(url, {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${getApiKey()}`
            }
        });
        const data = await r.json();
        return data;
    };
    function getApiKey() {

        return u(state => state.sessionkey);
    }
    return { fetchData, deleteData, postData };
}