import '@babel/polyfill';
import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
} from '@testing-library/react';
import AppContainer from '../components/AppContainer';

afterEach(() => {
  cleanup();
  console.error.mockClear();
  console.warn.mockClear();
});


console.error = jest.fn();
console.warn = jest.fn();

test('Test snapshot', () => {
  const { container } = render(<AppContainer />);
  expect(container.firstChild).toMatchSnapshot();
});

test('Renders without errors or warnings', () => {
  render(<AppContainer />);
  expect(console.error).not.toHaveBeenCalled();
  expect(console.warn).not.toHaveBeenCalled();
});

test('Page renders the right amount of Form divs', () => {
  const { getAllByTestId } = render(<AppContainer />);

  expect(getAllByTestId('form-div').length).toBe(4);
});

test('Textfields render with the right id', () => {
  const { getByLabelText } = render(<AppContainer />);

  expect(getByLabelText('Inflated ASCII').id).toBe('inflatedAscii');
  expect(getByLabelText('Inflated Hex').id).toBe('inflatedHex');
  expect(getByLabelText('Deflated Hex').id).toBe('deflatedHex');
  expect(getByLabelText('Deflated base64').id).toBe('deflatedBase64');
});

test('Handling of empthy values', () => {
  const { getByTestId } = render(<AppContainer />);
  const deflateAscii = getByTestId('button-inflatedAscii');
  const deflateHex = getByTestId('button-inflatedHex');
  const inflateHex = getByTestId('button-deflatedHex');
  const inflateBase64 = getByTestId('button-deflatedBase64');

  fireEvent.click(deflateAscii);
  expect(document.getElementById('inflatedAscii-helper-text').textContent).toBe('Please insert some text');
  fireEvent.click(deflateHex);
  expect(document.getElementById('inflatedHex-helper-text').textContent).toBe('Please insert some text');
  fireEvent.click(inflateHex);
  expect(document.getElementById('deflatedHex-helper-text').textContent).toBe('Please insert some text');
  fireEvent.click(inflateBase64);
  expect(document.getElementById('deflatedBase64-helper-text').textContent).toBe('Please insert some text');
});

test('Call with valid value, update textfields with return values ', async () => {
  const { getByLabelText, getByTestId, getByText } = render(<AppContainer />);

  fireEvent.change(getByLabelText('Inflated ASCII'), { target: { value: 'Valid value' } });
  fireEvent.click(getByTestId('button-inflatedAscii'));

  // Wait for one of firebase mock function return values defined in /__mocks__/firebase.js
  await waitForElement(() => getByText('inflatedHex'));

  expect(getByLabelText('Inflated Hex').textContent).toBe('inflatedHex');
  expect(getByLabelText('Deflated Hex').textContent).toBe('deflatedHex');
  expect(getByLabelText('Deflated base64').textContent).toBe('deflatedBase64');
  expect(getByLabelText('Inflated ASCII').textContent).toBe('inflatedAscii');
});

test('Call with invalid value, open modal with error message and close modal', async () => {
  const {
    getByTestId,
    getByLabelText,
    getByText,
    queryByTestId,
  } = render(<AppContainer />);

  // Test open modal with error message when invalid value returns an error
  fireEvent.change(getByLabelText('Inflated Hex'), { target: { value: 'Invalid value' } });
  fireEvent.click(getByTestId('button-inflatedHex'));

  await waitForElement(() => getByText('Error message'));
  expect(getByTestId('modal')).toBeTruthy();

  // Test closing modal
  fireEvent.click(getByTestId('button-modal'));
  expect(queryByTestId('modal')).toBe(null);
});
