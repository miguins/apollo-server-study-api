import { User } from '@models/User';
import { IUsersApiClient } from '../external-services/IUsersApiClient';

export class GetUsersService {

  constructor(private mockApiUsersClient: IUsersApiClient) {}

  async execute(): Promise<User[]> {
    const users = await this.mockApiUsersClient.getUsers()
    return users
  }
}
