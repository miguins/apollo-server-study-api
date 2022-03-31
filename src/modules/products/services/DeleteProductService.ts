import { injectable } from 'tsyringe';
import { fakeProducts as products } from '../FakeProducts';

@injectable()
export class DeleteProductService {
  async execute(id: String) {
    const productIndex = products.findIndex(p => p.id === id)

    if (productIndex === -1) {
      throw new Error('Product does not exist.')
    }

    products.splice(productIndex, 1);

    return products
  }
}
