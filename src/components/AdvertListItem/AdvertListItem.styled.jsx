import styled from '@emotion/styled';

export const Item = styled.li`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 20px;
  padding: 24px;
  width: 888px;
  height: 358px;
  background: #fff;
  display: flex;
  gap: 24px;
`;
export const PrePhoto = styled.div`
  border-radius: 10px;
  min-width: 290px;
  height: 310px;
  background-image: url(${(props) => props.gallery});
  background-size: cover;
  background-position: center;
`;

export const PreInfo = styled.div`
  width: 100%;
`;
export const PreHead = styled.div`
  display: flex;
  justify-content: space-between;
  justify-content: space-between;
`;
export const Name = styled.h2`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: var(--main);
`;
export const PriceBox = styled.div``;
export const Price = styled.span`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: var(--main);
`;
export const Favorite = styled.div``;
export const RatingBox = styled.div`
  display: flex;
`;
export const Rating = styled.div``;
export const Location = styled.div``;

export const DDescription = styled.div`
  width: 100%;
`;
export const Description = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 526px;
`;
export const Details = styled.div``;
export const ButtonText = styled.span`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #fff;
`;
