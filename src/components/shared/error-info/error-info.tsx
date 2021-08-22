import React from 'react';
import { ClientError } from 'graphql-request/dist/types';
import { ClientErrorInfo } from './client-error-info';

interface ErrorInfoProps {
  error: unknown;
}

export const ErrorInfo: React.FC<ErrorInfoProps> = ({ error }) => {
  if (!error) {
    return <div>Unknown error</div>;
  }
  if (error instanceof ClientError) {
    return <ClientErrorInfo error={error} />;
  }
  if (error instanceof Error) {
    return <div>{error.message}</div>;
  }
  if (typeof error === 'string') {
    return <div>{error}</div>;
  }
  return (
    <div>
      <pre>
        <code>{JSON.stringify(error, null, 2)}</code>
      </pre>
    </div>
  );
};
