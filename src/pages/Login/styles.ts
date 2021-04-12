import styled from 'styled-components'
import { shade } from 'polished'

import signInBackground from '../../assets/img3.jpg'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;

  width: 100%;
  max-width: 500px;

  > h1 {
    color: #ff9000;
    font-size: 45px;
  }

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      font-size: 25px;
      margin-bottom: 24px;
    }
  }

  > a {
    color: #ff9000;
    display: block;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`

export const Background = styled.div`
 flex: 1;
 background: url(${signInBackground}) no-repeat center;
 background-size: cover;
`