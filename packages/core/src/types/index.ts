import { LayoutMenuDirection } from '../config'

export type HrType = {
  type: 'hr'
}

export type LiType = {
  type: 'li'
  text: string
  disabled?: boolean
  callback: EventListener
}

export type UlType = {
  type: 'ul'
  text: string
  disabled?: boolean
  children: ItemType[]
}

export interface AttrsType {
  class?: string
  style?: string | { [key: string]: string }
}

export type ElementType = HrType | LiType | UlType

export type ItemType = AttrsType & ElementType

type GetKeysType<T> = T extends ElementType ? keyof T : never

type ElementKeysType = GetKeysType<ElementType>

export type ConfigType = {
  el: string
  mode: 'context-menu' | 'nav-menu' // 模式, 默认为context-menu
  theme?: string // 主题样式, 默认为auto
  minWidth: string | number // 最小宽度
  maxWidth: string | number // 最大宽度
  include?: string[] | RegExp // 包含的元素
  exclude?: string[] | RegExp // 排除的元素
  defaultProps?: {
    // 默认参数配置项
    [key in ElementKeysType]?: string
  }
  beforeInit?: Function // 初始化前
  afterInit?: Function // 初始化后
  beforeShow?: Function // 显示菜单前
  afterShow?: Function // 显示菜单后
  beforeHide?: Function // 隐藏菜单前
  afterHide?: Function // 隐藏菜单后
}

export interface MenuElement extends HTMLElement {
  direction?: LayoutMenuDirection
}

type RequireKeys = 'el'
