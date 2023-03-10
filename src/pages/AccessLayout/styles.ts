import styled from "styled-components";

export const MainComponent = styled.main`
  padding: 1rem;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  section {
    width: 100%;
    max-width: 24rem;
  }
`

export const SectionLogo = styled.section`

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin: 2rem 0;
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