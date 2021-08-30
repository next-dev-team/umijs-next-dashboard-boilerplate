import type { ITableState } from '.';

declare type ICrudState<TableState, Filter> = Partial<{
  mutationId: string;
  loadingRefetch: boolean;
  filter: Filter;
}> &
  ITableState<TableState>;
