import styled from '@emotion/styled';
export const Btn = styled.button`
  border: 1px solid rgba(71, 84, 103, 0.2);
  border-radius: 200px;
  padding: 16px 32px;
  width: 145px;
  height: 56px;

  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: var(--main);
  white-space: nowrap;

  &:hover {
    border: 1px solid var(--button);
  }
`;
