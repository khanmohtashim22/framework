import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import AccessibleClick from '../AccessibleClick'

jest.mock('lodash/debounce', () => cb => cb)

describe('AccessibleClick', () => {

  let wrapper
  const testFunction = jest.fn()

  describe('when rendered with default props', () => {

    beforeEach(() => {
      jest.clearAllMocks()
      wrapper = render(
        <AccessibleClick>
          <div data-testid="test" onAccessibleClick={testFunction}>Testing</div>
        </AccessibleClick>
      )
    })

    it('should call testFunction via onAccessibleClick when child is clicked', () => {
      const { getByTestId } = wrapper
      fireEvent.click(getByTestId('test'))
      expect(testFunction).toHaveBeenCalled()
    })

    it('should call testFunction via onAccessibleClick when enter key is pressed', () => {
      const { getByTestId } = wrapper
      fireEvent.keyDown(getByTestId('test'), {
        key: 'Enter',
        code: 'Enter',
        keyCode: 13,
        charCode: 13
      })
      expect(testFunction).toHaveBeenCalled()
    })

    it('should not call testFunction via onAccessibleClick when enter key is pressed if data-accessible-id doesn\'t match', () => {
      const { getByTestId } = wrapper
      fireEvent.keyDown(getByTestId('test'), {
        key: 'Enter',
        code: 'Enter',
        keyCode: 13,
        charCode: 13,
        target: {
          getAttribute: () => 'test'
        }
      })
      expect(testFunction).not.toHaveBeenCalled()
    })

    it('should not call testFunction via onAccessibleClick when arrowDown key is pressed', () => {
      const { getByTestId } = wrapper
      fireEvent.keyDown(getByTestId('test'), {
        key: 'ArrowDown',
        code: 'ArrowDown',
        keyCode: 40,
        charCode: 40
      })
      expect(testFunction).not.toHaveBeenCalled()
    })
    
  })

  describe('when rendered with arrowDownKey set to true', () => {

    beforeEach(() => {
      jest.clearAllMocks()
      wrapper = render(
        <AccessibleClick arrowDownKey={true}>
          <div data-testid="test" onAccessibleClick={testFunction}>Testing</div>
        </AccessibleClick>
      )
    })

    it('should call testFunction via onAccessibleClick when arrowDown key is pressed', () => {
      const { getByTestId } = wrapper
      fireEvent.keyDown(getByTestId('test'), {
        key: 'ArrowDown',
        code: 'ArrowDown',
        keyCode: 40,
        charCode: 40
      })
      expect(testFunction).toHaveBeenCalled()
    })

  })

  describe('when rendered with spaceKey set to true', () => {

    beforeEach(() => {
      jest.clearAllMocks()
      wrapper = render(
        <AccessibleClick spaceKey={true}>
          <div data-testid="test" onAccessibleClick={testFunction}>Testing</div>
        </AccessibleClick>
      )
    })

    it('should call testFunction via onAccessibleClick when space key is pressed', () => {
      const { getByTestId } = wrapper
      fireEvent.keyDown(getByTestId('test'), {
        key: ' ', // space
        code: 'Space',
        keyCode: 32,
        charCode: 32
      })
      expect(testFunction).toHaveBeenCalled()
    })

  })

  describe('when rendered with tabKey set to true', () => {

    beforeEach(() => {
      jest.clearAllMocks()
      wrapper = render(
        <AccessibleClick tabKey={true}>
          <div data-testid="test" onAccessibleClick={testFunction}>Testing</div>
        </AccessibleClick>
      )
    })

    it('should call testFunction via onAccessibleClick when tab key is pressed', () => {
      const { getByTestId } = wrapper
      fireEvent.keyDown(getByTestId('test'), {
        key: 'Tab',
        code: 'Tab',
        keyCode: 9,
        charCode: 9
      })
      expect(testFunction).toHaveBeenCalled()
    })

  })

})