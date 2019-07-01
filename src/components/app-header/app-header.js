import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import {connect} from 'react-redux';
import './app-header.scss';
import {Link} from 'react-router-dom';

const AppHeader = ({items}) => {

  const total = items.reduce((preVal, item) => (preVal + item.num * item.price), 0)

  return (
      <header className="header">
          <Link className="header__link" to="/">
              Menu
          </Link>
          <Link className="header__link" to="/cart">
              <img className="header__cart" src={cartIcon} alt="cart"></img>
              Total: {total} $
          </Link>
      </header>
  )
};

const mapStateToProps = ({items}) => {
  return {
    items
  }
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
