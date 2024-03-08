export interface Either<T> {
  data?: T;
  error?: Error;
}
