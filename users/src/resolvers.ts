import { User, users } from "./repository.js";

const resolvers = {
  Query: {
    getUsers: () => {
      users;
    },
    getUser: (_: any, { id }: { id: string }) => {
      console.log("Query.getUser", id);
      return users.find((u) => u.id === +id);
    }
  },
  User: {
    __resolveReference: (user: User) => {
      console.log("User.__resolveReference", user);
      return users.find((u) => u.id === +user.id);
    },
    posts: (user: User) => {
      console.log("User.posts", user);
      return {
        author: user,
      };
    },
  },
};

export { resolvers };
