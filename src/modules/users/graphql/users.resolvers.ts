import { MockApiUsersClient } from '../external-services/mock-api/MockApiUsersClient';
import { GetUsersService } from '../services/GetUsersService';

export const usersResolvers = {
  Query: {
    users: () => {
      const usersApi = new MockApiUsersClient()
      const getUsersService = new GetUsersService(usersApi)
      const users = getUsersService.execute()

      return users
    }
  }
}
