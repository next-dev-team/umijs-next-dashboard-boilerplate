import { axiosRequest } from '@/utils/axios-request';

export const commonService = {
  userProfile: async () => {
    return await axiosRequest({
      data: {
        query: `
        query GetProfile{
          getProfile{
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
        `,
      },
    });
  },
};
