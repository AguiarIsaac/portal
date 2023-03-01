import { FormError, SectionForm } from "./styles";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useState } from 'react'
import { AccessContext } from "../../contexts/AccessContext";

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

  const {
    register, 
    handleSubmit, 
    reset,
    formState: {
      errors, 
      isSubmitting
    }} = useForm<loginFormData>({resolver: zodResolver(loginFormSchema)})
  const context = useContext(AccessContext)
  const [emailError, setEmailError] = useState('')

  function handleLogin(data: loginFormData) {
    const emailValidate = context.user.email
    // NAS FUTURAS REFATORAÇÕES, TROCAR ESSAS CONDICIONAIS POR OPERAÇÕES TERNÁRIAS
    if(data.email !== emailValidate) {
      setEmailError('usuário ou senha inválidos! tente novamente')
      reset()
    } else {
      const passwordValidate = context.user.password
      if(data.password !== passwordValidate) {
        setEmailError('usuário ou senha inválidos! tente novamente')
        reset()
      } else {
        
        // dando tudo certo terei um token gerado para ser salvo no contexto e no localstorage
        const token = Math.floor(Date.now() * Math.random()).toString(36)
        context.addToken({token})
        reset()
        console.log('login realizado e token gerado!')
      }
    }
  }

  return (
    <SectionForm>
      <div className="box">
        <h2>Entrar</h2>
        <p>Novo no portal? <Link to='createaccount'>Inscreva-se para ter uma conta</Link>.</p>

        {emailError && (
          <FormError>{emailError}</FormError>
        )}

        <form onSubmit={handleSubmit(handleLogin)}>
        <label>
          Email
          <input {...register('email')} required type="email" name="email" id="email" />
        </label>

        <label>
          Senha
          <input {...register('password')} required type="password" name="password" id="password" />
        </label>

        <Link to='recoveraccess'>Esqueceu sua senha?</Link>

        <button type="submit" disabled={isSubmitting}>Entrar</button>
        </form>
      </div>
    </SectionForm>
  )
}