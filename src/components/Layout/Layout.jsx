import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Container } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
