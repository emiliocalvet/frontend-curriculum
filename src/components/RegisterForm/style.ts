import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  width : 75%;

  #personalinfo-area {
    
    #education-block, #date-block {
      display: flex;
      flex-direction: row;
      
      select, option {
        color: #666360
      }
  
      span {
        height: 30px;
        margin: 17px 10px 10px 10px;
        color: white;
      }
    }
  }

  #skill-area, #accesskey-area {
    margin-top: 60px;
  }

  button {
    margin-top: 25px;
  }
`