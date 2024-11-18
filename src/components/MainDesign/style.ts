import styled from 'styled-components'

export const MainBox = styled.div`
  .design-container {
    height: calc(100vh - 50px);
    background-color: #f5f7fa;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .drawing-board-container {
    position: relative;
    width: 460px;
    height: 90%;
    background-color: #ffffff;
    box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.1);
  }

  .active {
    border: 1px solid #eaeaf6;
  }
`

export const PointBox = styled.div`
  .shape-point {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    width: 5px;
    height: 5px;
    border-radius: 50%;
    border: 1px solid #3b3f88;
    background-color: skyblue;
  }
`
