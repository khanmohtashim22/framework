import React from 'react'
import { render } from '@testing-library/react'

import ExpandCollapseContainer from '../ExpandCollapseContainer'

describe('ExpandCollapseContainer', () => {

  let wrapper

  describe('when rendered', () => {

    beforeEach(() => {
      wrapper = render(
        <ExpandCollapseContainer>
          <div data-testid="test">Testing</div>
        </ExpandCollapseContainer>
      )
    })

    it('should render the children', () => {
      const { getByTestId } = wrapper
      expect(getByTestId('test')).toBeTruthy()
    })

  })

})