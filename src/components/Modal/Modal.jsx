import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import sprite from '../../assets/img/sprite.svg';
import {
  ModalW,
  Backdrop,
  CloseBtn,
  Name,
  PriceBox,
  Price,
  PhotoBox,
  IconWrapper,
  RatingBox,
  BoxItem,
  TextItem,
  TextItemLoc,
  DescriptionBox,
  Description,
  PrePhoto,
} from './Modal.styled';

export const Modal = ({ onClose, data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(onClose, 500);
  };

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      handleClose();
    }
  };

  useEffect(() => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  console.log(data);
  return (
    <Backdrop onClick={handleBackdropClick}>
      <ModalW>
        <CloseBtn onClick={handleClose}>
          <IconWrapper size="32px">
            <use href={`${sprite}#icon-close`} />
          </IconWrapper>
        </CloseBtn>
        <Name>{data.name}</Name>
        <RatingBox>
          <BoxItem>
            <IconWrapper>
              <use href={`${sprite}#icon-star`} />
            </IconWrapper>
            <TextItem>
              {data.rating}({data.reviews.length} Reviews)
            </TextItem>
          </BoxItem>
          <BoxItem>
            <IconWrapper>
              <use href={`${sprite}#icon-map`} />
            </IconWrapper>
            <TextItemLoc>{data.location}</TextItemLoc>
          </BoxItem>
        </RatingBox>
        <PriceBox>
          <Price>€ {data.price}.00</Price>
        </PriceBox>
        <PhotoBox>
          {data.gallery.map((item) => (
            <PrePhoto key={new Date()} gallery={item} />
          ))}
        </PhotoBox>
        <DescriptionBox>
          <Description>{data.description}</Description>
        </DescriptionBox>
      </ModalW>
    </Backdrop>
  );
};
