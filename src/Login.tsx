import { useForm } from "react-hook-form"
import { createUserStore } from "./UserStore";

type forminput = { username: string, password: string }
let baseurl = "http://localhost:5086/api/user/";
const useUserStore = createUserStore(baseurl);
export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm<forminput>();
    const login = useUserStore((state) => state.login);
    const logout = useUserStore((state) => state.logout);
    const isLoggedIn = useUserStore(state => state.isLoggedIn);
    const errormsg = useUserStore(state => state.errorMessage);
    const onSubmit = async (data: forminput) => await login(data.username, data.password);

    return (
        <>
            <div>{errormsg}</div>
            <div>Logged In = {isLoggedIn.toString()}</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Username</label>
                <input type="text" {...register('username', { required: 'Username is required' })} />
                {errors.username && <span>{errors.username.message}</span>}
                <br />
                <label>Password</label>
                <input type="password"
                    {...register('password', { required: 'Password is required' })} />
                {errors.password && <span>{errors.password.message}</span>}
                <br />
                <button type="submit">Login</button>

            </form>
            <button onClick={() => logout()}>Logout</button>
        </>
    )
}
