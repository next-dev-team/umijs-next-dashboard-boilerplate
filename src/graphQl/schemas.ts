export type Maybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AddressInfoInput = {
  readonly provinceId: Scalars['ID'];
  readonly districtId: Scalars['ID'];
  readonly communeId: Scalars['ID'];
  readonly villageId: Maybe<Scalars['ID']>;
  readonly streetNo: Maybe<Scalars['String']>;
  readonly group: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
};

export type AddressInfoType = {
  readonly __typename?: 'AddressInfoType';
  readonly provinceId: Scalars['ID'];
  readonly province: Maybe<ProvinceType>;
  readonly districtId: Maybe<Scalars['ID']>;
  readonly district: Maybe<DistrictType>;
  readonly communeId: Maybe<Scalars['ID']>;
  readonly commune: Maybe<CommuneType>;
  readonly villageId: Maybe<Scalars['ID']>;
  readonly village: Maybe<VillageType>;
  readonly streetNo: Maybe<Scalars['String']>;
  readonly group: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
};

export type AdminInput = {
  readonly avatar: Maybe<Scalars['String']>;
  readonly firstName: Scalars['String'];
  readonly lastName: Scalars['String'];
  readonly gender: GenderEnum;
  readonly dob: Scalars['DateTime'];
  readonly email: Scalars['String'];
  readonly mobileDetail: MobileDetailInput;
};

export type AdminType = {
  readonly __typename?: 'AdminType';
  readonly createdBy: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly updatedBy: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly id: Scalars['ID'];
  readonly avatar: Maybe<Scalars['String']>;
  readonly firstName: Scalars['String'];
  readonly lastName: Scalars['String'];
  readonly fullName: Scalars['String'];
  readonly username: Maybe<Scalars['String']>;
  readonly gender: Maybe<Scalars['String']>;
  readonly dob: Maybe<Scalars['DateTime']>;
  readonly email: Scalars['String'];
  readonly mobileDetail: MobileDetails;
  readonly mobileNumber: Scalars['String'];
  readonly accessKey: Scalars['String'];
  readonly status: Maybe<Scalars['String']>;
};

export type AdminUpdate = {
  readonly avatar: Maybe<Scalars['String']>;
  readonly firstName: Maybe<Scalars['String']>;
  readonly lastName: Maybe<Scalars['String']>;
  readonly gender: Maybe<GenderEnum>;
  readonly dob: Maybe<Scalars['DateTime']>;
  readonly mobileDetail: Maybe<MobileDetailInput>;
  readonly status: Maybe<StatusEnum>;
};

export type AuthType = {
  readonly __typename?: 'AuthType';
  readonly apiKey: Scalars['String'];
};

export type CalculateSaleOrderInput = {
  readonly orderId: Scalars['ID'];
  readonly paymentReceived: ReadonlyArray<PaymentReceivedInput>;
  readonly paymentMethod: Maybe<PaymentTypeEnum>;
  readonly discountId: Maybe<Scalars['ID']>;
};

export type CalculateSaleOrderType = {
  readonly __typename?: 'CalculateSaleOrderType';
  readonly totalAmount: Scalars['Float'];
  readonly vatAmount: Scalars['Float'];
  readonly subAmount: Scalars['Float'];
  readonly changedAmount: Scalars['Float'];
  readonly discountAmount: Scalars['Float'];
  readonly exchangedRateAmount: Maybe<ReadonlyArray<ExchangedRateAmountType>>;
};

export type CategoriesFilter = {
  readonly status: Maybe<ReadonlyArray<StatusEnum>>;
  readonly limit: Maybe<Scalars['Int']>;
  readonly page: Maybe<Scalars['Int']>;
  readonly name: Maybe<Scalars['String']>;
  readonly code: Maybe<Scalars['String']>;
};

export type CategoriesInput = {
  readonly name: Scalars['String'];
  readonly code: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly color: Maybe<Scalars['String']>;
  readonly image: Maybe<Scalars['String']>;
};

export type CategoriesType = {
  readonly __typename?: 'CategoriesType';
  readonly createdBy: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly updatedBy: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly code: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly color: Maybe<Scalars['String']>;
  readonly image: Maybe<Scalars['String']>;
  readonly status: Maybe<Scalars['String']>;
};

export type CategoriesUpdate = {
  readonly id: Scalars['ID'];
  readonly name: Maybe<Scalars['String']>;
  readonly code: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly color: Maybe<Scalars['String']>;
  readonly image: Maybe<Scalars['String']>;
  readonly status: Maybe<StatusEnum>;
};

export type CdnFilter = {
  readonly id: Maybe<Scalars['ID']>;
  readonly title: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
};

export type CdnInput = {
  readonly title: Maybe<Scalars['String']>;
  readonly url: Scalars['String'];
};

export type CdnType = {
  readonly __typename?: 'CdnType';
  readonly createdBy: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly updatedBy: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly id: Scalars['ID'];
  readonly title: Maybe<Scalars['String']>;
  readonly url: Scalars['String'];
};

export type CdnUpdate = {
  readonly id: Scalars['ID'];
  readonly title: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
};

export type CommuneFilter = {
  readonly status: Maybe<ReadonlyArray<StatusEnum>>;
  readonly limit: Maybe<Scalars['Int']>;
  readonly page: Maybe<Scalars['Int']>;
  readonly provinceId: Maybe<Scalars['String']>;
  readonly districtId: Maybe<Scalars['String']>;
  readonly nameKh: Maybe<Scalars['String']>;
  readonly nameEn: Maybe<Scalars['String']>;
};

export type CommuneSuggestedFilter = {
  readonly provinceId: Maybe<Scalars['String']>;
  readonly districtId: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
};

export type CommuneType = {
  readonly __typename?: 'CommuneType';
  readonly createdBy: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly updatedBy: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly id: Scalars['ID'];
  readonly uId: Maybe<Scalars['String']>;
  readonly provinceId: Maybe<Scalars['String']>;
  readonly province: Maybe<ProvinceType>;
  readonly districtId: Maybe<Scalars['String']>;
  readonly district: Maybe<DistrictType>;
  readonly nameKh: Maybe<Scalars['String']>;
  readonly nameEn: Maybe<Scalars['String']>;
  readonly status: Maybe<Scalars['String']>;
};

export type CommuneUpdate = {
  readonly id: Scalars['ID'];
  readonly nameKh: Scalars['String'];
  readonly nameEn: Scalars['String'];
  readonly status: Maybe<StatusEnum>;
};

export type CompanyBranchInput = {
  readonly nameKh: Scalars['String'];
  readonly nameEn: Maybe<Scalars['String']>;
};

export type CompanyBranchType = {
  readonly __typename?: 'CompanyBranchType';
  readonly id: Scalars['ID'];
  readonly nameKh: Maybe<Scalars['String']>;
  readonly nameEn: Maybe<Scalars['String']>;
};

export type CompanyDetailInput = {
  readonly countryId: Maybe<Scalars['String']>;
  readonly provinceId: Maybe<Scalars['String']>;
  readonly districtId: Maybe<Scalars['String']>;
  readonly communeId: Maybe<Scalars['String']>;
  readonly villageId: Maybe<Scalars['String']>;
  readonly mobileNumber: Scalars['String'];
  readonly phoneNumber: Maybe<Scalars['String']>;
  readonly webUrl: Maybe<Scalars['String']>;
  readonly postalCode: Maybe<Scalars['String']>;
};

export type CompanyDetailType = {
  readonly __typename?: 'CompanyDetailType';
  readonly countryId: Maybe<Scalars['ID']>;
  readonly country: Maybe<CountryType>;
  readonly provinceId: Maybe<Scalars['ID']>;
  readonly province: Maybe<ProvinceType>;
  readonly districtId: Maybe<Scalars['ID']>;
  readonly district: Maybe<DistrictType>;
  readonly communeId: Maybe<Scalars['ID']>;
  readonly commune: Maybe<CommuneType>;
  readonly villageId: Maybe<Scalars['ID']>;
  readonly village: Maybe<VillageType>;
  readonly streetNo: Maybe<Scalars['String']>;
  readonly group: Maybe<Scalars['String']>;
  readonly phoneNumber: Maybe<Scalars['String']>;
  readonly mobileNumber: Maybe<Scalars['String']>;
  readonly webUrl: Maybe<Scalars['String']>;
  readonly postalCode: Maybe<Scalars['String']>;
};

export type CompanyFilter = {
  readonly status: Maybe<ReadonlyArray<StatusEnum>>;
  readonly limit: Maybe<Scalars['Int']>;
  readonly page: Maybe<Scalars['Int']>;
  readonly userId: Maybe<Scalars['ID']>;
  readonly nameKh: Maybe<Scalars['String']>;
  readonly nameEn: Maybe<Scalars['String']>;
  readonly isExistedBranch: Maybe<Scalars['Boolean']>;
};

export type CompanyInput = {
  readonly userId: Scalars['ID'];
  readonly nameKh: Scalars['String'];
  readonly nameEn: Maybe<Scalars['String']>;
  readonly status: Maybe<StatusEnum>;
  readonly profile: CompanyDetailInput;
  readonly branches: Maybe<ReadonlyArray<CompanyBranchInput>>;
};

export type CompanyProfileInput = {
  readonly nameKh: Scalars['String'];
  readonly nameEn: Maybe<Scalars['String']>;
  readonly countryId: Maybe<Scalars['ID']>;
  readonly provinceId: Maybe<Scalars['ID']>;
  readonly districtId: Maybe<Scalars['ID']>;
  readonly communeId: Maybe<Scalars['ID']>;
  readonly villageId: Maybe<Scalars['ID']>;
  readonly streetNo: Maybe<Scalars['String']>;
  readonly group: Maybe<Scalars['String']>;
  readonly phoneNumber: Maybe<Scalars['ID']>;
  readonly mobileNumber: Maybe<Scalars['ID']>;
  readonly postalCode: Maybe<Scalars['ID']>;
};

export type CompanyType = {
  readonly __typename?: 'CompanyType';
  readonly createdBy: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly updatedBy: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly id: Scalars['ID'];
  readonly user: Maybe<VendorType>;
  readonly nameKh: Scalars['String'];
  readonly nameEn: Maybe<Scalars['String']>;
  readonly isExistedBranch: Scalars['Boolean'];
  readonly status: Maybe<Scalars['String']>;
  readonly profile: Maybe<CompanyDetailType>;
  readonly branches: Maybe<ReadonlyArray<CompanyBranchType>>;
};

export type CompanyUpdate = {
  readonly id: Scalars['ID'];
  readonly nameKh: Maybe<Scalars['String']>;
  readonly nameEn: Maybe<Scalars['String']>;
  readonly status: Maybe<StatusEnum>;
};

export type ConclusionPaymentType = {
  readonly __typename?: 'ConclusionPaymentType';
  readonly userId: Maybe<Scalars['ID']>;
  readonly user: Maybe<RoomUserType>;
  readonly totalPaid: Maybe<Scalars['Float']>;
  readonly receivedOrOwedAmount: Maybe<Scalars['Float']>;
};

