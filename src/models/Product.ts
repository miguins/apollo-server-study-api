import { randomUUID } from 'crypto';

export class Product {
  id: string = randomUUID()
  name: string
  price: number

  constructor(name: string, price: number) {
    this.name = name
    this.price = price
  }
}
