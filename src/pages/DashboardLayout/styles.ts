import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  max-width: 1200px;
  padding: 0.5rem;

  display: grid;
  grid-template-columns: 0.6fr 1.4fr;
  column-gap: 0.5rem;
`

export const NavSide = styled.div`
  box-shadow: 0px 0px 3px 1px #00000052;
  border-radius: 8px;
  padding: 0.5rem;
  max-width: 16rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  img {
    width: 10rem;
  }

  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      margin-top: 0.5rem;
    }

    img {
      border-radius: 50%
    }
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  footer {
    position: fixed;
    bottom: 2rem;

    button {
      all: unset;
      cursor: pointer;

      :focus {
        outline: 2px solid #0e73cc;
      }

      svg {
        color: #FF455C;
      }
    }
  }
`

export const Content = styled.section`
  box-shadow: 0px 0px 3px 1px #00000052;
  border-radius: 8px;
  padding: 0.5rem;
`