import mockData from "./mockData.json";
import {} from "../UserListSelect/";

// TODO: Get user url from config
const userUrl = "https://dummyjson.com/users";

type User = {
  id: string;
  image: string;
  firstName: string;
  lastName: string;
  username: string;
};

export const getUserList = async () => {
  try {
    const response = await fetch(userUrl);
    const data = await response.json();
    return data.users as Promise<User[]>;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
      return [];
    } else {
      throw new Error("Unknown error");
    }
  }
};

export const getUserListMock = () =>
  mockData.users.map(({ id, image, firstName, lastName, username }) => ({
    id,
    image,
    firstName,
    lastName,
    username,
  }));
