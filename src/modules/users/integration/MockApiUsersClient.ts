import axios from 'axios';
import { injectable } from 'tsyringe';

@injectable()
export class MockApiUsersClient {

  async getUsers() {
    try {
      const response = await axios.get('https://6243482a39aae3e3b7413750.mockapi.io/api/users');
      // console.log(response);
      return response.data
    } catch (error) {
      console.error(error);
    }
  }
}
