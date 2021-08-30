import { ClientError } from 'graphql-request/dist/types';
import React from 'react';

interface ClientErrorInfoProps {
  error: ClientError;
}

export const ClientErrorInfo: React.FC<ClientErrorInfoProps> = ({ error }) => {
  return (
    <div data-testid="client-error-info">
      <pre data-testid="client-error-info-pre">
        <code data-testid="client-error-info-code">
          {JSON.stringify(error, null, 2)}
        </code>
      </pre>
    </div>
  );
};
