import type { StaticImageData } from 'next/image';
import styled from '@emotion/styled';

export const Wrapper = styled.main<{ backgroundImage: StaticImageData }>`
  width: 375px;
  height: 100vh;
  margin: 0 auto;
  background-image: url(${({ backgroundImage }) => backgroundImage.src});
  background-repeat: no-repeat;
  background-size: 375px 812px;
`;
