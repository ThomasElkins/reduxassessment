import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllProducts } from '../actions/products';
import Product from '../components/product';

class ProductList extends Component {

  componentDidMount() {
      this.props.getAllProducts();
  }
  render () {
    let products = this.props.products.filter(product => {
      if(!this.props.filterPhrase.length) {
        return true;
      } else {
        return product.title.toUpperCase().includes(this.props.filterPhrase)
      }
    }).sort((a,b) => {
      
    })
    .map(product => <Product key={product.id} product={product} />)

    return (
      <div className="col s4 m6">
        {products}
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    products: state.products,
    filterPhrase: state.filterPhrase
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllProducts: bindActionCreators(getAllProducts, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
