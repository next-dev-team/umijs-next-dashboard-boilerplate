import type * as Types from './operations';

import gql from 'graphql-tag';
import type * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';

export const GetActiveScalesDocument = gql`
    query getActiveScales {
  getActiveScales {
    id
    name
  }
}
    `;
export function useGetActiveScalesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Types.GetActiveScalesQuery, Types.GetActiveScalesQueryVariables>) {
        return ApolloReactHooks.useQuery<Types.GetActiveScalesQuery, Types.GetActiveScalesQueryVariables>(GetActiveScalesDocument, baseOptions);
      }
export function useGetActiveScalesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetActiveScalesQuery, Types.GetActiveScalesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<Types.GetActiveScalesQuery, Types.GetActiveScalesQueryVariables>(GetActiveScalesDocument, baseOptions);
        }
export type GetActiveScalesQueryHookResult = ReturnType<typeof useGetActiveScalesQuery>;
export type GetActiveScalesLazyQueryHookResult = ReturnType<typeof useGetActiveScalesLazyQuery>;
export type GetActiveScalesQueryResult = ApolloReactCommon.QueryResult<Types.GetActiveScalesQuery, Types.GetActiveScalesQueryVariables>;
export const GetScalesDocument = gql`
    query getScales($filter: ScaleFilter = {}) {
  getScales(filter: $filter) {
    metadata {
      limit
      page
      total
    }
    records {
      id
      name
      status
      updatedBy
    }
  }
}
    `;
export function useGetScalesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Types.GetScalesQuery, Types.GetScalesQueryVariables>) {
        return ApolloReactHooks.useQuery<Types.GetScalesQuery, Types.GetScalesQueryVariables>(GetScalesDocument, baseOptions);
      }
export function useGetScalesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetScalesQuery, Types.GetScalesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<Types.GetScalesQuery, Types.GetScalesQueryVariables>(GetScalesDocument, baseOptions);
        }
export type GetScalesQueryHookResult = ReturnType<typeof useGetScalesQuery>;
export type GetScalesLazyQueryHookResult = ReturnType<typeof useGetScalesLazyQuery>;
export type GetScalesQueryResult = ApolloReactCommon.QueryResult<Types.GetScalesQuery, Types.GetScalesQueryVariables>;
export const UpdateScaleDocument = gql`
    mutation updateScale($input: ScaleUpdate = {id: ""}) {
  updateScale(input: $input)
}
    `;
export type UpdateScaleMutationFn = ApolloReactCommon.MutationFunction<Types.UpdateScaleMutation, Types.UpdateScaleMutationVariables>;
export function useUpdateScaleMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.UpdateScaleMutation, Types.UpdateScaleMutationVariables>) {
        return ApolloReactHooks.useMutation<Types.UpdateScaleMutation, Types.UpdateScaleMutationVariables>(UpdateScaleDocument, baseOptions);
      }
export type UpdateScaleMutationHookResult = ReturnType<typeof useUpdateScaleMutation>;
export type UpdateScaleMutationResult = ApolloReactCommon.MutationResult<Types.UpdateScaleMutation>;
export type UpdateScaleMutationOptions = ApolloReactCommon.BaseMutationOptions<Types.UpdateScaleMutation, Types.UpdateScaleMutationVariables>;
export const CreateScaleDocument = gql`
    mutation createScale($input: ScaleInput = {name: ""}) {
  createScale(input: $input) {
    id
    name
    status
  }
}
    `;
export type CreateScaleMutationFn = ApolloReactCommon.MutationFunction<Types.CreateScaleMutation, Types.CreateScaleMutationVariables>;
export function useCreateScaleMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.CreateScaleMutation, Types.CreateScaleMutationVariables>) {
        return ApolloReactHooks.useMutation<Types.CreateScaleMutation, Types.CreateScaleMutationVariables>(CreateScaleDocument, baseOptions);
      }
