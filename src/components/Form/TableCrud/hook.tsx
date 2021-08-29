import type { IActionButton } from '@/components/ActionButton';
import ActionButton from '@/components/ActionButton';
import type { ProColumns } from '@ant-design/pro-table';
import type { ProFieldValueType } from '@ant-design/pro-utils';
import { useCreation } from 'ahooks';
import capitalize from 'lodash/capitalize';

export type INextType = 'href' | 'enumBoolean' | ProFieldValueType;

export type ITableListItem1 = {
  dataIndex: string;
};

export type IColumns = {
  fieldType?: INextType;
  cusTableType?: INextType;
} & ProColumns<ITableListItem1>;

export type ICommonExcludeForm = 'operation';

export const useNextTable = () => {
  const onGetCommonTableField = ({
    columnsData,
    onClickEdit,
    onClickDelete,
    onClickView,
    disabled,
    operation,
    operationWidth = 100,
  }: {
    columnsData: IColumns[] | undefined;
    onClickEdit?: (record?: any, isEdit?: boolean) => void | boolean | undefined;
    onClickDelete?: (record?: any, isEdit?: boolean) => void | boolean | undefined;
    onClickView?: (record?: any, isView?: boolean) => void;
    disabled?: boolean;
    operationWidth?: any;
    operation?: IActionButton & {
      state: any;
    };
  }) => {
    const newArr: any[] = [];

    const lastCommonField: IColumns[] =
      columnsData?.length === 0
        ? [
            {
              title: 'Operation',
              key: 'operation1',
              search: false,
              fixed: 'right',
              width: 40,
            },
          ]
        : ([
            /**
             * most case it will need id for update or delete
             * we
             */
            {
              title: 'id',
              dataIndex: 'id',
              valueType: 'text',
              hideInTable: true,
              formItemProps: {
                style: {
                  display: 'none',
                },
              },
            },
            {
              title: 'Operation',
              key: 'operation',
              search: false,
              fixed: 'right',
              // align: 'center',
              width: operationWidth,
              hideInForm: true,
              hideInDescriptions: true,
              render: (_: any, record: any) => (
                <ActionButton
                  {...{
                    operation: { ...operation, record },
                    onClickView: onClickView
                      ? () => onClickView && onClickView(record, true)
                      : (false as any),
                    onClickEdit: onClickEdit ? () => onClickEdit(record, true) : false,
                    delPopconfirmProps: onClickDelete
                      ? {
                          onConfirm: () => onClickDelete && onClickDelete(record),
                        }
                      : false,
                    ...(operation as any),
                  }}
                />
              ),
            },
          ] as IColumns[]);

    columnsData?.map((i) => {
      const { title } = i || {};
      const typeDf = {
        ...i,
        title: capitalize(String(title)),
        fieldProps: {
          disabled,
          ...i?.fieldProps,
        },
      };

      // @ts-ignore
      if (!i?.fieldProps?.disabled) {
        // @ts-ignore
        delete i.fieldProps?.disabled;
      }

      const typeInput = {
        ...typeDf,
      };

      return newArr.push(typeInput);
    });
    return [...newArr, ...lastCommonField];
  };

  const getCommonTableField = useCreation(() => onGetCommonTableField, []);

  return {
    getCommonTableField,
  };
};
