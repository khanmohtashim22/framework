import React from 'react'
import { render } from '@testing-library/react'

import Block from '../Block'

test('should render the element that is passed into the prop el', () => {
  const { container } = render(<Block el="p">Test</Block>)
  expect(container.getElementsByTagName('p')).toBeTruthy()
})

test('should render data-testid', () => {
  const { getByTestId } = render(<Block data-testid="block-test">Test</Block>)
  expect(getByTestId('block-test')).toBeTruthy()
})

test('should render any other props passed for example role', () => {
  const { getByRole } = render(<Block role="role-test">Test</Block>)
  expect(getByRole('role-test')).toBeTruthy()
})