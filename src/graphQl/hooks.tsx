import type * as Types from './operations';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

const defaultOptions = {};

export const LogoutDocument = gql`
  mutation logout($accessKey: String!) {
    logout(accessKey: $accessKey)
  }
`;
export type LogoutMutationFn = Apollo.MutationFunction<
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
  baseOptions?: Apollo.MutationHookOptions<Types.LogoutMutation, Types.LogoutMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Types.LogoutMutation, Types.LogoutMutationVariables>(
    LogoutDocument,
    options,
  );
}
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<Types.LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<
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
export type LoginMutationFn = Apollo.MutationFunction<
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
  baseOptions?: Apollo.MutationHookOptions<Types.LoginMutation, Types.LoginMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Types.LoginMutation, Types.LoginMutationVariables>(
    LoginDocument,
    options,
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<Types.LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
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
export type RequestApiKeyMutationFn = Apollo.MutationFunction<
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
  baseOptions?: Apollo.MutationHookOptions<
    Types.RequestApiKeyMutation,
    Types.RequestApiKeyMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Types.RequestApiKeyMutation, Types.RequestApiKeyMutationVariables>(
    RequestApiKeyDocument,
    options,
  );
}
export type RequestApiKeyMutationHookResult = ReturnType<typeof useRequestApiKeyMutation>;
export type RequestApiKeyMutationResult = Apollo.MutationResult<Types.RequestApiKeyMutation>;
export type RequestApiKeyMutationOptions = Apollo.BaseMutationOptions<
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
  baseOptions?: Apollo.QueryHookOptions<Types.GetProfileQuery, Types.GetProfileQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.GetProfileQuery, Types.GetProfileQueryVariables>(
    GetProfileDocument,
    options,
  );
}
export function useGetProfileLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.GetProfileQuery, Types.GetProfileQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Types.GetProfileQuery, Types.GetProfileQueryVariables>(
    GetProfileDocument,
    options,
  );
}
export type GetProfileQueryHookResult = ReturnType<typeof useGetProfileQuery>;
export type GetProfileLazyQueryHookResult = ReturnType<typeof useGetProfileLazyQuery>;
export type GetProfileQueryResult = Apollo.QueryResult<
  Types.GetProfileQuery,
  Types.GetProfileQueryVariables
>;
