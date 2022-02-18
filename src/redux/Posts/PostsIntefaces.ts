export interface IComments {
  postId: number,
  id: number,
  name: String,
  email: String,
  body: String,
}

export interface IPost {
  userId: number,
  id: number,
  title: String,
  body: String,
  comments: IComments[]
  [x: string]: any,
}

export interface PostsInitialState {
  postsListToShow: IPost[],
  errorMessage?: unknown,
  isLoading: Boolean,
}
