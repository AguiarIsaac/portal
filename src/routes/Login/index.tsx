import { SectionForm } from "./styles";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'

const loginFormSchema = z.object({
  email: z
    .string()
    .email()
    .transform((email) => email.toLowerCase()),
  password: z
    .string()
    .min(6, {message: 'Senha deve conter no mínimo 6 caracteres'})
})

type loginFormData = z.infer<typeof loginFormSchema>

export function Login() {

  const {register, handleSubmit} = useForm<loginFormData>({resolver: zodResolver(loginFormSchema)})

  function handleLogin(data: loginFormData) {
    console.log(data)
  }

  return (
    <section>
      <SectionForm>
        <h2>Entrar</h2>
        <p>Novo no portal? <Link to='createaccount'>Inscreva-se para ter uma conta</Link>.</p>

        <form onSubmit={handleSubmit(handleLogin)}>
        <label>
          Email
          <input {...register('email')} type="email" name="email" id="email" />
        </label>

        <label>
          Senha
          <input {...register('password')} type="password" name="password" id="password" />
        </label>

        <Link to='recoveraccess'>Esqueceu sua senha?</Link>

        <button type="submit">Entrar</button>
        </form>
      </SectionForm>
    </section>
  )
}