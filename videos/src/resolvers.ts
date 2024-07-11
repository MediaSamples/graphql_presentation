import { Video, videos } from "./repository.js";

const resolvers = {
  Query: {
    getVideos: () => {
      videos;
    },
    getVideo: (_: any, { id }: { id: string }) => {
      console.log("Query.getVideo", id);
      return videos.find((v) => v.id === +id);
    },
  },
  Video: {
    author: (video: Video) => {
      console.log("Video.author", video);
      return { id: video.author };
    },
  },
  User: {
    videos: (user: { id: number }) => {
      console.log("User.videos", user);
      return videos.filter((v) => v.author === +user.id);
    },
  },
};

export { resolvers };
