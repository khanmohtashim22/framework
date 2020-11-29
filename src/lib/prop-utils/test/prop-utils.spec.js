import { pluck, pick } from '../prop-utils'

describe('prop-utils', () => {

  describe('pluck', () => {

    it('should remove the passed in keys from passed in object', () => {
      const obj = {
        name: 'Moe',
        age: '29',
        city: 'SF'
      }
      expect(pluck(['city'], obj)).toEqual({ name: 'Moe', age: '29' })
    })

    it('should return same passed in object if there are no matches from passed in keys', () => {
      const obj = {
        testing: 'testing'
      }
      expect(pluck(['name'], obj)).toEqual({ testing: 'testing' })
    })

    it('should return empty object if empty object is passed', () => {
      const obj = {}
      expect(pluck(['name'], obj)).toEqual({ })
    })

  })

  describe('pick', () => {

    it('should select the passed in keys from passed object', () => {
      const obj = {
        name: 'Moe',
        age: 0,
        city: 'SF',
        test: null,
        married: false

      }
      expect(pick(['name', 'age', 'test', 'married'], obj)).toEqual({ name: 'Moe', age: 0, test: null, married: false })
    })

    it('should return empty object if keys specified are not in object', () => {
      const obj = {
        name: 'Moe'
      }
      expect(pick(['age', 'city'], obj)).toEqual({ })
    })

    it('should return empty object if empty object is passed', () => {
      const obj = {}
      expect(pick(['name'], obj)).toEqual({})
    })

  })

})
