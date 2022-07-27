import styled from '@emotion/styled';

export const Wrapper = styled.button`
  position: relative;

  display: block;
  width: 192px;
  height: 90px;
  border: 5px solid #e65526;
  margin: 125px auto 0;
  background-color: ${({ theme }) => theme.color.gray_90};
  border-radius: 5px;

  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray_80};
  }
`;
