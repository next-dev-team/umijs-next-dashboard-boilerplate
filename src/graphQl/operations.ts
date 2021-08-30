import type * as Types from './schemas';

export type GetActiveScalesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetActiveScalesQuery = { getActiveScales: Array<Pick<Types.ScaleType, 'id' | 'name'>> };

export type GetScalesQueryVariables = Types.Exact<{
  filter?: Types.Maybe<Types.ScaleFilter>;
}>;


export type GetScalesQuery = { getScales: { metadata: Types.Maybe<Pick<Types.Metadata, 'limit' | 'page' | 'total'>>, records: Types.Maybe<Array<Pick<Types.ScaleType, 'id' | 'name' | 'status' | 'updatedBy'>>> } };

export type UpdateScaleMutationVariables = Types.Exact<{
  input?: Types.Maybe<Types.ScaleUpdate>;
}>;


export type UpdateScaleMutation = Pick<Types.Mutation, 'updateScale'>;

export type CreateScaleMutationVariables = Types.Exact<{
  input?: Types.Maybe<Types.ScaleInput>;
}>;


export type CreateScaleMutation = { createScale: Pick<Types.ScaleType, 'id' | 'name' | 'status'> };

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


export type LoginMutation = { login: Pick<Types.LoginType, 'token' | 'accessKey'> };

export type RequestApiKeyMutationVariables = Types.Exact<{
  authKey: Types.Scalars['String'];
}>;


export type RequestApiKeyMutation = { requestApiKey: Pick<Types.AuthType, 'apiKey'> };

export type GetProfileQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetProfileQuery = { getProfile: (
    Pick<Types.ProfileType, 'id' | 'type' | 'accessKey' | 'avatar' | 'firstName' | 'lastName' | 'fullName' | 'gender' | 'dob' | 'email'>
    & { mobileDetail: Pick<Types.MobileDetails, 'mobileNumber'>, vendors: Array<Types.Maybe<{ company: Types.Maybe<Pick<Types.CompanyType, 'id' | 'nameKh' | 'nameEn'>> }>>, employee: Types.Maybe<(
      Pick<Types.EmployeeInfoType, 'hiredAt'>
      & { company: Types.Maybe<Pick<Types.CompanyType, 'id' | 'nameKh' | 'nameEn'>>, companyBranch: Types.Maybe<Pick<Types.CompanyBranchType, 'id' | 'nameKh' | 'nameEn'>>, job: Types.Maybe<Pick<Types.JobType, 'id' | 'title'>> }
    )> }
  ) };
