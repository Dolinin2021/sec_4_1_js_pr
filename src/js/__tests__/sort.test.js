import { sortDictionary } from '../app';

test.each([{
  data: [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ],
  expected: [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ],
}])('sort check %s', ({ data, expected }) => {
  const result = sortDictionary(data);
  expect(result).toEqual(expected);
});
