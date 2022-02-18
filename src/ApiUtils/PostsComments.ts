import { IPost, IComments } from '../redux/Posts/PostsIntefaces';

export const mergePostsAndComments = (posts: IPost[], comments: IComments[]): IPost[] => posts
  .map((post) => {
    const currentCommetnts: IComments[] = comments.filter((item) => item.postId === post.id);
    return {
      ...post,
      comments: currentCommetnts,
    };
  });
