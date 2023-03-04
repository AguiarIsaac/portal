import { Link } from "react-router-dom";
import { FormError, SectionForm } from "./styles";
import { z } from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useState } from "react";
import { AccessContext } from "../../contexts/AccessContext";
import { Notification } from "../../components/Notification";
import { Loanding } from "../../components/Loading";

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
    setFocus
  } = useForm<recoverFormData>({resolver: zodResolver(recoverFormSchema)})

  const context = useContext(AccessContext)
  const [emailError, setEmailError] = useState('')
  const [notification, setNotification] = useState(false)
  const [blockButton, setBlockButton] = useState(false)

  function handleRecover(data: recoverFormData) {

    setBlockButton(true)
    const emailValidate = context.user.email
    
    if(data.email !== emailValidate) {
      setEmailError('Email não cadastrado ou inválido, tente novamente ou vá para tela de cadastro.')
      setFocus('email')
      setBlockButton(false)

    } else {
      
      
      setTimeout(() => {
        setNotification(true)
        setBlockButton(false)
        setEmailError('')
        reset()
      }, 500)
    }
  }


  return (
    <>
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
              <input {...register('email')} type="email" name="email" id="email" required/>
            </label>
            <button type="submit" disabled={blockButton}>
              {blockButton && (
                <Loanding />  
              )}

              {!blockButton && (
                'Resetar Senha'
              )}  
            </button>
          </form>
        </div>
      </SectionForm>
      {notification && (
      <Notification message="Email Enviado! verifique sua caixa de email e siga as instrucções."/>      
    )}
    </>
  )
}