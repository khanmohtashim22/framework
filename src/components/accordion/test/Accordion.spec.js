import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Accordion from '../Accordion'
import AccordionControl from '../AccordionControl'
import AccordionContent from '../AccordionContent'

jest.mock('lodash/debounce', () => cb => cb)

describe('Accordion', () => {

  let wrapper

  describe('when rendered', () => {
    
    beforeEach(() => {
      wrapper = render (
        <Accordion>
          <AccordionControl>
            <div data-testid="heading">
              heading
            </div>
          </AccordionControl>
          <AccordionContent>
            <div data-testid="content">
              content
            </div>
          </AccordionContent>
        </Accordion>
      )
    })

    it('should render heading but not the content', () => {
      const { queryByTestId } = wrapper
      expect(queryByTestId('heading')).toBeTruthy()
      expect(queryByTestId('content')).toBeNull()
    })

    it('should render content when heading is clicked', () => {
      const { queryByTestId } = wrapper
      fireEvent.click(queryByTestId('heading'))
      expect(queryByTestId('content')).toBeTruthy()
    })

  })

  describe('when rendered with open set to true', () => {

    beforeEach(() => {
      wrapper = render(
        <Accordion open={true}>
          <AccordionControl>
            <div data-testid="heading">
              heading
            </div>
          </AccordionControl>
          <AccordionContent>
            <div data-testid="content">
              content
            </div>
          </AccordionContent>
        </Accordion>
      )
    })

    it('should render heading and content', () => {
      const { queryByTestId } = wrapper
      expect(queryByTestId('heading')).toBeTruthy()
      expect(queryByTestId('content')).toBeTruthy()
    })

    it('should not render content when heading is clicked', () => {
      const { queryByTestId } = wrapper
      fireEvent.click(queryByTestId('heading'))
      expect(queryByTestId('content')).toBeNull()
    })

  })

})