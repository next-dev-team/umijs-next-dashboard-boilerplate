/**
 * @see https://umijs.org/plugins/plugin-access
 * */
export default function access(initialState: { currentUser?: any | undefined }) {
  const { currentUser } = initialState || {};
  return {
    canAdmin: currentUser && currentUser.access === 'admin',
  };
}
