import React from 'react'
import { render } from '@testing-library/react'

import WithLayout from '../WithLayout'

const Dummy = ({ ...restOfProps }) => <div {...restOfProps} />
const DummyComponent = WithLayout(Dummy)

test('should render \'display: flex; flex-wrap: nowrap; flex-direction: row\'when layout is set to true', () => {
  const { getByTestId } = render(<DummyComponent data-testid="element-test" layout={true} />)
  expect(getByTestId('element-test')).toHaveStyle('display: flex')
  expect(getByTestId('element-test')).toHaveStyle('flex-wrap: nowrap')
  expect(getByTestId('element-test')).toHaveStyle('flex-direction: row')
})

test('should render \'display: flex; flex-wrap: nowrap; flex-direction: row-reverse\'when layout and reverse is set to true', () => {
  const { getByTestId } = render(<DummyComponent data-testid="element-test" layout={true} reverse={true} />)
  expect(getByTestId('element-test')).toHaveStyle('display: flex')
  expect(getByTestId('element-test')).toHaveStyle('flex-wrap: nowrap')
  expect(getByTestId('element-test')).toHaveStyle('flex-direction: row-reverse')
})

test('should render \'display: flex; flex-wrap: nowrap; flex-direction: column\'when layout and vertical is set to true', () => {
  const { getByTestId } = render(<DummyComponent data-testid="element-test" layout={true} vertical={true} />)
  expect(getByTestId('element-test')).toHaveStyle('display: flex')
  expect(getByTestId('element-test')).toHaveStyle('flex-wrap: nowrap')
  expect(getByTestId('element-test')).toHaveStyle('flex-direction: column')
})

test('should render \'display: flex; flex-wrap: nowrap; flex-direction: column-reverse\'when layout, vetical, and reverse is set to true', () => {
  const { getByTestId } = render(<DummyComponent data-testid="element-test" layout={true} vertical={true} reverse={true} />)
  expect(getByTestId('element-test')).toHaveStyle('display: flex')
  expect(getByTestId('element-test')).toHaveStyle('flex-wrap: nowrap')
  expect(getByTestId('element-test')).toHaveStyle('flex-direction: column-reverse')
})

test('should render \'display: flex; flex-wrap: wrap; flex-direction: row\'when layout and wrap is set to true', () => {
  const { getByTestId } = render(<DummyComponent data-testid="element-test" layout={true} wrap={true} />)
  expect(getByTestId('element-test')).toHaveStyle('display: flex')
  expect(getByTestId('element-test')).toHaveStyle('flex-wrap: wrap')
  expect(getByTestId('element-test')).toHaveStyle('flex-direction: row')
})

test('should render \'display: inline-flex; flex-wrap: wrap; flex-direction: row\'when inline is set to true', () => {
  const { getByTestId } = render(<DummyComponent data-testid="element-test" inline={true} />)
  expect(getByTestId('element-test')).toHaveStyle('display: inline-flex')
  expect(getByTestId('element-test')).toHaveStyle('flex-wrap: nowrap')
  expect(getByTestId('element-test')).toHaveStyle('flex-direction: row')
})

test('should render \'align-items: flex-start\'when start is set to true', () => {
  const { getByTestId } = render(<DummyComponent data-testid="element-test" start={true} />)
  expect(getByTestId('element-test')).toHaveStyle('align-items: flex-start')
})

test('should render \'align-items: center\'when center is set to true', () => {
  const { getByTestId } = render(<DummyComponent data-testid="element-test" center={true} />)
  expect(getByTestId('element-test')).toHaveStyle('align-items: center')
})

test('should render \'align-items: flex-end\'when end is set to true', () => {
  const { getByTestId } = render(<DummyComponent data-testid="element-test" end={true} />)
  expect(getByTestId('element-test')).toHaveStyle('align-items: flex-end')
})

test('should render \'align-items: stretch\'when stretch is set to true', () => {
  const { getByTestId } = render(<DummyComponent data-testid="element-test" stretch={true} />)
  expect(getByTestId('element-test')).toHaveStyle('align-items: stretch')
})

test('should render \'align-items: baseline\'when baseline is set to true', () => {
  const { getByTestId } = render(<DummyComponent data-testid="element-test" baseline={true} />)
  expect(getByTestId('element-test')).toHaveStyle('align-items: baseline')
})

test('should render \'alignItems: center; justifyContent: center\'when centered is set to true', () => {
  const { getByTestId } = render(<DummyComponent data-testid="element-test" centered={true} />)
  expect(getByTestId('element-test')).toHaveStyle('align-items: center')
  expect(getByTestId('element-test')).toHaveStyle('justify-content: center')
})

test('should render \'align-self: flex-start\'when selfStart is set to true', () => {
  const { getByTestId } = render(<DummyComponent data-testid="element-test" selfStart={true} />)
  expect(getByTestId('element-test')).toHaveStyle('align-self: flex-start')
})

test('should render \'align-self: center\'when selfCenter is set to true', () => {
  const { getByTestId } = render(<DummyComponent data-testid="element-test" selfCenter={true} />)
  expect(getByTestId('element-test')).toHaveStyle('align-self: center')
})

test('should render \'align-self: flex-end\'when selfEnd is set to true', () => {
  const { getByTestId } = render(<DummyComponent data-testid="element-test" selfEnd={true} />)
  expect(getByTestId('element-test')).toHaveStyle('align-self: flex-end')
})

test('should render \'align-self: stretch\'when selfStretch is set to true', () => {
  const { getByTestId } = render(<DummyComponent data-testid="element-test" selfStretch={true} />)
  expect(getByTestId('element-test')).toHaveStyle('align-self: stretch')
})

test('should render \'align-self: baseline\'when selfBaseline is set to true', () => {
  const { getByTestId } = render(<DummyComponent data-testid="element-test" selfBaseline={true} />)
  expect(getByTestId('element-test')).toHaveStyle('align-self: baseline')
})

test('should render \'justify-content: flex-start\'when justifyStart is set to true', () => {
  const { getByTestId } = render(<DummyComponent data-testid="element-test" justifyStart={true} />)
  expect(getByTestId('element-test')).toHaveStyle('justify-content: flex-start')
})

test('should render \'justify-content: center\'when justifyCenter is set to true', () => {
  const { getByTestId } = render(<DummyComponent data-testid="element-test" justifyCenter={true} />)
  expect(getByTestId('element-test')).toHaveStyle('justify-content: center')
})

test('should render \'justify-content: flex-end\'when justifyEnd is set to true', () => {
  const { getByTestId } = render(<DummyComponent data-testid="element-test" justifyEnd={true} />)
  expect(getByTestId('element-test')).toHaveStyle('justify-content: flex-end')
})

test('should render \'justify-content: space-between\'when justifyBetween is set to true', () => {
  const { getByTestId } = render(<DummyComponent data-testid="element-test" justifyBetween={true} />)
  expect(getByTestId('element-test')).toHaveStyle('justify-content: space-between')
})

test('should render \'justify-content: space-around\'when justifyAround is set to true', () => {
  const { getByTestId } = render(<DummyComponent data-testid="element-test" justifyAround={true} />)
  expect(getByTestId('element-test')).toHaveStyle('justify-content: space-around')
})
