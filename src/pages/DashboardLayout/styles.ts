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
  box-shadow: 0px 0px 3px 1px #00000088;
  border-radius: 8px;
  padding: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  img {
    width: 10rem;
  }
`

export const Content = styled.section`
  box-shadow: 0px 0px 3px 1px #00000088;
  border-radius: 8px;
  padding: 0.5rem;
`