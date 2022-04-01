import { User } from '@models/User';
import { inject, injectable, registry } from 'tsyringe';
import { IUsersApiClient } from '../external-services/IUsersApiClient';
import { MockApiUsersClient } from './../external-services/mock-api/MockApiUsersClient';

@injectable()
@registry([{ token: 'UsersApi', useClass: MockApiUsersClient }])
export class GetUsersService {

  constructor(@inject('UsersApi') private mockApiUsersClient: IUsersApiClient) { }

  async execute(): Promise<User[]> {
    const users = await this.mockApiUsersClient.getUsers()
    return users
  }
}
