import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ClientError } from 'graphql-request/dist/types';
import { ClientErrorInfo } from './client-error-info';

const template = {
  response: { status: 404 },
  request: { query: 'test' },
};
const error = new ClientError(template.response, template.request);

afterEach(cleanup);

describe('ClientErrorInfo', () => {
  it('should render ClientError', async () => {
    const result = render(<ClientErrorInfo error={error} />);
    expect(result.getByTestId('client-error-info-code')).not.toBeNull();
    expect(result.getByTestId('client-error-info-code').textContent).toBe(
      JSON.stringify(template, null, 2)
    );
  });
});
