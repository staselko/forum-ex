import { IPost } from '../redux/Posts/PostsReducer';
import { IUser } from '../redux/Users/UsersInterfaces';

export const mergeUserAndPosts = (user: IUser, posts: IPost[]): IUser => {
  const currentUserPosts: IPost[] = posts.filter((item) => item.userId === user.id);
  return {
    ...user,
    posts: [...currentUserPosts],
  };
};
