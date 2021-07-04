import Nav from './components/Nav';
import { Globals } from './styled/globals';
import { Container } from './styled/container';
import React, { Component } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductsList from './components/productsList';
import Chat from './components/Chat';
import { Router } from '@reach/router';
import FaqPage from './components/Faq';
import ProductPage from './components/ProductPage';

import Banner from './components/Banner';

export default class App extends Component {
  state = {
    isActive: false
  };

  openMenu = () => {
    this.setState({ isActive: !this.state.isActive });
  };
  render() {
    return (
      <Globals>
        <Banner />
        <Container>
          <Nav isActive={this.state.isActive} openMenu={this.openMenu} />
          <Header openMenu={this.openMenu} />
          <Router>
            <ProductsList path="/" />
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
}
