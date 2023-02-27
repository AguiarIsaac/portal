import { Link } from "react-router-dom";
import { SectionForm } from "./styles";
import { z } from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'

const recoverFormSchema = z.object({
  email: z
    .string()
    .email()
    .transform((email) => email.toLowerCase())
})

type recoverFormData = z.infer<typeof recoverFormSchema>

export function RecoverAccess() {

  const {register, handleSubmit} = useForm<recoverFormData>({resolver: zodResolver(recoverFormSchema)})

  function handleRecover(data: recoverFormData) {
    console.log(data)
  }


  return (
    <SectionForm>
      <div className="box">
        <h2>Resetar Sua senha</h2>
        <p><Link to='/'>Voltar para tela de login.</Link></p> 
        <form onSubmit={handleSubmit(handleRecover)}>
          <label>
            Email
            <input {...register('email')} type="email" name="email" id="email" />
          </label>
          <button type="submit">Resetar Senha</button>
        </form>
      </div>
    </SectionForm>
  )
}