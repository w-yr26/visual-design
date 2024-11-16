import { defaultStyle } from '../component-list'

type Props = {
  label: string
  style: defaultStyle
}

const VTitle = (props: Props) => {
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

export default VTitle
