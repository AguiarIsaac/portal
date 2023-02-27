import { Outlet } from "react-router-dom";
import { MainComponent, SectionLogo } from "./styles";
import logo from '../../assets/miranda-white.png'

export function AccessLayout() {
  return (
    <MainComponent>
        <SectionLogo>
          <img src={logo} alt="Miranda Computação" />
        </SectionLogo>
        <Outlet />
    </MainComponent>
  )
}