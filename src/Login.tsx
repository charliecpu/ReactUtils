import { useForm } from "react-hook-form"
import { useUserStore } from "./UserStore";

type FormInput = { username: string, password: string }
let baseurl = "http://localhost:5086/api/"; //import.meta.env.VITE_API_URL;

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInput>();
    const { login, isLoggedIn } = useUserStore(baseurl);

    const onSubmit = async (data: FormInput) => {
        await login(data.username, data.password);
    };

    return (
        <>
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
        </>
    )
}