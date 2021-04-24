import styled from 'styled-components'

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

  div {
    margin: 80px 0;
  }

  a {
    height: 30px;
    width:30px;
    border-radius: 5px;
    padding: 3px 2px 0 2px;
    box-shadow: 0 0 2px 1px #ff9000;
  }

  a:hover {
    box-shadow: 0 0 10px 4px #ff9000;
  }
`