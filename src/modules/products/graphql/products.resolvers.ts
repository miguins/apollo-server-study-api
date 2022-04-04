import { container } from 'tsyringe';
import { CreateProductService } from '../services/CreateProductService';
import { DeleteProductService } from '../services/DeleteProductService';
import { FindProductService } from '../services/FindProductService';
import { GetAllProductsService } from '../services/GetAllProductsServices';
import { UpdateProductService } from '../services/UpdateProductService';

export const productsResolvers = {
  Query: {
    products: () => {
      const listProductsService = container.resolve(GetAllProductsService);
      const products = listProductsService.execute();
      return products;
    },
    product: (_, { id }) => {
      const findProductService = container.resolve(FindProductService);
      const product = findProductService.execute(id);
      return product;
    }
  },

  Mutation: {
    addProduct: (_, args) => {
      const createProductService = container.resolve(CreateProductService)
      const product = createProductService.execute(args.input);
      return product;
    },

    updateProduct: (_, args) => {
      const updateProductService = container.resolve(UpdateProductService)
      const product = updateProductService.execute(args.input);
      return product;
    },

    deleteProduct: (_, { id }) => container.resolve(DeleteProductService).execute(id),
  }
}
