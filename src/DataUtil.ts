import { FieldValues } from "react-hook-form";

export function createAPI(baseurl: string, sessionkey: string) {
    const hasErrorMessage = <T>(data: T): data is T & { errorMessage?: string } => {
        return (data as { errorMessage?: string }).errorMessage !== undefined;
    };
    async function request<T>(url: string, options: RequestInit): Promise<T> {
        const response = await fetch(baseurl + url, {
            ...options,
            headers: {
                ...options.headers,
                "Authorization": `Bearer ${sessionkey}`
            }
        });
        const data = await response.json();

        if (response.ok) {
            if (hasErrorMessage(data)) {
                data.errorMessage = "";
            }
        }
        else {
            if (response.status == 401) {
                throw new Error("unauthorized");
            }
            else if (!hasErrorMessage(data) || !data.errorMessage) {

                throw new Error("error calling API");
            }
        }
        return data;
    }

    async function fetchData<T>(url: string): Promise<T> {
        return request<T>(url, { method: "GET" });
    }

    async function deleteData<T>(url: string): Promise<T> {
        return request<T>(url, { method: "DELETE" });
    }

    async function postData<T>(url: string, form: FieldValues): Promise<T> {
        return request<T>(url, {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    return { fetchData, deleteData, postData };
}
