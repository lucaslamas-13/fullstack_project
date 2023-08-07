import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterData, schema } from "./validator";
import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export interface User {
  id: number;
  name: string;
  email: string;
  admin: boolean;
  phoneNumber: string;
  createdAt: string;
}

const Register = () => {
  const [user, setUser] = useState<User | undefined>(null);
  const { register, handleSubmit } = useForm<RegisterData>({
    resolver: zodResolver(schema),
  });
  const navigate = useNavigate();

  const createUser = async (data: RegisterData) => {
    try {
      const response = await api.post<User>("/users", data);

      setUser(response.data);

      navigate("login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <h2>Register</h2>

      <form onSubmit={handleSubmit(createUser)}>
        <label htmlFor="name" placeholder="Digite seu nome aqui">
          Nome
        </label>
        <input type="text" id="name" {...register("name")} />
        <label htmlFor="email" placeholder="Digite seu email aqui">
          Email
        </label>
        <input type="text" id="email" {...register("email")} />
        <label htmlFor="password" placeholder="Digite sua senha aqui">
          Senha
        </label>
        <input type="text" id="password" {...register("password")} />
        <label htmlFor="phoneNumber" placeholder="Digite sua senha aqui">
          Numero de Telefone
        </label>
        <input type="text" id="phoneNumber" {...register("phoneNumber")} />
        <button type="submit">Entrar</button>
      </form>
    </main>
  );
};

export default Register;
