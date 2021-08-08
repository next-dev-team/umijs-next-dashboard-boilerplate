import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { getToken } from '@next-dev/core/es/authority';
import { notification } from 'antd';
import Text from 'antd/lib/typography/Text';

export const cache: InMemoryCache = new InMemoryCache({});
const isDev = process.env.NODE_ENV === 'development';
const httpLink = new HttpLink({
  uri: 'https://ybiztech-pos-api.herokuapp.com/graphql',
  headers: {
    'api-key': getToken()?.refreshToken,
    Authorization: `Bearer ${getToken()?.token}`,
  },
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      if (isDev) {
        notification.error({
          message: (
            <>
              [GraphQL error]: Message:
              <Text type="danger">{message}</Text>
              <br />
              Location:
              <Text type="danger">{JSON.stringify(locations)}</Text>
              <br />
              Path:
              {path && <Text type="danger">{path}</Text>}
            </>
          ),
        });
      } else {
        notification.error({ description: 'Something Went wrong. please try again!', message });
      }
    });
  }

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
  cache,
  // The `from` function combines an array of individual links
  // into a link chain
  link: from([errorLink, httpLink]),
  connectToDevTools: true,
  defaultOptions: {
    mutate: { errorPolicy: 'ignore' },
  },
});

export default client;
