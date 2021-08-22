import { ClientError } from 'graphql-request/dist/types';
import React from 'react';

interface ClientErrorInfoProps {
  error: ClientError;
}

export const ClientErrorInfo: React.FC<ClientErrorInfoProps> = ({ error }) => {
  return (
    <div>
      <pre>
        <code>{JSON.stringify(error, null, 2)}</code>
      </pre>
    </div>
  );
};
