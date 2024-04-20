import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  Button,
  IconWrapperFavorite,
} from './AdvertListItem.styled';
import { Category } from '../common/Category/Category';
import sprite from '../../assets/img/sprite.svg';
import { Modal } from '../Modal/Modal';
import { selectFavorites } from '../../store/favorites/favoritesSelectors';
import { addFavorite, delFavorite } from '../../store/favorites/favoritesSlice';

export const AdvertListItem = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isData, setIsData] = useState({});

  const dispatch = useDispatch();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites?.some((item) => item._id === data._id);

  const stateFavorite = () => {
    dispatch(isFavorite ? delFavorite(data) : addFavorite(data));
  };

  const {
    name,
    price,
    rating,
    location,
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
            <Favorite onClick={stateFavorite}>
              {isFavorite ? (
                <IconWrapperFavorite color="var(--button)" size="24px">
                  <use href={`${sprite}#icon-heart`} />
                </IconWrapperFavorite>
              ) : (
                <IconWrapperFavorite
                  // color="var(--button)"
                  size="24px"
                >
                  <use href={`${sprite}#icon-heart`} />
                </IconWrapperFavorite>
              )}
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

        <Button onClick={handleOpenModal}>Show more</Button>
      </PreInfo>
      {isModalOpen && <Modal onClose={handleCloseModal} data={data} />}
    </Item>
  );
};
