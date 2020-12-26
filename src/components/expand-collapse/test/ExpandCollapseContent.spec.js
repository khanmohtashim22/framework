import React from 'react'
import { render } from '@testing-library/react'

import ExpandCollapseContent from '../ExpandCollapseContent'
import AccordionContext from '../../accordion/AccordionContext'
import Accordion from '../../accordion/Accordion'

describe('ExpandCollapseContent', () => {

  let wrapper

  describe('when rendered with no nest', () => {

    beforeEach(() => {
      wrapper = render(
        <ExpandCollapseContent>
          <div data-testid="test">Testing</div>
        </ExpandCollapseContent>
      )
    })

    it('should render the children', () => {
      const { getByTestId } = wrapper
      expect(getByTestId('test')).toBeTruthy()
    })

    it('should not render the nest class', () => {
      const { getByTestId } = wrapper
      expect(getByTestId('expand-collapse-content')).not.toHaveClass('nested')
    })

  })

  describe('when rendered with nest', () => {

    beforeEach(() => {
      wrapper = render(
        <AccordionContext.Provider value={{ level: 2 }}>
          <ExpandCollapseContent>
            <Accordion>
              <div data-testid="test">Testing</div>
            </Accordion>
          </ExpandCollapseContent>
        </AccordionContext.Provider>
      )
    })

    it('should render the children', () => {
      const { getByTestId } = wrapper
      expect(getByTestId('test')).toBeTruthy()
    })

    it('should not render the nest class', () => {
      const { getByTestId } = wrapper
      expect(getByTestId('expand-collapse-content')).toHaveClass('nested')
    })

  })

})