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
import { Button, Tooltip, Popover, Flex, Space, Popconfirm } from 'antd'
import { NavBox } from './style'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '@/store'
import { changeExtend } from '@/store/modules/LayoutSlice'
import {
  bottom,
  down,
  top,
  up,
  deleteSingleDOM,
  resetSelectDOMs,
} from '@/store/modules/RenderSlice'

const Navbar: React.FC = () => {
  const dispatch = useDispatch()
  const { isExtend } = useSelector((state: RootState) => state.layout)
  const { curComIndex, renderList } = useSelector((state: RootState) => state.render)
  // 删除选中的组件
  const deleteItem = () => {
    if (curComIndex === -1) return
    dispatch(deleteSingleDOM())
  }
  // 改变组件层级
  const handleHierarchy = (type: 'up' | 'down' | 'top' | 'bottom') => {
    if (curComIndex === -1) return
    switch (type) {
      case 'up':
        dispatch(up())
        break
      case 'down':
        dispatch(down())
        break
      case 'top':
        dispatch(top())
        break
      case 'bottom':
        dispatch(bottom())
        break
      default:
        break
    }
  }

  // 确认清空
  const onConfirm = () => {
    dispatch(resetSelectDOMs())
  }

  const onCancel = () => {
    console.log('cancle')
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
                  <Button
                    type="default"
                    icon={<VerticalAlignTopOutlined />}
                    onClick={() => handleHierarchy('up')}
                  >
                    上移
                  </Button>
                  <Button
                    type="default"
                    icon={<VerticalAlignBottomOutlined />}
                    onClick={() => handleHierarchy('down')}
                  >
                    下移
                  </Button>
                  <Button
                    type="default"
                    icon={<VerticalAlignTopOutlined />}
                    onClick={() => handleHierarchy('top')}
                  >
                    置顶
                  </Button>
                  <Button
                    type="default"
                    icon={<VerticalAlignBottomOutlined />}
                    onClick={() => handleHierarchy('bottom')}
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
            <Popconfirm
              title="温馨提示"
              description="您确认要清空画布吗?"
              onConfirm={onConfirm}
              onCancel={onCancel}
              okText="确认"
              cancelText="取消"
              disabled={renderList.length === 0}
            >
              <RedoOutlined
                className="icon-item"
                style={{
                  color: renderList.length === 0 ? '#eaeaf6' : '#3b3f88',
                }}
              />
            </Popconfirm>
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
