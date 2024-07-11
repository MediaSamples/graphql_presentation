export type User = {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
};

export const users: User[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: "1991-02-21",
  },
  {
    id: 2,
    firstName: "Bob",
    lastName: "Doe",
    dateOfBirth: "2000-09-04",
  },
];
