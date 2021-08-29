import type { ITableState } from '.';

declare type ICrudState<T> = Partial<{
  mutationId: string;
  loadingRefetch: boolean;
}> &
  ITableState<T>;
