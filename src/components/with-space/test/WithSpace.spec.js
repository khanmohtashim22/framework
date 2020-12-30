import React from 'react'
import { render } from '@testing-library/react'

import WithSpace from '../WithSpace'

const Dummy = ({ ...restOfProps }) => <div {...restOfProps} />
const DummyComponent = WithSpace(Dummy)

test('should render margin equal zero style if passed m prop eqaul 0', () => {
  const { getByTestId } = render(<DummyComponent data-testid="test-element" m={0} />)
  expect(getByTestId('test-element')).toHaveStyle('margin: 0')
})

test('should render margin with with passed value from "m" prop', () => {
  const { getByTestId } = render(<DummyComponent data-testid="test-element" m={2} />)
  expect(getByTestId('test-element')).toHaveStyle('margin: 2px')
})

test('should render margin-top with passed value from "mt" prop', () => {
  const { getByTestId } = render(<DummyComponent data-testid="test-element" mt={4} />)
  expect(getByTestId('test-element')).toHaveStyle('margin-top: 4px')
})

test('should render margin-right with passed value from "mr" prop', () => {
  const { getByTestId } = render(<DummyComponent data-testid="test-element" mr={6} />)
  expect(getByTestId('test-element')).toHaveStyle('margin-right: 6px')
})

test('should render margin-bottom with passed value from "mb" prop', () => {
  const { getByTestId } = render(<DummyComponent data-testid="test-element" mb={8} />)
  expect(getByTestId('test-element')).toHaveStyle('margin-bottom: 8px')
})

test('should render margin-left with passed value from "ml" prop', () => {
  const { getByTestId } = render(<DummyComponent data-testid="test-element" ml={10} />)
  expect(getByTestId('test-element')).toHaveStyle('margin-left: 10px')
})

test('should render margin-top and margin-bottom with passed value from "my" prop', () => {
  const { getByTestId } = render(<DummyComponent data-testid="test-element" my={12} />)
  expect(getByTestId('test-element')).toHaveStyle('margin-top: 12px')
  expect(getByTestId('test-element')).toHaveStyle('margin-bottom: 12px')
})

test('should render margin-left and margin-right with passed value from "mx" prop', () => {
  const { getByTestId } = render(<DummyComponent data-testid="test-element" mx={14} />)
  expect(getByTestId('test-element')).toHaveStyle('margin-left: 14px')
  expect(getByTestId('test-element')).toHaveStyle('margin-right: 14px')
})

test('should render padding equal zero style if passed m prop eqaul 0', () => {
  const { getByTestId } = render(<DummyComponent data-testid="test-element" p="0" />)
  expect(getByTestId('test-element')).toHaveStyle('padding: 0')
})

test('should render padding with with passed value from "p" prop', () => {
  const { getByTestId } = render(<DummyComponent data-testid="test-element" p={2} />)
  expect(getByTestId('test-element')).toHaveStyle('padding: 2px')
})

test('should render padding-top with passed value from "pt" prop', () => {
  const { getByTestId } = render(<DummyComponent data-testid="test-element" pt={4} />)
  expect(getByTestId('test-element')).toHaveStyle('padding-top: 4px')
})

test('should render padding-right with passed value from "pr" prop', () => {
  const { getByTestId } = render(<DummyComponent data-testid="test-element" pr={6} />)
  expect(getByTestId('test-element')).toHaveStyle('padding-right: 6px')
})

test('should render padding-bottom with passed value from "pb" prop', () => {
  const { getByTestId } = render(<DummyComponent data-testid="test-element" pb={8} />)
  expect(getByTestId('test-element')).toHaveStyle('padding-bottom: 8px')
})

test('should render padding-left with passed value from "pl" prop', () => {
  const { getByTestId } = render(<DummyComponent data-testid="test-element" pl={10} />)
  expect(getByTestId('test-element')).toHaveStyle('padding-left: 10px')
})

test('should render padding-top and padding-bottom with passed value from "py" prop', () => {
  const { getByTestId } = render(<DummyComponent data-testid="test-element" py={12} />)
  expect(getByTestId('test-element')).toHaveStyle('padding-top: 12px')
  expect(getByTestId('test-element')).toHaveStyle('padding-bottom: 12px')
})

test('should render padding-left and padding-right with passed value from "px" prop', () => {
  const { getByTestId } = render(<DummyComponent data-testid="test-element" px={14} />)
  expect(getByTestId('test-element')).toHaveStyle('padding-left: 14px')
  expect(getByTestId('test-element')).toHaveStyle('padding-right: 14px')
})

test('should render any other inline stlyes that are passed', () => {
  const { getByTestId } = render(<DummyComponent data-testid="test-element" p={16} style={{ color: 'black' }} />)
  expect(getByTestId('test-element')).toHaveStyle('padding: 16px')
  expect(getByTestId('test-element')).toHaveStyle('color: black')
})