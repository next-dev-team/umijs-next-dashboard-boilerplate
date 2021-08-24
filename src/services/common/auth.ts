import { AUTH_KEY } from '@/constant/http';
import { GetProfileDocument, RequestApiKeyDocument } from '@/graphQl/hooks';
import { axiosRequest } from '@/utils/axios-request';
import { print } from 'graphql';

/**
 * some of our boilerplate can't use apollo hook like in initial state
 * so we use mix with axiosRequest
 */

export const commonService = {
  userProfile: async () => {
    return await axiosRequest({
      data: {
        query: `${print(GetProfileDocument)}`,
      },
    });
  },
  useRequestApiKey: async () => {
    return await axiosRequest({
      data: {
        variables: { authKey: AUTH_KEY },
        query: `${print(RequestApiKeyDocument)}`,
      },
    });
  },
};
