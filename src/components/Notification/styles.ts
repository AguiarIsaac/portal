import styled from 'styled-components'

export const NotificationContainer = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  margin: -0.5rem;
  background: #414141;
  border-radius: 4px;
  border-left: 4px solid #42ab49;
  padding: 0.75rem 1rem;

  display: flex;
  align-items: center;
  gap: 1rem;
  animation: open 0.5s forwards;

  button {
    all: unset;
  }

  svg {
    cursor: pointer;
  }

  @keyframes open {
    from {
      opacity: 0;
      transform: translateY(50%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &.close {
    animation: close 0.2s forwards;
    
    @keyframes close {
      from {
        opacity: 1;
        transform: translateY(0);
      }
      to {
        opacity: 0;
        transform: translateY(50%);
      }
    }
  }

  @media(max-width: 763px) {
    top: 2rem;
    bottom: unset;
    right: unset;

    @keyframes open {
    from {
      opacity: 0;
      transform: translateY(0);
    }
    to {
        opacity: 1;
        transform: translateY(50%);
      }
    }

    &.close {
    @keyframes close {
        from {
          opacity: 1;
          transform: translateY(50%);
        }
        to {
          opacity: 0;
          transform: translateY(0);
        }
      }
    }
  }
`