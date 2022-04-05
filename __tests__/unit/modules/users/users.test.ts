import "reflect-metadata";
import axios from 'axios';
import { usersResolvers } from '@modules/users/graphql/users.resolvers';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Users resolvers', () => {
  test('should return a list os users', async () => {

    mockedAxios.get.mockResolvedValue(mockedListResponse);

    const response = await usersResolvers.Query.users();

    expect(response).toBe(mockedListResponse.data);
    expect(response).toHaveLength(1);
  });
})

const mockedListResponse = {
  data: [
      {
        id: "1",
        name: "Christine Borer",
        phone: "(529) 373-4587",
        email: "Geovanny.McGlynn@yahoo.com"
      }
  ]
};
