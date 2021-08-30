import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FullLoader } from './full-loader';

describe('FullLoader', () => {
  it(`should be loader element`, () => {
    const loader = render(<FullLoader />);
    expect(loader.getByTestId('loader')).not.toBeNull();
  });
});
