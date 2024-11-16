import styled from 'styled-components'

const ComBox = styled.div`
  .option-item {
    width: 250px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #eaeaf6;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;

    &:hover {
      background-color: #f2f3f5;
    }
  }

  .title-box {
    margin-top: 5px;
    font-weight: 600;
    font-size: 15px;
    color: #333333;
  }
`

export { ComBox }
