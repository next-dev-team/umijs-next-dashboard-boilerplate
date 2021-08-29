import type * as Types from './schemas';

export type GetActiveScalesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetActiveScalesQuery = { readonly getActiveScales: ReadonlyArray<Pick<Types.ScaleType, 'id' | 'name'>> };

export type GetScalesQueryVariables = Types.Exact<{
  filter?: Types.Maybe<Types.ScaleFilter>;
}>;


export type GetScalesQuery = { readonly getScales: { readonly metadata: Types.Maybe<Pick<Types.Metadata, 'limit' | 'page' | 'total'>>, readonly records: Types.Maybe<ReadonlyArray<Pick<Types.ScaleType, 'id' | 'name' | 'status' | 'updatedBy'>>> } };

export type UpdateScaleMutationVariables = Types.Exact<{
  input?: Types.Maybe<Types.ScaleUpdate>;
}>;


export type UpdateScaleMutation = Pick<Types.Mutation, 'updateScale'>;

export type CreateScaleMutationVariables = Types.Exact<{
  input?: Types.Maybe<Types.ScaleInput>;
}>;


export type CreateScaleMutation = { readonly createScale: Pick<Types.ScaleType, 'id' | 'name' | 'status'> };

export type DeleteScaleMutationVariables = Types.Exact<{
  id?: Types.Maybe<Types.Scalars['String']>;
}>;


export type DeleteScaleMutation = Pick<Types.Mutation, 'deleteScale'>;

export type LogoutMutationVariables = Types.Exact<{
  accessKey: Types.Scalars['String'];
}>;


export type LogoutMutation = Pick<Types.Mutation, 'logout'>;

export type LoginMutationVariables = Types.Exact<{
  password: Types.Scalars['String'];
  username: Types.Scalars['String'];
}>;


export type LoginMutation = { readonly login: Pick<Types.LoginType, 'token' | 'accessKey'> };

export type RequestApiKeyMutationVariables = Types.Exact<{
  authKey: Types.Scalars['String'];
}>;


export type RequestApiKeyMutation = { readonly requestApiKey: Pick<Types.AuthType, 'apiKey'> };

export type GetProfileQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetProfileQuery = { readonly getProfile: (
    Pick<Types.ProfileType, 'id' | 'type' | 'accessKey' | 'avatar' | 'firstName' | 'lastName' | 'fullName' | 'gender' | 'dob' | 'email'>
    & { readonly mobileDetail: Pick<Types.MobileDetails, 'mobileNumber'>, readonly vendors: ReadonlyArray<Types.Maybe<{ readonly company: Types.Maybe<Pick<Types.CompanyType, 'id' | 'nameKh' | 'nameEn'>> }>>, readonly employee: Types.Maybe<(
      Pick<Types.EmployeeInfoType, 'hiredAt'>
      & { readonly company: Types.Maybe<Pick<Types.CompanyType, 'id' | 'nameKh' | 'nameEn'>>, readonly companyBranch: Types.Maybe<Pick<Types.CompanyBranchType, 'id' | 'nameKh' | 'nameEn'>>, readonly job: Types.Maybe<Pick<Types.JobType, 'id' | 'title'>> }
    )> }
  ) };
