import styled from 'styled-components'

export const Container = styled.div`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  
  display: flex;
  align-items: center;
  
  input {
    flex: 1;
    height:30px;
    color: #f4ede8;
    background: transparent;
    border: 0;

    &:-webkit-autofill {
    box-shadow: 0 0 0 0;
    -webkit-box-shadow: 0 0 0 30px #232129 inset;
    }

    &:-webkit-autofill {
      -webkit-text-fill-color: white !important;
    }

    &::placeholder {
      color: #666360;
    }    
  }

  & + div {
    margin-top: 8px;
  }

  svg {
    margin-right: 16px
  }
`