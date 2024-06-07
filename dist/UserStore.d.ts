interface IUser {
    username: string;
    rolevalue: string;
    isLoggedIn: boolean;
    sessionkey: string;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
}
export declare function loginUser(url: string, username: string, password: string): Promise<{
    username: string;
    role: string;
}>;
export declare const useUserStore: (url: string) => import("zustand").UseBoundStore<import("zustand").StoreApi<IUser>>;
export {};
