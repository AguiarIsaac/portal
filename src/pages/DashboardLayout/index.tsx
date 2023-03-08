import { SignOut } from 'phosphor-react'
import { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../../assets/miranda-white.png'
import { AccessContext } from '../../contexts/AccessContext'
import { Container, Content, NavSide } from './styles'

export function DashboardLayout() {
  const context = useContext(AccessContext)

  function handleLogout() {
    context.removeToken()
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
          <span> <Link to='/dashboard'>Dashboard</Link> </span>
          <span> <Link to='/dashboard/curriculum'>Curriculo</Link></span>
          <span> <Link to='/dashboard/opportunities'>Oportunidades</Link></span>
        </nav>

        <footer>
          <button type='button' onClick={handleLogout} title='Sair'>
            <SignOut size={28} />
          </button>
        </footer>
      </NavSide>
      <Content>
        <Outlet />
      </Content>
    </Container>
  )
}