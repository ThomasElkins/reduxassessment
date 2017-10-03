import React, { Component } from 'react';
import { Button } from 'react-materialize';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions/shopping-cart';


class CartItem extends Component {
  render () {

    let { id, title, image, rating, price, onSale } = this.props.item;

    return (
      <div className="cartItems">
        {title}<br/>
        ${price}<br/>
        <Button onClick={() => this.props.removeFromCart(id)}>X</Button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeFromCart: bindActionCreators(removeFromCart, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(CartItem);
