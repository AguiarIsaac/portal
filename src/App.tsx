import { MainComponent, SectionLogo } from "./styles/app-styles";
import logo from './assets/miranda-white.png'
import { Outlet } from "react-router-dom";


export function App() {

  return (
    <MainComponent>
      <Outlet />
      <section>
        <SectionLogo>
          <img src={logo} alt="Miranda Computação" />
        </SectionLogo>
      </section>
    </MainComponent>
  )
}

