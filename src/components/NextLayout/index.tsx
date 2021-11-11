import type { ProCardProps } from '@ant-design/pro-card';
import ProCard from '@ant-design/pro-card';
import type { PageContainerProps } from '@ant-design/pro-layout';
import { PageContainer } from '@ant-design/pro-layout';
import type { CSSProperties, ReactNode } from 'react';
import { memo } from 'react';
import { useHistory } from 'umi';
import { LoadingModal } from '../FeedBack/LoadingModal';
import css from './index.less';

type ILayout = {
  children?: ReactNode;
  contentInnerStyle?: CSSProperties;
  cardProps?: ProCardProps;
  isEmptyLayout?: boolean;
  isShowBreadcrumb?: boolean;
  loadingModal?: boolean;
  isNormal?: boolean;
} & PageContainerProps;

const Layout = memo((props: ILayout) => {
  const {
    children,
    contentInnerStyle,
    cardProps,
    isEmptyLayout,
    isShowBreadcrumb = false,
    isNormal,
    loadingModal,
    ...rest
  } = props;
  const breadcrumb = isShowBreadcrumb ? {} : { breadcrumb: undefined };
  const { goBack } = useHistory();

  return (
    <>
      <LoadingModal isLoading={loadingModal} />
      <PageContainer
        {...{
          ...breadcrumb,
          className: isEmptyLayout ? css.next_layout : '',
          title: isEmptyLayout,
          onBack: goBack,
          ...rest,
        }}
      >
        {isNormal ? (
          children
        ) : (
          <ProCard direction="column" ghost gutter={[0]}>
            <ProCard
              {...{
                layout: 'center',
                style: {
                  minHeight: '80vh',
                  ...contentInnerStyle,
                },
                ...cardProps,
              }}
            >
              {children}
            </ProCard>
          </ProCard>
        )}
      </PageContainer>
    </>
  );
});

export default Layout;

/**
 * formLayout extend from NextLayout
 * @param props
 */
export const FormLayout = memo((props: ILayout) => {
  const { children, ...rest } = props;

  return (
    <>
      <Layout
        {...{
          isNormal: true,
          isShowBreadcrumb: true,
          ...rest,
        }}
      >
        {children}
      </Layout>
    </>
  );
});
