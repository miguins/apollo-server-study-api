import { User } from '@models/User';
import axios from 'axios';
import { injectable } from 'tsyringe';

@injectable()
export class MockApiUsersClient {

  async getUsers(): Promise<User[]> {
    try {
      const response = await axios.get<User[]>('https://6243482a39aae3e3b7413750.mockapi.io/api/users');
      // console.log(response);
      return response.data
    } catch (error) {
      console.error(error);
    }
  }
}
