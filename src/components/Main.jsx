import React, { Component } from 'react';
import { Input } from 'react-materialize';
import ProductList from './product-list';
import ShoppingCart from './shopping-cart';
import { bindActionCreators } from 'redux';
import { updateFilterPhrase } from '../actions/products';
import { connect } from 'react-redux';

class Main extends Component {

  render () {
    return (
      <div className="container">
        <div className="row">
          <form className="col s8">
            <div className="row">
              <div className="input-field col s8">
                <Input onChange={(e) => this.props.updateFilterPhrase(e.target.value)} placeholder="Search..." s={12} />
              </div>
              <div className="input-field col s4">
                <Input s={12} type='select' defaultValue='name'>
                  <option value='name'>Name</option>
                  <option value='rating'>Rating</option>
                </Input>
              </div>
            </div>
          </form>
          <ShoppingCart />
        </div>
        <div className="row">
          <ProductList />
        </div>
      </div>
    )
  }
}



function mapDispatchToProps(dispatch) {
  return {
    updateFilterPhrase: bindActionCreators(updateFilterPhrase, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(Main);
