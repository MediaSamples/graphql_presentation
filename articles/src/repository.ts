export type Article = {
  id: number;
  url: string;
  text: string;
  author: number;
};

export const articles: Article[] = [
  {
    id: 1,
    url: "https://url1.com/",
    text: "Data Sources",
    author: 1,
  },
  {
    id: 2,
    url: "https://url2.com/",
    text: "Resolvers",
    author: 2,
  },
];
