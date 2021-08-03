import { styled } from '@linaria/react';

export const Image = styled.img`
  @property --size {
    syntax: '<length-percentage>';
    initial-value: 100%;
    inherits: false;
  }

  --size: 100%;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  width: var(--size);
  height: var(--size);
  clip-path: inset(0 round 15px);
  animation: 1s resize linear infinite var(--animation-state) alternate;

  @keyframes resize {
    0% {
      --size: 100%;
    }
    100% {
      --size: 110%;
    }
  }
`;
