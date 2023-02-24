import { createContext, ReactNode, useState } from "react";

interface ContextProps {
  children: ReactNode
}

interface userProps {
  email: string,
  password: string,
  confirmPassword?: string
}

interface AccessProps {
  users: userProps[],
  addNewUser: (newSate: userProps) => void
}

export const AccessContext = createContext({} as AccessProps)

export function AccessContextProvider({children}: ContextProps) {
  const [users, setUsers] = useState<userProps[]>([])


  function addNewUser(data: userProps) {
    if(!users) {
      setUsers([data])
    } else {
      const duplicate = users.find(user => user.email == data.email)

      if(duplicate) {
        window.alert('Email já cadastrado! vá para tela de login ou de recuperação de senha')
      } else {
        if(data.password != data.confirmPassword) {
          window.alert('Senhas não conferem')
        } else {
          setUsers([
            ...users,
            {email: data.email, password: data.password}
          ])

          console.log(users)
        }
      }
    }
  }

  return (
    <AccessContext.Provider value={{users, addNewUser}}>
      {children}
    </AccessContext.Provider>
  )
}