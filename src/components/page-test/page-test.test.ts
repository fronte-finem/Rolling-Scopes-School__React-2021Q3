import { PageTest } from './page-test';
import { render } from '@testing-library/react';

describe('Page-Test', () => {
  it('should contain text "Test"', () => {
    const page = render(PageTest());
    expect(page.queryByText('Test')).not.toBeNull();
  });
});
