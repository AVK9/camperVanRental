import { Container, Title, StyledImage } from './CatalogPage.styled';
import example from '../../assets/example.png';
import { AdvertList } from '../../components/AdvertList/AdvertList';

const CatalogPage = () => {
  return (
    <Container>
      <Title>Catalog Page</Title>
      <StyledImage src={example} alt="Example" />
      <AdvertList />
    </Container>
  );
};

export default CatalogPage;
