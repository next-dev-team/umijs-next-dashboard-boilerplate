import NextTable from '@/components/Form/NextTable';
import {
  ClearOutlined,
  EditOutlined,
  LeftOutlined,
  PlusOutlined,
  SaveOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import type { BaseQueryFilterProps } from '@ant-design/pro-form';
import type { ProTableProps } from '@ant-design/pro-table';
import type { PageInfo } from '@ant-design/pro-table/lib/typing';
import type { ProSchemaComponentTypes } from '@ant-design/pro-utils';
import { NextButton } from '@next-dev/component/es/NextButton';
import type { FormInstance } from 'antd';
import { Button, Space, Tabs } from 'antd';
import { useNextTable } from './hook';

/**
 * @Global Crud table do not modify it plz ask the component owner
 */

export type ITableState<T> = {
  isDelete?: boolean;
  add?: boolean;
  edit?: boolean;
  isReset?: boolean;
  view?: boolean;
  record?: T;
  type?: ProSchemaComponentTypes;
};

export type ITableList<T = Record<string, any>, U = Record<string, any>, ValueType = 'text'> = {
  colMap?: any;
  form?: FormInstance<T>;
  operation?: any;
  loadingSubmit?: boolean;
  isHideView?: boolean;
  isHideEdit?: boolean;
  isHideAdd?: boolean;
  isHideDelete?: boolean;
  operationWidth?: any;
  state: ITableState<T>;
  onSearchQuery?: (v: BaseQueryFilterProps['optionRender']) => void;
  setMode: (v?: ITableState<T>) => void;
  onResetForm?: () => void;
  setColMap: (v?: any) => void;
  tabTitleList: string;
  tabTitleCrud: string;
} & Omit<ProTableProps<T, U, ValueType>, 'beforeSearchSubmit'> & {
    beforeSearchSubmit?: (params?: Partial<U & PageInfo>) => any;
  };

export function TableListCrud<T = Record<string, any>, U = Record<string, any>, ValueType = 'text'>(
  props: ITableList<T, U, ValueType>,
) {
  const {
    state = {},
    operation,
    setColMap = () => null,
    setMode = () => null,
    tabTitleList,
    tabTitleCrud,
    loadingSubmit,
    isHideView,
    isHideEdit,
    isHideDelete,
    isHideAdd,
    operationWidth,
    onResetForm,
    ...rest
  } = props;

  const { getCommonTableField } = useNextTable();

  const setCommon = (record?: any) => {
    state.edit = false;
    state.type = 'form';
    rest?.form?.setFieldsValue(record);
  };
  const setFalseAddEdit = (record?: any) => {
    setCommon(record);
    state.add = false;
  };

  const setFalseEditView = (record?: any) => {
    state.view = false;
    setCommon(record);
  };

  return (
    <>
      <Tabs
        activeKey={state?.type}
        // @ts-ignore
        onChange={(e: ITableList['type']) => {
          if (!state.edit || !state.view) {
            rest?.form?.resetFields();
          }
          if (e === 'table') {
            state.add = true;
            state.edit = false;
            state.view = false;
          }
          state.type = e;
        }}
      >
        <Tabs.TabPane tab={tabTitleList} key="table" />
        {!isHideAdd && <Tabs.TabPane tab={tabTitleCrud} key="form" />}
      </Tabs>
      {['table', 'form'].includes(state?.type as string) && (
        <>
          {/* @ts-ignore */}
          <NextTable
            {...{
              ...rest,
              columns: getCommonTableField({
                operation,
                operationWidth,
                columnsData: rest?.columns as any,
                // @ts-ignore
                onClickDelete: isHideDelete
                  ? false
                  : (record: T) => {
                      state.isDelete = true;
                      setMode({ record });
                    },
                // @ts-ignore
                onClickEdit: isHideEdit
                  ? false
                  : (record) => {
                      setFalseAddEdit(record);
                      state.view = false;
                      state.edit = true;
                      state.record = record;
                    },
                onClickView: isHideView
                  ? (false as any)
                  : (record) => {
                      setFalseAddEdit(record);
                      state.view = true;
                    },
                disabled: state.view && state?.type === 'form',
              }),
              onColumnsStateChange: (v: any) => {
                setColMap(v);
              },
              type: state?.type,
              beforeSearchSubmit: (v = {}) => {
                if (state?.type === 'table' && rest?.beforeSearchSubmit) {
                  rest?.beforeSearchSubmit(v);
                }
              },
              onSubmit: (v: any) => {
                if (state.type === 'form' && rest?.onSubmit) {
                  rest?.onSubmit(v);
                }
              },

              search:
                rest?.search === false
                  ? false
                  : {
                      labelWidth: 'auto',
                      optionRender: (v: any) => {
                        return (
                          <Space>
                            <NextButton
                              htmlType="submit"
                              icon={<ClearOutlined style={{ color: '#edad2d' }} />}
                              onClick={() => {
                                v?.form?.resetFields();
                                state.isReset = true;
                              }}
                            >
                              Reset
                            </NextButton>
                            <NextButton
                              type="primary"
                              htmlType="submit"
                              icon={<SearchOutlined />}
                              onClick={() => {
                                state.isReset = false;
                              }}
                            >
                              Search
                            </NextButton>
                          </Space>
                        );
                      },
                      ...rest?.search,
                    },
              form:
                state?.type === 'form'
                  ? {
                      scrollToFirstError: true,
                      form: rest?.form,
                      ...rest?.form,
                      style: {
                        padding: 20,
                        minHeight: 150,
                        ...rest.form?.style,
                      },

                      submitter: {
                        render: () => {
                          return (
                            <Space
                              style={{
                                display: 'flex',
                              }}
                            >
                              <NextButton
                                icon={<LeftOutlined />}
                                danger
                                onClick={() => {
                                  setFalseEditView();
                                  state.add = true;
                                  state.type = 'table';
                                }}
                              >
                                Back
                              </NextButton>
                              {state.view && !isHideEdit && (
                                <NextButton
                                  icon={<EditOutlined />}
                                  type="link"
                                  onClick={() => {
                                    state.view = false;
                                    state.add = false;
                                    state.edit = true;
                                  }}
                                >
                                  Edit Now
                                </NextButton>
                              )}

                              {!state.view && (
                                <>
                                  {!state.edit && (
                                    <NextButton
                                      icon={<ClearOutlined style={{ color: '#edad2d' }} />}
                                      onClick={() => {
                                        rest?.form?.resetFields();
                                        onResetForm?.();
                                      }}
                                    >
                                      Reset
                                    </NextButton>
                                  )}
                                  <NextButton
                                    {...{
                                      type: 'primary',
                                      htmlType: 'submit',
                                      icon: loadingSubmit ? null : <SaveOutlined />,
                                      loading: loadingSubmit,
                                    }}
                                  >
                                    Submit
                                  </NextButton>
                                </>
                              )}
                            </Space>
                          );
                        },
                        ...rest?.form?.submitter,
                      },
                    }
                  : {},

              toolBarRender: () =>
                isHideAdd
                  ? []
                  : [
                      <Button
                        key="button"
                        icon={<PlusOutlined />}
                        type="primary"
                        onClick={() => {
                          setFalseEditView();
                          state.add = true;
                          rest.form?.resetFields();
                        }}
                      >
                        Add
                      </Button>,
                    ],
              pagination:
                rest?.pagination === false
                  ? false
                  : {
                      defaultPageSize: 10,
                      showQuickJumper: true,
                      ...rest?.pagination,
                    },
            }}
          />
        </>
      )}
    </>
  );
}
