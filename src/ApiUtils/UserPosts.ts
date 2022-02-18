import { IPost } from '../redux/Posts/PostsIntefaces';
import { IUser } from '../redux/Users/UsersInterfaces';

export const mergeUserAndPosts = (users: IUser[], posts: IPost[]): IUser[] => users.map((user) => {
  const currentUserPosts: IPost[] = posts.filter((item) => item.userId === user.id);
  return {
    ...user,
    posts: currentUserPosts,
  };
});
