import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCartItems } from '../actions/shopping-cart';
import CartItem from './cart-item';

class ShoppingCart extends Component {

  componentDidMount() {
      this.props.getCartItems();
  }
  render () {
      let cartItems = this.props.shoppingcart.map(item => <CartItem key={item.id} item={item} />)
    return (
      <div>
        <h5>Shopping Cart</h5>
        {cartItems}
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    shoppingcart: state.shoppingcart,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    getCartItems: bindActionCreators(getCartItems, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
