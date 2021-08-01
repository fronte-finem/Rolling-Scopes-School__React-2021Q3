import React from 'react';
import { css, cx } from '@linaria/core';
import { styled } from '@linaria/react';
import { Creature } from 'services/data/creature-scheme';

export interface FactionCSS extends React.CSSProperties {
  '--faction-pos': string;
  '--faction-c1': string;
  '--faction-c2': string;
  '--faction-c3': string;
}

export const factionTheme = css`
  --faction-pos: var(--haven-pos);
  --faction-c1: var(--haven-c1);
  --faction-c2: var(--haven-c2);
  --faction-c3: var(--haven-c3);

  --haven-pos: 0 -90px;
  --haven-c1: 202deg, 80%, 24%;
  --haven-c2: 199deg, 66%, 69%;
  --haven-c3: 168deg, 37%, 87%;

  --academy-pos: -360px -90px;
  --academy-c1: 39deg, 100%, 27%;
  --academy-c2: 53deg, 100%, 50%;
  --academy-c3: 58deg, 100%, 50%;

  --necropolis-pos: -180px -90px;
  --necropolis-c1: 0deg, 0%, 0%;
  --necropolis-c2: 0deg, 0%, 10%;
  --necropolis-c3: 0deg, 0%, 20%;

  --stronghold-pos: -90px -90px;
  --stronghold-c1: 37deg, 95%, 15%;
  --stronghold-c2: 42deg, 90%, 36%;
  --stronghold-c3: 40deg, 94%, 47%;

  --sylvan-pos: -720px -90px;
  --sylvan-c1: 96deg, 93%, 26%;
  --sylvan-c2: 71deg, 71%, 55%;
  --sylvan-c3: 58deg, 97%, 58%;

  --dungeon-pos: -630px -90px;
  --dungeon-c1: 272deg, 40%, 9%;
  --dungeon-c2: 275deg, 41%, 29%;
  --dungeon-c3: 275deg, 41%, 36%;

  --fortress-pos: -450px -90px;
  --fortress-c1: 0deg, 100%, 15%;
  --fortress-c2: 0deg, 100%, 33%;
  --fortress-c3: 0deg, 100%, 38%;
`;

const getFactionStyle = (creature: Creature): FactionCSS => {
  const faction = creature.faction.toLowerCase();
  return {
    '--faction-pos': `var(--${faction}-pos)`,
    '--faction-c1': `var(--${faction}-c1)`,
    '--faction-c2': `var(--${faction}-c2)`,
    '--faction-c3': `var(--${faction}-c3)`,
  };
};

const title = css`
  width: 100%;
  background: #fff8;
  text-align: center;
`;

export const Title: React.FC<{ text: string; url?: string }> = ({
  text,
  url,
}) => {
  return (
    <div className={title}>
      {url ? <a href={url}>{text}</a> : <span>{text}</span>}
    </div>
  );
};

const image = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const ResponsiveImage: React.FC<{ url: string; alt: string }> = ({
  url,
  alt,
}) => {
  return <img className={image} src={url} alt={alt} />;
};

const CardStyle = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 5 / 4;
  border-radius: 15px;
  overflow: hidden;
  background: #08f;
  transition: all 200ms;
  filter: contrast(1.1) grayscale(0.5);
`;

const upgradedCard = css`
  filter: contrast(1.1) saturate(1.1);
`;

const Overlay = styled.div`
  --alpha: 1;
  --c1: hsla(var(--faction-c1), var(--alpha));
  --c2: hsla(var(--faction-c2), var(--alpha));
  --c3: hsla(var(--faction-c3), var(--alpha));

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-conic-gradient(var(--c1) 0deg 3deg, var(--c2) 3deg 6deg),
    linear-gradient(-60deg, var(--c2), var(--c3), var(--c2));
  mask: radial-gradient(circle at center, #fff0 50%, #000);
  box-shadow: inset 0 0 5px 10px #0008;
`;

const FactionSymbol = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 90px;
  height: 90px;
  background: url('../../assets/sprites/factions.png') no-repeat
    var(--faction-pos);
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Card: React.FC<{ creature: Creature }> = ({ creature }) => {
  const className = cx(creature.upgraded && upgradedCard);

  return (
    <CardStyle className={className} style={getFactionStyle(creature)}>
      <ResponsiveImage url={creature.imageUrl} alt={creature.name} />
      <Overlay />
      <FactionSymbol />
      <Container>
        <Title text={creature.name} url={creature.wikiUrl} />
      </Container>
    </CardStyle>
  );
};
