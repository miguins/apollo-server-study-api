import { User } from '@models/User';

export interface IUsersApiClient {
  getUsers(): Promise<User[]>
}
