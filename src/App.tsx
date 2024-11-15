import { Button, ConfigProvider, Input } from 'antd'
import zhCN from 'antd/locale/zh_CN'
const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <h3>this is App</h3>
      <Button type="primary">Button</Button>
      <Input placeholder="测试" />
    </ConfigProvider>
  )
}

export default App
