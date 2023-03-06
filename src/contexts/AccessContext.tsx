import { createContext, ReactNode, useState } from "react";

interface ContextProps {
  children: ReactNode
}

interface userProps {
  email: string,
  password: string,
  confirmPassword?: string
}

interface tokenProps {
  token: string
}

interface AccessProps {
  AccessToken: tokenProps,
  // vou precisar deixar email e senha salvos só pra testar as outras telas
  user: userProps,
  addUser: (newSrate: userProps) => void,
  addToken: (newSate: tokenProps) => void
}

export const AccessContext = createContext({} as AccessProps)

export function AccessContextProvider({children}: ContextProps) {
  const [AccessToken, setAccessToken] = useState({} as tokenProps)
  const [user, setUser] = useState({} as userProps)


  function addToken(data: tokenProps) {
    setAccessToken(data)

    const stateJSON = JSON.stringify(AccessToken.token)
    localStorage.setItem('@portal: Token-0-1', stateJSON)
  }

  function addUser(data: userProps) {
    setUser(data)
  }

  return (
    <AccessContext.Provider value={{AccessToken, addToken, user, addUser}}>
      {children}
    </AccessContext.Provider>
  )
}