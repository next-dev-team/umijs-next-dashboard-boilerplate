import type * as Types from './operations';

import gql from 'graphql-tag';
import type * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';

export const LogoutDocument = gql`
  mutation logout($accessKey: String!) {
    logout(accessKey: $accessKey)
  }
`;
export type LogoutMutationFn = ApolloReactCommon.MutationFunction<
  Types.LogoutMutation,
  Types.LogoutMutationVariables
>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *      accessKey: // value for 'accessKey'
 *   },
 * });
 */
export function useLogoutMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    Types.LogoutMutation,
    Types.LogoutMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<Types.LogoutMutation, Types.LogoutMutationVariables>(
    LogoutDocument,
    baseOptions,
  );
}
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = ApolloReactCommon.MutationResult<Types.LogoutMutation>;
export type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<
  Types.LogoutMutation,
  Types.LogoutMutationVariables
>;
export const LoginDocument = gql`
  mutation login($password: String!, $username: String!) {
    login(password: $password, username: $username) {
      token
      accessKey
    }
  }
`;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<
  Types.LoginMutation,
  Types.LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      password: // value for 'password'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    Types.LoginMutation,
    Types.LoginMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<Types.LoginMutation, Types.LoginMutationVariables>(
    LoginDocument,
    baseOptions,
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<Types.LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<
  Types.LoginMutation,
  Types.LoginMutationVariables
>;
export const RequestApiKeyDocument = gql`
  mutation requestApiKey($authKey: String!) {
    requestApiKey(authKey: $authKey) {
      apiKey
    }
  }
`;
export type RequestApiKeyMutationFn = ApolloReactCommon.MutationFunction<
  Types.RequestApiKeyMutation,
  Types.RequestApiKeyMutationVariables
>;

/**
 * __useRequestApiKeyMutation__
 *
 * To run a mutation, you first call `useRequestApiKeyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestApiKeyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestApiKeyMutation, { data, loading, error }] = useRequestApiKeyMutation({
 *   variables: {
 *      authKey: // value for 'authKey'
 *   },
 * });
 */
export function useRequestApiKeyMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    Types.RequestApiKeyMutation,
    Types.RequestApiKeyMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    Types.RequestApiKeyMutation,
    Types.RequestApiKeyMutationVariables
  >(RequestApiKeyDocument, baseOptions);
}
export type RequestApiKeyMutationHookResult = ReturnType<typeof useRequestApiKeyMutation>;
export type RequestApiKeyMutationResult =
  ApolloReactCommon.MutationResult<Types.RequestApiKeyMutation>;
export type RequestApiKeyMutationOptions = ApolloReactCommon.BaseMutationOptions<
  Types.RequestApiKeyMutation,
  Types.RequestApiKeyMutationVariables
>;
export const GetProfileDocument = gql`
  query getProfile {
    getProfile {
      id
      type
      accessKey
      avatar
      firstName
      lastName
      fullName
      gender
      dob
      email
      mobileDetail {
        mobileNumber
      }
      vendors {
        company {
          id
          nameKh
          nameEn
        }
      }
      employee {
        company {
          id
          nameKh
          nameEn
        }
        companyBranch {
          id
          nameKh
          nameEn
        }
        job {
          id
          title
        }
        hiredAt
      }
    }
  }
`;

/**
 * __useGetProfileQuery__
 *
 * To run a query within a React component, call `useGetProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProfileQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    Types.GetProfileQuery,
    Types.GetProfileQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<Types.GetProfileQuery, Types.GetProfileQueryVariables>(
    GetProfileDocument,
    baseOptions,
  );
}
export function useGetProfileLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    Types.GetProfileQuery,
    Types.GetProfileQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<Types.GetProfileQuery, Types.GetProfileQueryVariables>(
    GetProfileDocument,
    baseOptions,
  );
}
export type GetProfileQueryHookResult = ReturnType<typeof useGetProfileQuery>;
export type GetProfileLazyQueryHookResult = ReturnType<typeof useGetProfileLazyQuery>;
export type GetProfileQueryResult = ApolloReactCommon.QueryResult<
  Types.GetProfileQuery,
  Types.GetProfileQueryVariables
>;
