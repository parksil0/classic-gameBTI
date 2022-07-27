import type { StaticImageData } from 'next/image';
import styled from '@emotion/styled';

interface WrapperProps {
  charactersWithBricks: StaticImageData;
  ground: StaticImageData;
  sky: StaticImageData;
}

export const Wrapper = styled.main<WrapperProps>`
  height: 100vh;
  margin: 0 auto;
  background: ${({ charactersWithBricks, ground, sky }) =>
    `
      url(${charactersWithBricks.src}) center bottom 50px no-repeat, 
      url(${ground.src}) bottom repeat-x, 
      url(${sky.src}) left top / contain repeat-x
    `};

  background-color: #8ad1f0;
`;
