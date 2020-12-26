import React from 'react'
import { render } from '@testing-library/react'

import ExpandCollapseHeading from '../ExpandCollapseHeading'
import AccordionContext from '../../accordion/AccordionContext'

describe('ExpandCollapseHeading', () => {

  let wrapper

  describe('when rendered with no nest an in un-opened state', () => {

    beforeEach(() => {
      wrapper = render(
        <ExpandCollapseHeading open={false}>
          <div data-testid="test">Testing</div>
        </ExpandCollapseHeading>
      )
    })

    it('should render the children', () => {
      const { getByTestId } = wrapper
      expect(getByTestId('test')).toBeTruthy()
    })

    it('should not render the nest class', () => {
      const { getByTestId } = wrapper
      expect(getByTestId('expand-collapse-heading')).not.toHaveClass('nested')
    })

    it('should render inactive styles', () => {
      const { getByTestId } = wrapper
      expect(getByTestId('expand-collapse-heading')).toHaveClass('inactive')
    })

  })

  describe('when rendered with no nest an in opened state', () => {

    beforeEach(() => {
      wrapper = render(
        <ExpandCollapseHeading open={true}>
          <div data-testid="test">Testing</div>
        </ExpandCollapseHeading>
      )
    })

    it('should render the children', () => {
      const { getByTestId } = wrapper
      expect(getByTestId('test')).toBeTruthy()
    })

    it('should not render the nest class', () => {
      const { getByTestId } = wrapper
      expect(getByTestId('expand-collapse-heading')).not.toHaveClass('nested')
    })

    it('should render active styles', () => {
      const { getByTestId } = wrapper
      expect(getByTestId('expand-collapse-heading')).toHaveClass('active')
    })

  })

  describe('when rendered with nest', () => {

    beforeEach(() => {
      wrapper = render(
        <AccordionContext.Provider value={{ level: 2 }}>
          <ExpandCollapseHeading>
            <div data-testid="test">Testing</div>
          </ExpandCollapseHeading>
        </AccordionContext.Provider>
      )
    })

    it('should not render the nest class', () => {
      const { getByTestId } = wrapper
      expect(getByTestId('expand-collapse-heading')).toHaveClass('nested')
    })

  })

})