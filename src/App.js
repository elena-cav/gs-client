import Nav from './components/Nav';
import { Globals } from './styled/globals';
import { Container } from './styled/container';
import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductsList from './components/productsList';
import Chat from './components/Chat';
import { Router } from '@reach/router';
import FaqPage from './components/Faq';
import ProductPage from './components/ProductPage';

import Banner from './components/Banner';

export default function App() {
  const [isActive, setActive] = useState(false);
  const [count, setCount] = useState(0);
  const openMenu = () => setActive(!isActive);

  return (
    <Globals>
      <Banner />
      <Container>
        <Nav isActive={isActive} openMenu={openMenu} />
        <Header count={count} openMenu={openMenu} />
        <Router>
          <ProductsList count={count} setCount={setCount} path="/" />
          <ProductsList path="/:keyword" />
          <ProductPage path="/product/:product_id" />
          <FaqPage path="/faq" />
        </Router>
        <Chat />
      </Container>
      <Footer />
    </Globals>
  );
}
