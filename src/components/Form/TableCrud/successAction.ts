import { FormInstance } from 'antd';
import message, { ArgsProps } from 'antd/lib/message';
import { ICrudState } from './TableCrud';

export type ISuccessAction = Partial<{
  msg: ArgsProps['content'] | boolean;
  isReload: boolean;
}> & {
  state?: Partial<ICrudState>;
  isResetForm?: boolean;
  formType?: ICrudState['type'];
  refetch?: (res?: any) => Promise<any>;
  form?: FormInstance<any>;
};

/**
 * refetch func
 */
export const successAction = ({
  state = { loadingRefetch: false },
  refetch = async () => null,
  msg = 'Operation Successfully!',
  isResetForm = true,
  formType = 'form',
  form,
  isReload,
}: ISuccessAction = {}) => {
  const isBackTable = state.add && state.type !== 'table';

  !isReload && msg && message.success(msg);
  state.loadingRefetch = true;
  if (isBackTable) {
    setTimeout(() => {
      state.type = 'table';
    }, 200);
  }

  refetch &&
    state &&
    refetch().then((res) => {
      if (res.data) {
        isReload && message.success('The data is upto date!');
        if (state.type !== 'table') {
          state.type = formType;
        }
        if (isBackTable) {
          isResetForm && form?.resetFields();
          state.type = 'table';
        }
      }

      state.loadingRefetch = false;
    });
};
