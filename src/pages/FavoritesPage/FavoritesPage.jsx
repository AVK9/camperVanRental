import { Container, Block, Title, StyledLink } from './FavoritesPage.styled';

const FavoritesPage = () => {
  return (
    <Container>
      <Block>
        <Title>Favorites Page</Title>
        <StyledLink to="/second/5">Half</StyledLink>
      </Block>
    </Container>
  );
};

export default FavoritesPage;
