import { FieldValues } from "react-hook-form";
export declare function createAPI(baseurl: string): {
    fetchData: <T>(url: string) => Promise<T>;
    deleteData: <T_1>(url: string) => Promise<T_1>;
    postData: <T_2>(url: string, form: FieldValues) => Promise<T_2>;
};
