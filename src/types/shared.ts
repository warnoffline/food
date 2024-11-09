export enum Meta {
  initial = 'initial',
  loading = 'loading',
  error = 'error',
  success = 'success',
}

export type Response<T> = {
  results: T[];
  offset: number;
  number: number;
  totalResults: number;
};
