// 左侧组件列表预设数据
const componentList = new Map([
  [
    'text',
    [
      {
        type: 'v-text',
        component: 'v-text', // 组件名称
        label: 'add default text', // 左侧组件列表中显示的名字
        propValue: '文字', // 组件所使用的值
        animations: [], // 动画列表
        events: {}, // 事件列表
        style: {
          // 组件样式
          width: 200,
          height: 33,
          color: '',
          fontSize: 14,
          fontWeight: 500,
          textAlign: 'left',
          letterSpacing: 0,
          lineHeight: 1,
          opacity: 1,
          top: 0,
          left: 0,
        },
      },
    ],
  ],
  [
    'title',
    [
      {
        type: 'v-title',
        component: 'v-first-title',
        label: '一级标题',
        propValue: '一级标题',
        animations: [],
        events: {},
        style: {
          width: 200,
          height: 33,
          color: '',
          fontSize: 32,
          fontWeight: 700,
          textAlign: 'left',
          letterSpacing: 0,
          lineHeight: '',
          opacity: 1,
          top: 0,
          left: 0,
        },
      },
      {
        type: 'v-title',
        component: 'v-second-title',
        label: '二级标题',
        propValue: '二级标题',
        animations: [],
        events: {},
        style: {
          width: 200,
          height: 33,
          color: '',
          fontSize: 24,
          fontWeight: 600,
          textAlign: 'left',
          letterSpacing: 0,
          lineHeight: '',
          opacity: 1,
          top: 0,
          left: 0,
        },
      },
      {
        type: 'v-title',
        component: 'v-third-title',
        label: '三级标题',
        propValue: '三级标题',
        animations: [],
        events: {},
        style: {
          width: 200,
          height: 33,
          color: '',
          fontSize: 18,
          fontWeight: 500,
          textAlign: 'left',
          letterSpacing: 0,
          lineHeight: '',
          opacity: 1,
          top: 0,
          left: 0,
        },
      },
    ],
  ],
])

export default componentList

export type CommonType = {
  type: string
  component: string
  label: string
  propValue: string
  animations?: any[]
  events?: any
  style: {
    width: number
    height: number
    color: string
    fontSize: number
    fontWeight: number
    textAlign: 'left' | 'right' | 'center'
    letterSpacing: number
    lineHeight: number
    opacity: number
    top: number
    left: number
  }
}