export type CountryFilter = {
  readonly status: Maybe<ReadonlyArray<StatusEnum>>;
  readonly limit: Maybe<Scalars['Int']>;
  readonly page: Maybe<Scalars['Int']>;
  readonly id: Maybe<Scalars['ID']>;
  readonly nameKh: Maybe<Scalars['String']>;
  readonly nameEn: Maybe<Scalars['String']>;
};

export type CountryType = {
  readonly __typename?: 'CountryType';
  readonly createdBy: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly updatedBy: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly id: Scalars['ID'];
  readonly nameKh: Maybe<Scalars['String']>;
  readonly nameEn: Maybe<Scalars['String']>;
  readonly status: Maybe<Scalars['String']>;
};

export type CountryUpdate = {
  readonly id: Scalars['ID'];
  readonly nameKh: Scalars['String'];
  readonly nameEn: Scalars['String'];
  readonly status: Maybe<StatusEnum>;
};

export type CurrencyCodeEnum =
  | 'USD'
  | 'KHR';

export type CurrencyFilter = {
  readonly id: Maybe<Scalars['ID']>;
  readonly code: Maybe<CurrencyCodeEnum>;
  readonly name: Maybe<Scalars['String']>;
  readonly roundType: Maybe<RoundTypeEnum>;
  readonly status: Maybe<ReadonlyArray<StatusEnum>>;
};

export type CurrencyInput = {
  readonly code: Maybe<CurrencyCodeEnum>;
  readonly name: Scalars['String'];
  readonly roundType: Maybe<RoundTypeEnum>;
  readonly decimal: Scalars['Float'];
};

export type CurrencyRateFilter = {
  readonly status: Maybe<ReadonlyArray<StatusEnum>>;
  readonly limit: Maybe<Scalars['Int']>;
  readonly page: Maybe<Scalars['Int']>;
  readonly baseCurrencyCode: Maybe<CurrencyCodeEnum>;
  readonly exchangeCurrencyCode: Maybe<CurrencyCodeEnum>;
};

export type CurrencyRateInput = {
  readonly baseCurrencyCode: CurrencyCodeEnum;
  readonly exchangeCurrencyCode: CurrencyCodeEnum;
  readonly rate: Scalars['Float'];
};

export type CurrencyRateType = {
  readonly __typename?: 'CurrencyRateType';
  readonly createdBy: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly updatedBy: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly id: Scalars['ID'];
  readonly baseCurrencyCode: Scalars['String'];
  readonly exchangeCurrencyCode: Scalars['String'];
  readonly rate: Scalars['Float'];
  readonly status: Maybe<Scalars['String']>;
};

export type CurrencyRateUpdate = {
  readonly id: Scalars['ID'];
  readonly baseCurrencyCode: Maybe<CurrencyCodeEnum>;
  readonly exchangeCurrencyCode: Maybe<CurrencyCodeEnum>;
  readonly rate: Maybe<Scalars['Float']>;
  readonly status: Maybe<StatusEnum>;
};

export type CurrencyType = {
  readonly __typename?: 'CurrencyType';
  readonly createdBy: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly updatedBy: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly id: Scalars['ID'];
  readonly code: Scalars['String'];
  readonly name: Scalars['String'];
  readonly roundType: Scalars['String'];
  readonly decimal: Scalars['Float'];
  readonly isDefault: Scalars['Boolean'];
  readonly status: Maybe<Scalars['String']>;
};

export type CurrencyUpdate = {
  readonly id: Scalars['ID'];
  readonly code: Maybe<CurrencyCodeEnum>;
  readonly name: Scalars['String'];
  readonly roundType: Maybe<RoundTypeEnum>;
  readonly decimal: Maybe<Scalars['Float']>;
  readonly status: Maybe<StatusEnum>;
};

export type CustomerInput = {
  readonly avatar: Maybe<Scalars['String']>;
  readonly firstName: Scalars['String'];
  readonly lastName: Scalars['String'];
  readonly gender: GenderEnum;
  readonly mobileDetail: MobileDetailInput;
};

export type CustomerType = {
  readonly __typename?: 'CustomerType';
  readonly createdBy: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly updatedBy: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly id: Scalars['ID'];
  readonly avatar: Maybe<Scalars['String']>;
  readonly firstName: Scalars['String'];
  readonly lastName: Scalars['String'];
  readonly fullName: Scalars['String'];
  readonly gender: Maybe<Scalars['String']>;
  readonly mobileDetail: MobileDetails;
  readonly mobileNumber: Scalars['String'];
  readonly accessKey: Scalars['String'];
  readonly status: Maybe<Scalars['String']>;
};

export type CustomerUpdate = {
  readonly avatar: Maybe<Scalars['String']>;
  readonly firstName: Maybe<Scalars['String']>;
  readonly lastName: Maybe<Scalars['String']>;
  readonly gender: Maybe<GenderEnum>;
  readonly mobileDetail: Maybe<MobileDetailInput>;
  readonly status: Maybe<StatusEnum>;
};


export type DeveloperVerifyCodeInput = {
  readonly verifyCode: Maybe<Scalars['Int']>;
  readonly verifyUrl: Maybe<Scalars['String']>;
};

export type DevelopersInput = {
  readonly avatar: Maybe<Scalars['String']>;
  readonly firstName: Scalars['String'];
  readonly lastName: Scalars['String'];
  readonly gender: GenderEnum;
  readonly dob: Scalars['DateTime'];
  readonly email: Scalars['String'];
  readonly mobileDetail: MobileDetailInput;
  readonly password: Scalars['String'];
  readonly passwordConfirm: Scalars['String'];
};

export type DevelopersType = {
  readonly __typename?: 'DevelopersType';
  readonly createdBy: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly updatedBy: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly id: Scalars['ID'];
  readonly avatar: Maybe<Scalars['String']>;
  readonly firstName: Scalars['String'];
  readonly lastName: Scalars['String'];
  readonly fullName: Scalars['String'];
  readonly gender: Scalars['String'];
  readonly dob: Scalars['DateTime'];
  readonly email: Scalars['String'];
  readonly mobileDetail: MobileDetails;
  readonly authKey: Scalars['String'];
  readonly accessKey: Scalars['String'];
  readonly status: Maybe<Scalars['String']>;
};

export type DevelopersUpdate = {
  readonly avatar: Maybe<Scalars['String']>;
  readonly firstName: Maybe<Scalars['String']>;
  readonly lastName: Maybe<Scalars['String']>;
  readonly gender: Maybe<GenderEnum>;
  readonly dob: Maybe<Scalars['DateTime']>;
  readonly mobileDetail: Maybe<MobileDetailInput>;
  readonly status: Maybe<StatusEnum>;
};

export type DiscountFilter = {
  readonly type: Maybe<DiscountTypeEnum>;
  readonly title: Maybe<Scalars['String']>;
};

export type DiscountType = {
  readonly __typename?: 'DiscountType';
  readonly createdBy: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly updatedBy: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly id: Scalars['ID'];
  readonly type: Scalars['String'];
  readonly title: Scalars['String'];
  readonly value: Scalars['Float'];
  readonly isDefault: Scalars['Boolean'];
  readonly status: Maybe<Scalars['String']>;
};

export type DiscountTypeEnum =
  | 'PERCENTAGE'
  | 'PRICE';

export type DiscountUpdate = {
  readonly id: Scalars['ID'];
  readonly type: Maybe<DiscountTypeEnum>;
  readonly title: Scalars['String'];
  readonly value: Scalars['Float'];
  readonly status: Maybe<StatusEnum>;
};

export type DistrictFilter = {
  readonly status: Maybe<ReadonlyArray<StatusEnum>>;
  readonly limit: Maybe<Scalars['Int']>;
  readonly page: Maybe<Scalars['Int']>;
  readonly provinceId: Maybe<Scalars['String']>;
  readonly nameKh: Maybe<Scalars['String']>;
  readonly nameEn: Maybe<Scalars['String']>;
};

export type DistrictSuggestedFilter = {
  readonly provinceId: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
};

export type DistrictType = {
  readonly __typename?: 'DistrictType';
  readonly createdBy: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly updatedBy: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly id: Scalars['ID'];
  readonly uId: Scalars['String'];
  readonly provinceId: Scalars['String'];
  readonly province: Maybe<ProvinceType>;
  readonly nameKh: Maybe<Scalars['String']>;
  readonly nameEn: Maybe<Scalars['String']>;
  readonly status: Maybe<Scalars['String']>;
};

export type DistrictUpdate = {
  readonly id: Scalars['ID'];
  readonly nameKh: Scalars['String'];
  readonly nameEn: Scalars['String'];
  readonly status: Maybe<StatusEnum>;
};

export type EmployeeFilter = {
  readonly status: Maybe<ReadonlyArray<StatusEnum>>;
  readonly limit: Maybe<Scalars['Int']>;
  readonly page: Maybe<Scalars['Int']>;
  readonly id: Maybe<Scalars['ID']>;
  readonly fullName: Maybe<Scalars['String']>;
  readonly email: Maybe<Scalars['String']>;
  readonly mobileNumber: Maybe<Scalars['String']>;
};

export type EmployeeInfoInput = {
  readonly companyId: Scalars['ID'];
  readonly companyBranchId: Maybe<Scalars['ID']>;
  readonly jobId: Scalars['ID'];
  readonly hiredAt: Maybe<Scalars['DateTime']>;
};

export type EmployeeInfoType = {
  readonly __typename?: 'EmployeeInfoType';
  readonly companyId: Scalars['ID'];
  readonly company: Maybe<CompanyType>;
  readonly companyBranchId: Maybe<Scalars['ID']>;
  readonly companyBranch: Maybe<CompanyBranchType>;
  readonly jobId: Maybe<Scalars['ID']>;
  readonly job: Maybe<JobType>;
  readonly hiredAt: Maybe<Scalars['DateTime']>;
};

export type EmployeeInput = {
  readonly avatar: Maybe<Scalars['String']>;
  readonly firstName: Scalars['String'];
  readonly lastName: Scalars['String'];
  readonly gender: GenderEnum;
  readonly dob: Scalars['DateTime'];
  readonly email: Scalars['String'];
  readonly mobileDetail: MobileDetailInput;
  readonly employee: EmployeeInfoInput;
  readonly addressInfo: AddressInfoInput;
};

export type EmployeeType = {
  readonly __typename?: 'EmployeeType';
  readonly createdBy: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly updatedBy: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly id: Scalars['ID'];
  readonly avatar: Maybe<Scalars['String']>;
  readonly firstName: Scalars['String'];
  readonly lastName: Scalars['String'];
  readonly fullName: Scalars['String'];
  readonly username: Maybe<Scalars['String']>;
  readonly gender: Maybe<Scalars['String']>;
  readonly dob: Maybe<Scalars['DateTime']>;
  readonly email: Scalars['String'];
  readonly mobileDetail: MobileDetails;
  readonly employee: Maybe<EmployeeInfoType>;
  readonly addressInfo: Maybe<AddressInfoType>;
  readonly accessKey: Scalars['String'];
  readonly status: Maybe<Scalars['String']>;
};

