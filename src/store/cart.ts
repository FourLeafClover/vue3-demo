
import { defineStore } from 'pinia'
import { Product, userShopStore } from './shop'
import { sumBy } from 'lodash'

interface State {
  products: Array<Product>
}

export const userCartStore = defineStore('user', {
  state: (): State => {
    return {
      products: []
    }
  },
  getters: {
    totalPrice: (state) => {
      return sumBy(state.products.map(item => item.price))
    }
  },
  actions: {
    addCart (id: number) {
      const product = userShopStore().$state.products.find(x => x.id === id)
      if (product) {
        this.products.push(product)
      } else {
        console.error('商品找不到')
      }
    }
  }
})
