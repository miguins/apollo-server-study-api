import { injectable } from 'tsyringe';
import { fakeProducts as products } from '../FakeProducts';

@injectable()
export class UpdateProductService {
  async execute({ id, name, price }) {

    const product = products.find(p => p.id === id)

    if (!product) {
      throw new Error('Product does not exist.')
    }

    if (name != undefined) {
      product.name = name
    }

    if (price != undefined) {
      product.price = price
    }

    return product
  }
}
