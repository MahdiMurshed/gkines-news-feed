import React from "react";
import { posts, users } from "../data";
import { User, UserPost } from "../types";

const usePosts = () => {
  const mapPostToUser = (): Array<UserPost> => {
    return posts.map((post) => {
      const userId = post.userId;
      const user = users.find((user) => user.id === userId);
      const userPost = {
        ...post,
        userName: user?.name ?? "",
        handle: user?.username ?? "",
      };
      return userPost;
    });
  };
  return {
    data: mapPostToUser(),
  };
};

export default usePosts;
