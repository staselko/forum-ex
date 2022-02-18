import { createSelector } from 'reselect';
import { IRootReducer } from '../RootReducer';
import { IUser } from './UsersInterfaces';

const usersWithPosts = ((store:IRootReducer) => store.users.usersList);
const loading = ((store:IRootReducer) => store.users.isLoading);

export const selectCurrentUser = (id: number) => createSelector(
  [usersWithPosts],
  (userWithPosts): IUser => userWithPosts.filter((user) => user.id === id)[0],
);

export const selectIsUsersLoading = createSelector(
  [loading],
  (isLoading) => isLoading,
);
