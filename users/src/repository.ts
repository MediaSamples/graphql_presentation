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
    lastName: "Martin",
    dateOfBirth: "1998-09-04",
  },
  {
    id: 3,
    firstName: "Alice",
    lastName: "Smith",
    dateOfBirth: "1995-12-17",
  },
  {
    id: 4,
    firstName: "Eve",
    lastName: "Jackson",
    dateOfBirth: "1998-07-30",
  },
];
