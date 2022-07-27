import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  width: 304px;
  justify-content: center;
  margin: 36px auto 0;
`;

export const TextBox = styled.div`
  position: relative;
  display: flex;

  align-items: center;
  justify-content: center;
  padding: 11px 22px;

  background: ${({ theme }) => theme.color.white};
  border-radius: 2px;

  box-shadow: 8px 8px ${({ theme }) => theme.color.black};
`;
