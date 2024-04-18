// import { useDispatch } from 'react-redux';
// import { delContactThunk } from 'store/contacts/contactsThunk';
import {
  Item,
  PreHead,
  PreInfo,
  PrePhoto,
  Name,
  PriceBox,
  Price,
  Favorite,
  RatingBox,
  TextItem,
  Description,
  DescriptionBox,
  IconWrapper,
  BoxItem,
  TextItemLoc,
  Details,
} from './AdvertListItem.styled';
import { Button } from '../common/Button/Button';
import { Category } from '../common/Category/Category';
import sprite from '../../assets/img/sprite.svg';
export const AdvertListItem = ({ data }) => {
  // const dispatch = useDispatch();
  const {
    _id,
    name,
    price,
    rating,
    location,
    adults,
    children,
    engine,
    transmission,
    form,
    length,
    width,
    height,
    tank,
    consumption,
    description,
    reviews,
    gallery,
    details,
  } = data;
  return (
    <Item>
      <PrePhoto gallery={gallery[0]} />
      <PreInfo>
        <PreHead>
          <Name>{name}</Name>
          <PriceBox>
            <Price>€ {price}.00</Price>
            <Favorite>
              <IconWrapper
                // color="var(--button)"
                size="24px"
              >
                <use href={`${sprite}#icon-heart`} />
              </IconWrapper>
            </Favorite>
          </PriceBox>
        </PreHead>
        <RatingBox>
          <BoxItem>
            <IconWrapper>
              <use href={`${sprite}#icon-star`} />
            </IconWrapper>
            <TextItem>
              {rating}({reviews.length} Reviews)
            </TextItem>
          </BoxItem>
          <BoxItem>
            <IconWrapper>
              <use href={`${sprite}#icon-map`} />
            </IconWrapper>
            <TextItemLoc>{location}</TextItemLoc>
          </BoxItem>
        </RatingBox>
        <DescriptionBox>
          <Description>{description}</Description>
        </DescriptionBox>

        <Details>
          <Category details={details} />
        </Details>

        <Button
        // onClick={() => dispatch(delContactThunk(id))}
        />
      </PreInfo>
    </Item>
  );
};
