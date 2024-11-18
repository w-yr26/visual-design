import styled from 'styled-components'

const LeftBox = styled.div`
  .left-panel {
    position: fixed;
    top: 50px;
    left: 0;
    width: 72px;
    height: calc(100% - 50px);
    border-right: 1px solid #eaeaf6;
    box-sizing: border-box;
    animation: extend 300ms;
    transition: all 150ms ease-in-out;
  }

  .icon-box {
    width: 100%;
    height: 72px;
    margin: 5px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .icon-item {
      font-size: 25px;
      color: #3b3f88;
    }

    .icon-title {
      margin-top: 5px;
      color: #868c92;
      font-size: 12px;
    }
  }

  .close {
    transform: translateX(-72px);
    transition: all 150ms ease-in-out;
  }

  @keyframes extend {
    from {
      left: -100px;
    }
    to {
      left: 0;
    }
  }
`
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

export { LeftBox, ComBox }
