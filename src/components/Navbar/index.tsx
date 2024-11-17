import {
  CopyOutlined,
  ScissorOutlined,
  RedoOutlined,
  LeftSquareOutlined,
  RightSquareOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
  BorderlessTableOutlined,
  VerticalAlignTopOutlined,
  VerticalAlignBottomOutlined,
  DeleteOutlined,
} from '@ant-design/icons'
import { Button, Tooltip, Popover, Flex, Space } from 'antd'
import { NavBox } from './style'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '@/store'
import { changeExtend } from '@/store/modules/LayoutSlice'
import { bottom, down, top, up, deleteSingleDOM } from '@/store/modules/RenderSlice'

const Navbar: React.FC = () => {
  const dispatch = useDispatch()
  const { isExtend } = useSelector((state: RootState) => state.layout)
  const { curComIndex } = useSelector((state: RootState) => state.render)
  // 删除选中的组件
  const deleteItem = () => {
    if (curComIndex === -1) return
    dispatch(deleteSingleDOM())
  }
  // 改变组件层级
  const handleUp = () => {
    if (curComIndex === -1) return
    dispatch(up())
  }
  const handleDown = () => {
    if (curComIndex === -1) return
    dispatch(down())
  }
  const handleTop = () => {
    if (curComIndex === -1) return
    dispatch(top())
  }
  const handleBottom = () => {
    if (curComIndex === -1) return
    dispatch(bottom())
  }
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
            <Popover
              trigger="click"
              content={
                <Flex
                  align="flex-start"
                  gap="small"
                  wrap={true}
                  style={{
                    width: 175,
                  }}
                >
                  <Button type="default" icon={<VerticalAlignTopOutlined />} onClick={handleUp}>
                    上移
                  </Button>
                  <Button
                    type="default"
                    icon={<VerticalAlignBottomOutlined />}
                    onClick={handleDown}
                  >
                    下移
                  </Button>
                  <Button type="default" icon={<VerticalAlignTopOutlined />} onClick={handleTop}>
                    置顶
                  </Button>
                  <Button
                    type="default"
                    icon={<VerticalAlignBottomOutlined />}
                    onClick={handleBottom}
                  >
                    置底
                  </Button>
                </Flex>
              }
            >
              <BorderlessTableOutlined
                className="icon-item"
                style={{
                  color: curComIndex === -1 ? '#eaeaf6' : '#3b3f88',
                }}
              />
            </Popover>
          </Tooltip>
          <div className="line-box"></div>
          {/* 复制 */}
          <Tooltip placement="bottom" title="复制">
            <CopyOutlined
              className="icon-item"
              style={{
                color: curComIndex === -1 ? '#eaeaf6' : '#3b3f88',
              }}
            />
          </Tooltip>
          {/* 剪切 */}
          <Tooltip placement="bottom" title="剪切">
            <ScissorOutlined
              className="icon-item"
              style={{
                color: curComIndex === -1 ? '#eaeaf6' : '#3b3f88',
              }}
            />
          </Tooltip>
          <div className="line-box"></div>
          {/* 撤销 */}
          <Tooltip placement="bottom" title="撤销">
            <LeftSquareOutlined
              className="icon-item"
              style={{
                color: curComIndex === -1 ? '#eaeaf6' : '#3b3f88',
              }}
            />
          </Tooltip>
          {/* 重做 */}
          <Tooltip placement="bottom" title="重做">
            <RightSquareOutlined
              className="icon-item"
              style={{
                color: curComIndex === -1 ? '#eaeaf6' : '#3b3f88',
              }}
            />
          </Tooltip>
          <div className="line-box"></div>
          <Tooltip placement="bottom" title="删除">
            <DeleteOutlined
              className="icon-item"
              onClick={deleteItem}
              style={{
                color: curComIndex === -1 ? '#eaeaf6' : '#3b3f88',
              }}
            />
          </Tooltip>
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
