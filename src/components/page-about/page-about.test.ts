import { PageAbout } from './page-about';
import { render } from '@testing-library/react';

describe('Page-About', () => {
  const texts = ['About', 'Tasks:', 'Solution:'];

  it(`should contain texts: ${texts
    .map((str) => `"${str}"`)
    .join(', ')}`, () => {
    const page = render(PageAbout());
    texts.forEach((str) => {
      expect(page.queryByText(str)).not.toBeNull();
    });
  });
});
