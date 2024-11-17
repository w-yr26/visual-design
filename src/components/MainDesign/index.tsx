import { RootState } from '@/store'
import { MainBox } from './style'
import { useSelector, useDispatch } from 'react-redux'
import { updateDOMPosition, getCurrentDOM, resetClickDOM } from '@/store/modules/RenderSlice'
import VText from '@/custom-components/VText'
import VTitle from '@/custom-components/VTitle'
import _ from 'lodash'

const MainDesign = () => {
  const { renderList, curComIndex } = useSelector((state: RootState) => state.render)
  const dispatch = useDispatch()

  const handleMouseDown = (e: React.MouseEvent, uuid: string) => {
    // 阻止事件冒泡(因为可能存在选中画布而不选中组件的情况)
    e.stopPropagation()
    // 根据uuid找到当前选中的组件
    const currentNode = renderList.find((item) => item.uuid === uuid)
    if (!currentNode) return console.log('组件未被选中')
    // store存放当前选中组件
    dispatch(getCurrentDOM(currentNode))
    console.log('当前选中的组件', currentNode)

    const style = { ...currentNode.style }
    // 组件最开始所在的位置
    const startX = e.clientX
    const startY = e.clientY
    // 组件最开始的top和left值
    const startTop = style.top
    const startLeft = style.left

    // 监听移动事件
    const move = _.throttle((moveEvent: MouseEvent) => {
      const currentX = moveEvent.clientX
      const currentY = moveEvent.clientY
      // 修改当前组件样式
      const newTop = currentY - startY + startTop
      const newLeft = currentX - startX + startLeft
      // 必须要触发状态的更新 -> 视图更新
      dispatch(
        updateDOMPosition({
          newTop,
          newLeft,
          uuid,
        }),
      )
    }, 20)

    // 监听鼠标放开事件
    const up = () => {
      // 取消未执行的节流事件
      move.cancel()
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseup', up)
    }

    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', up)
  }

  // 禁止默认拖拽行为
  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDragEnd = (e: React.DragEvent) => {
    e.preventDefault()
  }

  // 点击画布
  const clickBoard = (e: React.MouseEvent) => {
    // 触发事件的元素和事件绑定的元素不一致(说明此时是由于mouseup事件触发而非click)
    if (e.target !== e.currentTarget) return
    console.log('exe')
    // 不选中任何元素
    dispatch(resetClickDOM())
  }

  return (
    <MainBox>
      <div className="design-container">
        {/* 画布区域 */}
        <div className="drawing-board-container" onClick={clickBoard}>
          {renderList.map((node, index) => (
            <div
              key={node.uuid}
              draggable
              onMouseDown={(e) => handleMouseDown(e, node.uuid)}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              style={{
                zIndex: index,
                position: 'absolute',
                ...node.style,
              }}
              className={curComIndex === index ? 'active' : ''}
            >
              {node.type === 'v-text' && <VText label={node.label} />}
              {node.type === 'v-title' && <VTitle label={node.label} />}
            </div>
          ))}
        </div>
      </div>
    </MainBox>
  )
}

export default MainDesign
