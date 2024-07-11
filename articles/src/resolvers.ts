import DataLoader from "dataloader";
import { Article, articles } from "./repository.js";

const loadArticlesByUserIds = new DataLoader<number, Article[]>(async userIds => {
  console.log("LoadArticlesByUserIds", userIds);
  return userIds.map(id => articles.filter(p => p.author === id));
})

const resolvers = {
  Query: {
    getArticles: () => articles,
    getArticle: (_: any, { id }: { id: string }) =>
      articles.find((p) => p.id === +id),
  },
  User: {
    posts: (user: { id: number }) => {
      console.log("User.articles", user);
      return loadArticlesByUserIds.load(user.id);
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
