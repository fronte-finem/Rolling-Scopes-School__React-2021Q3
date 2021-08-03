import { styled } from '@linaria/react';

export const FactionSymbol = styled.div`
  --size: 90px;
  position: absolute;
  top: -5px;
  right: -10px;
  width: var(--size);
  height: var(--size);
  background: var(--factions-sprite-url) no-repeat var(--faction-pos);
`;
