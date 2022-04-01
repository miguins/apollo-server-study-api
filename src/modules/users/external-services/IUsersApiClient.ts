import { User } from '@models/User';

export interface IUsersApiClient {
  baseUrl: string;
  getUsers(): Promise<User[]>
}
