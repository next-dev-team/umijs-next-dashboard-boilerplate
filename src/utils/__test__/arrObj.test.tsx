import { dataToOption } from '../arrObj';

test('dataToOption', () => {
  const te = dataToOption([{ title: 'sila', value: 1 }], 'title', 'value');
  expect(te).toEqual([{ label: 'sila', value: 1 }]);
});
