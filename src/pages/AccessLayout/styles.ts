import styled from "styled-components";

export const MainComponent = styled.main`
  padding: 1rem;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 1200px){
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-content: center;
    align-items: center;
    gap: 4rem;
    height: 100vh;
  }
`

export const SectionLogo = styled.section`

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin: 2rem 0 4rem 0;
    width: 18rem;
    height: auto;

    animation: image 2s;

    @keyframes image {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`