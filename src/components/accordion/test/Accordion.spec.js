import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Accordion from '../Accordion'
import AccordionControl from '../AccordionControl'
import AccordionContent from '../AccordionContent'

jest.mock('lodash/debounce', () => cb => cb)

describe('Accordion', () => {

  let wrapper
  const onOpenTesterFunction = jest.fn()
  const onCloseTesterFunction = jest.fn()
  const onToggleTesterFunction = jest.fn()

  describe('when rendered', () => {
    
    beforeEach(() => {
      jest.clearAllMocks()
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
      jest.clearAllMocks()
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

  describe('when rendered with an onOpen', () => {
    beforeEach(() => {
      jest.clearAllMocks()
      wrapper = render(
        <Accordion onOpen={onOpenTesterFunction}>
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

    it('should call onOpenTesterFunction when Accordion is opened', () => {
      const { queryByTestId } = wrapper
      fireEvent.click(queryByTestId('heading'))
      expect(onOpenTesterFunction).toHaveBeenCalled()
      expect(onCloseTesterFunction).not.toHaveBeenCalled()
      expect(onToggleTesterFunction).not.toHaveBeenCalled()
    })
  })

  describe('when rendered with an onClose and opened', () => {
    beforeEach(() => {
      jest.clearAllMocks()
      wrapper = render(
        <Accordion open={true} onClose={onCloseTesterFunction}>
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

    it('should call onCloseTesterFunction when Accordion is closing', () => {
      const { queryByTestId } = wrapper
      fireEvent.click(queryByTestId('heading'))
      expect(onOpenTesterFunction).not.toHaveBeenCalled()
      expect(onCloseTesterFunction).toHaveBeenCalled()
      expect(onToggleTesterFunction).not.toHaveBeenCalled()
    })
  })

  describe('when rendered with an onToggle', () => {
    beforeEach(() => {
      jest.clearAllMocks()
      wrapper = render(
        <Accordion onToggle={onToggleTesterFunction}>
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

    it('should call onToggleTesterFunction when Accordion is toggled', () => {
      const { queryByTestId } = wrapper
      fireEvent.click(queryByTestId('heading'))
      expect(onOpenTesterFunction).not.toHaveBeenCalled()
      expect(onCloseTesterFunction).not.toHaveBeenCalled()
      expect(onToggleTesterFunction).toHaveBeenCalled()
    })
  })

})