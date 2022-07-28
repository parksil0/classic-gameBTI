import styled from '@emotion/styled';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.color.black};
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 54px 0;
  margin: 0 auto;
`;
