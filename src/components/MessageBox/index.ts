import { sumBy } from 'lodash'
import { App, createApp } from 'vue'
import Message from './message.vue'
let messageList: HTMLElement[] = []

const getHeight = (item: HTMLElement) => {
  return Number(getComputedStyle(item).height.replace('px', ''))
}

const getTop = (item: HTMLElement) => {
  return Number(item.style.top.replace('px', ''))
}

export default {
  duration: 2000,
  _messageList: [],
  show (text: string, duration?: number) {
    const instance = createApp(Message, {
      text
    })
    const messageBox = document.createElement('div')
    messageBox.className = 'message-box'
    messageBox.style.top = `${sumBy(messageList.map(item => getHeight(item) + 10))}px`
    document.body.appendChild(messageBox)
    instance.mount(messageBox)
    messageList.push(messageBox)
    setTimeout(() => {
      instance.unmount()
      const messageBoxHeight = getHeight(messageBox)
      document.body.removeChild(messageBox)
      messageList = messageList.filter(m => m !== messageBox)
      messageList.forEach(message => {
        message.style.top = `${getTop(message) - messageBoxHeight}px`
      })
    }, duration || this.duration)
  },
  install (app: App) {
    app.config.globalProperties.$message = this
  }
}
