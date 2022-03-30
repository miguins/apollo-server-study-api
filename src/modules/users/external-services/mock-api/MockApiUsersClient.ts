import { User } from '@models/User';
import axios from 'axios';
import { IUsersApiClient } from '../IUsersApiClient';

export class MockApiUsersClient implements IUsersApiClient {

  private BASE_URL: string = 'https://6243482a39aae3e3b7413750.mockapi.io/api';
  private RESOURCE: string = '/users'

  async getUsers(): Promise<User[]> {
    try {
      const response = await axios.get<User[]>(`${this.BASE_URL}${this.RESOURCE}`);
      return response.data
    } catch (error) {
      throw new Error(error)
    }
  }
}
