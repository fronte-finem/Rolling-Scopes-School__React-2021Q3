import React from 'react';
import { Provider } from 'react-redux';
import {
  renderHook,
  RenderResult,
  WaitForNextUpdateOptions,
} from '@testing-library/react-hooks';
import { getStore } from 'store/store';
import { useDetailsQuery, useSearchQuery } from './anilist-api';

const updateTimeout = 5000;

const wrapper: React.FC = ({ children }) => {
  return <Provider store={getStore()}>{children}</Provider>;
};

async function testUpdates(
  result: RenderResult<any>,
  waitForNextUpdate: (options?: WaitForNextUpdateOptions) => Promise<void>
) {
  const initialResponse = result.current;
  expect(initialResponse.data).toBeUndefined();
  expect(initialResponse.isLoading).toBe(true);
  await waitForNextUpdate({ timeout: updateTimeout });

  const nextResponse = result.current;
  expect(nextResponse.data).not.toBeUndefined();
  expect(nextResponse.isLoading).toBe(false);
  expect(nextResponse.isSuccess).toBe(true);
}

describe('Anilist API', () => {
  it('should work with useSearchQuery', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useSearchQuery({}), {
      wrapper,
    });
    await testUpdates(result, waitForNextUpdate);
  });

  it('should work with useDetailsQuery', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => useDetailsQuery({ id: 1 }),
      {
        wrapper,
      }
    );
    await testUpdates(result, waitForNextUpdate);
  });
});
