import styled from 'styled-components'

export const Container = styled.div`
  overflow: hidden;
  height: 100vh;
  display: flex;
  align-items: stretch
`

export const Content = styled.div`
  overflow-y: scroll;
  padding: 50px 0;
  align-items: center;
  text-align:center;
  width: 100%;
  height: 100vh;
  max-width: 1000px;

  h1 {
    color: #ff9000;
    font-size: 40px;
  }

  #container {
    margin: 40px auto 0;
    width: 80%;

    #personalinfo-view,
    #skills-view, 
    #status-view {
      border-radius: 10px;
      background-color: #232129;
      margin-bottom: 30px;
      padding: 25px;

      h2 {
        margin-bottom: 20px;
        padding-bottom: 12px;
        border-bottom: 1px solid #666360;
      }

      p {
        text-align: left;
        line-height: 30px;
        font-size: 16px;

        + p {
          /* border: 1px solid red; */
          margin-top: 10px;
        }
        
        span {
          font-size: 19px;
          color: #ff9000;
          font-weight: bold;
        }
      }
    }

    #skill-view {
      padding: 12px;
      /* border: 1px solid green; */
      border-radius: 10px;
      background-color: white;
      
      p {
        text-align: left;
        overflow-wrap: break-word;
        color: #232129;
      }
    }

    #skill-view + #skill-view {
      margin-top: 12px;
    }    
  }
`