import type { ITableList } from '@/components/Form/TableCrud';
import type { ISuccessAction } from '@/components/Form/TableCrud/successAction';
import { successAction } from '@/components/Form/TableCrud/successAction';
import type { ICrudState } from '@/components/Form/TableCrud/TableCrud';
import type { IOT, IST } from '@/graphQl/api-type';
import {
  useCreateScaleMutation,
  useDeleteScaleMutation,
  useGetScalesQuery,
  useUpdateScaleMutation,
} from '@/graphQl/hooks';
import { getOnlyValue } from '@/utils/arrObj';
import { useCreation } from 'ahooks';
import { useReactive } from 'ahooks/es';
import { Form } from 'antd';
import isEmpty from 'lodash/isEmpty';

/**
 * all interface here
 */
export type IType = {
  filter: IST.ScaleFilter;
  createInput: IST.ScaleInput;
  updateInput: IST.ScaleUpdate;
  input: IST.ScaleInput & IST.ScaleUpdate;
  scalesData: IOT.GetScalesQuery['getScales'];
  record: Pick<IST.ScaleType, 'id' | 'name' | 'status' | 'updatedBy'>;
  metadata: IOT.GetScalesQuery['getScales']['metadata'];
  state: ICrudState<IType['record'], IType['filter']>;
  table: ITableList<IType['record'], IType['input']>;
};

export const useScale = () => {
  /**
   * ----------------- State & Init & declare ----------------------
   */
  const [form] = Form.useForm<IType['input']>();

  const defaultFilter: IType['filter'] = {
    limit: 10,
    page: 1,
  };

  const state = useReactive<IType['state']>({
    type: 'table',
    add: true,
    filter: defaultFilter,
  });

  const { type, filter } = state;

  const isModifyMode = type === 'form';

  /**
   * ----------------------- useGetScalesQuery ----------------------
   */
  const {
    data: dataScales,
    loading: loadingGetScale,
    refetch: refetchScales,
  } = useGetScalesQuery({
    variables: {
      filter,
    },
  });

  /**
   * after success will refetch
   */
  const onSuccess = (params?: ISuccessAction) => {
    successAction({ form, state, refetch: refetchScales, ...params });
  };
  /**
   * ----------------------- deleteScaleMutation ----------------------
   */
  const [deleteScaleMutation, { loading: loadingDeleteScale }] = useDeleteScaleMutation({
    onCompleted: (res) => {
      res?.deleteScale && onSuccess();
    },
  });
  /**
   * ----------------------- updateScaleMutation ----------------------
   */
  const [updateScaleMutation, { loading: loadingUpdateScale }] = useUpdateScaleMutation({
    onCompleted: (res) => {
      res?.updateScale && onSuccess();
    },
  });

  /**
   * ----------------------- createScaleMutation ----------------------
   */
  const [createScaleMutation, { loading: loadingCreateScale }] = useCreateScaleMutation({
    onCompleted: (res) => {
      res?.createScale && onSuccess();
    },
  });

  /**
   * ----------------------- Return State& Props ----------------------
   */
  const dataSource = useCreation(
    () => dataScales?.getScales?.records as IType['record'][],
    [dataScales?.getScales],
  );

  // console.log('log');

  const pageName = 'Scale';
  const tabTitleCrud = useCreation(
    () => (state.edit && 'Edit') || (state.view && 'View') || (state.add && 'Add'),
    [state?.view, state?.edit, state?.add],
  );

  /**
   * all custom props here
   */
  const customProps = {
    isModifyMode,
    pageName,
    loadingSubmit: loadingGetScale || loadingUpdateScale || loadingCreateScale,
  };

  const tableProps: IType['table'] = {
    setMode: (v) => {
      if (state.isDelete) {
        deleteScaleMutation({ variables: { id: v?.record?.id } });
      }
    },
    tabTitleList: `List ${pageName}`,
    tabTitleCrud: `${tabTitleCrud} ${pageName}`,
    dataSource,
    form,
    state,
    loading: loadingGetScale || loadingDeleteScale || state.loadingRefetch,
    options: {
      reload: () => {
        onSuccess({ isReload: true });
      },
    },
    onSubmit: (record) => {
      if (!isEmpty(record)) {
        const input = getOnlyValue(record);
        if (state.edit) {
          updateScaleMutation({ variables: { input } as any });
        }
        if (state.add) {
          createScaleMutation({ variables: { input } });
        }
      }
    },
    beforeSearchSubmit: (params) => {
      const newParam = getOnlyValue(params);
      if (!isEmpty(params)) {
        state.filter = {
          ...state.filter,
          limit: newParam?.pageSize,
          page: newParam?.current,
          name: newParam?.name,
        };
      }
    },
    onChange: (pagination) => {
      const { pageSize, current } = pagination;
      state.filter = {
        ...state.filter,
        limit: pageSize,
        page: current,
      };
    },
  };

  return {
    tableProps,
    ...customProps,
  };
};
