import { pluck } from '../prop-utils'

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

})
