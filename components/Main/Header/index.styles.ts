import styled from '@emotion/styled';

export const Wrapper = styled.header`
  display: flex;
  max-width: 375px;
  align-items: center;
  justify-content: space-between;

  padding: 23px 12px 0;
  margin: 0 auto;
  & > * {
    width: 33%;
  }
`;

export const CoinWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 3px;
`;

export const HeartsWrapper = styled.div`
  text-align: right;
`;
