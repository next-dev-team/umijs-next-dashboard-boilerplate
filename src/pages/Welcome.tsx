import { MinusCircleFilled, PlusCircleFilled } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import { Alert, Button, Card, Divider, Space } from 'antd';
import Text from 'antd/lib/typography/Text';
import Title from 'antd/lib/typography/Title';
import { useIntl, useModel } from 'umi';

export default () => {
  const { counter, decrement } = useModel('useCounter', (m) => ({
    counter: m.counter,
    decrement: m.decrement,
    increment: m.increment,
  }));
  const { formatMessage } = useIntl();

  return (
    <PageContainer>
      <Card>
        <Title>I18n</Title>

        <Alert
          message={formatMessage({ id: 'pages.layouts.userLayout.title' })}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
        <Divider />
        <Title>Global State</Title>
        <Space>
          <Button size="large" style={{ color: 'red' }} onClick={() => decrement(10)}>
            <MinusCircleFilled style={{ fontSize: 30 }} />
          </Button>
          <Text>{counter}</Text>
          <Button size="large" style={{ color: 'green' }} onClick={() => decrement(10)}>
            <PlusCircleFilled style={{ fontSize: 30 }} />
          </Button>
        </Space>
      </Card>
    </PageContainer>
  );
};
