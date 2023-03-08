import { FormError, SectionForm } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useState } from 'react'
import { AccessContext } from "../../contexts/AccessContext";
import { Loanding } from "../../components/Loading";

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
  const context = useContext(AccessContext)
  const navigate = useNavigate()

  const {
    register, 
    handleSubmit, 
    reset,
    setFocus 
  } = useForm<loginFormData>({resolver: zodResolver(loginFormSchema)})
  
  const [emailError, setEmailError] = useState('')
  const [blockButton, setBlockButton] = useState(false)

  function handleLogin(data: loginFormData) {

    setBlockButton(true)

    const emailValidate = context.user?.email
    
    // NAS FUTURAS REFATORAÇÕES, TROCAR ESSAS CONDICIONAIS POR OPERAÇÕES TERNÁRIAS
    if(data.email !== emailValidate) {
      setEmailError('usuário ou senha inválidos! tente novamente')
      setFocus('email')
      setBlockButton(false)

    } else {
      const passwordValidate = context.user?.password
      
      if(data.password !== passwordValidate) {
        setEmailError('usuário ou senha inválidos! tente novamente')
        setFocus('password')
        setBlockButton(false)

      } else {
        // dando tudo certo terei um token gerado para ser salvo no contexto e no localstorage
        // const token = Math.floor(Date.now() * Math.random()).toString(36)
        const token = 'token'

        const tokenFormated = {
          token: token
        }

        context.addToken(tokenFormated)
        reset()

        setTimeout(() => {
          setBlockButton(false)
          navigate('/dashboard')
        }, 500)
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

        <button type="submit" disabled={blockButton}>
          {blockButton && (
              <Loanding />  
            )
          }

          {!blockButton && (
              'Entrar'
            )
          }
        </button>
        </form>
      </div>
    </SectionForm>
  )
}