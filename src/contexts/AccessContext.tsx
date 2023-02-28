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
  user: userProps[],
  addNewUser: (newSate: userProps) => void
}

export const AccessContext = createContext({} as AccessProps)

export function AccessContextProvider({children}: ContextProps) {
  const [user, setUser] = useState<userProps[]>([])


  function addNewUser(data: userProps) {
    if(!user) {
      setUser([data])
    } else {
        setUser([
        ...user,
        {email: data.email, password: data.password}
      ])
    }
  }

  return (
    <AccessContext.Provider value={{user, addNewUser}}>
      {children}
    </AccessContext.Provider>
  )
}