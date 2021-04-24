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

  #container {
    width: 80%;
    margin: 35px auto 0;
    /* border: 1px solid green; */

    h2{
        margin-bottom: 25px;
      }

    #curriculums-list {
      overflow-y: scroll;
      padding: 25px;
      border-radius: 10px;
      background-color: #232129;
      min-height: 80px;
      max-height: 800px;

      &::-webkit-scrollbar {
          width: 12px;
      }

      &::-webkit-scrollbar-track {
        border-radius: 10px;
        box-shadow: 0 0 0 0;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        box-shadow: 0 0 0 0;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
      }
      
      .curriculum {
        padding: 20px;
        border-radius: 10px;
        background-color: whitesmoke;
        color: #232129;
        text-align: left;

        + .curriculum {
          margin-top: 10px;
        }

        &:hover {
          cursor: pointer;
          background: ${shade(0.2, 'whitesmoke')};
        }

        span {
          font-size: 19px;
          color: #ff9000;
          font-weight: bold;
        }
      }
    }

    #charts {
      margin: 50px 0;
      padding: 25px;
      border-radius: 10px;
      background-color: #232129;
    }
  }
`