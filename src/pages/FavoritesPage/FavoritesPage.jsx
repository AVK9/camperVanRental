import { Container, FiltrBox } from './FavoritesPage.styled';
import { AdvertListFavorites } from '../../components/AdvertListFavorites/AdvertListFavorites';
import { LocationFiltr } from '../../components/Location/Location';
import { Filters } from '../../components/Filters/Filters';
const FavoritesPage = () => {
  return (
    <Container>
      <FiltrBox>
        <LocationFiltr />
        <Filters />
      </FiltrBox>
      <AdvertListFavorites />
    </Container>
  );
};

export default FavoritesPage;
