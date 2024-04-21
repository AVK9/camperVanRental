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
  IconGroupEq,
  IconGroupTv,
  IconGroupKitch,
  IconGroupAvt,
} from './Filters.styled';
import sprite from '../../assets/img/sprite.svg';
import {
  equipmentAdvertsAction,
  typeAdvertsAction,
} from '../../store/adverts/sliceFilter';
export const Filters = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState('');
  const [equipment, setEquipment] = useState([]);

  const typeInputFilter = (e) => {
    setType(e.target.value);
    dispatch(typeAdvertsAction(e.target.value));
  };
  const equipmentInputFilter = (e) => {
    console.log('e.target.value', e.target.value);

    setEquipment((prevEquipment) => [...prevEquipment, e.target.value]);

    dispatch(equipmentAdvertsAction(e.target.value));
    console.log('equipment', equipment);
  };

  const clearInputFilter = (e) => {
    e.preventDefault();
    setType('');
    setEquipment('');
    dispatch(typeAdvertsAction(''));
  };

  return (
    <form>
      <FiltersBox>
        <Name>Filters</Name>
        <FiltersName>Vehicle equipment</FiltersName>
        <DecorLine />
        <GroupFiltr>
          <RadioWrapper>
            <IconGroupTv>
              <IconWrappeAC>
                <use href={`${sprite}#icon-AC`} />
              </IconWrappeAC>
              <ButtonName>AC</ButtonName>
            </IconGroupTv>
            <RadioInput
              type="checkbox"
              id="airConditioner"
              name="options"
              value="airConditioner"
              checked={equipment.includes('airConditioner')}
              onChange={equipmentInputFilter}
            />
            <RadioCustom />
          </RadioWrapper>
          <RadioWrapper>
            <IconGroupAvt>
              <IconWrappes>
                <use href={`${sprite}#icon-automatic`} />
              </IconWrappes>
              <ButtonName>Automatic</ButtonName>
            </IconGroupAvt>
            <RadioInput
              type="checkbox"
              id="transmission"
              name="options"
              value="transmission"
              checked={equipment.includes('transmission')}
              onChange={equipmentInputFilter}
            />
            <RadioCustom />
          </RadioWrapper>
          <RadioWrapper>
            <IconGroupKitch>
              <IconWrappes>
                <use href={`${sprite}#icon-kitchen`} />
              </IconWrappes>
              <ButtonName>Kitchen</ButtonName>
            </IconGroupKitch>
            <RadioInput
              type="checkbox"
              id="kitchen"
              name="options"
              value="kitchen"
              checked={equipment.includes('kitchen')}
              onChange={equipmentInputFilter}
            />
            <RadioCustom />
          </RadioWrapper>
          <RadioWrapper>
            <IconGroupTv>
              <IconWrappes>
                <use href={`${sprite}#icon-TV`} />
              </IconWrappes>
              <ButtonName>TV</ButtonName>
            </IconGroupTv>
            <RadioInput
              type="checkbox"
              id="TV"
              name="options"
              value="TV"
              checked={equipment.includes('TV')}
              onChange={equipmentInputFilter}
            />
            <RadioCustom />
          </RadioWrapper>
          <RadioWrapper>
            <IconGroupEq>
              <IconWrappes>
                <use href={`${sprite}#icon-shower`} />
              </IconWrappes>
              <ButtonName>Shower/WC</ButtonName>
            </IconGroupEq>
            <RadioInput
              type="radio"
              id="shower"
              name="options"
              value="shower"
              checked={equipment.includes('shower')}
              onChange={equipmentInputFilter}
            />
            <RadioCustom />
          </RadioWrapper>
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
                onChange={typeInputFilter}
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
                onChange={typeInputFilter}
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
                onChange={typeInputFilter}
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
