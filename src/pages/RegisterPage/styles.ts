import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  overflow: hidden;
  height: 100vh;
  display: flex;
  align-items: stretch;
  text-align: center;
`

export const Content = styled.div`
  overflow-y: scroll;
  padding: 50px 0;
  align-items: center;
  width: 100%;
  height: 100vh;
  max-width: 1000px;

  h1 {
    color: #ff9000;
    font-size: 40px;
  }

  > a {
    color: #ff9000;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`