import styled from "styled-components";

export const SectionForm = styled.section`
  display: flex;
  justify-content: center;

    div.box {
      width: 100%;
    }
  
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
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    label {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    input {
      max-width: 24rem;
      border: none;
      border-radius: 4px;
      padding: 0.5rem;
      background: #414141;
      outline: none;
      border: 2px solid #414141;
      color: #e1e1e1;

      :focus-visible {
        border-color: #0e73cc;
        background: #111111;
      }
    }

    button {
      border-radius: 4px;
      max-width: 24rem;
      border: none;
      padding: 0.75rem;
      cursor: pointer;

      :active {
        background: #414141;
      }

      :focus {
        outline: 2px solid #0e73cc;
      }

      :disabled {
        cursor: not-allowed;
      }
    }
  }
`

export const ErrorForm = styled.div`

  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  small {
    border-left: 2px solid #FF455C;
    padding-left: 0.25rem;
  }
`