export type EmployeeUpdate = {
  readonly avatar: Maybe<Scalars['String']>;
  readonly firstName: Maybe<Scalars['String']>;
  readonly lastName: Maybe<Scalars['String']>;
  readonly gender: Maybe<GenderEnum>;
  readonly dob: Maybe<Scalars['DateTime']>;
  readonly mobileDetail: Maybe<MobileDetailInput>;
  readonly employee: Maybe<EmployeeInfoInput>;
  readonly addressInfo: Maybe<AddressInfoInput>;
  readonly status: Maybe<StatusEnum>;
};

export type ExchangedRateAmountType = {
  readonly __typename?: 'ExchangedRateAmountType';
  readonly baseCurrencyCode: Scalars['String'];
  readonly exchangedCurrencyCode: Scalars['String'];
  readonly exchangeRate: Scalars['Float'];
  readonly changedAmount: Scalars['Float'];
  readonly subAmount: Scalars['Float'];
};

export type GenderEnum =
  | 'MALE'
  | 'FEMALE';

export type HistoryType = {
  readonly __typename?: 'HistoryType';
  readonly id: Scalars['ID'];
  readonly quantity: Scalars['Int'];
  readonly type: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['DateTime']>;
};

export type JobFilter = {
  readonly status: Maybe<ReadonlyArray<StatusEnum>>;
  readonly limit: Maybe<Scalars['Int']>;
  readonly page: Maybe<Scalars['Int']>;
  readonly id: Maybe<Scalars['ID']>;
  readonly title: Maybe<Scalars['String']>;
};

export type JobInput = {
  readonly title: Scalars['String'];
  readonly grossSalary: Scalars['Float'];
  readonly status: Maybe<StatusEnum>;
};

export type JobType = {
  readonly __typename?: 'JobType';
  readonly createdBy: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly updatedBy: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly id: Scalars['ID'];
  readonly title: Scalars['String'];
  readonly grossSalary: Scalars['Float'];
  readonly status: Maybe<Scalars['String']>;
};

export type JobUpdate = {
  readonly id: Scalars['ID'];
  readonly title: Maybe<Scalars['String']>;
  readonly grossSalary: Maybe<Scalars['Float']>;
  readonly status: Maybe<StatusEnum>;
};

export type LoginType = {
  readonly __typename?: 'LoginType';
  readonly createdBy: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly updatedBy: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly id: Scalars['ID'];
  readonly avatar: Scalars['String'];
  readonly firstName: Scalars['String'];
  readonly lastName: Scalars['String'];
  readonly fullName: Scalars['String'];
  readonly username: Maybe<Scalars['String']>;
  readonly gender: Maybe<Scalars['String']>;
  readonly dob: Maybe<Scalars['DateTime']>;
  readonly email: Scalars['String'];
  readonly mobileDetail: MobileDetails;
  readonly mobileNumber: Scalars['String'];
  readonly accessKey: Scalars['String'];
  readonly token: Maybe<Scalars['String']>;
  readonly status: Maybe<Scalars['String']>;
};

export type ManufacturerFilter = {
  readonly status: Maybe<ReadonlyArray<StatusEnum>>;
  readonly limit: Maybe<Scalars['Int']>;
  readonly page: Maybe<Scalars['Int']>;
  readonly name: Maybe<Scalars['String']>;
};

export type ManufacturerInput = {
  readonly name: Scalars['String'];
};

export type ManufacturerType = {
  readonly __typename?: 'ManufacturerType';
  readonly createdBy: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly updatedBy: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly status: Maybe<Scalars['String']>;
};

export type ManufacturerUpdate = {
  readonly id: Scalars['ID'];
  readonly name: Maybe<Scalars['String']>;
  readonly status: Maybe<StatusEnum>;
};

export type MemberInput = {
  readonly userId: Scalars['ID'];
};

export type MemberType = {
  readonly __typename?: 'MemberType';
  readonly userId: Scalars['ID'];
  readonly user: Maybe<RoomUserType>;
};

export type Metadata = {
  readonly __typename?: 'Metadata';
  readonly total: Scalars['Int'];
  readonly limit: Scalars['Int'];
  readonly page: Scalars['Int'];
};

export type MobileDetailInput = {
  readonly countryCode: Scalars['String'];
  readonly localNumber: Scalars['String'];
};

export type MobileDetails = {
  readonly __typename?: 'MobileDetails';
  readonly countryCode: Maybe<Scalars['String']>;
  readonly localNumber: Maybe<Scalars['String']>;
  readonly mobileNumber: Maybe<Scalars['String']>;
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  readonly registerDeveloper: DevelopersType;
  readonly verifyCodeOrUrlDeveloper: Scalars['Boolean'];
  readonly loginDeveloper: DevelopersType;
  readonly updateDeveloper: DevelopersType;
  readonly logoutDeveloper: Scalars['Boolean'];
  readonly createNewAdmin: AdminType;
  readonly updateAdmin: AdminType;
  readonly requestApiKey: AuthType;
  readonly createCdn: CdnType;
  readonly updateCdn: CdnType;
  readonly deleteCdn: Scalars['Boolean'];
  readonly updateProvince: ProvinceType;
  readonly updateDistrict: DistrictType;
  readonly updateCommune: CommuneType;
  readonly updateCountry: CountryType;
  readonly updateVillage: VillageType;
  readonly createVendor: VendorType;
  readonly updateVendor: VendorType;
  readonly addVendorCompany: Scalars['Boolean'];
  readonly removeVendorCompany: Scalars['Boolean'];
  readonly createCompany: CompanyType;
  readonly updateCompany: CompanyType;
  readonly addBranchCompany: Scalars['Boolean'];
  readonly updateBranchCompany: Scalars['Boolean'];
  readonly removeBranchCompany: Scalars['Boolean'];
  readonly deleteCompany: Scalars['Boolean'];
  readonly createCurrencyRate: CurrencyRateType;
  readonly updateCurrencyRate: CurrencyRateType;
  readonly deleteCurrencyRate: CurrencyRateType;
  readonly createCurrency: CurrencyType;
  readonly updateCurrency: CurrencyType;
  readonly setDefaultCurrency: Scalars['Boolean'];
  readonly deleteCurrency: Scalars['Boolean'];
  readonly createNewCustomer: CustomerType;
  readonly updateCustomer: CustomerType;
  readonly updateDiscount: Scalars['Boolean'];
  readonly setDefaultDiscount: Scalars['Boolean'];
  readonly createJob: JobType;
  readonly updateJob: Scalars['Boolean'];
  readonly deleteJob: Scalars['Boolean'];
  readonly createEmployee: EmployeeType;
  readonly updateEmployee: EmployeeType;
  readonly removeEmployee: Scalars['Boolean'];
  readonly updateRoomUserProfile: RoomUserType;
  readonly setDefaultAdmin: Scalars['Boolean'];
  readonly login: LoginType;
  readonly logout: Scalars['Boolean'];
  readonly registerVendor: VendorType;
  readonly verifyAccount: Scalars['Boolean'];
  readonly registerRoomUser: RoomUserType;
  readonly verifyRoomUserAccount: Scalars['Boolean'];
  readonly loginRoomUser: RoomUserType;
  readonly createPaymentMethod: PaymentMethodType;
  readonly updatePaymentMethod: Scalars['Boolean'];
  readonly setDefaultPaymentMethod: Scalars['Boolean'];
  readonly deletePaymentMethod: Scalars['Boolean'];
  readonly createProductSupplier: ProductSupplierType;
  readonly updateProductSupplier: ProductSupplierType;
  readonly deleteProductSupplier: Scalars['Boolean'];
  readonly createCategory: CategoriesType;
  readonly updateCategory: Scalars['Boolean'];
  readonly deleteCategory: Scalars['Boolean'];
  readonly createManufacturer: ManufacturerType;
  readonly updateManufacturer: Scalars['Boolean'];
  readonly deleteManufacturer: Scalars['Boolean'];
  readonly createScale: ScaleType;
  readonly updateScale: Scalars['Boolean'];
  readonly deleteScale: Scalars['Boolean'];
  readonly createTax: TaxesType;
  readonly updateTax: TaxesType;
  readonly deleteTax: Scalars['Boolean'];
  readonly createProduct: Scalars['Boolean'];
  readonly updateProduct: Scalars['Boolean'];
  readonly removeProduct: Scalars['Boolean'];
  readonly removeProductImage: Scalars['Boolean'];
  readonly removeProductThumbnail: Scalars['Boolean'];
  readonly addProductRecorder: Scalars['Boolean'];
  readonly updateProductRecorder: Scalars['Boolean'];
  readonly removeProductRecorder: Scalars['Boolean'];
  readonly inDecreaseProductRecorderStock: Scalars['Boolean'];
  readonly createSaleOrder: Scalars['Boolean'];
  readonly calculateSaleOrder: CalculateSaleOrderType;
  readonly cancelSaleOrder: Scalars['Boolean'];
  readonly holdSaleOrder: Scalars['Boolean'];
  readonly createSupplying: Scalars['Boolean'];
  readonly createTag: TagType;
  readonly updateTag: TagType;
  readonly deleteTag: Scalars['Boolean'];
  readonly updateProfile: ProfileType;
  readonly createRoomCategory: RoomCategoryType;
  readonly updateRoomCategory: Scalars['Boolean'];
  readonly deleteRoomCategory: Scalars['Boolean'];
  readonly createRoom: RoomType;
  readonly updateRoom: Scalars['Boolean'];
  readonly addMemberRoom: Scalars['Boolean'];
  readonly deleteRoom: Scalars['Boolean'];
  readonly createRoomTransaction: Scalars['Boolean'];
  readonly deleteRoomTransaction: Scalars['Boolean'];
  readonly confirmPaymentRoomTransaction: Scalars['Boolean'];
  readonly createTime: TimeType;
  readonly updateTime: TimeType;
  readonly deleteTime: TimeType;
  readonly createSalePayment: TransactionType;
};


export type MutationRegisterDeveloperArgs = {
  input: DevelopersInput;
};


export type MutationVerifyCodeOrUrlDeveloperArgs = {
  input: DeveloperVerifyCodeInput;
};


export type MutationLoginDeveloperArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationUpdateDeveloperArgs = {
  input: DevelopersUpdate;
  accessKey: Scalars['String'];
};


export type MutationLogoutDeveloperArgs = {
  accessKey: Scalars['String'];
};


export type MutationCreateNewAdminArgs = {
  input: AdminInput;
};


export type MutationUpdateAdminArgs = {
  input: AdminUpdate;
  id: Scalars['String'];
};


export type MutationRequestApiKeyArgs = {
  authKey: Scalars['String'];
};


export type MutationCreateCdnArgs = {
  input: CdnInput;
};


export type MutationUpdateCdnArgs = {
  input: CdnUpdate;
};


export type MutationDeleteCdnArgs = {
  id: Scalars['String'];
};


export type MutationUpdateProvinceArgs = {
  input: ProvinceUpdate;
};


export type MutationUpdateDistrictArgs = {
  input: DistrictUpdate;
};


export type MutationUpdateCommuneArgs = {
  input: CommuneUpdate;
};


export type MutationUpdateCountryArgs = {
  input: CountryUpdate;
};


export type MutationUpdateVillageArgs = {
  input: VillageUpdate;
};


export type MutationCreateVendorArgs = {
  input: VendorInput;
};


export type MutationUpdateVendorArgs = {
  input: VendorUpdate;
  id: Scalars['String'];
};


