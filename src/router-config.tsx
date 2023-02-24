import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { CreateAccount } from "./routes/CreateAccount";
import { ErrorPage } from "./routes/ErrorPage";
import { Login } from "./routes/Login";
import { RecoverAccess } from "./routes/RecoverAccess";


export const routerConfigs = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/createaccount',
        element: <CreateAccount />
      },
      {
        path: '/recoveraccess',
        element: <RecoverAccess />
      }
    ]
  }
])