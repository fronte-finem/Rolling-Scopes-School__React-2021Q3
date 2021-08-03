import React from 'react';
import useResizeObserver from 'use-resize-observer';

export interface CSSWithSize extends React.CSSProperties {
  '--container-size-w'?: number;
  '--container-size-h'?: number;
}

export function withSize<Props>(Component: React.FC<Props>): React.FC<Props> {
  return (props: Props) => {
    const { ref, width, height } = useResizeObserver();
    const style: CSSWithSize = {
      '--container-size-w': width,
      '--container-size-h': height,
    };
    return (
      <div style={style} ref={ref}>
        <Component {...props} />
      </div>
    );
  };
}
