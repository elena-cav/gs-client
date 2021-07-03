import Nav from './components/Nav';
import { Globals } from './styled/globals';
import { Container } from './styled/container';
import React, { Component } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductsList from './components/productsList';
import Chat from './components/Chat';
import { Router } from '@reach/router';

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
        <Container>
          <Nav isActive={this.state.isActive} openMenu={this.openMenu} />
          <Header openMenu={this.openMenu} />
          <Router>
            <ProductsList path="/" />
          </Router>
          <Chat />
        </Container>
        <Footer />
      </Globals>
    );
  }
}
