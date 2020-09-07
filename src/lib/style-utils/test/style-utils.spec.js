import { getClasses } from '../style-utils'

import styles from './style-utils.module.scss'

describe('style-utils', () => {

  describe('getClasses', () => {

    it('when called with an emty object it shold return ""', () => {
      expect(getClasses({})).toBe('')
    })

    it('when called with simple classes it should return them', () => {
      expect(getClasses({ styles, classes: ['moe', 'testing'] })).toBe('moe testing')
    })

    it('when called with falsy classes it should return ""', () => {
      expect(getClasses({ styles, classes: [false, 0, null, undefined, true && false, false ? 'test' : ''] })).toBe('')
    }) 

    it('when called with a mixture of truthy and falsy classes it should filter out and return all the truthy values', () => {
      expect(getClasses({ styles, classes: [false, 'test-1', 0, null, undefined, true && false, false ? 'test' : '', true && 'test-2', true ? 'test-3' : ''] })).toBe('test-1 test-2 test-3')
    }) 

  })

})