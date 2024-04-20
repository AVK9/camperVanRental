import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

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
  TabBox,
  TabHead,
  TabName,
  FeaturesTab,
  InfoBox,
} from './Modal.styled';
import { Category } from '../common/Category/Category';
import { VehicleDetails } from '../VehicleDetails/VehicleDetails';
import { Reviews } from '../Reviews/Reviews';
import { Form } from '../Form/Form';

export const Modal = ({ onClose, data }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

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
            <PrePhoto key={item} gallery={item} />
          ))}
        </PhotoBox>
        <DescriptionBox>
          <Description>{data.description}</Description>
        </DescriptionBox>
        <TabBox>
          <Tabs>
            <TabList>
              <TabHead>
                <Tab>
                  <TabName
                    style={
                      activeTab === 1
                        ? { borderBottom: '4px solid #e44848' }
                        : { borderBottom: 'none' }
                    }
                    onClick={() => handleTabClick(1)}
                  >
                    Features
                  </TabName>
                </Tab>
                <Tab>
                  <TabName
                    onClick={() => handleTabClick(2)}
                    style={
                      activeTab === 2
                        ? { borderBottom: '4px solid #e44848' }
                        : { borderBottom: 'none' }
                    }
                  >
                    Reviews
                  </TabName>
                </Tab>
              </TabHead>
            </TabList>

            <TabPanel>
              <FeaturesTab>
                <InfoBox>
                  <Category details={data.details} />
                  <VehicleDetails data={data} />
                </InfoBox>
                <Form />
              </FeaturesTab>
            </TabPanel>
            <TabPanel>
              <FeaturesTab>
                <InfoBox>
                  <Reviews reviews={data.reviews} />
                </InfoBox>
                <Form />
              </FeaturesTab>
            </TabPanel>
          </Tabs>
        </TabBox>
      </ModalW>
    </Backdrop>
  );
};
