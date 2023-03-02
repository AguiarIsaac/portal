import { ErrorForm, SectionForm } from "./styles";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useEffect, useState } from 'react'
import { AccessContext } from "../../contexts/AccessContext";
import { Notification } from "../../components/Notification";
import { Loanding } from "../../components/Loading";

// aqui o zod atua criando uma tipagem dos dados do form, criando criterios e fazendo tranformações de dados
const registerFormSchema = z.object({
  email: z
    .string()
    .email()
    .transform((email) => email.toLowerCase()),
  password: z
    .string()
    .min(8, { message: 'A senha deve conter no mínimo 8 caracteres'})
    .regex(/[a-z]/, {message: 'A senha deve conter pelo menos uma letra minúscula'})
    .regex(/[A-Z]/, {message: 'A senha deve conter pelo menos uma letra maiúscula'})
    .regex(/[0-9]/, {message: 'A senha deve conter pelo menos um número'})
    .regex(/[!@#$%&*]/, {message: 'A senha deve conter pelo menos um caractere especial'}),
    // .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%*?&]{8,}$/,
    // {message: 'A senha deve conter no mínimo: 8 caracteres; 1 letra maiúscula; 1 número e 1 caracter especial.'}),
    confirmPassword: z
    .string()
})

type registerFormData = z.infer<typeof registerFormSchema>

export function CreateAccount() {
  const context = useContext(AccessContext)

  const {
    register, 
    handleSubmit,
    watch,
    reset,
    setFocus,
    formState: {errors, isSubmitting,
  }} = useForm<registerFormData>({resolver: zodResolver(registerFormSchema)})
  
  const [passwordValidate, setPasswordValidade] = useState('')
  const [emailValidate, setEmailValidate] = useState('')
  const [notification, setNotification] = useState(false)
  const [blockButton, setBlockButton] = useState(false)

  const password = watch('password')
  const confirmPassword = watch('confirmPassword')
  
  function handleNewUser(data: registerFormData) {
    setBlockButton(true)
    // em produção será feita atraves de chamada no banco
    const emailDuplicate = context.user.email
    
    if(data.email == emailDuplicate) {
      setEmailValidate('Email já cadastrado, vá para tela de login ou tente outro email')
      setBlockButton(false)
      setFocus('email')
    } else {
      setEmailValidate('') 
      
      if(data.password === data.confirmPassword) {
        const newUser = {
          email: data.email,
          password: data.password
        }

        context.addUser(newUser)

        // delay para simular
        setTimeout(() => {
          setBlockButton(false)
          setNotification(true)
          reset()
        }, 500)
      } else {
        setFocus('confirmPassword')
        setBlockButton(false)
      } 
    }
  }

  useEffect(() => {
    if(password !== confirmPassword && confirmPassword !== '') {
      setPasswordValidade('As senhas devem ser iguais!')
    } else {
      setPasswordValidade('')
    }

  }, [password, confirmPassword])

  return (
  <>
    <SectionForm>
      <div className="box">
        <h2>Criar Conta</h2>
        <p>Já possui uma conta? <Link to='/'>Entar</Link>.</p>

        <form onSubmit={handleSubmit(handleNewUser)}>
          <label>
            Email
            <input {...register('email')} required type="email" name="email" id="email" />
            <ErrorForm>
              <small>{emailValidate}</small>
            </ErrorForm>
          </label>

          <label>
            Senha
            <input {...register('password')} required type="password" name="password" id="password" />
            {errors.password && (
              <ErrorForm>
                <small>{errors.password.message}</small>
              </ErrorForm>
            )}

            <small>Uma senha forte deve conter no mínimo: 8 caracteres; 1 letra maiúscula; 1 número e 1 caracter especial.</small>
          </label>

          <label>
            Confirme a senha
            <input {...register('confirmPassword')} required type="password" name="confirmPassword" id="confirmPassword" />
            {passwordValidate && (
              <ErrorForm>
                <small>{passwordValidate}</small>
              </ErrorForm>
            )}
          </label>
          <button type="submit" disabled={blockButton}>
            {blockButton && (
              <Loanding />  
            )}

            {!blockButton && (
              'Criar'
            )}

          </button>
        </form>
      </div>
    </SectionForm>

    {notification && (
      <Notification message="usuário criado com sucesso!"/>      
    )}
  </>
  )
}