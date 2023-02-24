import styled from "styled-components";

export const MainComponent = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4rem;
`

export const SectionLogo = styled.div`
  width: 664px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 18rem;
    height: auto;

    animation: image 2s;

    @keyframes image {
      0% {
        opacity: 0;
        margin-left: 8rem;
      }
      100% {
        opacity: 1;
        margin-left: 0;
      }
    }
  }
`