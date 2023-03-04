import logo from '../../assets/miranda-white.png'
import { Container, Content, NavSide } from './styles'

export function DashboardLayout() {
  
  return (
    <Container>
      <NavSide>
        <img src={logo} alt="Miranda Coomputação" />
        
        <div className="profile">
          <img src="" alt="foto de perfil" />
          <p>Bem vindo!</p>
          <h5>Nome do usuário</h5>
        </div>

        <nav>
          <span> <a href="#">Dashboard</a> </span>
          <span> <a href="#">Curriculo</a> </span>
          <span> <a href="#">Oportunidades</a> </span>
        </nav>

        <footer>
          <button type='button'>
            Sair
          </button>
        </footer>
      </NavSide>
      <Content></Content>
    </Container>
  )
}