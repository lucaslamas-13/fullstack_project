import { useForm } from "react-hook-form"
import { loginData, schema } from "./validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAuth } from "../../hooks/useAuth"


const Login = () => {
    const {register, handleSubmit} = useForm<loginData>({
        resolver: zodResolver(schema)
    })

    const {signIn} = useAuth()

    return (
        <main>
            <h2>Login</h2>

            <form onSubmit={handleSubmit(signIn)}>
                <label htmlFor="email" placeholder="Digite seu email aqui">Email</label>
                <input type="text" id="email" {...register("email")}/>
                <label htmlFor="password" placeholder="Digite sua senha aqui">Senha</label>
                <input type="text" id="password" {...register("password")}/>
                <button type="submit">Entrar</button>
            </form>

        </main>
    )
}

export default Login