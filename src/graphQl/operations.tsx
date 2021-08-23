import type * as Types from './schemas';

export type LogoutMutationVariables = Types.Exact<{
  accessKey: Types.Scalars['String'];
}>;

export type LogoutMutation = { __typename?: 'Mutation'; logout: boolean };

export type LoginMutationVariables = Types.Exact<{
  password: Types.Scalars['String'];
  username: Types.Scalars['String'];
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  login: { __typename?: 'LoginType'; token?: Types.Maybe<string>; accessKey: string };
};

export type RequestApiKeyMutationVariables = Types.Exact<{
  authKey: Types.Scalars['String'];
}>;

export type RequestApiKeyMutation = {
  __typename?: 'Mutation';
  requestApiKey: { __typename?: 'AuthType'; apiKey: string };
};

export type GetProfileQueryVariables = Types.Exact<Record<string, never>>;

export type GetProfileQuery = {
  __typename?: 'Query';
  getProfile: {
    __typename?: 'ProfileType';
    id: string;
    type: string;
    accessKey: string;
    avatar?: Types.Maybe<string>;
    firstName: string;
    lastName: string;
    fullName: string;
    gender?: Types.Maybe<string>;
    dob?: Types.Maybe<any>;
    email: string;
    mobileDetail: { __typename?: 'MobileDetails'; mobileNumber?: Types.Maybe<string> };
    vendors: Types.Maybe<{
      __typename?: 'Vendor';
      company?: Types.Maybe<{
        __typename?: 'CompanyType';
        id: string;
        nameKh: string;
        nameEn?: Types.Maybe<string>;
      }>;
    }>[];
    employee?: Types.Maybe<{
      __typename?: 'EmployeeInfoType';
      hiredAt?: Types.Maybe<any>;
      company?: Types.Maybe<{
        __typename?: 'CompanyType';
        id: string;
        nameKh: string;
        nameEn?: Types.Maybe<string>;
      }>;
      companyBranch?: Types.Maybe<{
        __typename?: 'CompanyBranchType';
        id: string;
        nameKh?: Types.Maybe<string>;
        nameEn?: Types.Maybe<string>;
      }>;
      job?: Types.Maybe<{ __typename?: 'JobType'; id: string; title: string }>;
    }>;
  };
};
