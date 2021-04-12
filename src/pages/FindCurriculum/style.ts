import styled from 'styled-components'
import { shade } from 'polished'

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

  h1 {
    color: #ff9000;
    font-size: 45px;
  }

  > div {
    margin: 80px 0;
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
