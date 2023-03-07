import { SignOut } from 'phosphor-react'
import { useContext } from 'react'
import logo from '../../assets/miranda-white.png'
import { AccessContext } from '../../contexts/AccessContext'
import { Container, Content, NavSide } from './styles'

export function DashboardLayout() {
  const context = useContext(AccessContext)

  function handleLogout() {
    context.addToken({token: ''})
  }
  
  return (
    <Container>
      <NavSide>
        <img src={logo} alt="Miranda Coomputação" />
        
        <div className="profile">
          <img src="https://avatars.githubusercontent.com/u/37755163?v=4" alt="foto de perfil" />
          <p>Bem vindo!</p>
          <h5>Nome do usuário</h5>
        </div>

        <nav>
          <span> <a href="#">Dashboard</a></span>
          <span> <a href="#">Curriculo</a></span>
          <span> <a href="#">Oportunidades</a></span>
        </nav>

        <footer>
          <button type='button' onClick={handleLogout} title='Sair'>
            <SignOut size={28} />
          </button>
        </footer>
      </NavSide>
      <Content></Content>
    </Container>
  )
}