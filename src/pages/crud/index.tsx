import { TableListCrud } from '@/components/Form/TableCrud';
import { FormLayout } from '@/components/NextLayout';
import { getFormWidth } from '@/utils/form';
import type { ProColumns } from '@ant-design/pro-table';
import type { IType } from './useIndex';
import { useScale } from './useIndex';

export default () => {
  const scaleProps = useScale();
  const { tableProps, loadingSubmit } = scaleProps || {};

  const columns: ProColumns<IType['record']>[] = [
    {
      title: 'No',
      dataIndex: 'id',
      align: 'left',
      valueType: 'index',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      align: 'left',
      valueType: 'text',
      formItemProps: {
        rules: [{ required: true }],
        ...getFormWidth(),
      },
    },
  ];
  return (
    <>
      <FormLayout loadingModal={loadingSubmit}>
        <TableListCrud {...{ ...tableProps, columns }} />
      </FormLayout>
    </>
  );
};
