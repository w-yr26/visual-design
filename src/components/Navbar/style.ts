import styled from 'styled-components'

const NavBox = styled.nav`
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px;
  box-sizing: border-box;

  .nav-left {
    display: flex;
    align-items: center;

    .icon-box {
      margin-right: 5px;
    }
  }

  .icon-item {
    font-size: 16px;
    color: #3b3f88;
    margin: 0 5px;
  }

  .icon-extend {
    color: #3b3f88;
  }

  .ant-btn {
    margin: 0 5px;
  }

  .line-box {
    border-right: 2px solid #f0f1f5;
    height: 16px;
  }
`

export { NavBox }
