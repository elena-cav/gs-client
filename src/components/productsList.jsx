import React, { Component } from 'react';
import * as api from '../utils/api';
import { Ring } from 'react-awesome-spinners';
import { Link } from '@reach/router';
import { StyledProducts } from '../styled/productslist';
import ProductCard from './ProductCard';

class ProductsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      products: [],
      err: null,
      notFound: false
    };
  }

  componentDidMount() {
    if (this.props.keyword) {
      api
        .fetchProductsByKeyword(this.props.keyword)
        .then((products) => {
          this.setState({ products, isLoading: false });
        })
        .catch((err) => {
          this.setState({ notFound: true, isLoading: false });
        });
    } else
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
    const { isLoading, products, notFound } = this.state;
    if (isLoading)
      return (
        <div className="ring">
          <Ring />
        </div>
      );
    if (notFound)
      return (
        <div>
          <h2>We're sorry, there are no results matching your search</h2>
          <Link to={'/'}>
            <h3>Go back</h3>
          </Link>
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
            brand,
            product_id
          }) => {
            return (
              <ProductCard
                setCount={this.props.setCount}
                count={this.props.count}
                product_name={product_name}
                image_url={image_url}
                sales_price={sales_price}
                discount_percentage={discount_percentage}
                colors={colors}
                brand={brand}
                key={product_id}
                product_id={product_id}
              />
            );
          }
        )}
      </StyledProducts>
    );
  }
}

export default ProductsList;