export type MutationAddVendorCompanyArgs = {
  company: VendorCompanyInput;
  id: Scalars['String'];
};


export type MutationRemoveVendorCompanyArgs = {
  id: Scalars['String'];
};


export type MutationCreateCompanyArgs = {
  input: CompanyInput;
};


export type MutationUpdateCompanyArgs = {
  input: CompanyUpdate;
};


export type MutationAddBranchCompanyArgs = {
  companyBranch: ReadonlyArray<CompanyBranchInput>;
  id: Scalars['String'];
};


export type MutationUpdateBranchCompanyArgs = {
  companyBranch: CompanyBranchInput;
  id: Scalars['String'];
};


export type MutationRemoveBranchCompanyArgs = {
  id: Scalars['String'];
};


export type MutationDeleteCompanyArgs = {
  id: Scalars['String'];
};


export type MutationCreateCurrencyRateArgs = {
  input: CurrencyRateInput;
};


export type MutationUpdateCurrencyRateArgs = {
  input: CurrencyRateUpdate;
};


export type MutationDeleteCurrencyRateArgs = {
  id: Scalars['String'];
};


export type MutationCreateCurrencyArgs = {
  input: CurrencyInput;
};


export type MutationUpdateCurrencyArgs = {
  input: CurrencyUpdate;
};


export type MutationSetDefaultCurrencyArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCurrencyArgs = {
  id: Scalars['String'];
};


export type MutationCreateNewCustomerArgs = {
  input: CustomerInput;
};


export type MutationUpdateCustomerArgs = {
  input: CustomerUpdate;
  id: Scalars['String'];
};


export type MutationUpdateDiscountArgs = {
  input: DiscountUpdate;
};


export type MutationSetDefaultDiscountArgs = {
  id: Scalars['ID'];
};


export type MutationCreateJobArgs = {
  input: JobInput;
};


export type MutationUpdateJobArgs = {
  input: JobUpdate;
};


export type MutationDeleteJobArgs = {
  id: Scalars['String'];
};


export type MutationCreateEmployeeArgs = {
  input: EmployeeInput;
};


export type MutationUpdateEmployeeArgs = {
  input: EmployeeUpdate;
  id: Scalars['String'];
};


export type MutationRemoveEmployeeArgs = {
  id: Scalars['String'];
};


