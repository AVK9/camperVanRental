import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAdvertsThunk } from '../../store/adverts/advertsThunk';
import {
  selectLoading,
  selectError,
  selectStateAdverts,
} from '../../store/adverts/advertsSelector ';
import { AdvertListItem } from '../AdvertListItem/AdvertListItem';
import { List, LoadMoreBtn } from './AdvertList.styled';

import { Loader } from '../Loader/Loader';

export const AdvertList = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getAdvertsThunk());
  }, [dispatch]);
  const [page, setPage] = useState(4);
  // const contacts = useSelector(selectVisibleContacts);
  const adverts = useSelector(selectStateAdverts);
  const totalAdverts = adverts.length;
  const advertsPageList = adverts.slice(0, page);
  const currentLengthPage = advertsPageList.length;

  const clickLoadMore = () => {
    console.log('page', page);
    setPage(page + 4);
  };

  console.log(totalAdverts);

  return (
    <>
      {loading && <Loader />}
      {/* {loading && !error && <p>Loading pleasure wait</p>} */}
      {error && <p>Error: {error}</p>}
      {adverts.length ? (
        <List>
          {advertsPageList.map((data) => (
            <AdvertListItem data={data} key={data._id} />
          ))}
          {totalAdverts >= currentLengthPage &&
            totalAdverts !== currentLengthPage && (
              <LoadMoreBtn onClick={clickLoadMore}>Load more</LoadMoreBtn>
            )}
        </List>
      ) : (
        <Loader />
        // <p>No contacts to filter</p>
      )}
    </>
  );
};
