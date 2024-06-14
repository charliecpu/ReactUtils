import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
import { useUserStore } from "./UserStore";
let baseurl = "http://localhost:5086/api/"; //import.meta.env.VITE_API_URL;
export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { login, isLoggedIn } = useUserStore(baseurl);
    const onSubmit = async (data) => {
        await login(data.username, data.password);
    };
    return (_jsxs(_Fragment, { children: [_jsxs("div", { children: ["Logged In = ", isLoggedIn.toString()] }), _jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [_jsx("label", { children: "Username" }), _jsx("input", { type: "text", ...register('username', { required: 'Username is required' }) }), errors.username && _jsx("span", { children: errors.username.message }), _jsx("br", {}), _jsx("label", { children: "Password" }), _jsx("input", { type: "password", ...register('password', { required: 'Password is required' }) }), errors.password && _jsx("span", { children: errors.password.message }), _jsx("br", {}), _jsx("button", { type: "submit", children: "Login" })] })] }));
}
