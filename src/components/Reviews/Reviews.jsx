import {
  ReviewsBox,
  NameBox,
  Name,
  Avatar,
  NameBlock,
  ReviewerRating,
  Comment,
  Star,
} from './Reviews.styled';
import { nanoid } from 'nanoid';

export const Reviews = ({ reviews }) => {
  return reviews.map((reviews) => (
    <ReviewsBox key={nanoid()}>
      <NameBox>
        <Avatar>{reviews.reviewer_name.charAt(0)}</Avatar>
        <NameBlock>
          <Name>{reviews.reviewer_name}</Name>
          <ReviewerRating>
            {[1, 2, 3, 4, 5].map((value) => (
              <Star
                key={value}
                style={{
                  color: value <= reviews.reviewer_rating ? 'gold' : 'gray',
                }}
              >
                ★
              </Star>
            ))}
          </ReviewerRating>
        </NameBlock>
      </NameBox>
      <Comment>{reviews.comment}</Comment>
    </ReviewsBox>
  ));
};
