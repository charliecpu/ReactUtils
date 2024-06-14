import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { loginUser } from "./UserStore";
export default function TestLogin() {
    // Define your variables
    const url = 'http://localhost:5086/api/User/login';
    const username = 'admin';
    const password = 'password';
    const [loginResult, setLoginResult] = useState({ username: "", role: "" });
    useEffect(() => {
        const testLogin = async () => {
            try {
                const result = await loginUser(url, username, password);
                setLoginResult(result);
            }
            catch (error) {
                console.error('Login failed:', error);
            }
        };
        testLogin();
    }, []);
    return (_jsxs("div", { children: [_jsx("h1", { children: "TestLogin" }), _jsxs("p", { children: ["Login result: ", JSON.stringify(loginResult)] })] }));
}
