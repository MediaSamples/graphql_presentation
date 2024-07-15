export type Article = {
  id: number;
  url: string;
  text: string;
  author: number;
};

export const articles: Article[] = [
  {
    id: 1,
    url: "https://example.com/article1",
    text: "Article 1",
    author: 1,
  },
  {
    id: 2,
    url: "https://example.com/article2",
    text: "Article 2",
    author: 1,
  },
  {
    id: 3,
    url: "https://example.com/article3",
    text: "Article 3",
    author: 1,
  },
  {
    id: 4,
    url: "https://example.com/article4",
    text: "Article 4",
    author: 2,
  },
  {
    id: 5,
    url: "https://example.com/article5",
    text: "Article 5",
    author: 2,
  },
  {
    id: 6,
    url: "https://example.com/article6",
    text: "Article 6",
    author: 4,
  },
];
