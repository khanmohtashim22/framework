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

// with space
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

// with layout
test('should render \'display: flex; flex-wrap: nowrap; flex-direction: row\'when layout is set to true', () => {
  const { getByTestId } = render(<Block data-testid="block-test" layout={true}>Test</Block>)
  expect(getByTestId('block-test')).toHaveStyle('display: flex')
  expect(getByTestId('block-test')).toHaveStyle('flex-wrap: nowrap')
  expect(getByTestId('block-test')).toHaveStyle('flex-direction: row')
})

test('should render \'display: flex; flex-wrap: nowrap; flex-direction: row-reverse\'when layout and reverse is set to true', () => {
  const { getByTestId } = render(<Block data-testid="block-test" layout={true} reverse={true}>Test</Block>)
  expect(getByTestId('block-test')).toHaveStyle('display: flex')
  expect(getByTestId('block-test')).toHaveStyle('flex-wrap: nowrap')
  expect(getByTestId('block-test')).toHaveStyle('flex-direction: row-reverse')
})

test('should render \'display: flex; flex-wrap: nowrap; flex-direction: column\'when layout and vertical is set to true', () => {
  const { getByTestId } = render(<Block data-testid="block-test" layout={true} vertical={true}>Test</Block>)
  expect(getByTestId('block-test')).toHaveStyle('display: flex')
  expect(getByTestId('block-test')).toHaveStyle('flex-wrap: nowrap')
  expect(getByTestId('block-test')).toHaveStyle('flex-direction: column')
})

test('should render \'display: flex; flex-wrap: nowrap; flex-direction: column-reverse\'when layout, vetical, and reverse is set to true', () => {
  const { getByTestId } = render(<Block data-testid="block-test" layout={true} vertical={true} reverse={true}>Test</Block>)
  expect(getByTestId('block-test')).toHaveStyle('display: flex')
  expect(getByTestId('block-test')).toHaveStyle('flex-wrap: nowrap')
  expect(getByTestId('block-test')).toHaveStyle('flex-direction: column-reverse')
})

test('should render \'display: flex; flex-wrap: wrap; flex-direction: row\'when layout and wrap is set to true', () => {
  const { getByTestId } = render(<Block data-testid="block-test" layout={true} wrap={true}>Test</Block>)
  expect(getByTestId('block-test')).toHaveStyle('display: flex')
  expect(getByTestId('block-test')).toHaveStyle('flex-wrap: wrap')
  expect(getByTestId('block-test')).toHaveStyle('flex-direction: row')
})

test('should render \'display: inline-flex; flex-wrap: wrap; flex-direction: row\'when inline is set to true', () => {
  const { getByTestId } = render(<Block data-testid="block-test" inline={true}>Test</Block>)
  expect(getByTestId('block-test')).toHaveStyle('display: inline-flex')
  expect(getByTestId('block-test')).toHaveStyle('flex-wrap: nowrap')
  expect(getByTestId('block-test')).toHaveStyle('flex-direction: row')
})

test('should render \'align-items: flex-start\'when start is set to true', () => {
  const { getByTestId } = render(<Block data-testid="block-test" start={true}>Test</Block>)
  expect(getByTestId('block-test')).toHaveStyle('align-items: flex-start')
})

test('should render \'align-items: center\'when center is set to true', () => {
  const { getByTestId } = render(<Block data-testid="block-test" center={true}>Test</Block>)
  expect(getByTestId('block-test')).toHaveStyle('align-items: center')
})

test('should render \'align-items: flex-end\'when end is set to true', () => {
  const { getByTestId } = render(<Block data-testid="block-test" end={true}>Test</Block>)
  expect(getByTestId('block-test')).toHaveStyle('align-items: flex-end')
})

test('should render \'align-items: stretch\'when stretch is set to true', () => {
  const { getByTestId } = render(<Block data-testid="block-test" stretch={true}>Test</Block>)
  expect(getByTestId('block-test')).toHaveStyle('align-items: stretch')
})

test('should render \'alignItems: center; justifyContent: center\'when centered is set to true', () => {
  const { getByTestId } = render(<Block data-testid="block-test" centered={true}>Test</Block>)
  expect(getByTestId('block-test')).toHaveStyle('align-items: center')
  expect(getByTestId('block-test')).toHaveStyle('justify-content: center')
})

test('should render \'align-self: flex-start\'when selfStart is set to true', () => {
  const { getByTestId } = render(<Block data-testid="block-test" selfStart={true}>Test</Block>)
  expect(getByTestId('block-test')).toHaveStyle('align-self: flex-start')
})

test('should render \'align-self: center\'when selfCenter is set to true', () => {
  const { getByTestId } = render(<Block data-testid="block-test" selfCenter={true}>Test</Block>)
  expect(getByTestId('block-test')).toHaveStyle('align-self: center')
})

test('should render \'align-self: flex-end\'when selfEnd is set to true', () => {
  const { getByTestId } = render(<Block data-testid="block-test" selfEnd={true}>Test</Block>)
  expect(getByTestId('block-test')).toHaveStyle('align-self: flex-end')
})

test('should render \'align-self: stretch\'when selfStretch is set to true', () => {
  const { getByTestId } = render(<Block data-testid="block-test" selfStretch={true}>Test</Block>)
  expect(getByTestId('block-test')).toHaveStyle('align-self: stretch')
})

test('should render \'justify-content: flex-start\'when justifyStart is set to true', () => {
  const { getByTestId } = render(<Block data-testid="block-test" justifyStart={true}>Test</Block>)
  expect(getByTestId('block-test')).toHaveStyle('justify-content: flex-start')
})

test('should render \'justify-content: center\'when justifyCenter is set to true', () => {
  const { getByTestId } = render(<Block data-testid="block-test" justifyCenter={true}>Test</Block>)
  expect(getByTestId('block-test')).toHaveStyle('justify-content: center')
})

test('should render \'justify-content: flex-end\'when justifyEnd is set to true', () => {
  const { getByTestId } = render(<Block data-testid="block-test" justifyEnd={true}>Test</Block>)
  expect(getByTestId('block-test')).toHaveStyle('justify-content: flex-end')
})

test('should render \'justify-content: space-between\'when justifyBetween is set to true', () => {
  const { getByTestId } = render(<Block data-testid="block-test" justifyBetween={true}>Test</Block>)
  expect(getByTestId('block-test')).toHaveStyle('justify-content: space-between')
})

test('should render \'justify-content: space-around\'when justifyAround is set to true', () => {
  const { getByTestId } = render(<Block data-testid="block-test" justifyAround={true}>Test</Block>)
  expect(getByTestId('block-test')).toHaveStyle('justify-content: space-around')
})
