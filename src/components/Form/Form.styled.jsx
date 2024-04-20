import styled from 'styled-components';

export const FormBox = styled.div`
  margin-top: 44px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  padding: 24px;
  width: 448px;
  height: 532px;
`;

export const Name = styled.h2`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  color: var(--main);
`;

export const Slogan = styled.p`
  margin-top: 8px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--text);
`;

export const Forma = styled.form`
  margin-top: 24px;
`;
export const InputBox = styled.div`
  position: relative;
  border-radius: 10px;
  padding: 18px 18px 18px 80px;
  width: 400px;
  height: 56px;
  background: var(--inputs);
  outline: none;
  border: none;
`;
export const InputBoxComent = styled.div`
  position: relative;
  border-radius: 10px;
  padding: 18px 18px 18px 90px;
  width: 400px;
  height: 114px;
  background: var(--inputs);
  outline: none;
  border: none;
`;
export const InputBoxCalendar = styled.div`
  position: relative;
  border-radius: 10px;
  padding: 18px 18px 18px 120px;
  width: 400px;
  height: 56px;
  background: var(--inputs);
  outline: none;
  border: none;
`;
export const Label = styled.label`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 18px 18px 18px 18px;
  height: 56px;
  font-family: var(--font-family);
  font-weight: 400;

  font-size: 16px;
  line-height: 125%;
  color: ${(props) => (props.active ? '#101828' : 'rgba(16, 24, 40, 0.6)')};
`;
export const LabelComent = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  padding: 18px 18px 18px 18px;
  height: 56px;
  font-family: var(--font-family);
  font-weight: 400;

  font-size: 16px;
  line-height: 125%;
  color: ${(props) => (props.active ? '#101828' : 'rgba(16, 24, 40, 0.6)')};
`;
export const Input = styled.input`
  outline: none;
  border: none;
  width: 300px;
  background: var(--inputs);
`;
export const InputCalendar = styled.input`
  outline: none;
  border: none;
  width: 260px;
  background: var(--inputs);
`;
export const InputComment = styled.textarea`
  outline: none;
  border: none;
  width: 290px;
  height: 80px;
  background: var(--inputs);
`;
export const InputBoxes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Button = styled.button`
  margin-top: 24px;
  border-radius: 200px;
  padding: 16px 40px;
  width: 166px;
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
export const IconWrapper = styled.svg`
  position: absolute;
  right: 16px;
  width: ${(props) => props.size || '20px'};
  height: ${(props) => props.size || '20px'};
  stroke-width: 1.5px;
  stroke: ${(props) => props.color || '#101828'};
  fill: ${(props) => props.color || '#ffffff'};
`;
