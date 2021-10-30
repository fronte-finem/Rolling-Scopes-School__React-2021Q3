import React from 'react';
import { render } from '@testing-library/react';
import { Page404 } from './page-404';

describe('Page-404', () => {
  it('should contain text "404"', () => {
    const page = render(<Page404 />);
    expect(page.queryByText('404')).not.toBeNull();
  });
});
