import { useSelector } from 'react-redux';
import { AdvertListItem } from '../AdvertListItem/AdvertListItem';
import { List } from './AdvertListFavorites.styled';
import { selectFavorites } from '../../store/favorites/favoritesSelectors';
import { Loader } from '../Loader/Loader';

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
        <Loader />
        // <p>No contacts to filter</p>
      )}
    </>
  );
};
