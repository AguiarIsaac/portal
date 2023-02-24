import styled from 'styled-components'

export const SectionForm = styled.div`
  

  h2, label {
    color: #e1e1e1;
  }

  p, a {
    color: #a1a1a1;
  }

  p a {
    color: #0e73cc;
  }

  form {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    label {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    input {
      border: none;
      border-radius: 4px;
      padding: 0.5rem;
      background: #414141;
      outline: none;
      border: 2px solid #414141;
      color: #e1e1e1;
      width: 24rem;

      :focus-visible {
        border-color: #0e73cc;
        background: #111111;
      }
    }

    button {
      border-radius: 4px;
      border: none;
      padding: 0.75rem;
      cursor: pointer;

      :active {
        background: #414141;
      }
    }
  }
`