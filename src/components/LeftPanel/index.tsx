import { CloudUploadOutlined, ExperimentOutlined, ProductOutlined } from '@ant-design/icons'
import { LeftBox } from './style'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

const LeftPanel = () => {
  const { isExtend } = useSelector((state: RootState) => state.layout)
  return (
    <LeftBox>
      <div className={`left-panel ${!isExtend && 'close'}`}>
        <div className="icon-box">
          <ProductOutlined className="icon-item" />
          <span className="icon-title">素材</span>
        </div>
        <div className="icon-box">
          <CloudUploadOutlined className="icon-item" />
          <span className="icon-title">图片</span>
        </div>
        <div className="icon-box">
          <ExperimentOutlined className="icon-item" />
          <span className="icon-title">魔力快写</span>
        </div>
      </div>
    </LeftBox>
  )
}

export default LeftPanel
