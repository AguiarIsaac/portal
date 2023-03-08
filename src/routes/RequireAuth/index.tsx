import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AccessContext } from "../../contexts/AccessContext";

export function RequireAuth({children}: {children: JSX.Element}) {
  const context = useContext(AccessContext)
  const token = context.AccessToken?.token

  if(!token) {
    return <Navigate to='/' />
  } else {
    return <>{children}</>
  }
}


