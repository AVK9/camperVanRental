import styled from 'styled-components';

export const Location = styled.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: rgba(16, 24, 40, 0.6);
`;
export const Input = styled.input`
  margin-top: 8px;
  border-radius: 10px;
  padding: 18px 18px 18px 68px;
  width: 360px;
  height: 56px;
  background: var(--inputs);
  outline: none;
  border: none;
`;

export const IconWrapper = styled.svg`
  position: absolute;
  left: 18px;
  top: 18px;
  width: ${(props) => props.size || '32px'};
  height: ${(props) => props.size || '32px'};
  stroke-width: 0.9px;
  stroke: ${(props) => props.color || '#101828'};
  fill: ${(props) => props.color || '#ffffff'};
`;

export const InputBox = styled.div`
  position: relative;
`;
