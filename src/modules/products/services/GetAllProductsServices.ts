import { injectable } from 'tsyringe';
import { fakeProducts as products } from '../FakeProducts';

@injectable()
export class GetAllProductsService {
  async execute() {
    return products
  }
}
