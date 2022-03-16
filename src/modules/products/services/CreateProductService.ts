import { Product } from '@models/Product';
import { injectable } from 'tsyringe';
import { fakeProducts as products } from '../FakeProducts';

@injectable()
export class CreateProductService {
  async execute({ name, price }) {

    const product = new Product(name, price)
    products.push(product)

    return product
  }
}
