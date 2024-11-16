import { defaultStyle } from '../component-list'

type Props = {
  label: string
  style: defaultStyle
}

const VText = (props: Props) => {
  const { style, label } = props

  return (
    <div
      style={{
        ...style,
        position: 'absolute',
      }}
    >
      {label}
    </div>
  )
}

export default VText
