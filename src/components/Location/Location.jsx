import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Location, Input, IconWrapper, InputBox } from './Location.styled';
import sprite from '../../assets/img/sprite.svg';
import { filterAdvertsAction } from '../../store/adverts/sliceFilter';

export const LocationFiltr = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handInputFilter = (e) => {
    setValue(e.target.value);
    dispatch(filterAdvertsAction(e.target.value));
  };
  console.log(value);
  return (
    <>
      <Location>Location</Location>
      <InputBox>
        <Input
          type="text"
          name="filter"
          value={value}
          onChange={handInputFilter}
          placeholder="Kyiv, Ukraine"
        />
        <IconWrapper>
          <use href={`${sprite}#icon-map`} />
        </IconWrapper>
      </InputBox>
    </>
  );
};
