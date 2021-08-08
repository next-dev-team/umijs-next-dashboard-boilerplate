import { AUTH_KEY } from '@/constant/http';
import { useLoginMutation, useRequestApiKeyMutation } from '@/graphQl/hooks';
import { getToken, setToken } from '@next-dev/core/es/authority';
import { message } from 'antd';
import { useEffect } from 'react';
import { history, useModel } from 'umi';

/**
 * login logic and state
 */

export const useLogin = () => {
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
        currentUser: userInfo as any,
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

  return {
    onLogin,
    loadingLogin,
    loadingRequestApiKey,
  };
};
