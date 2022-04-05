import "reflect-metadata";
import axios from 'axios';
import { container } from 'tsyringe';
import { GetUsersService } from '@modules/users/services/GetUsersService';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

test('mockApi should return a list os users', async () => {

  mockedAxios.get.mockResolvedValue(mockedListResponse);

  const getUsersService = container.resolve(GetUsersService);
  const users = await getUsersService.execute();

  expect(users).toBe(mockedListResponse.data);
});

const mockedListResponse = {
  data: {
    users: [
      {
        id: "1",
        name: "Christine Borer",
        phone: "(529) 373-4587",
        email: "Geovanny.McGlynn@yahoo.com"
      }
    ]
  }
};
