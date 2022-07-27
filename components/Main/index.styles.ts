import styled from '@emotion/styled';
import { type StaticImageData } from 'next/image';

interface WrapperProps {
  castle: StaticImageData;
  ground: StaticImageData;
  sky: StaticImageData;
}

export const Wrapper = styled.section<WrapperProps>`
  height: 100vh;
  background: ${({ castle, ground, sky }) =>
    `
      url(${castle.src}) center bottom 146px no-repeat, 
      url(${ground.src}) bottom repeat-x, 
      url(${sky.src}) left top / contain repeat-x
    `};

  background-color: #8ad1f0;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 14px;
`;