export type CreateScaleMutationHookResult = ReturnType<typeof useCreateScaleMutation>;
export type CreateScaleMutationResult = ApolloReactCommon.MutationResult<Types.CreateScaleMutation>;
export type CreateScaleMutationOptions = ApolloReactCommon.BaseMutationOptions<Types.CreateScaleMutation, Types.CreateScaleMutationVariables>;
export const DeleteScaleDocument = gql`
    mutation deleteScale($id: String = "") {
  deleteScale(id: $id)
}
    `;
export type DeleteScaleMutationFn = ApolloReactCommon.MutationFunction<Types.DeleteScaleMutation, Types.DeleteScaleMutationVariables>;
export function useDeleteScaleMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.DeleteScaleMutation, Types.DeleteScaleMutationVariables>) {
        return ApolloReactHooks.useMutation<Types.DeleteScaleMutation, Types.DeleteScaleMutationVariables>(DeleteScaleDocument, baseOptions);
      }
export type DeleteScaleMutationHookResult = ReturnType<typeof useDeleteScaleMutation>;
export type DeleteScaleMutationResult = ApolloReactCommon.MutationResult<Types.DeleteScaleMutation>;
export type DeleteScaleMutationOptions = ApolloReactCommon.BaseMutationOptions<Types.DeleteScaleMutation, Types.DeleteScaleMutationVariables>;
export const LogoutDocument = gql`
    mutation logout($accessKey: String!) {
  logout(accessKey: $accessKey)
}
    `;
export type LogoutMutationFn = ApolloReactCommon.MutationFunction<Types.LogoutMutation, Types.LogoutMutationVariables>;
export function useLogoutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.LogoutMutation, Types.LogoutMutationVariables>) {
        return ApolloReactHooks.useMutation<Types.LogoutMutation, Types.LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = ApolloReactCommon.MutationResult<Types.LogoutMutation>;
export type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<Types.LogoutMutation, Types.LogoutMutationVariables>;
export const LoginDocument = gql`
    mutation login($password: String!, $username: String!) {
  login(password: $password, username: $username) {
    token
    accessKey
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<Types.LoginMutation, Types.LoginMutationVariables>;
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.LoginMutation, Types.LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<Types.LoginMutation, Types.LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<Types.LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<Types.LoginMutation, Types.LoginMutationVariables>;
export const RequestApiKeyDocument = gql`
    mutation requestApiKey($authKey: String!) {
  requestApiKey(authKey: $authKey) {
    apiKey
  }
}
    `;
export type RequestApiKeyMutationFn = ApolloReactCommon.MutationFunction<Types.RequestApiKeyMutation, Types.RequestApiKeyMutationVariables>;
export function useRequestApiKeyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.RequestApiKeyMutation, Types.RequestApiKeyMutationVariables>) {
        return ApolloReactHooks.useMutation<Types.RequestApiKeyMutation, Types.RequestApiKeyMutationVariables>(RequestApiKeyDocument, baseOptions);
      }
export type RequestApiKeyMutationHookResult = ReturnType<typeof useRequestApiKeyMutation>;
export type RequestApiKeyMutationResult = ApolloReactCommon.MutationResult<Types.RequestApiKeyMutation>;
export type RequestApiKeyMutationOptions = ApolloReactCommon.BaseMutationOptions<Types.RequestApiKeyMutation, Types.RequestApiKeyMutationVariables>;
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
export function useGetProfileQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Types.GetProfileQuery, Types.GetProfileQueryVariables>) {
        return ApolloReactHooks.useQuery<Types.GetProfileQuery, Types.GetProfileQueryVariables>(GetProfileDocument, baseOptions);
      }
export function useGetProfileLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetProfileQuery, Types.GetProfileQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<Types.GetProfileQuery, Types.GetProfileQueryVariables>(GetProfileDocument, baseOptions);
        }
export type GetProfileQueryHookResult = ReturnType<typeof useGetProfileQuery>;
export type GetProfileLazyQueryHookResult = ReturnType<typeof useGetProfileLazyQuery>;
export type GetProfileQueryResult = ApolloReactCommon.QueryResult<Types.GetProfileQuery, Types.GetProfileQueryVariables>;