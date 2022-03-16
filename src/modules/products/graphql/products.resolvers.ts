import 'reflect-metadata';
import { container } from 'tsyringe';
import { CreateProductService } from '../services/CreateProductService';
import { DeleteProductService } from '../services/DeleteProductService';
import { FindProductService } from '../services/FindProductService';
import { GetAllProductsService } from '../services/GetAllProductsServices';
import { UpdateProductService } from '../services/UpdateProductService';



export const resolvers = {
  Query: {
    products: () => container.resolve(GetAllProductsService).execute(),
    product: (_, {id}) => container.resolve(FindProductService).execute(id)
  },

  Mutation: {
    addProduct: (_, args) => {
      const createProductService = container.resolve(CreateProductService)
      const product = createProductService.execute(args)
      return product
    },

    updateProduct: (_, args) => {
      const updateProductService = container.resolve(UpdateProductService)
      const product = updateProductService.execute(args)
      return product
    },

    deleteProduct: (_, { id }) => container.resolve(DeleteProductService).execute(id),
  }
}
