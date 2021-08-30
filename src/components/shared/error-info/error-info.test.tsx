import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ClientError } from 'graphql-request/dist/types';
import { ErrorInfo } from './error-info';

const template = {
  response: { status: 404 },
  request: { query: 'test' },
};
const clientError = new ClientError(template.response, template.request);
const msg = 'Test error';
const strangeError = { x: { y: { z: msg } } };

afterEach(cleanup);

describe('ErrorInfo', () => {
  it('should render falsy error', async () => {
    const result = render(<ErrorInfo error={null} />);
    expect(result.getByText('Unknown error')).not.toBeNull();
  });

  it('should render Client Error', async () => {
    const result = render(<ErrorInfo error={clientError} />);
    expect(result.getByTestId('client-error-info-code').textContent).toBe(
      JSON.stringify(template, null, 2)
    );
  });

  it('should render instance of Error', async () => {
    const result = render(<ErrorInfo error={new Error(msg)} />);
    expect(result.getByText(msg)).not.toBeNull();
  });

  it('should render string message', async () => {
    const result = render(<ErrorInfo error={msg} />);
    expect(result.getByText(msg)).not.toBeNull();
  });

  it('should render object', async () => {
    const result = render(<ErrorInfo error={strangeError} />);
    expect(result.getByTestId('error-info-code').textContent).toBe(
      JSON.stringify(strangeError, null, 2)
    );
  });
});
