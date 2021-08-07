import type { FooterProps } from '@ant-design/pro-layout';
import { DefaultFooter } from '@ant-design/pro-layout';
import React from 'react';

export default ({ companyName, ...rest }: { companyName: string } & FooterProps) => (
  <DefaultFooter copyright={`2021 ${companyName}`} {...rest} />
);
// {
//   key: 'Ant Design Pro',
//   title: 'Ant Design Pro',
//   href: 'https://pro.ant.design',
//   blankTarget: true,
// },
// {
//   key: 'github',
//   title: <GithubOutlined />,
//   href: 'https://github.com/ant-design/ant-design-pro',
//   blankTarget: true,
// },
// {
//   key: 'Ant Design',
//   title: 'Ant Design',
//   href: 'https://ant.design',
//   blankTarget: true,
// },
