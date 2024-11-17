import { defaultStyle } from '@/custom-components/component-list'
import { PointBox } from './style'
import { throttle as _Throttle } from 'lodash'

const pointList = ['tl', 'tm', 'tr', 'ml', 'mr', 'bl', 'bm', 'br']
const cursorType = [
  'nwse-resize',
  'ns-resize',
  'nesw-resize',
  'ew-resize',
  'ew-resize',
  'nesw-resize',
  'ns-resize',
  'nwse-resize',
]

type Props = {
  style: defaultStyle
  domRef: React.MutableRefObject<HTMLDivElement | null>
  uuid: string
  updateSize: (w: number, h: number, uuid: string) => void
}

const getPosition = (width: number, height: number, index: number) => {
  const midH = Math.floor(height / 2)
  const midW = Math.floor(width / 2)
  let xPosition, yPosition
  if (index <= 2) {
    xPosition = index * midW
    yPosition = 0
  } else if (index <= 4) {
    xPosition = ((index + 1) % 2) * width
    yPosition = midH
  } else {
    xPosition = (index - 5) * midW
    yPosition = height
  }

  return {
    left: xPosition,
    top: yPosition,
    cursor: cursorType[index],
  }
}

const Shape = (props: Props) => {
  const { style, domRef, updateSize, uuid } = props
  const handleZoomOrOut = (e: React.MouseEvent) => {
    // 阻止冒泡，放置触发父组件的mouseDown事件
    e.stopPropagation()
    e.preventDefault()
    if (!domRef.current) return
    // 鼠标按下时相对于视口左上角的距离
    const startX = e.clientX
    const startY = e.clientY
    console.log(startX, startY)
    const oldWidth = domRef.current.offsetWidth
    const oldHeight = domRef.current.offsetHeight

    const move = _Throttle((e: MouseEvent) => {
      const deltaX = e.clientX - startX // 水平方向的拖动距离
      const deltaY = e.clientY - startY // 垂直方向的拖动距离

      // 更新元素的宽高
      const endX = oldWidth + deltaX
      const endY = oldHeight + deltaY
      updateSize(endX, endY, uuid)
    }, 20)

    const up = () => {
      console.log('size change up exe')
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseup', up)
    }

    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', up)
  }
  return (
    <PointBox>
      {pointList.map((item, index) => (
        <div
          className="shape-point"
          key={item}
          style={getPosition(style.width, style.height, index)}
          onMouseDown={(e) => handleZoomOrOut(e)}
        ></div>
      ))}
    </PointBox>
  )
}

export default Shape
