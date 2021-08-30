import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Description } from './description';

afterEach(cleanup);

describe('Description', () => {
  it('should be empty if no text', () => {
    const { queryByTestId, rerender } = render(<Description />);
    expect(queryByTestId('description')).toBeNull();

    rerender(<Description text={null} />);
    expect(queryByTestId('description')).toBeNull();

    rerender(<Description text="" />);
    expect(queryByTestId('description')).toBeNull();
  });

  it('should show simple text', () => {
    const text = 'Test 42';
    const { queryByTestId, getByText } = render(<Description text={text} />);
    expect(queryByTestId('description')).not.toBeNull();
    expect(getByText(text)).not.toBeNull();
  });

  it('should show sanitized html', () => {
    const evil = '<script>alert(42)</script>';
    const good = 'Test <b>42</b><br>Pass';
    const { queryByTestId } = render(
      <Description text={`${evil}${good}${evil}`} />
    );
    const par = queryByTestId('description-text');
    expect(par).not.toBeNull();
    expect(par?.innerHTML).toBe(good);
  });
});
