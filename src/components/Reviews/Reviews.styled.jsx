import styled from 'styled-components';

export const ReviewsBox = styled.div`
  margin-top: 44px;
  /* width: 430px; */
  display: flex;
  flex-direction: column;
`;

export const NameBox = styled.div`
  display: flex;
  gap: 16px;
`;
export const Avatar = styled.div`
  border-radius: 60px;
  width: 60px;
  height: 60px;
  background: var(--block-features);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: var(--button);
`;
export const NameBlock = styled.div``;
export const Name = styled.p`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 18px;
  line-height: 133%;
  color: var(--main);
`;
export const ReviewerRating = styled.div``;
export const Comment = styled.div`
  margin-top: 16px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--text);
`;

export const Star = styled.span`
  font-size: 30px;
`;
