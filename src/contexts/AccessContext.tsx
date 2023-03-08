import { createContext, ReactNode, useEffect, useState } from "react";

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
  AccessToken: tokenProps | undefined,
  // vou precisar deixar email e senha salvos só pra testar as outras telas
  user: userProps | undefined,
  addUser: (newSrate: userProps) => void,
  addToken: (newSate: tokenProps) => void,
  removeToken: () => void
}

export const AccessContext = createContext({} as AccessProps)

export function AccessContextProvider({children}: ContextProps) {
  const [AccessToken, setAccessToken] = useState<tokenProps>()
  const [user, setUser] = useState<userProps>()


  function addToken(data: tokenProps) {
    setAccessToken({token: 'teste'})

    // const stateJSON = JSON.stringify(AccessToken.token)
    localStorage.setItem('@portal: Token-0-1', 'teste')
  }

  function removeToken() {
    localStorage.removeItem('@portal: Token-0-1')
    setAccessToken({token: ''})
  }

  function addUser(data: userProps) {
    setUser(data)

    const stateJSON = JSON.stringify(data)

    localStorage.setItem('userTemp', stateJSON)
  }

  useEffect(() => {
    const getUserTemp = localStorage.getItem('userTemp')
    if(!getUserTemp) {return}

    const convertUser = JSON.parse(getUserTemp)
    if(!user && convertUser) {
      setUser(convertUser)
      console.log(user)
    }
  }, [])

  useEffect(() => {
    console.log(localStorage.getItem('@portal: Token-0-1'))
  },[AccessToken])
  
  return (
    <AccessContext.Provider value={{AccessToken, addToken, removeToken, user, addUser}}>
      {children}
    </AccessContext.Provider>
  )
}