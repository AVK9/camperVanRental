import { useSelector } from 'react-redux';
import { AdvertListItem } from '../AdvertListItem/AdvertListItem';
import { List } from './AdvertListFavorites.styled';
import { selectFavorites } from '../../store/favorites/favoritesSelectors';

export const AdvertListFavorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <>
      {favorites.length ? (
        <List>
          {favorites.map((data) => (
            <AdvertListItem data={data} key={data._id} />
          ))}
        </List>
      ) : (
        <p>You have not added anything to your favorites list yet</p>
      )}
    </>
  );
};
