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
  Rating,
  Location,
  Description,
  DDescription,
  ButtonText,
} from './AdvertListItem.styled';
import { Button } from '../common/Button/Button';

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
            <Favorite></Favorite>
          </PriceBox>
        </PreHead>
        <RatingBox>
          <Rating>
            `{rating}({reviews.length} Reviews)`
          </Rating>
          <Location>{location}</Location>
        </RatingBox>
        <DDescription>
          <Description>{description}</Description>
        </DDescription>

        {/* <Details></Details> */}

        <Button
        // onClick={() => dispatch(delContactThunk(id))}
        >
          <ButtonText />
        </Button>
      </PreInfo>
    </Item>
  );
};
