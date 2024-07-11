export type Video = {
  id: number;
  title: string;
  duration: number;
  url: string;
  author: number;
};

export const videos: Video[] = [
  {
    id: 1,
    title: "Video 1",
    duration: 60,
    url: "https://url1.com/",
    author: 1,
  },
  {
    id: 2,
    title: "Video 2",
    duration: 120,
    url: "https://url2.com/",
    author: 2,
  },
];
