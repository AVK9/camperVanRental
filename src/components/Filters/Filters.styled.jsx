import styled from 'styled-components';

export const FiltersBox = styled.div`
  margin-top: 32px;
  gap: 32px;
  border: none;
  display: flex;
  flex-direction: column;
`;

export const Name = styled.p`
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
  border-bottom: 1px solid rgba(16, 24, 40, 0.1);
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
export const ItemCarsInput = styled.input``;
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

export const ButtonReset = styled.button`
  border-radius: 200px;
  padding: 16px 60px;
  width: 173px;
  height: 56px;
  background: var(--button);

  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #fff;

  &:hover {
    background: #d84343;
  }
`;

export const RadioWrapper = styled.label`
  position: relative;
`;

export const RadioInput = styled.input`
  display: none;
`;

export const RadioCustom = styled.div`
  display: inline-block;
  cursor: pointer;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  padding: 17px 24px;
  width: 100px;
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

  ${RadioInput}:checked + & {
    border: 1px solid var(--button);
  }
`;
export const IconGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 12px;
  left: 22px;
`;
export const IconGroupFully = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 2px;
  left: 4px;
`;

export const IconGroupEq = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 22px;
  left: 8px;
`;
export const IconGroupTv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 22px;
  left: 32px;
`;
export const IconGroupKitch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 22px;
  left: 22px;
`;
export const IconGroupAvt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 22px;
  left: 15px;
`;
