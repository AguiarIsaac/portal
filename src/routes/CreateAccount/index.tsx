import { ErrorForm, SectionForm } from "./styles";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useEffect, useState } from 'react'
import { AccessContext } from "../../contexts/AccessContext";

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

  const {
    register, 
    handleSubmit,
    watch,
    formState: {errors, isSubmitting
    }} = useForm<registerFormData>({resolver: zodResolver(registerFormSchema)})
  
  const [passwordValidate, setPasswordValidade] = useState('')
  const [emailValidate, setEmailValidate] = useState('')
  const password = watch('password')
  const confirmPassword = watch('confirmPassword')
  const user = useContext(AccessContext)

  useEffect(() => {
    if(password !== confirmPassword && confirmPassword !== '') {
      setPasswordValidade('As senhas devem ser iguais!')
    } else {
      setPasswordValidade('')
    }

  }, [password, confirmPassword])

  function handleNewUser(data: registerFormData) {
    // consultar se email já não foi cadastrado no banco
    const emailDuplicate = user.user.email
    
    if(data.email == emailDuplicate) {
      setEmailValidate('Email já cadastrado, vá para tela de login ou tente outro email')
    } else {
      setEmailValidate('')
    }

    if(data.password === data.confirmPassword) {
      const newUser = {
        email: data.email,
        password: data.password
      }

      // fazer chamada no banco para criptgrafar senha, salvar dados e gerar um token de acesso
  
      user.addNewUser(newUser) 
    }
  }

  return (
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
              <small>Uma senha forte deve conter no mínimo: 8 caracteres; 1 letra maiúscula; 1 número e 1 caracter especial.</small>
            </ErrorForm>
          )}
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
        <button type="submit" disabled={isSubmitting}>Criar</button>
      </form>
    </div>
  </SectionForm>
  )
}