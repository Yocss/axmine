import yocee from '../dist/yocee'

// test formatDate()
test('Test formatDate(1597913081): should be \'2020-08-20 16:44\'', () => {
  expect(yocee.formatDate(1597913081)).toBe('2020-08-20 16:44')
})
test('Test formatDate(1597913081, \'y年m月d日 h:i:s\'): should be \'2020年08月20日 16:44:41\'', () => {
  expect(yocee.formatDate(1597913081, 'y年m月d日 h:i:s')).toBe('2020年08月20日 16:44:41')
})

// test getType()
test('Test getType({a: 1}): should be \'object\'', () => {
  expect(yocee.getType({a: 1})).toBe('object')
})
test('Test getType([1,2]): should be \'array\'', () => {
  expect(yocee.getType([1,2])).toBe('array')
})
test('Test getType(true): should be \'boolean\'', () => {
  expect(yocee.getType(true)).toBe('boolean')
})
test('Test getType(() => {}): should be \'function\'', () => {
  expect(yocee.getType(() => {})).toBe('function')
})
