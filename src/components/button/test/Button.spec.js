import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Button from '../Button'

describe('Button', () => {

  let wrapper
  const testHandler = jest.fn()

  describe('when rendered', () => {

    beforeEach(() => {
      jest.clearAllMocks()
      wrapper = render(
        <Button data-testid="test-button" onClick={testHandler}>Test</Button>
      )
    })

    it('should render a primary button', () => {
      const { getByTestId } = wrapper
      expect(getByTestId('test-button')).toHaveClass('primary')
    })

    it('should call testHandler on click of button', () => {
      const { getByTestId } = wrapper
      fireEvent.click(getByTestId('test-button'))
      expect(testHandler).toHaveBeenCalled()
    })

  })

  describe('when rendered with type secondary', () => {

    beforeEach(() => {
      jest.clearAllMocks()
      wrapper = render(
        <Button type="secondary" data-testid="test-button" onClick={testHandler}>Test</Button>
      )
    })

    it('should render a primary button', () => {
      const { getByTestId } = wrapper
      expect(getByTestId('test-button')).toHaveClass('secondary')
    })

  })

  describe('when rendered with disabled set to true', () => {

    beforeEach(() => {
      jest.clearAllMocks()
      wrapper = render(
        <Button disabled={true} type="secondary" data-testid="test-button" onClick={testHandler}>Test</Button>
      )
    })

    it('should render a disabled button', () => {
      const { getByTestId } = wrapper
      expect(getByTestId('test-button')).toHaveClass('disabled')
    })

    it('should not call testHandler on click of button', () => {
      const { getByTestId } = wrapper
      fireEvent.click(getByTestId('test-button'))
      expect(testHandler).not.toHaveBeenCalled()
    })

  })

})