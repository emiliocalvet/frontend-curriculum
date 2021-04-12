import styled from 'styled-components'

export const Container = styled.input`
  background: #232129;
  border: none;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  margin-top: 10px;
  color: white;

  &::placeholder {
    color: #666360;
  }

  &:-webkit-autofill {
    box-shadow: 0 0 0 0;
    -webkit-box-shadow: 0 0 0 30px black inset;
  }

  &:-webkit-autofill {
    -webkit-text-fill-color: white !important;
  }
`

export const AreaContainer = styled.textarea`
  overflow: hidden;
  margin-top: 10px;
  padding: 16px;
  background: #232129;
  color: white;
  border: none;
  border-radius: 10px;
  min-width: 100%;
  max-width: 100%;
  min-height: 50px;
`