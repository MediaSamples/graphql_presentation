import { Article, articles } from "./repository.js";

const resolvers = {
  Query: {
    getArticles: () => articles,
    getArticle: (_: any, { id }: { id: string }) =>
      articles.find((p) => p.id === +id),
  },
  User: {
    posts: (user: { id: number }) => {
      console.log("User.articles", user);
      return articles.filter((p) => p.author === +user.id);
    },
  },
  Post: {
    // __resolveReference: (post: PostRepresentation) => {
    //   console.log("Post __resolveReference", post);
    //   return posts.find((p) => p.author === +post.author.id);
    // },
    author: (article: Article) => {
      console.log("Article.author", article);
      return { id: article.author };
    },
  },
};

export { resolvers };
