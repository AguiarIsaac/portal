import { RouterProvider } from "react-router-dom";
import { AccessContextProvider } from "./contexts/AccessContext";
import { routerConfigs } from "./router-config";
import { GlobalStyle } from "./styles/globalStyles";


export function App() {

  return (
    <>
      <AccessContextProvider>
        <RouterProvider router={routerConfigs}/>
      </AccessContextProvider>
      <GlobalStyle />
    </>
  )
}

