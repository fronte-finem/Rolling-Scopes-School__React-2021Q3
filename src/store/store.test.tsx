import React from 'react';
import { Provider } from 'react-redux';
import { act, renderHook } from '@testing-library/react-hooks';
import { getStore } from './store';
import { useAppDispatch, useAppSelector } from './hooks';
import { setPage, setPerPage, setSearch, setSort } from './slices/search-vars';
import { MediaSort } from '../services/anilist-api/generated/schema-types';

const store = getStore();
const wrapper: React.FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

describe('Store', () => {
  it('should update values', () => {
    const hookDispatch = renderHook(() => useAppDispatch(), {
      wrapper,
    });
    const hookSearchVars = renderHook(
      () => useAppSelector((state) => state.searchVars),
      {
        wrapper,
      }
    );

    expect(hookSearchVars.result.current.page).toBe(1);
    act(() => {
      hookDispatch.result.current(setPage(123));
    });
    expect(hookSearchVars.result.current.page).toBe(123);

    expect(hookSearchVars.result.current.perPage).toBe(10);
    act(() => {
      hookDispatch.result.current(setPerPage(42));
    });
    expect(hookSearchVars.result.current.perPage).toBe(42);

    expect(hookSearchVars.result.current.search).toBeNull();
    act(() => {
      hookDispatch.result.current(setSearch('test'));
    });
    expect(hookSearchVars.result.current.search).toBe('test');

    expect(hookSearchVars.result.current.sort).toBeNull();
    act(() => {
      hookDispatch.result.current(setSort(MediaSort.TrendingDesc));
    });
    expect(hookSearchVars.result.current.sort).toBe(MediaSort.TrendingDesc);
  });
});
