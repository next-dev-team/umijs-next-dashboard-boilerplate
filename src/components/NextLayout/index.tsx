import type { ProCardProps } from '@ant-design/pro-card';
import ProCard from '@ant-design/pro-card';
import type { PageContainerProps } from '@ant-design/pro-layout';
import { PageContainer } from '@ant-design/pro-layout';
import type { CSSProperties, ReactNode } from 'react';
import { memo } from 'react';
import css from './index.less';
import { NextSettingDrawer } from './NextSettingDrawer';

type ILayout = {
  children?: ReactNode;
  contentInnerStyle?: CSSProperties;
  cardProps?: ProCardProps;
  isEmptyLayout?: boolean;
  isShowBreadcrumb?: boolean;
  isNormal?: boolean;
  IS_PRE?: boolean;
} & PageContainerProps;

const Layout = memo((props: ILayout) => {
  const {
    children,
    contentInnerStyle,
    cardProps,
    isEmptyLayout,
    isShowBreadcrumb = false,
    isNormal,
    IS_PRE,
    ...rest
  } = props;
  const breadcrumb = isShowBreadcrumb ? {} : { breadcrumb: undefined };

  return (
    <>
      <PageContainer
        {...{
          ...breadcrumb,
          className: isEmptyLayout ? css.next_layout : '',
          title: isEmptyLayout,
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
                  backgroundColor: 'transparent',
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
      {IS_PRE && <NextSettingDrawer />}
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
    <Layout
      {...{
        isNormal: true,
        isShowBreadcrumb: true,
        ...rest,
      }}
    >
      {children}
    </Layout>
  );
});
