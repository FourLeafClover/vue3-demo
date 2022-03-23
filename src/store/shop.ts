
import { defineStore } from 'pinia'

export interface Product {
  id: number,
  name: string;
  price: number
}

export interface State {
  products: Array<Product>
}

export const userShopStore = defineStore('shop', {
  state: (): State => {
    return {
      products: [{
        id: 1,
        name: '鞋子',
        price: 300
      }, {
        id: 2,
        name: '书本',
        price: 50
      }]
    }
  }
})
