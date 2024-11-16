import { Button } from 'antd'
import { EditFilled } from '@ant-design/icons'
import componentList from '@/custom-components/component-list'
import { ComBox } from './style'
import { useDispatch } from 'react-redux'
import { addRenderDOM } from '@/store/modules/RenderSlice'
import _ from 'lodash'
const MAP_TITLE = {
  title: '默认文字样式',
}

const ComList = () => {
  const dispatch = useDispatch()
  const addText = () => {
    const textList = componentList.get('text')
    if (textList && textList.length) {
      const textNode = _.clone(textList[0])
      dispatch(addRenderDOM(textNode))
    }
  }
  const addTitle = (key: string, index: number) => {
    const titleList = componentList.get(key)!
    const titleNode = _.clone(titleList[index])
    dispatch(addRenderDOM(titleNode))
  }
  return (
    <ComBox>
      {Array.from(componentList).map(([key, values], index) => (
        <div key={key}>
          {index === 0 ? (
            <Button
              type="primary"
              block={true}
              icon={<EditFilled />}
              size="large"
              onClick={addText}
            >
              添加文本框
            </Button>
          ) : (
            index !== 0 && (
              <>
                <p className="title-box">{MAP_TITLE[key as keyof typeof MAP_TITLE]}</p>
                <div>
                  {values.map((item, i) => (
                    <div
                      className="option-item"
                      style={{
                        fontSize: item.style.fontSize,
                        fontWeight: item.style.fontWeight,
                      }}
                      key={item.component}
                      onClick={() => addTitle(key, i)}
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              </>
            )
          )}
        </div>
      ))}
    </ComBox>
  )
}

export default ComList
