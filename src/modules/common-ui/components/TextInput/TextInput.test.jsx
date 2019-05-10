import React from 'react';
import TestRenderer from 'react-test-renderer';

import { TextInput } from '.';

it('renders correctly a TextInput component', () => {
  const testRenderer = TestRenderer.create(<TextInput value="Hello" />);
  expect(testRenderer.toJSON()).toMatchSnapshot();
});

it('renders correctly a input component with onChange', () => {
  const mockOnChange = jest.fn();
  const testRenderer = TestRenderer.create(<TextInput onChange={mockOnChange} value="Hello" />);
  const testInstance = testRenderer.root;
  const inputIntance = testInstance.findByType('input');
  const inputProps = inputIntance.props;
  expect(inputProps.className).toBe('input');

  inputProps.onChange();
  expect(mockOnChange).toHaveBeenCalled();
});

it('renders correctly a input component with custom className', () => {
  const testRenderer = TestRenderer.create(<TextInput className="salut" value="Hello" />);
  const testInstance = testRenderer.root;
  const inputInstance = testInstance.findByType('input');
  const inputProps = inputInstance.props;
  expect(inputProps.className).toBe('input salut');
});
