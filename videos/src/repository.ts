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
    duration: 120,
    url: "https://example.com/video1",
    author: 1,
  },
  {
    id: 2,
    title: "Video 2",
    duration: 180,
    url: "https://example.com/video2",
    author: 1,
  },
  {
    id: 3,
    title: "Video 3",
    duration: 150,
    url: "https://example.com/video3",
    author: 1,
  },
  {
    id: 6,
    title: "Video 6",
    duration: 160,
    url: "https://example.com/video6",
    author: 3,
  },
  {
    id: 7,
    title: "Video 7",
    duration: 130,
    url: "https://example.com/video7",
    author: 3,
  },
  {
    id: 8,
    title: "Video 8",
    duration: 170,
    url: "https://example.com/video8",
    author: 3,
  },
  {
    id: 11,
    title: "Video 11",
    duration: 190,
    url: "https://example.com/video11",
    author: 4,
  },
  {
    id: 12,
    title: "Video 12",
    duration: 100,
    url: "https://example.com/video12",
    author: 4,
  },
  {
    id: 13,
    title: "Video 13",
    duration: 140,
    url: "https://example.com/video13",
    author: 4,
  },
  {
    id: 14,
    title: "Video 14",
    duration: 170,
    url: "https://example.com/video14",
    author: 4,
  },
];
