import { Container, FiltrBox } from './CatalogPage.styled';
import { AdvertList } from '../../components/AdvertList/AdvertList';
import { LocationFiltr } from '../../components/Location/Location';
import { Filters } from '../../components/Filters/Filters';
const CatalogPage = () => {
  return (
    <Container>
      <FiltrBox>
        <LocationFiltr />
        <Filters />
      </FiltrBox>
      <AdvertList />
    </Container>
  );
};

export default CatalogPage;
