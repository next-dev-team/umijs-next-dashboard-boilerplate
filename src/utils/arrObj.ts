import identity from 'lodash/identity';
import pickBy from 'lodash/pickBy';

/**
 *  note: it will remove include all type of empty object
 * include 0 and  false in case use with form please careful!
 * @param values
 */
export function getOnlyValue<T>(values: T): T {
  // @ts-ignore
  return pickBy(values || {}, identity);
}

export const dataToOption = (
  enumData: any[] = [],
  label: string | number,
  value: string | number,
) => {
  return enumData?.map((v: any) => {
    return {
      label: label && v[label],
      value: value && v[value],
    };
  });
};
