export interface IPost {
  userId: number,
  id: number,
  title: String,
  body: String,
}

export interface PostsInitialState {
  postsListToShow: IPost[],
  errorMessage?: unknown,
  isLoading: Boolean,
}
