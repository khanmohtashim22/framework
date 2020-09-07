import React from 'react'
import { render } from '@testing-library/react'

import App from '../App.js'

jest.mock('../panel/block-panel/BlockPanel', () => () => <div>Block</div>)

describe('App', () => {

  let wrapper

  describe('when rendered', () => {

    beforeEach(() => {
      wrapper = render(
        <App />
      )
    })

    it('should render the App', () => {
      const { getByTestId } = wrapper
      expect(getByTestId('App')).toBeDefined()
    })

  })

})