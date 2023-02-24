import { MainComponent, SectionLogo } from "./styles/app-styles";
import logo from './assets/miranda-white.png'
import { Outlet } from "react-router-dom";
import { AccessContextProvider } from "./contexts/AccessContext";


export function App() {

  return (
    <AccessContextProvider>
      <MainComponent>
        <Outlet />
        <section>
          <SectionLogo>
            <img src={logo} alt="Miranda Computação" />
          </SectionLogo>
        </section>
      </MainComponent>
    </AccessContextProvider>
  )
}

