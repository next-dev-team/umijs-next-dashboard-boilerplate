import type * as Types from './schemas';

export type LogoutMutationVariables = Types.Exact<{
  accessKey: Types.Scalars['String'];
}>;

export type LogoutMutation = { __typename?: 'Mutation' } & Pick<Types.Mutation, 'logout'>;

export type LoginMutationVariables = Types.Exact<{
  password: Types.Scalars['String'];
  username: Types.Scalars['String'];
}>;

export type LoginMutation = { __typename?: 'Mutation' } & {
  login: { __typename?: 'LoginType' } & Pick<Types.LoginType, 'token' | 'accessKey'>;
};

export type RequestApiKeyMutationVariables = Types.Exact<{
  authKey: Types.Scalars['String'];
}>;

export type RequestApiKeyMutation = { __typename?: 'Mutation' } & {
  requestApiKey: { __typename?: 'AuthType' } & Pick<Types.AuthType, 'apiKey'>;
};

export type GetProfileQueryVariables = Types.Exact<Record<string, never>>;

export type GetProfileQuery = { __typename?: 'Query' } & {
  getProfile: { __typename?: 'ProfileType' } & Pick<
    Types.ProfileType,
    | 'id'
    | 'type'
    | 'accessKey'
    | 'avatar'
    | 'firstName'
    | 'lastName'
    | 'fullName'
    | 'gender'
    | 'dob'
    | 'email'
  > & {
      mobileDetail: { __typename?: 'MobileDetails' } & Pick<Types.MobileDetails, 'mobileNumber'>;
      vendors: Types.Maybe<
        { __typename?: 'Vendor' } & {
          company?: Types.Maybe<
            { __typename?: 'CompanyType' } & Pick<Types.CompanyType, 'id' | 'nameKh' | 'nameEn'>
          >;
        }
      >[];
      employee?: Types.Maybe<
        { __typename?: 'EmployeeInfoType' } & Pick<Types.EmployeeInfoType, 'hiredAt'> & {
            company?: Types.Maybe<
              { __typename?: 'CompanyType' } & Pick<Types.CompanyType, 'id' | 'nameKh' | 'nameEn'>
            >;
            companyBranch?: Types.Maybe<
              { __typename?: 'CompanyBranchType' } & Pick<
                Types.CompanyBranchType,
                'id' | 'nameKh' | 'nameEn'
              >
            >;
            job?: Types.Maybe<{ __typename?: 'JobType' } & Pick<Types.JobType, 'id' | 'title'>>;
          }
      >;
    };
};
