import {
  FiltersBox,
  Name,
  FiltersName,
  DecorLine,
  SectionBox,
  ItemCar,
  ItemCars,
  IconWrapper,
  IconWrappes,
  IconWrappeAC,
  ButtonName,
  GroupFiltr,
} from './Filters.styled';
import { ButtonSearch } from '../common/ButtonSearch/ButtonSearch';
import sprite from '../../assets/img/sprite.svg';
export const Filters = () => {
  return (
    <FiltersBox>
      <Name>Filters</Name>
      <FiltersName>Vehicle equipment</FiltersName>
      <DecorLine />
      <GroupFiltr>
        <ItemCars>
          <IconWrappeAC>
            <use href={`${sprite}#icon-AC`} />
          </IconWrappeAC>
          <ButtonName>AC</ButtonName>
        </ItemCars>
        <ItemCars>
          <IconWrappes>
            <use href={`${sprite}#icon-automatic`} />
          </IconWrappes>
          <ButtonName>Automatic</ButtonName>
        </ItemCars>
        <ItemCars>
          <IconWrappes>
            <use href={`${sprite}#icon-kitchen`} />
          </IconWrappes>
          <ButtonName>Kitchen</ButtonName>
        </ItemCars>
        <ItemCars>
          <IconWrappes>
            <use href={`${sprite}#icon-TV`} />
          </IconWrappes>
          <ButtonName>TV</ButtonName>
        </ItemCars>
        <ItemCars>
          <IconWrappes>
            <use href={`${sprite}#icon-shower`} />
          </IconWrappes>
          <ButtonName>Shower/WC</ButtonName>
        </ItemCars>
      </GroupFiltr>
      <FiltersName>Vehicle type</FiltersName>
      <DecorLine />

      <SectionBox>
        <ItemCar>
          <IconWrapper>
            <use href={`${sprite}#icon-van`} />
          </IconWrapper>
          <ButtonName>Van</ButtonName>
        </ItemCar>
        <ItemCar>
          <IconWrapper>
            <use href={`${sprite}#icon-fully-integrated`} />
          </IconWrapper>
          <ButtonName>Fully Integrated</ButtonName>
        </ItemCar>
        <ItemCar>
          <IconWrapper>
            <use href={`${sprite}#icon-alcove`} />
          </IconWrapper>
          <ButtonName>Alcove</ButtonName>
        </ItemCar>
      </SectionBox>
      <ButtonSearch />
    </FiltersBox>
  );
};
