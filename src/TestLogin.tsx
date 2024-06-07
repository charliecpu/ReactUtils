import { useEffect, useState } from 'react';
import { loginUser } from "./UserStore";

export default function TestLogin() {
    // Define your variables
    const url = 'http://localhost:5086/api/User/login';
    const username = 'admin';
    const password = 'password';

    const [loginResult, setLoginResult] = useState<{ username: string, role: string; }>({ username: "", role: "" });

    useEffect(() => {
        const testLogin = async () => {
            try {
                const result = await loginUser(url, username, password);
                setLoginResult(result);
            } catch (error) {
                console.error('Login failed:', error);
            }
        };

        testLogin();
    }, []);

    return (
        <div>
            <h1>TestLogin</h1>
            <p>Login result: {JSON.stringify(loginResult)}</p>
        </div>
    );
}