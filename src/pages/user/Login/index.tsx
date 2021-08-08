import Footer from '@/components/Footer';
import NextLayout from '@/components/NextLayout';
import { AUTH_KEY } from '@/constant/http';
import { useLoginMutation, useRequestApiKeyMutation } from '@/graphQl/hooks';
import NextSignIn from '@next-dev/component/es/Auth/SignIn';
import { getToken, setToken } from '@next-dev/core/es/authority';
import { message, Space } from 'antd';
import React, { useEffect } from 'react';
import { history, Link, useModel } from 'umi';
import styles from './index.less';

const Login: React.FC = () => {
  const [getRequestApiKey, { loading: loadingRequestApiKey, data: dataApiKey }] =
    useRequestApiKeyMutation({
      onCompleted: (res) => {
        if (res?.requestApiKey) {
          setToken({
            ...getToken(),
            refreshToken: res?.requestApiKey?.apiKey,
          });
        }
      },
    });

  const { initialState, setInitialState } = useModel('@@initialState');

  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();
    if (userInfo) {
      await setInitialState((s) => ({
        ...s,
        currentUser: userInfo,
      }));
    }
  };

  const [runLogin, { loading: loadingLogin }] = useLoginMutation({
    onCompleted: async (res) => {
      if (res?.login?.token) {
        /** setData to localStorage */
        setToken({
          ...getToken(),
          token: res?.login?.token,
          accessKey: res?.login?.accessKey,
        });

        message.success('login successfully!');

        await fetchUserInfo();

        /** This method will jump to the location of the redirect parameter */
        if (!history) return;
        const { query } = history.location;
        const { redirect } = query as { redirect: string };
        history.push(redirect || '/');
      }
    },
  });

  const onLogin = (val: { email: string; password: string }) => {
    // console.log('login val', val);
    if (val?.email && val?.password && dataApiKey?.requestApiKey) {
      runLogin({ variables: { password: val.password, username: val.email } });
    } else {
      message.warn('wait a second and try again!');
    }
  };

  useEffect(() => {
    getRequestApiKey({ variables: { authKey: AUTH_KEY } });
  }, [getRequestApiKey]);

  // console.log('data', data);

  return (
    <div className={styles.container}>
      <NextLayout
        isEmptyLayout
        style={{ paddingTop: '3%' }}
        contentInnerStyle={{ minHeight: '65vh' }}
        cardProps={{ bodyStyle: { backgroundColor: 'transparent' } }}
        pageHeaderRender={() => {
          return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Space direction="vertical" align="center" size="small">
                <Link to="/">
                  <img alt="logo" className={styles.logo} src="/logo.svg" />
                  <span className={styles.title}> Next Dev</span>
                </Link>
                <div className={styles.desc}>
                  Next Dev Boilerplate product ready front-end application framework.
                </div>
              </Space>
            </div>
          );
        }}
      >
        <NextSignIn
          {...{
            onFinish: onLogin,
            next: {
              forgotPassPath: '/d',
              registerPath: 'd',
              showRegister: true,
              isHasRemember: true,
              isWithoutEmail: true,
              verifyLink: 'dd',
              submitBtnProps: {
                loading: loadingLogin || loadingRequestApiKey,
              },
            },
          }}
        />
      </NextLayout>
      <Footer />
    </div>
  );
};

export default Login;
