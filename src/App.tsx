import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import Navbar from './components/Navbar/index'
import LeftPanel from './components/LeftPanel'
import MainDesign from './components/MainDesign'
import RightPanel from './components/RightPanel'
import AppBox from './main'
import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <AppBox>
          <div className="app-container">
            <Navbar></Navbar>
            <LeftPanel></LeftPanel>
            <MainDesign></MainDesign>
            <RightPanel></RightPanel>
          </div>
        </AppBox>
      </Provider>
    </ConfigProvider>
  )
}

export default App
