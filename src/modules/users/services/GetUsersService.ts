import { User } from '@models/User';
import 'reflect-metadata';
import { container, injectable } from 'tsyringe';
import { MockApiUsersClient } from '../integration/MockApiUsersClient';

@injectable()
export class GetUsersService {

  async execute(): Promise<User[]> {
    const usersClientResponse = container.resolve(MockApiUsersClient)
    const users = usersClientResponse.getUsers()

    return users
  }
}
