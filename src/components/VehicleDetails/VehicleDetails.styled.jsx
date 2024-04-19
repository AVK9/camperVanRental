import styled from 'styled-components';

export const Namep = styled.p`
  margin-top: 44px;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  color: var(--main);
`;

export const DetailsBox = styled.div`
  height: 48px;
  border-bottom: 1px solid #bcbcbd;
`;
export const Table = styled.table`
  padding-bottom: 40px;
  margin-top: 44px;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 18px;
  line-height: 133%;
  color: var(--main);
  min-width: 100%;

  & td:nth-child(2) {
    text-align: right;
  }
`;
