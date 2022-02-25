export interface IComments {
  postId?: string,
  id: string,
  name?: String,
  email?: String,
  body: String,
  userId?: number | string,
}

export interface IPost {
  userId?: string | number,
  id: number | string,
  title: String,
  body: String,
  comments?: IComments[]
  [x: string]: any,
}

export interface PostsInitialState {
  postsListToShow: IPost[],
  comments: IComments[],
  errorMessage?: unknown,
  isLoading: Boolean,
}
