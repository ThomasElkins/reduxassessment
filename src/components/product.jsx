import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addToCart } from '../actions/shopping-cart';
import { Button } from 'react-materialize';


class Product extends Component {
  render () {
    let { id, title, image, rating, price, onSale } = this.props.product;
    return (
        <div>
            <h4>{title}</h4>
            <img alt="camerapic" src={image} height="125" width="150" />
            <h5>${price}</h5>
            <p className="red">{onSale ? "ON SALE" : ""}</p>
            <h5>{rating} Stars</h5>
            <Button onClick={() => this.props.addToCart(id)}>Add to Cart</Button>
        </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: bindActionCreators(addToCart, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(Product);
