import styled from '@emotion/styled';
import theme from '@/styles/theme';

interface Props {
  color: keyof typeof theme.colors;
  fontWeight?: 400 | 700;
}

export const PageHeading = styled.h1<Props>`
  font-size: 32px;
  line-height: 38px;
  font-weight: ${({ fontWeight }) => fontWeight || 700};

  color: ${({ theme, color }) => theme.colors[color]};
`;

export const SubHeading = styled.h2<Props>`
  font-size: 20px;
  line-height: 23px;
  font-weight: ${({ fontWeight }) => fontWeight || 400};

  color: ${({ theme, color }) => theme.colors[color]};
`;

export const Heading = styled.h3<Props>`
  font-size: 14px;
  line-height: 16px;
  font-weight: ${({ fontWeight }) => fontWeight || 400};

  color: ${({ theme, color }) => theme.colors[color]};
`;

export const Caption = styled.span<Props>`
  font-size: 12px;
  line-height: 18px;
  font-weight: ${({ fontWeight }) => fontWeight || 400};

  color: ${({ theme, color }) => theme.colors[color]};
`;

export const Body = styled.p<Props>`
  font-size: 14px;
  line-height: 21px;
  font-weight: ${({ fontWeight }) => fontWeight || 400};

  color: ${({ theme, color }) => theme.colors[color]};
`;
