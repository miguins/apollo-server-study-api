import "reflect-metadata";
import { container } from 'tsyringe';
import { GetUsersService } from '../services/GetUsersService';

export const usersResolvers = {
  Query: {
    users: () => {
      const getUsersService = container.resolve(GetUsersService);
      const users = getUsersService.execute()

      return users
    }
  }
}
