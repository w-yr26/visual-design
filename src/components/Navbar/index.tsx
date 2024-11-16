import { Space } from 'antd'
import {
  CopyOutlined,
  ScissorOutlined,
  RedoOutlined,
  LeftSquareOutlined,
  RightSquareOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
  BorderlessTableOutlined,
} from '@ant-design/icons'
import { Button, Tooltip } from 'antd'
import { NavBox } from './style'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '@/store'
import { changeExtend } from '@/store/modules/LayoutSlice'

const Navbar: React.FC = () => {
  // const [isExtend, setExtend] = useState(false)
  const dispatch = useDispatch()
  const { isExtend } = useSelector((state: RootState) => state.layout)
  return (
    <NavBox>
      <div className="nav-left">
        <div className="icon-box">
          {isExtend ? (
            <DoubleLeftOutlined
              className="icon-extend"
              onClick={() => {
                dispatch(changeExtend(false))
              }}
            />
          ) : (
            <DoubleRightOutlined
              className="icon-extend"
              onClick={() => {
                dispatch(changeExtend(true))
              }}
            />
          )}
        </div>
        <h5>项目标题</h5>
      </div>
      <div className="nav-main">
        <Space>
          {/* 层级 */}
          <Tooltip placement="bottom" title="层级">
            <BorderlessTableOutlined className="icon-item" />
          </Tooltip>
          <div className="line-box"></div>
          {/* 复制 */}
          <Tooltip placement="bottom" title="复制">
            <CopyOutlined className="icon-item" />
          </Tooltip>
          {/* 剪切 */}
          <Tooltip placement="bottom" title="剪切">
            <ScissorOutlined className="icon-item" />
          </Tooltip>
          <div className="line-box"></div>
          {/* 撤销 */}
          <Tooltip placement="bottom" title="撤销">
            <LeftSquareOutlined className="icon-item" />
          </Tooltip>
          {/* 重做 */}
          <Tooltip placement="bottom" title="重做">
            <RightSquareOutlined className="icon-item" />
          </Tooltip>
          <div className="line-box"></div>
          {/* 清空 */}
          <Tooltip placement="bottom" title="清空">
            <RedoOutlined className="icon-item" />
          </Tooltip>
        </Space>
      </div>
      <div className="nav-right">
        <Button type="default">项目信息</Button>
        <Button type="default">保存</Button>
        <Button type="primary">导出</Button>
      </div>
    </NavBox>
  )
}

export default Navbar
