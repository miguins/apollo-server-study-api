import { injectable } from 'tsyringe';
import { fakeProducts as products } from '../FakeProducts';

@injectable()
export class FindProductService {
  async execute(id: string) {

    const product = products.find(p => p.id === id)

    if (!product) {
      throw new Error('Product does not exist.')
    }

    return product
  }
}
