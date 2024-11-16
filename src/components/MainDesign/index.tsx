import { RootState } from '../../store'
import { MainBox } from './style'
import { useSelector } from 'react-redux'

const MainDesign = () => {
  const { renderList } = useSelector((state: RootState) => state.render)
  return (
    <MainBox>
      <div className="design-container">
        {/* 画布区域 */}
        <div className="drawing-board-container">
          {renderList.map((node) => (
            <div key={node.type}>
              {node.type === 'v-text' && (
                <div style={node.style}>
                  <div>{node.label}</div>
                  <span>this is text</span>
                </div>
              )}
              {node.type === 'v-title' && (
                <div style={node.style}>
                  <div>{node.label}</div>
                  <span>this is title</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </MainBox>
  )
}

export default MainDesign
