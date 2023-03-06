import { createBrowserRouter } from "react-router-dom";
import { AccessLayout } from "./pages/AccessLayout";
import { DashboardLayout } from "./pages/DashboardLayout";
import { CreateAccount } from "./routes/CreateAccount";
import { ErrorPage } from "./routes/ErrorPage";
import { Login } from "./routes/Login";
import { RequireAuth } from "./routes/RequireAuth";
import { RecoverAccess } from "./routes/RecoverAccess";


export const routerConfigs = createBrowserRouter([
  {
    path:'/',
    element: <AccessLayout />,
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
  },
  {
    path:'/dashboard',
    element: 
    <RequireAuth>
      <DashboardLayout />
    </RequireAuth>,
    errorElement: <ErrorPage />
  }
])