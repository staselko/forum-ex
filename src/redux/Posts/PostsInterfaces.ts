export interface IComments {
  postId?: string,
  id: string,
  name?: String,
  email?: String,
  body: String,
  userId?: number,
}

export interface IPost {
  userId: number,
  id: number,
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
