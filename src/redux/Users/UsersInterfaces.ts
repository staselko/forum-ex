import { IPost } from '../Posts/PostsInterfaces';

export interface IUserItem {
  name: string,
  email: string,
  phone?: string,
  id?: number,
}

export interface IUser extends IUserItem {
  id?: number,
  name: string,
  username: string,
  email: string,
  address?: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string,
    }
  },
  phone?: string,
  website?: string,
  company?: {
    name: string,
    catchPhrase: string,
    bs: string
  },
  imageUrl?: string,
  backgroundImageUrl?: string,
  posts?: IPost[],
  [x: string]: any,
}

export interface IUserInitialState {
  usersList: IUser[],
  changedUser: IUser | {},
  errorMessage: unknown,
  isLoading: Boolean,
  isSearching: Boolean,
}
