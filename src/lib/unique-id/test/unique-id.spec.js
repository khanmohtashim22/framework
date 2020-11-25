import unique from '../unique-id'

test('should give unique id\'s when called', () => {
  const value1 = unique()
  const value2 = unique()
  expect(value1).toBeDefined()
  expect(value2).toBeDefined()
  expect(value1).not.toBe(value2)
})