import { Wrapper, CatBtn, IconWrapper, TextItem } from './Category.styled';
import sprite from '../../../assets/img/sprite.svg';

export const Category = ({ details }) => {
  return (
    <Wrapper>
      {Object.keys(details).map((key) =>
        details[key] === 0 ? (
          ''
        ) : (
          <CatBtn key={key}>
            <IconWrapper>
              <use href={`${sprite}#icon-${key}`} />
            </IconWrapper>
            {details[key] === 1 ? '' : details[key]}
            <TextItem>{key}</TextItem>
          </CatBtn>
        )
      )}
    </Wrapper>
  );
};
