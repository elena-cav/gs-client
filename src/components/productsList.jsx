import React, { Component } from 'react';
import * as api from '../utils/api';
import { Ring } from 'react-awesome-spinners';
import { StyledProducts } from '../styled/productslist';
import ProductCard from './ProductCard';
class ProductsList extends Component {
  state = {
    isLoading: true,
    products: [],
    err: null
  };
  componentDidMount() {
    api
      .fetchProducts()
      .then((products) => {
        this.setState({ products, isLoading: false });
      })
      .catch((err) => {
        this.setState({ err, isLoading: false });
      });
  }

  render() {
    const { isLoading, products } = this.state;
    if (isLoading)
      return (
        <div className="ring">
          <Ring />
        </div>
      );
    return (
      <StyledProducts>
        {products.map(
          ({
            product_name,
            image_url,
            sales_price,
            discount_percentage,
            colors,
            brand
          }) => {
            return (
              <ProductCard
                product_name={product_name}
                image_url={image_url}
                sales_price={sales_price}
                discount_percentage={discount_percentage}
                colors={colors}
                brand={brand}
              />
            );
          }
        )}
      </StyledProducts>
    );
  }
}

export default ProductsList;
