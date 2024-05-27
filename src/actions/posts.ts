"use server";

import { Post, User, UserPost } from "@/types";
import { API_URL } from "@/config/constants";
import { getPostsApiUrl } from "@/lib/apiUtils";

export const getPosts = async (
  offset: number,
  limit: number
): Promise<Array<UserPost>> => {
  const url = getPostsApiUrl(offset, limit);
  try {
    const userResponse = await fetch(`${API_URL}/users`);
    const userData = (await userResponse.json()) as Array<User>;
    const postResponse = await fetch(url);
    const postsData = (await postResponse.json()) as Array<Post>;

    const responseError = !postResponse.ok || !userResponse.ok;
    if (responseError) {
      throw new Error(`An error occurred: ${postsData}`);
    }
    const userPosts = postsData.map((post) => {
      const userId = post.userId;
      const user = userData.find((user) => user.id === userId);
      const userPost = {
        ...post,
        userName: user?.name ?? "",
        handle: user?.username ?? "",
      };

      return userPost;
    });
    userPosts.sort((a, b) => b.id - a.id);
    return userPosts;
  } catch (error: unknown) {
    console.error(error);
    throw new Error(`An error occurred: ${error}`);
  }
};
