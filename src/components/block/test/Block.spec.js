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

test('should render margin equal zero style if passed m prop eqaul 0', () => {
  const { getByTestId } = render(<Block data-testid="block-test" m="0">Test</Block>)
  expect(getByTestId('block-test')).toHaveStyle('margin: 0')
})

test('should render margin with with passed value from "m" prop', () => {
  const { getByTestId } = render(<Block data-testid="block-test" m={2}>Test</Block>)
  expect(getByTestId('block-test')).toHaveStyle('margin: 2px')
})

test('should render margin-top with passed value from "mt" prop', () => {
  const { getByTestId } = render(<Block data-testid="block-test" mt={4}>Test</Block>)
  expect(getByTestId('block-test')).toHaveStyle('margin-top: 4px')
})

test('should render margin-right with passed value from "mr" prop', () => {
  const { getByTestId } = render(<Block data-testid="block-test" mr={6}>Test</Block>)
  expect(getByTestId('block-test')).toHaveStyle('margin-right: 6px')
})

test('should render margin-bottom with passed value from "mb" prop', () => {
  const { getByTestId } = render(<Block data-testid="block-test" mb={8}>Test</Block>)
  expect(getByTestId('block-test')).toHaveStyle('margin-bottom: 8px')
})

test('should render margin-left with passed value from "ml" prop', () => {
  const { getByTestId } = render(<Block data-testid="block-test" ml={10}>Test</Block>)
  expect(getByTestId('block-test')).toHaveStyle('margin-left: 10px')
})

test('should render margin-top and margin-bottom with passed value from "my" prop', () => {
  const { getByTestId } = render(<Block data-testid="block-test" my={12}>Test</Block>)
  expect(getByTestId('block-test')).toHaveStyle('margin-top: 12px')
  expect(getByTestId('block-test')).toHaveStyle('margin-bottom: 12px')
})

test('should render margin-left and margin-right with passed value from "mx" prop', () => {
  const { getByTestId } = render(<Block data-testid="block-test" mx={14}>Test</Block>)
  expect(getByTestId('block-test')).toHaveStyle('margin-left: 14px')
  expect(getByTestId('block-test')).toHaveStyle('margin-right: 14px')
})

test('should render padding equal zero style if passed m prop eqaul 0', () => {
  const { getByTestId } = render(<Block data-testid="block-test" p="0">Test</Block>)
  expect(getByTestId('block-test')).toHaveStyle('padding: 0')
})

test('should render padding with with passed value from "p" prop', () => {
  const { getByTestId } = render(<Block data-testid="block-test" p={2}>Test</Block>)
  expect(getByTestId('block-test')).toHaveStyle('padding: 2px')
})

test('should render padding-top with passed value from "pt" prop', () => {
  const { getByTestId } = render(<Block data-testid="block-test" pt={4}>Test</Block>)
  expect(getByTestId('block-test')).toHaveStyle('padding-top: 4px')
})

test('should render padding-right with passed value from "pr" prop', () => {
  const { getByTestId } = render(<Block data-testid="block-test" pr={6}>Test</Block>)
  expect(getByTestId('block-test')).toHaveStyle('padding-right: 6px')
})

test('should render padding-bottom with passed value from "pb" prop', () => {
  const { getByTestId } = render(<Block data-testid="block-test" pb={8}>Test</Block>)
  expect(getByTestId('block-test')).toHaveStyle('padding-bottom: 8px')
})

test('should render padding-left with passed value from "pl" prop', () => {
  const { getByTestId } = render(<Block data-testid="block-test" pl={10}>Test</Block>)
  expect(getByTestId('block-test')).toHaveStyle('padding-left: 10px')
})

test('should render padding-top and padding-bottom with passed value from "py" prop', () => {
  const { getByTestId } = render(<Block data-testid="block-test" py={12}>Test</Block>)
  expect(getByTestId('block-test')).toHaveStyle('padding-top: 12px')
  expect(getByTestId('block-test')).toHaveStyle('padding-bottom: 12px')
})

test('should render padding-left and padding-right with passed value from "px" prop', () => {
  const { getByTestId } = render(<Block data-testid="block-test" px={14}>Test</Block>)
  expect(getByTestId('block-test')).toHaveStyle('padding-left: 14px')
  expect(getByTestId('block-test')).toHaveStyle('padding-right: 14px')
})

test('should render any other inline stlyes that are passed', () => {
  const { getByTestId } = render(<Block data-testid="block-test" p={16} style={{ color: 'black' }}>Test</Block>)
  expect(getByTestId('block-test')).toHaveStyle('padding: 16px')
  expect(getByTestId('block-test')).toHaveStyle('color: black')
})
