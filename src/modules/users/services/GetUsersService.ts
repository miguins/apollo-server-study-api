import 'reflect-metadata';
import { container, injectable } from 'tsyringe';
import { MockApiUsersClient } from '../integration/MockApiUsersClient';

@injectable()
export class GetUsersService {

  async execute() {
    const usersClientResponse = container.resolve(MockApiUsersClient)
    const users = usersClientResponse.getUsers()

    return users
  }
}
