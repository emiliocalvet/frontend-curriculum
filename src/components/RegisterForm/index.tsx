import React from 'react'
import { FormHTMLAttributes } from 'react'

import { Container } from './style'

interface Form extends FormHTMLAttributes<HTMLFormElement> { }

const RegisterForm: React.FC<Form> = ({children, ...rest}) => {
  return (
    <Container {...rest} >
      {children}
    </Container>
  )
}

export default RegisterForm