import { createContext, ReactNode, useState } from "react";

interface ContextProps {
  children: ReactNode
}

// interface userProps {
//   email: string,
//   password: string,
//   confirmPassword?: string
// }

interface tokenProps {
  token: string
}

interface AccessProps {
  token: tokenProps,
  // vou deixar email aqui por enquanto só pra testar as validações das telas de login e recuperação
  email: string,
  addEmail: (newSrate: string) => void,
  addToken: (newSate: tokenProps) => void
}

export const AccessContext = createContext({} as AccessProps)

export function AccessContextProvider({children}: ContextProps) {
  const [token, setToken] = useState({} as tokenProps)
  const [email, setEmail] = useState('')


  function addToken(data: tokenProps) {
    setToken(data)

    const stateJSON = JSON.stringify({token})
    localStorage.setItem('@portal: Token-0-1', stateJSON)
  }

  function addEmail(data: string) {
    setEmail(data)
  }

  return (
    <AccessContext.Provider value={{token, addToken, email, addEmail}}>
      {children}
    </AccessContext.Provider>
  )
}