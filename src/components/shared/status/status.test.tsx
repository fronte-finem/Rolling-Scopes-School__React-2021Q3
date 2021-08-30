import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Status, StatusMap } from './status';

describe('Status', () => {
  it('should be empty if status None', () => {
    const status = render(<Status />);
    expect(status.container).toBeEmptyDOMElement();
  });

  it('should be mapped statuses names', () => {
    // eslint-disable-next-line no-restricted-syntax
    for (const [mediaStatus, { text }] of StatusMap.entries()) {
      const status = render(<Status mediaStatus={mediaStatus} />);
      expect(status.queryByText(text)).not.toBeNull();
    }
  });
});
