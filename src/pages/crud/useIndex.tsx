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
import type { ScaleType } from '@/graphQl/schemas';
import { getOnlyValue } from '@/utils/arrObj';
import type { PageInfo } from '@ant-design/pro-table/lib/typing';
import { useCreation } from 'ahooks';
import { useLocalStorageState, useReactive } from 'ahooks/es';
import { Form } from 'antd';
import isEmpty from 'lodash/isEmpty';

type IState = Partial<ICrudState<ScaleType>>;

export const useScale = () => {
  /**
   * ----------------------- State and Function ----------------------
   */
  const [form] = Form.useForm();

  const [columnsStateMap, setColMap] = useLocalStorageState('scaleColumn', {});

  const defaultFilter: Partial<IOT.GetScalesQueryVariables['filter'] & PageInfo> = {
    limit: 10,
    page: 1,
  };

  const filterValue = useReactive<{ filter: typeof defaultFilter }>({
    filter: defaultFilter,
  });

  const state = useReactive<IState>({
    type: 'table',
    add: true,
  });

  const { type } = state;
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
      // filter
    },
  });

  const afterSuccessAction = (params?: ISuccessAction) => {
    successAction({ form, state: state as any, refetch: refetchScales, ...params });
  };
  /**
   * ----------------------- deleteScaleMutation ----------------------
   */
  const [deleteScaleMutation, { loading: loadingDeleteScale }] = useDeleteScaleMutation({
    onCompleted: (res) => {
      res?.deleteScale && afterSuccessAction();
    },
  });
  /**
   * ----------------------- updateScaleMutation ----------------------
   */
  const [updateScaleMutation, { loading: loadingUpdateScale }] = useUpdateScaleMutation({
    onCompleted: (res) => {
      res?.updateScale && afterSuccessAction();
    },
  });

  /**
   * ----------------------- createScaleMutation ----------------------
   */
  const [createScaleMutation, { loading: loadingCreateScale }] = useCreateScaleMutation({
    onCompleted: (res) => {
      res?.createScale && afterSuccessAction();
    },
  });

  /**
   * ----------------------- Return State& Props ----------------------
   */
  const dataSource = useCreation(
    () => dataScales?.getScales?.records as IST.ScaleType[],
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

  const tableProps: ITableList<IST.ScaleType, IST.ScaleType> = {
    setColMap,
    setMode: (v) => {
      if (state.isDelete) {
        deleteScaleMutation({ variables: { id: v?.record?.id } });
      }
    },
    tabTitleList: `List ${pageName}`,
    tabTitleCrud: `${tabTitleCrud} ${pageName}`,
    dataSource,
    columnsStateMap,
    form,
    state,
    loading: loadingGetScale || loadingDeleteScale || state.loadingRefetch,
    options: {
      reload: () => {
        afterSuccessAction({ isReload: true });
      },
    },
    onSubmit: (record) => {
      if (!isEmpty(record)) {
        const input = getOnlyValue(record);
        if (state.edit) {
          updateScaleMutation({ variables: { input } });
        }
        if (state.add) {
          createScaleMutation({ variables: { input } as any });
        }
      }
    },
    beforeSearchSubmit: (params) => {
      const newParam = getOnlyValue(params);
      // console.log('ss', params);
      if (!isEmpty(params)) {
        filterValue.filter = {
          ...filterValue.filter,
          limit: newParam?.pageSize,
          page: newParam?.current,
          name: newParam?.name,
        };
      }
    },
    onChange: (pagination) => {
      const { pageSize, current } = pagination;
      filterValue.filter = {
        ...filterValue.filter,
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
