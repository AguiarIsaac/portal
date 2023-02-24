import { SectionForm } from "./styles";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'

// aqui o zod atua criando uma tipagem dos dados do form, criando criterios e fazendo tranformações de dados
const registerFormSchema = z.object({
  email: z
    .string()
    .email()
    .transform((email) => email.toLowerCase()),
  password: z
    .string()
    .min(6, {message: 'Senha deve conter no mínimo 6 caracteres'}),
  confirmPassword: z
  .string()
  .min(6, {message: 'Senha deve conter no mínimo 6 caracteres'})
})

type registerFormData = z.infer<typeof registerFormSchema>

export function CreateAccount() {

  const {register, handleSubmit} = useForm<registerFormData>({resolver: zodResolver(registerFormSchema)})

  function handleNewUser(data: registerFormData) {
    console.log(data)
  }

  return (
    <section>
    <SectionForm>
      <h2>Criar Conta</h2>
      <p>Já possui uma conta? <Link to='/'>Entar</Link>.</p>

      <form onSubmit={handleSubmit(handleNewUser)}>
        <label>
          Email
          <input {...register('email')} type="email" name="email" id="email" />
        </label>

        <label>
          Senha
          <input {...register('password')} type="password" name="password" id="password" />
        </label>

        <label>
          Confirme a senha
          <input {...register('confirmPassword')} type="password" name="confirm-password" id="confirm-password" />
        </label>
        <button type="submit">Criar</button>
      </form>

    </SectionForm>
  </section>
  )
}