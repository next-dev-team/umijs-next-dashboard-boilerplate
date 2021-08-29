/**
 * func to set width style in table form
 * @param isModifyMode
 * @param r
 * @param width
 * @param isNoPadding
 * @returns
 */
export const getFormWidth = (
  isModifyMode = false,
  r = true,
  width?: any,
  isNoPadding?: boolean,
) => {
  return isModifyMode
    ? {
        display: 'inline-block',
        width: width || '50%',
        paddingRight: isNoPadding ? 0 : r ? 20 : 0,
        paddingLeft: isNoPadding ? 0 : r ? 0 : 20,
      }
    : {};
};
