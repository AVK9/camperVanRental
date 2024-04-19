import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAdvertsThunk } from '../../store/adverts/advertsThunk';
import {
  selectLoading,
  selectError,
  selectStateAdverts,
} from '../../store/adverts/advertsSelector ';
import { AdvertListItem } from '../AdvertListItem/AdvertListItem';
import { List } from './AdvertList.styled';

import { Loader } from '../Loader/Loader';

export const AdvertList = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  // const contacts = useSelector(selectVisibleContacts);
  const adverts = useSelector(selectStateAdverts);

  console.log('adverts :>> ', adverts);

  useEffect(() => {
    dispatch(getAdvertsThunk());
  }, [dispatch]);

  return (
    <>
      {loading && <Loader />}
      {/* {loading && !error && <p>Loading pleasure wait</p>} */}
      {error && <p>Error: {error}</p>}
      {adverts.length ? (
        <List>
          {adverts.map((data) => (
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
