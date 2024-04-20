import styled from '@emotion/styled';

export const Wrapper = styled.div`
  /* width: 430px; */
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`;
export const CatBtn = styled.div`
  border-radius: 100px;
  padding: 12px 18px;
  /* width: 126px; */
  height: 44px;
  background: var(--block-features);
  mix-blend-mode: multiply;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
export const IconWrapper = styled.svg`
  width: ${(props) => props.size || '20px'};
  height: ${(props) => props.size || '20px'};
  stroke-width: 1.5px;
  stroke: ${(props) => props.color || '#101828'};
  fill: ${(props) => props.color || '#ffffff'};
`;
export const TextItem = styled.span`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
  color: var(--main);
  text-transform: capitalize;
`;
