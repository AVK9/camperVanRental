import { useState } from 'react';
import { useDispatch } from 'react-redux';
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
  ItemCarsInput,
  ButtonReset,
  RadioWrapper,
  RadioInput,
  RadioCustom,
  IconGroup,
  IconGroupFully,
} from './Filters.styled';
import sprite from '../../assets/img/sprite.svg';
import { typeAdvertsAction } from '../../store/adverts/sliceFilter';
export const Filters = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState('');

  const handInputFilter = (e) => {
    setType(e.target.value);
    dispatch(typeAdvertsAction(e.target.value));
  };

  const clearInputFilter = (e) => {
    e.preventDefault();
    setType('');
    dispatch(typeAdvertsAction(''));
    console.log('CLICKKKK', type);
  };

  return (
    <form>
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
          <GroupFiltr>
            <RadioWrapper>
              <IconGroup>
                <IconWrapper>
                  <use href={`${sprite}#icon-van`} />
                </IconWrapper>
                <ButtonName>Van</ButtonName>
              </IconGroup>
              <RadioInput
                type="radio"
                id="panelTruck"
                name="options"
                value="panelTruck"
                checked={type === 'panelTruck'}
                onChange={handInputFilter}
              />
              <RadioCustom />
            </RadioWrapper>
            <RadioWrapper>
              <IconGroupFully>
                <IconWrapper>
                  <use href={`${sprite}#icon-fully-integrated`} />
                </IconWrapper>
                <ButtonName>Fully Integrated</ButtonName>
              </IconGroupFully>
              <RadioInput
                type="radio"
                id="fullyIntegrated"
                name="options"
                value="fullyIntegrated"
                checked={type === 'fullyIntegrated'}
                onChange={handInputFilter}
              />
              <RadioCustom />
            </RadioWrapper>
            <RadioWrapper>
              <IconGroup>
                <IconWrapper>
                  <use href={`${sprite}#icon-alcove`} />
                </IconWrapper>
                <ButtonName>Alcove</ButtonName>
              </IconGroup>
              <RadioInput
                type="radio"
                id="alcove"
                name="options"
                value="alcove"
                checked={type === 'alcove'}
                onChange={handInputFilter}
              />
              <RadioCustom />
            </RadioWrapper>
          </GroupFiltr>
        </SectionBox>
        <ButtonReset onClick={clearInputFilter}> Reset</ButtonReset>
      </FiltersBox>
    </form>
  );
};
