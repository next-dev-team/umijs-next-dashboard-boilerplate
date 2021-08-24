import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { getToken } from '@next-dev/core/es/authority';
import { notification } from 'antd';
import { BASE_GRAPH_API } from './constant/http';
import { commonService } from './services/common/auth';

export const cache: InMemoryCache = new InMemoryCache({});

// const isDev = process.env.NODE_ENV === 'development';
const httpLink = new HttpLink({
  uri: BASE_GRAPH_API,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      'api-key': getToken()?.refreshToken,
      Authorization: `Bearer ${getToken()?.token}`,
    },
  };
});
// @ts-ignore
const errorLink = onError(async ({ graphQLErrors, networkError, forward, operation }) => {
  if (graphQLErrors) {
    // graphQLErrors.forEach(({ message, locations, path }) => {
    // console.log('message', message);
    for await (const err of graphQLErrors) {
      if (err?.extensions?.code === 401) {
        const newApi = await commonService.useRequestApiKey();
        // error code is set to UNAUTHENTICATED
        // when AuthenticationError thrown in resolver

        // modify the operation context with a new token
        const oldHeaders = operation.getContext().headers;
        operation.setContext({
          headers: {
            ...oldHeaders,
            authorization: newApi?.data,
          },
        });
        // retry the request, returning the new observable
        return forward(operation);
      }
      notification.error({ message: 'failed', description: 'Please try again!' });
    }
    //   notification.error({
    //     message: (
    //       <>
    //         [GraphQL error]: Message:
    //         <Text type="danger">{message}</Text>
    //         <br />
    //         Location:
    //         <Text type="danger">{JSON.stringify(locations)}</Text>
    //         <br />
    //         Path:
    //         {path && <Text type="danger">{path}</Text>}
    //       </>
    //     ),
    //   });
    // notification.error({ description: 'Something Went wrong. please try again!', message });
  }

  if (networkError) console.log(`[Network error]: ${networkError}`);
  return null;
});

const client = new ApolloClient({
  cache,
  // The `from` function combines an array of individual links
  // into a link chain
  link: from([errorLink, authLink.concat(httpLink)]),
  connectToDevTools: true,
  defaultOptions: {
    mutate: { errorPolicy: 'ignore' },
  },
});

export default client;
