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
  user: userProps,
  addNewUser: (newSate: userProps) => void
}

export const AccessContext = createContext({} as AccessProps)

export function AccessContextProvider({children}: ContextProps) {
  const [user, setUser] = useState({} as userProps)


  function addNewUser(data: userProps) {
    setUser(data)
  }

  return (
    <AccessContext.Provider value={{user, addNewUser}}>
      {children}
    </AccessContext.Provider>
  )
}