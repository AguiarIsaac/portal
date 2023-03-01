import { Link } from "react-router-dom";
import { FormError, SectionForm } from "./styles";
import { z } from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useState } from "react";
import { AccessContext } from "../../contexts/AccessContext";

const recoverFormSchema = z.object({
  email: z
    .string()
    .email()
    .transform((email) => email.toLowerCase())
})

type recoverFormData = z.infer<typeof recoverFormSchema>

export function RecoverAccess() {

  const {
    register, 
    handleSubmit, 
    reset,
    formState: {isSubmitting}
  } = useForm<recoverFormData>({resolver: zodResolver(recoverFormSchema)})

  const context = useContext(AccessContext)
  const [emailError, setEmailError] = useState('')
  const [success, setSuccess] = useState('')

  function handleRecover(data: recoverFormData) {
    const emailValidate = context.user.email
    if(data.email !== emailValidate) {
      setEmailError('Email não cadastrado ou inválido, tente novamente ou vá para tela de cadastro.')
      reset()
    } else {
      setSuccess('email enviado! verifique sua caixa de email e siga as instruções')
      setEmailError('')
      reset()
    }
  }


  return (
    <SectionForm>
      <div className="box">
        <h2>Resetar Sua senha</h2>
        <p><Link to='/'>Voltar para tela de login.</Link></p>

        {emailError && (
          <FormError>{emailError}</FormError>
        )} 
        <form onSubmit={handleSubmit(handleRecover)}>
          <label>
            Email
            <input {...register('email')} type="email" name="email" id="email" />
          </label>
          <button type="submit" disabled={isSubmitting}>Resetar Senha</button>
        </form>
      </div>
    </SectionForm>
  )
}