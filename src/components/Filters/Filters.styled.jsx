import styled from 'styled-components';

export const FiltersBox = styled.div`
  margin-top: 32px;

  border: none;
  display: flex;
  flex-direction: column;
`;

export const Name = styled.p`
  margin-bottom: 14px;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: var(--text);
`;
export const FiltersName = styled.p`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  color: var(--main);
`;
export const DecorLine = styled.div`
  height: 24px;
  border-bottom: 1px solid rgba(16, 24, 40, 0.1);
  margin-bottom: 24px;
`;
export const SectionBox = styled.div`
  display: flex;
  gap: 10px;
`;
export const ItemCar = styled.div`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  padding: 17px 24px;
  /* width: 100px; */
  /* height: 95px; */
  mix-blend-mode: multiply;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover,
  &:focus {
    border: 1px solid var(--button);
  }
`;
export const ItemCars = styled.div`
  border: 1px solid rgba(26, 26, 26, 0.2);
  border-radius: 10px;
  padding: 17px 24px;
  width: 113px;
  height: 95px;
  mix-blend-mode: multiply;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover,
  &:focus {
    border: 1px solid var(--button);
  }
`;
export const IconWrapper = styled.svg`
  width: ${(props) => props.size || '60px'};
  height: ${(props) => props.size || '48px'};
  stroke-width: 0.9px;
`;
export const ButtonName = styled.span`
  margin-top: 9px;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
  color: var(--main);
`;
export const GroupFiltr = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 32 px;
`;
export const IconWrappes = styled.svg`
  width: ${(props) => props.size || '32px'};
  height: ${(props) => props.size || '32px'};
  stroke-width: 0.9px;
  stroke: ${(props) => props.color || '#101828'};
  fill: ${(props) => props.color || '#ffffff'};
`;
export const IconWrappeAC = styled.svg`
  width: ${(props) => props.size || '32px'};
  height: ${(props) => props.size || '32px'};
  fill: ${(props) => props.color || '#000000'};
`;
