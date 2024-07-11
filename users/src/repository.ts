export type User = {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  followers: number[];
};

export const users: User[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: "2000-01-01",
    followers: [2],
  },
  {
    id: 2,
    firstName: "Bob",
    lastName: "Doe",
    dateOfBirth: "2000-01-01",
    followers: [1],
  },
];