export type MutationUpdateRoomUserProfileArgs = {
  input: RoomUserUpdate;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationLogoutArgs = {
  accessKey: Scalars['String'];
};


export type MutationRegisterVendorArgs = {
  input: VendorRegisterInput;
};


export type MutationVerifyAccountArgs = {
  input: VerifyAccountInput;
};


export type MutationRegisterRoomUserArgs = {
  input: RoomUserRegisterInput;
};


export type MutationVerifyRoomUserAccountArgs = {
  verifyCode: Scalars['String'];
};


export type MutationLoginRoomUserArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationCreatePaymentMethodArgs = {
  input: PaymentMethodInput;
};


export type MutationUpdatePaymentMethodArgs = {
  input: PaymentMethodUpdate;
};


export type MutationSetDefaultPaymentMethodArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePaymentMethodArgs = {
  id: Scalars['String'];
};


export type MutationCreateProductSupplierArgs = {
  input: ProductSupplierInput;
};


export type MutationUpdateProductSupplierArgs = {
  input: ProductSupplierUpdate;
};


export type MutationDeleteProductSupplierArgs = {
  id: Scalars['String'];
};


export type MutationCreateCategoryArgs = {
  input: CategoriesInput;
};


export type MutationUpdateCategoryArgs = {
  input: CategoriesUpdate;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['String'];
};


export type MutationCreateManufacturerArgs = {
  input: ManufacturerInput;
};


export type MutationUpdateManufacturerArgs = {
  input: ManufacturerUpdate;
};


export type MutationDeleteManufacturerArgs = {
  id: Scalars['String'];
};


export type MutationCreateScaleArgs = {
  input: ScaleInput;
};


export type MutationUpdateScaleArgs = {
  input: ScaleUpdate;
};


export type MutationDeleteScaleArgs = {
  id: Scalars['String'];
};


export type MutationCreateTaxArgs = {
  input: TaxesInput;
};


export type MutationUpdateTaxArgs = {
  input: TaxesUpdate;
};


export type MutationDeleteTaxArgs = {
  id: Scalars['String'];
};


export type MutationCreateProductArgs = {
  input: ProductInput;
};


export type MutationUpdateProductArgs = {
  input: ProductUpdate;
};


export type MutationRemoveProductArgs = {
  id: Scalars['String'];
};


export type MutationRemoveProductImageArgs = {
  input: RemoveProductImageInput;
};


export type MutationRemoveProductThumbnailArgs = {
  input: RemoveProductImageInput;
};


export type MutationAddProductRecorderArgs = {
  recorders: ReadonlyArray<RecorderInput>;
  productId: Scalars['ID'];
};


export type MutationUpdateProductRecorderArgs = {
  input: ProductRecorderUpdate;
};


export type MutationRemoveProductRecorderArgs = {
  id: Scalars['ID'];
};


export type MutationInDecreaseProductRecorderStockArgs = {
  quantity: Scalars['Int'];
  id: Scalars['ID'];
};


export type MutationCreateSaleOrderArgs = {
  input: SaleOrderInput;
};


export type MutationCalculateSaleOrderArgs = {
  input: CalculateSaleOrderInput;
};


export type MutationCancelSaleOrderArgs = {
  id: Scalars['String'];
};


export type MutationHoldSaleOrderArgs = {
  id: Scalars['String'];
};


export type MutationCreateSupplyingArgs = {
  input: SupplyingInput;
};


export type MutationCreateTagArgs = {
  input: TagInput;
};


export type MutationUpdateTagArgs = {
  input: TagUpdate;
};


export type MutationDeleteTagArgs = {
  id: Scalars['String'];
};


export type MutationUpdateProfileArgs = {
  input: ProfileUpdate;
  accessKey: Scalars['String'];
};


export type MutationCreateRoomCategoryArgs = {
  input: RoomCategoryInput;
};


export type MutationUpdateRoomCategoryArgs = {
  input: RoomCategoryUpdate;
};


export type MutationDeleteRoomCategoryArgs = {
  id: Scalars['String'];
};


export type MutationCreateRoomArgs = {
  input: RoomInput;
};


export type MutationUpdateRoomArgs = {
  input: RoomUpdate;
};


export type MutationAddMemberRoomArgs = {
  userId: Scalars['String'];
  id: Scalars['String'];
};


export type MutationDeleteRoomArgs = {
  id: Scalars['String'];
};


export type MutationCreateRoomTransactionArgs = {
  input: RoomTransactionInput;
};


export type MutationDeleteRoomTransactionArgs = {
  id: Scalars['String'];
};


export type MutationConfirmPaymentRoomTransactionArgs = {
  input: RoomTransactionConfirmPaymentInput;
};


export type MutationCreateTimeArgs = {
  input: TimeInput;
};


export type MutationUpdateTimeArgs = {
  input: TimeUpdate;
};


export type MutationDeleteTimeArgs = {
  id: Scalars['String'];
};


export type MutationCreateSalePaymentArgs = {
  input: SaleTransactionInput;
};

export type NameType = {
  readonly firstName: Scalars['String'];
  readonly lastName: Scalars['String'];
};

export type NameTypes = {
  readonly __typename?: 'NameTypes';
  readonly firstName: Scalars['String'];
  readonly lastName: Scalars['String'];
};

export type OrderDetailType = {
  readonly __typename?: 'OrderDetailType';
  readonly productRecorderId: Scalars['ID'];
  readonly productRecorder: ProductRecorderType;
  readonly productId: Scalars['ID'];
  readonly product: ProductType;
  readonly quantity: Scalars['Int'];
  readonly totalAmount: Scalars['Float'];
  readonly vatAmount: Scalars['Float'];
  readonly subAmount: Scalars['Float'];
};

export type OrderType = {
  readonly __typename?: 'OrderType';
  readonly createdBy: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly updatedBy: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly id: Scalars['ID'];
  readonly userId: Maybe<Scalars['ID']>;
  readonly user: Maybe<CustomerType>;
  readonly currencyCode: Maybe<Scalars['String']>;
  readonly totalAmount: Scalars['Float'];
  readonly vatAmount: Scalars['Float'];
  readonly subAmount: Scalars['Float'];
  readonly orderDetails: ReadonlyArray<OrderDetailType>;
  readonly status: Maybe<Scalars['String']>;
};

export type PaginatedCategoryType = {
  readonly __typename?: 'PaginatedCategoryType';
  readonly records: Maybe<ReadonlyArray<CategoriesType>>;
  readonly metadata: Maybe<Metadata>;
};

export type PaginatedCommuneType = {
  readonly __typename?: 'PaginatedCommuneType';
  readonly records: Maybe<ReadonlyArray<CommuneType>>;
  readonly metadata: Maybe<Metadata>;
};

export type PaginatedCompanyType = {
  readonly __typename?: 'PaginatedCompanyType';
  readonly records: Maybe<ReadonlyArray<CompanyType>>;
  readonly metadata: Maybe<Metadata>;
};

export type PaginatedCountryType = {
  readonly __typename?: 'PaginatedCountryType';
  readonly records: Maybe<ReadonlyArray<CountryType>>;
  readonly metadata: Maybe<Metadata>;
};

export type PaginatedDistrictType = {
  readonly __typename?: 'PaginatedDistrictType';
  readonly records: Maybe<ReadonlyArray<DistrictType>>;
  readonly metadata: Maybe<Metadata>;
};

export type PaginatedEmployeeType = {
  readonly __typename?: 'PaginatedEmployeeType';
  readonly records: Maybe<ReadonlyArray<EmployeeType>>;
  readonly metadata: Maybe<Metadata>;
};

export type PaginatedJobType = {
  readonly __typename?: 'PaginatedJobType';
  readonly records: Maybe<ReadonlyArray<JobType>>;
  readonly metadata: Maybe<Metadata>;
};

export type PaginatedManufacturerType = {
  readonly __typename?: 'PaginatedManufacturerType';
  readonly records: Maybe<ReadonlyArray<ManufacturerType>>;
  readonly metadata: Maybe<Metadata>;
};

export type PaginatedProductSupplierType = {
  readonly __typename?: 'PaginatedProductSupplierType';
  readonly records: Maybe<ReadonlyArray<ProductSupplierType>>;
  readonly metadata: Maybe<Metadata>;
};

export type PaginatedProductType = {
  readonly __typename?: 'PaginatedProductType';
  readonly records: Maybe<ReadonlyArray<ProductType>>;
  readonly metadata: Maybe<Metadata>;
};

export type PaginatedProvinceType = {
  readonly __typename?: 'PaginatedProvinceType';
  readonly records: Maybe<ReadonlyArray<ProvinceType>>;
  readonly metadata: Maybe<Metadata>;
};

export type PaginatedRoomType = {
  readonly __typename?: 'PaginatedRoomType';
  readonly records: Maybe<ReadonlyArray<RoomType>>;
  readonly metadata: Maybe<Metadata>;
};

export type PaginatedScaleType = {
  readonly __typename?: 'PaginatedScaleType';
  readonly records: Maybe<ReadonlyArray<ScaleType>>;
  readonly metadata: Maybe<Metadata>;
};

export type PaginatedTagType = {
  readonly __typename?: 'PaginatedTagType';
  readonly records: Maybe<ReadonlyArray<TagType>>;
  readonly metadata: Maybe<Metadata>;
};

export type PaginatedTaxType = {
  readonly __typename?: 'PaginatedTaxType';
  readonly records: Maybe<ReadonlyArray<TaxesType>>;
  readonly metadata: Maybe<Metadata>;
};

export type PaginatedTimeType = {
  readonly __typename?: 'PaginatedTimeType';
  readonly records: Maybe<ReadonlyArray<TimeType>>;
  readonly metadata: Maybe<Metadata>;
};

export type PaginatedVendorType = {
  readonly __typename?: 'PaginatedVendorType';
  readonly records: Maybe<ReadonlyArray<VendorType>>;
  readonly metadata: Maybe<Metadata>;
};

export type PaginatedVillageType = {
  readonly __typename?: 'PaginatedVillageType';
  readonly records: Maybe<ReadonlyArray<VillageType>>;
  readonly metadata: Maybe<Metadata>;
};

export type PaymentMethodFilter = {
  readonly id: Maybe<Scalars['ID']>;
  readonly type: Maybe<PaymentTypeEnum>;
  readonly title: Maybe<Scalars['String']>;
  readonly status: Maybe<ReadonlyArray<StatusEnum>>;
};

export type PaymentMethodInput = {
  readonly type: Maybe<PaymentTypeEnum>;
  readonly title: Scalars['String'];
};

export type PaymentMethodType = {
  readonly __typename?: 'PaymentMethodType';
  readonly createdBy: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly updatedBy: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly id: Scalars['ID'];
  readonly type: Scalars['String'];
  readonly title: Scalars['String'];
  readonly isDefault: Scalars['Boolean'];
  readonly status: Maybe<Scalars['String']>;
};

export type PaymentMethodUpdate = {
  readonly id: Scalars['ID'];
  readonly type: Maybe<PaymentTypeEnum>;
  readonly title: Scalars['String'];
  readonly status: Maybe<StatusEnum>;
};

export type PaymentReceivedInput = {
  readonly currencyCode: CurrencyCodeEnum;
  readonly amount: Scalars['Float'];
};

export type PaymentReceivedType = {
  readonly __typename?: 'PaymentReceivedType';
  readonly currencyCode: CurrencyCodeEnum;
  readonly amount: Scalars['Float'];
};

export type PaymentTypeEnum =
  | 'CASH'
  | 'ABA';

export type ProductFilter = {
  readonly status: Maybe<ReadonlyArray<StatusEnum>>;
  readonly limit: Maybe<Scalars['Int']>;
  readonly page: Maybe<Scalars['Int']>;
  readonly name: Maybe<Scalars['String']>;
  readonly alternativeName: Maybe<Scalars['String']>;
  readonly categoryId: Maybe<Scalars['String']>;
  readonly taxId: Maybe<Scalars['String']>;
};

export type ProductImage = {
  readonly __typename?: 'ProductImage';
  readonly title: Maybe<Scalars['String']>;
  readonly subtitle: Maybe<Scalars['String']>;
  readonly image: Maybe<Scalars['String']>;
};

export type ProductImageInput = {
  readonly title: Maybe<Scalars['String']>;
  readonly subtitle: Maybe<Scalars['String']>;
  readonly image: Maybe<Scalars['String']>;
};

export type ProductInput = {
  readonly name: Scalars['String'];
  readonly alternativeName: Maybe<Scalars['String']>;
  readonly categoryId: Scalars['ID'];
  readonly taxId: Scalars['ID'];
  readonly supplierId: Maybe<Scalars['ID']>;
  readonly manufacturerId: Maybe<Scalars['ID']>;
  readonly tags: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly thumbnails: Maybe<ReadonlyArray<ProductImageInput>>;
  readonly images: Maybe<ReadonlyArray<ProductImageInput>>;
  readonly shortDescription: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly remark: Maybe<Scalars['String']>;
  readonly recorders: ReadonlyArray<RecorderInput>;
};

export type ProductRecorderFilter = {
  readonly productId: Scalars['ID'];
  readonly barcode: Maybe<Scalars['String']>;
  readonly weight: Maybe<Scalars['Float']>;
  readonly size: Maybe<Scalars['String']>;
};

export type ProductRecorderType = {
  readonly __typename?: 'ProductRecorderType';
  readonly id: Scalars['ID'];
  readonly productId: Scalars['ID'];
  readonly product: Maybe<ProductType>;
  readonly barcode: Maybe<Scalars['String']>;
  readonly sourcePrice: Scalars['Float'];
  readonly wholesalePrice: Scalars['Float'];
  readonly regularPrice: Scalars['Float'];
  readonly sellingPrice: Scalars['Float'];
  readonly weight: Maybe<Scalars['Float']>;
  readonly scaleId: Maybe<Scalars['ID']>;
  readonly scale: Maybe<ScaleType>;
  readonly producedAt: Maybe<Scalars['DateTime']>;
  readonly expiredAt: Maybe<Scalars['DateTime']>;
  readonly stockAble: Maybe<Scalars['Boolean']>;
  readonly stock: Maybe<StockType>;
  readonly status: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
};

export type ProductRecorderUpdate = {
  readonly id: Scalars['ID'];
  readonly barcode: Scalars['String'];
  readonly modifyQuantity: Maybe<Scalars['Int']>;
  readonly sourcePrice: Scalars['Float'];
  readonly wholesalePrice: Scalars['Float'];
  readonly regularPrice: Scalars['Float'];
  readonly sellingPrice: Scalars['Float'];
  readonly weight: Maybe<Scalars['Float']>;
  readonly scaleId: Maybe<Scalars['ID']>;
  readonly producedAt: Maybe<Scalars['DateTime']>;
  readonly expiredAt: Maybe<Scalars['DateTime']>;
};

export type ProductSaleFilter = {
  readonly status: Maybe<ReadonlyArray<StatusEnum>>;
  readonly limit: Maybe<Scalars['Int']>;
  readonly page: Maybe<Scalars['Int']>;
  readonly categoryId: Maybe<Scalars['ID']>;
  readonly name: Maybe<Scalars['String']>;
};

export type ProductSalePaginatedType = {
  readonly __typename?: 'ProductSalePaginatedType';
  readonly records: Maybe<ReadonlyArray<ProductType>>;
  readonly metadata: Maybe<Metadata>;
};

export type ProductSupplierFilter = {
  readonly status: Maybe<ReadonlyArray<StatusEnum>>;
  readonly limit: Maybe<Scalars['Int']>;
  readonly page: Maybe<Scalars['Int']>;
  readonly companyName: Maybe<Scalars['String']>;
};

export type ProductSupplierInput = {
  readonly userId: Maybe<Scalars['String']>;
  readonly companyName: Scalars['String'];
  readonly contactInfo: SupplierContactInfoInput;
  readonly addressInfo: Maybe<SupplierAddressInfoInput>;
  readonly description: Maybe<Scalars['String']>;
};

export type ProductSupplierType = {
  readonly __typename?: 'ProductSupplierType';
  readonly createdBy: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly updatedBy: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly id: Scalars['ID'];
  readonly userId: Maybe<Scalars['String']>;
  readonly companyName: Scalars['String'];
  readonly contactInfo: SupplierContactInfoType;
  readonly addressInfo: Maybe<SupplierAddressInfoType>;
  readonly description: Maybe<Scalars['String']>;
  readonly status: Maybe<Scalars['String']>;
};

export type ProductSupplierUpdate = {
  readonly id: Scalars['ID'];
  readonly userId: Maybe<Scalars['String']>;
  readonly companyName: Maybe<Scalars['String']>;
  readonly contactInfo: Maybe<SupplierContactInfoInput>;
  readonly addressInfo: Maybe<SupplierAddressInfoInput>;
  readonly description: Maybe<Scalars['String']>;
  readonly status: Maybe<StatusEnum>;
};

export type ProductType = {
  readonly __typename?: 'ProductType';
  readonly createdBy: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly updatedBy: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly alternativeName: Maybe<Scalars['String']>;
  readonly images: Maybe<ReadonlyArray<ProductImage>>;
  readonly thumbnails: Maybe<ReadonlyArray<ProductImage>>;
  readonly categoryId: Scalars['String'];
  readonly category: Maybe<CategoriesType>;
  readonly taxId: Maybe<Scalars['String']>;
  readonly tax: Maybe<TaxesType>;
  readonly tags: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly manufactureId: Maybe<Scalars['ID']>;
  readonly manufacturer: Maybe<ManufacturerType>;
  readonly shortDescription: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly recorders: Maybe<ReadonlyArray<ProductRecorderType>>;
  readonly sourcePrice: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly wholesalePrice: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly regularPrice: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly sellingPrice: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly quantity: Scalars['Int'];
  readonly status: Maybe<Scalars['String']>;
};

export type ProductUpdate = {
  readonly id: Scalars['ID'];
  readonly name: Maybe<Scalars['String']>;
  readonly alternativeName: Maybe<Scalars['String']>;
  readonly categoryId: Scalars['ID'];
  readonly taxId: Scalars['ID'];
  readonly manufacturerId: Maybe<Scalars['ID']>;
  readonly tags: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly thumbnails: Maybe<ReadonlyArray<ProductImageInput>>;
  readonly images: Maybe<ReadonlyArray<ProductImageInput>>;
  readonly shortDescription: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly remark: Maybe<Scalars['String']>;
  readonly status: Maybe<StatusEnum>;
};

export type ProfileType = {
  readonly __typename?: 'ProfileType';
  readonly createdBy: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly updatedBy: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly id: Scalars['ID'];
  readonly type: Scalars['String'];
  readonly avatar: Maybe<Scalars['String']>;
  readonly firstName: Scalars['String'];
  readonly lastName: Scalars['String'];
  readonly fullName: Scalars['String'];
  readonly username: Maybe<Scalars['String']>;
  readonly gender: Maybe<Scalars['String']>;
  readonly dob: Maybe<Scalars['DateTime']>;
  readonly email: Scalars['String'];
  readonly mobileDetail: MobileDetails;
  readonly vendors: ReadonlyArray<Maybe<Vendor>>;
  readonly employee: Maybe<EmployeeInfoType>;
  readonly addressInfo: Maybe<AddressInfoType>;
  readonly accessKey: Scalars['String'];
  readonly status: Maybe<Scalars['String']>;
};

export type ProfileUpdate = {
  readonly avatar: Maybe<Scalars['String']>;
  readonly firstName: Maybe<Scalars['String']>;
  readonly lastName: Maybe<Scalars['String']>;
  readonly gender: Maybe<GenderEnum>;
  readonly dob: Maybe<Scalars['DateTime']>;
  readonly mobileDetail: Maybe<MobileDetailInput>;
  readonly employee: Maybe<EmployeeInfoInput>;
  readonly addressInfo: Maybe<AddressInfoInput>;
};

export type ProvinceFilter = {
  readonly status: Maybe<ReadonlyArray<StatusEnum>>;
  readonly limit: Maybe<Scalars['Int']>;
  readonly page: Maybe<Scalars['Int']>;
  readonly uId: Maybe<Scalars['String']>;
  readonly nameKh: Maybe<Scalars['String']>;
  readonly nameEn: Maybe<Scalars['String']>;
};

export type ProvinceType = {
  readonly __typename?: 'ProvinceType';
  readonly createdBy: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly updatedBy: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly id: Scalars['ID'];
  readonly uId: Scalars['String'];
  readonly nameKh: Maybe<Scalars['String']>;
  readonly nameEn: Maybe<Scalars['String']>;
  readonly status: Maybe<Scalars['String']>;
};

export type ProvinceUpdate = {
  readonly id: Scalars['ID'];
  readonly nameKh: Scalars['String'];
  readonly nameEn: Scalars['String'];
  readonly status: Maybe<StatusEnum>;
};

export type Query = {
  readonly __typename?: 'Query';
  readonly getCdn: CdnType;
  readonly getCdns: ReadonlyArray<CdnType>;
  readonly getProvince: ProvinceType;
  readonly getProvinces: PaginatedProvinceType;
  readonly getSuggestedProvinces: ReadonlyArray<ProvinceType>;
  readonly getActiveProvinces: ReadonlyArray<ProvinceType>;
  readonly getDistrict: DistrictType;
  readonly getDistricts: PaginatedDistrictType;
  readonly getActiveDistricts: ReadonlyArray<DistrictType>;
  readonly getSuggestedDistricts: ReadonlyArray<DistrictType>;
  readonly getCommune: CommuneType;
  readonly getCommunes: PaginatedCommuneType;
  readonly getActiveCommunes: ReadonlyArray<CommuneType>;
  readonly getSuggestedCommunes: ReadonlyArray<CommuneType>;
  readonly getCountry: CountryType;
  readonly getCountries: PaginatedCountryType;
  readonly getActiveCountries: ReadonlyArray<CountryType>;
  readonly getSuggestedCountries: ReadonlyArray<CountryType>;
  readonly getVillage: VillageType;
  readonly getVillages: PaginatedVillageType;
  readonly getActiveVillages: ReadonlyArray<VillageType>;
  readonly getSuggestedVillages: ReadonlyArray<VillageType>;
  readonly getVendors: PaginatedVendorType;
  readonly getCompanyVendor: VendorType;
  readonly getCompany: CompanyType;
  readonly getCompanies: PaginatedCompanyType;
  readonly getActiveCompanies: ReadonlyArray<CompanyType>;
  readonly getCurrencyRate: CurrencyRateType;
  readonly getCurrencyRates: ReadonlyArray<CurrencyRateType>;
  readonly getActiveCurrencyRates: ReadonlyArray<CurrencyRateType>;
  readonly getCurrency: CurrencyType;
  readonly getCurrencies: ReadonlyArray<CurrencyType>;
  readonly getActiveCurrencies: ReadonlyArray<CurrencyType>;
  readonly getDiscounts: ReadonlyArray<DiscountType>;
  readonly getActiveDiscounts: ReadonlyArray<DiscountType>;
  readonly getJob: JobType;
  readonly getJobs: PaginatedJobType;
  readonly getActiveJobs: ReadonlyArray<JobType>;
  readonly getEmployees: PaginatedEmployeeType;
  readonly getRoomUserProfile: RoomUserType;
  readonly getRoomUserList: ReadonlyArray<RoomUserType>;
  readonly getPaymentMethod: PaymentMethodType;
  readonly getPaymentMethods: ReadonlyArray<PaymentMethodType>;
  readonly getActivePaymentMethods: ReadonlyArray<PaymentMethodType>;
  readonly getProductSupplier: ProductSupplierType;
  readonly getProductSuppliers: PaginatedProductSupplierType;
  readonly getActiveProductSuppliers: ReadonlyArray<ProductSupplierType>;
  readonly getCategory: CategoriesType;
  readonly getCategories: PaginatedCategoryType;
  readonly getActiveCategories: ReadonlyArray<CategoriesType>;
  readonly getManufacturer: ManufacturerType;
  readonly getManufacturers: PaginatedManufacturerType;
  readonly getActiveManufacturers: ReadonlyArray<ManufacturerType>;
  readonly getScale: ScaleType;
  readonly getScales: PaginatedScaleType;
  readonly getActiveScales: ReadonlyArray<ScaleType>;
  readonly getTax: TaxesType;
  readonly getTaxes: PaginatedTaxType;
  readonly getActiveTaxes: ReadonlyArray<TaxesType>;
  readonly getProduct: ProductType;
  readonly getProducts: PaginatedProductType;
  readonly getActiveProducts: ReadonlyArray<ProductType>;
  readonly getProductRecorders: ReadonlyArray<ProductRecorderType>;
  readonly getProductRecorder: ProductRecorderType;
  readonly searchSuggestedProducts: ReadonlyArray<ProductRecorderType>;
  readonly getPendingOrder: OrderType;
  readonly getTag: TagType;
  readonly getTags: PaginatedTagType;
  readonly getActiveTags: ReadonlyArray<TagType>;
  readonly getProfile: ProfileType;
  readonly getRoomCategory: RoomCategoryType;
  readonly getRoomCategories: ReadonlyArray<RoomCategoryType>;
  readonly getRoom: RoomType;
  readonly getRooms: PaginatedRoomType;
  readonly getUserByRoomId: ReadonlyArray<MemberType>;
  readonly getDailyTransactions: ReadonlyArray<RoomTransactionGroupType>;
  readonly getMonthlyTransactions: ReadonlyArray<RoomTransactionGroupByMonthType>;
  readonly getRoomTransactionReport: ReadonlyArray<RoomTransactionReportType>;
  readonly getProductSales: ProductSalePaginatedType;
  readonly getTime: TimeType;
  readonly getTimes: PaginatedTimeType;
  readonly getActiveTimes: ReadonlyArray<TimeType>;
};


export type QueryGetCdnArgs = {
  id: Scalars['String'];
};


export type QueryGetCdnsArgs = {
  filter: CdnFilter;
};


export type QueryGetProvinceArgs = {
  id: Scalars['String'];
};


export type QueryGetProvincesArgs = {
  filter: ProvinceFilter;
};


export type QueryGetSuggestedProvincesArgs = {
  name: Scalars['String'];
};


export type QueryGetActiveProvincesArgs = {
  filter: ProvinceFilter;
};


export type QueryGetDistrictArgs = {
  id: Scalars['String'];
};


export type QueryGetDistrictsArgs = {
  filter: DistrictFilter;
};


export type QueryGetActiveDistrictsArgs = {
  filter: DistrictFilter;
};


export type QueryGetSuggestedDistrictsArgs = {
  filter: DistrictSuggestedFilter;
};


export type QueryGetCommuneArgs = {
  id: Scalars['String'];
};


export type QueryGetCommunesArgs = {
  filter: CommuneFilter;
};


export type QueryGetActiveCommunesArgs = {
  filter: CommuneFilter;
};


export type QueryGetSuggestedCommunesArgs = {
  filter: CommuneSuggestedFilter;
};


export type QueryGetCountryArgs = {
  id: Scalars['String'];
};


export type QueryGetCountriesArgs = {
  filter: CountryFilter;
};


export type QueryGetActiveCountriesArgs = {
  filter: CountryFilter;
};


export type QueryGetSuggestedCountriesArgs = {
  name: Scalars['String'];
};


export type QueryGetVillageArgs = {
  id: Scalars['String'];
};


export type QueryGetVillagesArgs = {
  filter: VillageFilter;
};


export type QueryGetActiveVillagesArgs = {
  filter: VillageFilter;
};


export type QueryGetSuggestedVillagesArgs = {
  filter: VillageSuggestedFilter;
};


export type QueryGetVendorsArgs = {
  filter: VendorFilter;
};


export type QueryGetCompanyVendorArgs = {
  id: Scalars['String'];
};


export type QueryGetCompanyArgs = {
  id: Scalars['ID'];
};


export type QueryGetCompaniesArgs = {
  filter: CompanyFilter;
};


export type QueryGetActiveCompaniesArgs = {
  filter: CompanyFilter;
};


export type QueryGetCurrencyRateArgs = {
  id: Scalars['String'];
};


export type QueryGetCurrencyRatesArgs = {
  filter: CurrencyRateFilter;
};


export type QueryGetActiveCurrencyRatesArgs = {
  filter: CurrencyRateFilter;
};


export type QueryGetCurrencyArgs = {
  id: Scalars['String'];
};


export type QueryGetCurrenciesArgs = {
  filter: CurrencyFilter;
};


export type QueryGetActiveCurrenciesArgs = {
  filter: CurrencyFilter;
};


export type QueryGetDiscountsArgs = {
  filter: DiscountFilter;
};


export type QueryGetJobArgs = {
  id: Scalars['String'];
};


export type QueryGetJobsArgs = {
  filter: JobFilter;
};


export type QueryGetActiveJobsArgs = {
  filter: JobFilter;
};


export type QueryGetEmployeesArgs = {
  filter: EmployeeFilter;
};


export type QueryGetRoomUserProfileArgs = {
  accessKey: Scalars['String'];
};


export type QueryGetPaymentMethodArgs = {
  id: Scalars['String'];
};


export type QueryGetPaymentMethodsArgs = {
  filter: PaymentMethodFilter;
};


export type QueryGetActivePaymentMethodsArgs = {
  filter: PaymentMethodFilter;
};


export type QueryGetProductSupplierArgs = {
  id: Scalars['String'];
};


export type QueryGetProductSuppliersArgs = {
  filter: ProductSupplierFilter;
};


export type QueryGetActiveProductSuppliersArgs = {
  filter: ProductSupplierFilter;
};


export type QueryGetCategoryArgs = {
  id: Scalars['String'];
};


export type QueryGetCategoriesArgs = {
  filter: CategoriesFilter;
};


export type QueryGetActiveCategoriesArgs = {
  filter: CategoriesFilter;
};


export type QueryGetManufacturerArgs = {
  id: Scalars['String'];
};


export type QueryGetManufacturersArgs = {
  filter: ManufacturerFilter;
};


export type QueryGetScaleArgs = {
  id: Scalars['String'];
};


export type QueryGetScalesArgs = {
  filter: ScaleFilter;
};


export type QueryGetTaxArgs = {
  id: Scalars['String'];
};


export type QueryGetTaxesArgs = {
  filter: TaxesFilter;
};


export type QueryGetActiveTaxesArgs = {
  filter: TaxesFilter;
};


export type QueryGetProductArgs = {
  id: Scalars['String'];
};


export type QueryGetProductsArgs = {
  filter: ProductFilter;
};


export type QueryGetProductRecordersArgs = {
  filter: ProductRecorderFilter;
};


export type QueryGetProductRecorderArgs = {
  id: Scalars['String'];
};


export type QuerySearchSuggestedProductsArgs = {
  value: Scalars['String'];
};


export type QueryGetTagArgs = {
  id: Scalars['String'];
};


export type QueryGetTagsArgs = {
  filter: TagFilter;
};


export type QueryGetRoomCategoryArgs = {
  id: Scalars['String'];
};


export type QueryGetRoomCategoriesArgs = {
  filter: RoomCategoryFilter;
};


export type QueryGetRoomArgs = {
  id: Scalars['String'];
};


export type QueryGetRoomsArgs = {
  filter: RoomFilter;
};


export type QueryGetUserByRoomIdArgs = {
  roomId: Scalars['String'];
};


export type QueryGetDailyTransactionsArgs = {
  filter: RoomTransactionGroupFilter;
};


export type QueryGetMonthlyTransactionsArgs = {
  filter: RoomTransactionGroupFilter;
};


export type QueryGetRoomTransactionReportArgs = {
  filter: RoomTransactionGroupFilter;
};


export type QueryGetProductSalesArgs = {
  filter: ProductSaleFilter;
};


export type QueryGetTimeArgs = {
  filter: TimeFilter;
};


export type QueryGetTimesArgs = {
  filter: TimeFilter;
};


export type QueryGetActiveTimesArgs = {
  filter: TimeFilter;
};

export type RecorderInput = {
  readonly barcode: Maybe<Scalars['String']>;
  readonly quantity: Scalars['Int'];
  readonly sourcePrice: Scalars['Float'];
  readonly wholesalePrice: Scalars['Float'];
  readonly regularPrice: Scalars['Float'];
  readonly sellingPrice: Scalars['Float'];
  readonly weight: Maybe<Scalars['Float']>;
  readonly scaleId: Maybe<Scalars['ID']>;
  readonly producedAt: Maybe<Scalars['DateTime']>;
  readonly expiredAt: Maybe<Scalars['DateTime']>;
};

export type RemoveProductImageInput = {
  readonly productId: Scalars['ID'];
  readonly imageId: Scalars['ID'];
};

export type RoomAccountTypeEnum =
  | 'CASH'
  | 'ABA'
  | 'CREDIT_CARD';

export type RoomCategoryFilter = {
  readonly name: Maybe<Scalars['String']>;
};

export type RoomCategoryInput = {
  readonly name: Scalars['String'];
  readonly image: Maybe<Scalars['String']>;
};

export type RoomCategoryType = {
  readonly __typename?: 'RoomCategoryType';
  readonly createdBy: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly updatedBy: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly image: Maybe<Scalars['String']>;
  readonly status: Maybe<Scalars['String']>;
};

export type RoomCategoryUpdate = {
  readonly id: Scalars['ID'];
  readonly image: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly status: Maybe<StatusEnum>;
};

export type RoomCurrencyCodeEnum =
  | 'USD'
  | 'KHR';

export type RoomFilter = {
  readonly status: Maybe<ReadonlyArray<StatusEnum>>;
  readonly limit: Maybe<Scalars['Int']>;
  readonly page: Maybe<Scalars['Int']>;
  readonly name: Maybe<Scalars['String']>;
};

export type RoomInput = {
  readonly name: Scalars['String'];
  readonly image: Maybe<Scalars['String']>;
  readonly exchangeRate: Scalars['Float'];
  readonly members: ReadonlyArray<MemberInput>;
  readonly description: Maybe<Scalars['String']>;
};

export type RoomTransactionConfirmPaymentInput = {
  readonly roomId: Scalars['ID'];
  readonly year: Scalars['Int'];
  readonly month: Scalars['Int'];
};

export type RoomTransactionGroupByMonthType = {
  readonly __typename?: 'RoomTransactionGroupByMonthType';
  readonly year: Scalars['Int'];
  readonly month: Scalars['Int'];
  readonly amount: Scalars['Float'];
  readonly total: Scalars['Int'];
};

export type RoomTransactionGroupFilter = {
  readonly roomId: Scalars['ID'];
  readonly startedAt: Maybe<Scalars['DateTime']>;
  readonly endedAt: Maybe<Scalars['DateTime']>;
};

export type RoomTransactionGroupType = {
  readonly __typename?: 'RoomTransactionGroupType';
  readonly transactionDate: Scalars['DateTime'];
  readonly month: Scalars['Int'];
  readonly amount: Scalars['Float'];
  readonly transactions: ReadonlyArray<RoomTransactionType>;
  readonly total: Scalars['Int'];
};

export type RoomTransactionInput = {
  readonly roomId: Maybe<Scalars['ID']>;
  readonly categoryId: Scalars['ID'];
  readonly createdTransactionAt: Maybe<Scalars['DateTime']>;
  readonly accountType: Maybe<RoomAccountTypeEnum>;
  readonly type: RoomTransactionTypeEnum;
  readonly currencyCode: RoomCurrencyCodeEnum;
  readonly amount: Scalars['Float'];
  readonly shareWith: ReadonlyArray<Maybe<ShareWithInput>>;
  readonly shareFor: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly image: Maybe<Scalars['String']>;
  readonly note: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
};

export type RoomTransactionReportType = {
  readonly __typename?: 'RoomTransactionReportType';
  readonly year: Scalars['Int'];
  readonly month: Scalars['Int'];
  readonly amount: Scalars['Float'];
  readonly count: Scalars['Int'];
  readonly size: Scalars['Int'];
  readonly conclusionPayments: ReadonlyArray<ConclusionPaymentType>;
};

export type RoomTransactionType = {
  readonly __typename?: 'RoomTransactionType';
  readonly createdBy: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly updatedBy: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly id: Scalars['ID'];
  readonly roomId: Maybe<Scalars['ID']>;
  readonly categoryId: Scalars['ID'];
  readonly category: Maybe<RoomCategoryType>;
  readonly createdTransactionAt: Scalars['DateTime'];
  readonly accountType: Scalars['String'];
  readonly type: Scalars['String'];
  readonly currencyCode: Scalars['String'];
  readonly amount: Scalars['Float'];
  readonly shareWith: Maybe<ReadonlyArray<ShareWithType>>;
  readonly shareFor: Maybe<ReadonlyArray<ShareForType>>;
  readonly note: Maybe<Scalars['String']>;
  readonly image: Maybe<Scalars['String']>;
  readonly isApproved: Maybe<Scalars['Boolean']>;
  readonly isReturned: Maybe<Scalars['Boolean']>;
  readonly description: Maybe<Scalars['String']>;
  readonly status: Maybe<Scalars['String']>;
};

export type RoomTransactionTypeEnum =
  | 'SHARING'
  | 'BORROWING'
  | 'RETURNING';

export type RoomType = {
  readonly __typename?: 'RoomType';
  readonly createdBy: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly updatedBy: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly members: ReadonlyArray<MemberType>;
  readonly exchangeRate: Scalars['Float'];
  readonly description: Maybe<Scalars['String']>;
  readonly status: Maybe<Scalars['String']>;
};

export type RoomUpdate = {
  readonly id: Scalars['ID'];
  readonly image: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly exchangeRate: Maybe<Scalars['Float']>;
  readonly description: Scalars['String'];
  readonly status: Maybe<StatusEnum>;
};

export type RoomUserRegisterInput = {
  readonly avatar: Maybe<Scalars['String']>;
  readonly fullName: Scalars['String'];
  readonly email: Scalars['String'];
  readonly username: Scalars['String'];
  readonly password: Scalars['String'];
  readonly passwordConfirm: Scalars['String'];
};

export type RoomUserType = {
  readonly __typename?: 'RoomUserType';
  readonly createdBy: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly updatedBy: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly id: Scalars['ID'];
  readonly avatar: Maybe<Scalars['String']>;
  readonly fullName: Scalars['String'];
  readonly email: Scalars['String'];
  readonly username: Scalars['String'];
  readonly token: Maybe<Scalars['String']>;
};

export type RoomUserUpdate = {
  readonly id: Scalars['ID'];
  readonly avatar: Maybe<Scalars['String']>;
  readonly fullName: Maybe<Scalars['String']>;
};

export type RoundTypeEnum =
  | 'UP'
  | 'DOWN'
  | 'DEFAULT';

export type SaleOrderInput = {
  readonly userId: Maybe<Scalars['ID']>;
  readonly productRecorderId: Scalars['String'];
  readonly quantity: Scalars['Int'];
};

export type SaleTransactionInput = {
  readonly orderId: Scalars['ID'];
  readonly paymentReceived: ReadonlyArray<PaymentReceivedInput>;
  readonly paymentMethod: Maybe<PaymentTypeEnum>;
  readonly discountId: Maybe<Scalars['ID']>;
};

export type ScaleFilter = {
  readonly status: Maybe<ReadonlyArray<StatusEnum>>;
  readonly limit: Maybe<Scalars['Int']>;
  readonly page: Maybe<Scalars['Int']>;
  readonly name: Maybe<Scalars['String']>;
};

export type ScaleInput = {
  readonly name: Scalars['String'];
};

export type ScaleType = {
  readonly __typename?: 'ScaleType';
  readonly createdBy: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly updatedBy: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly status: Maybe<Scalars['String']>;
};

export type ScaleUpdate = {
  readonly id: Scalars['ID'];
  readonly name: Maybe<Scalars['String']>;
  readonly status: Maybe<StatusEnum>;
};

export type ShareForType = {
  readonly __typename?: 'ShareForType';
  readonly userId: Maybe<Scalars['ID']>;
  readonly user: Maybe<RoomUserType>;
};

export type ShareWithInput = {
  readonly userId: Scalars['ID'];
  readonly amount: Scalars['Float'];
};

export type ShareWithType = {
  readonly __typename?: 'ShareWithType';
  readonly userId: Maybe<Scalars['ID']>;
  readonly user: Maybe<RoomUserType>;
  readonly amount: Maybe<Scalars['Float']>;
};

export type StatusEnum =
  | 'ACTIVE'
  | 'INACTIVE'
  | 'DELETED';

export type StockType = {
  readonly __typename?: 'StockType';
  readonly createdBy: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly updatedBy: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly id: Scalars['ID'];
  readonly productRecorderId: Scalars['ID'];
  readonly productRecorder: Maybe<ProductRecorderType>;
  readonly quantity: Scalars['Int'];
  readonly histories: Maybe<ReadonlyArray<HistoryType>>;
};

export type SupplierAddressInfoInput = {
  readonly country: Maybe<Scalars['String']>;
  readonly province: Maybe<Scalars['String']>;
  readonly district: Maybe<Scalars['String']>;
  readonly commune: Maybe<Scalars['String']>;
  readonly village: Maybe<Scalars['String']>;
  readonly streetNo: Maybe<Scalars['String']>;
  readonly group: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
};

export type SupplierAddressInfoType = {
  readonly __typename?: 'SupplierAddressInfoType';
  readonly countryId: Maybe<Scalars['ID']>;
  readonly country: Maybe<CountryType>;
  readonly provinceId: Maybe<Scalars['ID']>;
  readonly province: Maybe<ProvinceType>;
  readonly districtId: Maybe<Scalars['ID']>;
  readonly district: Maybe<DistrictType>;
  readonly communeId: Maybe<Scalars['ID']>;
  readonly commune: Maybe<CommuneType>;
  readonly villageId: Maybe<Scalars['ID']>;
  readonly village: Maybe<VillageType>;
  readonly streetNo: Maybe<Scalars['String']>;
  readonly group: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
};

export type SupplierContactInfoInput = {
  readonly firstName: Scalars['String'];
  readonly lastName: Scalars['String'];
  readonly mobileNumber: Scalars['String'];
  readonly phoneNumber: Maybe<Scalars['String']>;
};

export type SupplierContactInfoType = {
  readonly __typename?: 'SupplierContactInfoType';
  readonly firstName: Scalars['String'];
  readonly lastName: Scalars['String'];
  readonly fullName: Scalars['String'];
  readonly mobileNumber: Scalars['String'];
  readonly phoneNumber: Maybe<Scalars['String']>;
};

export type SupplierStatusEnum =
  | 'PENDING'
  | 'SUCCESS';

export type SupplyingInput = {
  readonly productRecorderId: Scalars['ID'];
  readonly supplierId: Scalars['ID'];
  readonly quantity: Scalars['Int'];
  readonly discount: Scalars['Float'];
  readonly currencyCode: Maybe<CurrencyCodeEnum>;
  readonly paymentMethod: PaymentTypeEnum;
  readonly amount: Scalars['Float'];
  readonly orderedAt: Maybe<Scalars['DateTime']>;
  readonly arriveAt: Maybe<Scalars['DateTime']>;
  readonly description: Maybe<Scalars['String']>;
  readonly status: Maybe<SupplierStatusEnum>;
};

export type SupplyingType = {
  readonly __typename?: 'SupplyingType';
  readonly createdBy: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly updatedBy: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly supplierId: Scalars['ID'];
  readonly supplier: Maybe<ProductSupplierType>;
  readonly quantity: Scalars['Int'];
  readonly orderedAt: Maybe<Scalars['DateTime']>;
  readonly arriveAt: Maybe<Scalars['DateTime']>;
  readonly isArrived: Maybe<Scalars['Boolean']>;
  readonly status: Maybe<Scalars['String']>;
};

export type TagFilter = {
  readonly status: Maybe<ReadonlyArray<StatusEnum>>;
  readonly limit: Maybe<Scalars['Int']>;
  readonly page: Maybe<Scalars['Int']>;
  readonly name: Maybe<Scalars['String']>;
};

export type TagInput = {
  readonly name: Scalars['String'];
  readonly slug: Scalars['String'];
};

export type TagType = {
  readonly __typename?: 'TagType';
  readonly createdBy: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly updatedBy: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly slug: Scalars['String'];
  readonly status: Maybe<Scalars['String']>;
};

export type TagUpdate = {
  readonly id: Scalars['ID'];
  readonly name: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly status: Maybe<StatusEnum>;
};

export type TaxTypeEnum =
  | 'INCLUSIVE'
  | 'EXCLUSIVE';

export type TaxesFilter = {
  readonly status: Maybe<ReadonlyArray<StatusEnum>>;
  readonly limit: Maybe<Scalars['Int']>;
  readonly page: Maybe<Scalars['Int']>;
  readonly type: Maybe<TaxTypeEnum>;
  readonly name: Maybe<Scalars['String']>;
  readonly caption: Maybe<Scalars['String']>;
};

export type TaxesInput = {
  readonly type: TaxTypeEnum;
  readonly name: Scalars['String'];
  readonly caption: Maybe<Scalars['String']>;
  readonly decimal: Scalars['Float'];
};

export type TaxesType = {
  readonly __typename?: 'TaxesType';
  readonly createdBy: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly updatedBy: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly id: Scalars['ID'];
  readonly type: Scalars['String'];
  readonly name: Scalars['String'];
  readonly caption: Maybe<Scalars['String']>;
  readonly decimal: Scalars['Float'];
  readonly status: Maybe<Scalars['String']>;
};

export type TaxesUpdate = {
  readonly id: Scalars['ID'];
  readonly type: Maybe<TaxTypeEnum>;
  readonly name: Maybe<Scalars['String']>;
  readonly caption: Maybe<Scalars['String']>;
  readonly decimal: Maybe<Scalars['Float']>;
  readonly status: Maybe<StatusEnum>;
};

export type TimeFilter = {
  readonly status: Maybe<ReadonlyArray<StatusEnum>>;
  readonly limit: Maybe<Scalars['Int']>;
  readonly page: Maybe<Scalars['Int']>;
  readonly id: Maybe<Scalars['ID']>;
  readonly name: Maybe<Scalars['String']>;
};

export type TimeInput = {
  readonly otherId: Scalars['String'];
  readonly name: Scalars['String'];
  readonly startedTime: Maybe<Scalars['String']>;
  readonly endedTime: Scalars['String'];
  readonly releasedTime: Scalars['String'];
  readonly status: Maybe<StatusEnum>;
  readonly nameType: NameType;
  readonly nameTypes: ReadonlyArray<NameType>;
};

export type TimeType = {
  readonly __typename?: 'TimeType';
  readonly createdBy: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly updatedBy: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly startedTime: Maybe<Scalars['String']>;
  readonly endedTime: Scalars['String'];
  readonly releasedTime: Scalars['String'];
  readonly status: Maybe<Scalars['String']>;
  readonly nameType: NameTypes;
  readonly nameTypes: ReadonlyArray<NameTypes>;
};

export type TimeUpdate = {
  readonly id: Scalars['ID'];
  readonly name: Maybe<Scalars['String']>;
  readonly startedTime: Maybe<Scalars['String']>;
  readonly endedTime: Maybe<Scalars['String']>;
  readonly releasedTime: Maybe<Scalars['String']>;
  readonly status: Maybe<StatusEnum>;
};

export type TransactionType = {
  readonly __typename?: 'TransactionType';
  readonly createdBy: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly updatedBy: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly id: Scalars['ID'];
  readonly receiptNo: Scalars['Int'];
  readonly orderId: Scalars['ID'];
  readonly order: Maybe<OrderType>;
  readonly userId: Maybe<Scalars['ID']>;
  readonly user: Maybe<CustomerType>;
  readonly taxId: Maybe<Scalars['ID']>;
  readonly tax: Maybe<TaxesType>;
  readonly discountId: Maybe<Scalars['ID']>;
  readonly discount: Maybe<DiscountType>;
  readonly currencyCode: Maybe<Scalars['String']>;
  readonly paymentMethod: Scalars['String'];
  readonly totalAmount: Scalars['Float'];
  readonly vatAmount: Scalars['Float'];
  readonly discountAmount: Scalars['Float'];
  readonly subAmount: Scalars['Float'];
  readonly receivedAmount: Maybe<ReadonlyArray<PaymentReceivedType>>;
  readonly exchangedRateAmount: Maybe<ReadonlyArray<ExchangedRateAmountType>>;
  readonly paymentStatus: Maybe<Scalars['Float']>;
  readonly status: Maybe<Scalars['Float']>;
};

export type Vendor = {
  readonly __typename?: 'Vendor';
  readonly id: Scalars['ID'];
  readonly companyId: Scalars['String'];
  readonly company: Maybe<CompanyType>;
};

export type VendorCompanyInput = {
  readonly nameKh: Scalars['String'];
  readonly nameEn: Maybe<Scalars['String']>;
  readonly profile: CompanyDetailInput;
  readonly branches: Maybe<ReadonlyArray<CompanyBranchInput>>;
};

export type VendorFilter = {
  readonly status: Maybe<ReadonlyArray<StatusEnum>>;
  readonly limit: Maybe<Scalars['Int']>;
  readonly page: Maybe<Scalars['Int']>;
  readonly id: Maybe<Scalars['ID']>;
  readonly fullName: Maybe<Scalars['String']>;
  readonly email: Maybe<Scalars['String']>;
  readonly mobileNumber: Maybe<Scalars['String']>;
};

export type VendorInput = {
  readonly avatar: Maybe<Scalars['String']>;
  readonly firstName: Scalars['String'];
  readonly lastName: Scalars['String'];
  readonly gender: GenderEnum;
  readonly dob: Scalars['DateTime'];
  readonly email: Scalars['String'];
  readonly mobileDetail: MobileDetailInput;
  readonly companyProfile: VendorCompanyInput;
};

export type VendorRegisterInput = {
  readonly avatar: Maybe<Scalars['String']>;
  readonly firstName: Scalars['String'];
  readonly lastName: Scalars['String'];
  readonly gender: GenderEnum;
  readonly dob: Scalars['DateTime'];
  readonly email: Scalars['String'];
  readonly mobileDetail: MobileDetailInput;
  readonly companyProfile: Maybe<CompanyProfileInput>;
};

export type VendorType = {
  readonly __typename?: 'VendorType';
  readonly createdBy: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly updatedBy: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly id: Scalars['ID'];
  readonly avatar: Maybe<Scalars['String']>;
  readonly firstName: Scalars['String'];
  readonly lastName: Scalars['String'];
  readonly fullName: Scalars['String'];
  readonly username: Maybe<Scalars['String']>;
  readonly gender: Maybe<Scalars['String']>;
  readonly dob: Maybe<Scalars['DateTime']>;
  readonly email: Scalars['String'];
  readonly mobileDetail: Maybe<MobileDetails>;
  readonly vendors: ReadonlyArray<Maybe<Vendor>>;
  readonly accessKey: Scalars['String'];
  readonly status: Maybe<Scalars['String']>;
};

export type VendorUpdate = {
  readonly avatar: Maybe<Scalars['String']>;
  readonly firstName: Maybe<Scalars['String']>;
  readonly lastName: Maybe<Scalars['String']>;
  readonly gender: Maybe<GenderEnum>;
  readonly dob: Maybe<Scalars['DateTime']>;
  readonly mobileDetail: Maybe<MobileDetailInput>;
  readonly status: Maybe<StatusEnum>;
};

export type VerifyAccountInput = {
  readonly verifyCode: Maybe<Scalars['Int']>;
  readonly verifyUrl: Maybe<Scalars['String']>;
  readonly username: Scalars['String'];
  readonly password: Scalars['String'];
  readonly passwordConfirm: Scalars['String'];
};

export type VillageFilter = {
  readonly status: Maybe<ReadonlyArray<StatusEnum>>;
  readonly limit: Maybe<Scalars['Int']>;
  readonly page: Maybe<Scalars['Int']>;
  readonly provinceId: Maybe<Scalars['String']>;
  readonly districtId: Maybe<Scalars['String']>;
  readonly communeId: Maybe<Scalars['String']>;
  readonly nameKh: Maybe<Scalars['String']>;
  readonly nameEn: Maybe<Scalars['String']>;
};

export type VillageSuggestedFilter = {
  readonly provinceId: Maybe<Scalars['String']>;
  readonly districtId: Maybe<Scalars['String']>;
  readonly communeId: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
};

export type VillageType = {
  readonly __typename?: 'VillageType';
  readonly createdBy: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly updatedBy: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly id: Scalars['ID'];
  readonly uId: Scalars['String'];
  readonly provinceId: Scalars['String'];
  readonly province: Maybe<ProvinceType>;
  readonly districtId: Scalars['String'];
  readonly district: Maybe<DistrictType>;
  readonly communeId: Scalars['String'];
  readonly commune: Maybe<CommuneType>;
  readonly nameKh: Maybe<Scalars['String']>;
  readonly nameEn: Maybe<Scalars['String']>;
  readonly status: Maybe<Scalars['String']>;
};

export type VillageUpdate = {
  readonly id: Scalars['ID'];
  readonly nameKh: Scalars['String'];
  readonly nameEn: Scalars['String'];
  readonly status: Maybe<StatusEnum>;
};
