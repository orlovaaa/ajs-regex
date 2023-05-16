import Validator from '../app';

test.each([
  ['test_-12a', true],
  ['test@$tt', false],
  ['test123tt', false],
  ['1test', false],
  ['-test', false],
  ['_test', false],
  ['test1', false],
  ['test-', false],
  ['test_', false],
])(
  ('should validate username'),
  (input, expected) => {
    const result = Validator.validateUsername(input);
    expect(result).toBe(expected);
  },
);
