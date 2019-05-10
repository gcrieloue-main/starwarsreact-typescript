import React from 'react';
import TestRenderer from 'react-test-renderer';

import { Button } from '.';

it('renders correctly a Button component', () => {
  const testRenderer = TestRenderer.create(<Button>Test Button</Button>);
  expect(testRenderer.toJSON()).toMatchSnapshot();
});

it('renders correctly a button component with onClick', () => {
  const mockOnClick = jest.fn();
  const testRenderer = TestRenderer.create(<Button onClick={mockOnClick}>Test Button</Button>);
  const testInstance = testRenderer.root;
  const buttonInstance = testInstance.findByType('button');
  const buttonProps = buttonInstance.props;
  expect(buttonProps.className).toBe('button');

  buttonProps.onClick();
  expect(mockOnClick).toHaveBeenCalled();
});

it('renders correctly a button component with secondary style', () => {
  const testRenderer = TestRenderer.create(<Button secondary>Test Button</Button>);
  const testInstance = testRenderer.root;
  const buttonInstance = testInstance.children[0];
  const buttonProps = buttonInstance.props;
  expect(buttonProps.className).toBe('button secondary');
});
