import Footer from '@/components/Footer';
import RightContent from '@/components/RightContent';
import { BookOutlined } from '@ant-design/icons';
import type { Settings as LayoutSettings } from '@ant-design/pro-layout';
import { PageLoading } from '@ant-design/pro-layout';
import { enUSIntl, IntlProvider } from '@ant-design/pro-table';
import { ApolloProvider } from '@apollo/client';
import '@next-dev/component/es/style/index.less';
import validateMessages from '@next-dev/core/es/validation';
import { ConfigProvider } from 'antd';
import enUS from 'antd/lib/locale/en_US';
import React from 'react';
import type { RunTimeLayoutConfig } from 'umi';
import { history, Link } from 'umi';
import client from './client';
import type { GetProfileQuery } from './graphQl/operations';
import { commonService } from './services/common/auth';

const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';

/** When obtaining user information is slow, a loading */
export const initialStateConfig = {
  loading: <PageLoading />,
};

/**
 * initState also check user if unsuccess will push to login
 * @see https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */

export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: GetProfileQuery['getProfile'];
  fetchUserInfo?: () => Promise<GetProfileQuery | undefined>;
}> {
  const fetchUserInfo = async () => {
    const msg = await commonService.userProfile();
    const getProfile = msg?.data?.data?.getProfile;
    if (!getProfile) {
      history.push(loginPath);
      return undefined;
    }
    return getProfile;
  };
  // If it is a login page, do not execute
  if (history.location.pathname !== loginPath) {
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      currentUser,
      settings: {},
    };
  }
  return {
    fetchUserInfo,
    settings: {},
  };
}

/**
 *  Root App
 *
 */
const RootApp = (props: any) => {
  const { children, routes } = props;

  // console.log('routes', routes);

  return (
    <ConfigProvider
      {...{
        form: { validateMessages },
        input: {
          autoComplete: 'off',
        },
        locale: enUS,
      }}
    >
      <IntlProvider
        value={{
          intl: enUSIntl,
          valueTypeMap: {},
        }}
      >
        <ApolloProvider client={client}>
          {React.cloneElement(children, {
            ...children.props,
            routes,
          })}
        </ApolloProvider>
      </IntlProvider>
    </ConfigProvider>
  );
};

export function rootContainer(container: any) {
  return React.createElement(RootApp, null, container);
}

// API supported by ProLayout https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    footerRender: () => <Footer />,
    onPageChange: () => {
      const { location } = history;
      // If you are not logged in, redirect to login
      if (!initialState?.currentUser && location.pathname !== loginPath) {
        history.push(loginPath);
      }
    },
    links: isDev
      ? [
          <Link key="doc" to="/~docs">
            <BookOutlined />
            <span>component documentation</span>
          </Link>,
        ]
      : [],
    menuHeaderRender: undefined,
    // Customize the 403 page
    // unAccessible: <div>unAccessible</div>,
    ...initialState?.settings,
  };
};
