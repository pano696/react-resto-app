import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
import {menuLoaded, menuRequested, addedToCart, menuError} from '../../actions/';
import Spiner from '../spinner';
import Error from '../error';


import './menu-list.scss';

class MenuList extends Component {

  render() {

    const {menuItems, loading, error, addedToCart} = this.props;

    if (loading) return <Spiner />
    if (error) return <Error />

    return (
        <ul className="menu__list">
          {
            menuItems.map(menuItem => {
              return <MenuListItem
                        key={menuItem.id}
                        menuItem={menuItem}
                        onAddToCart={() => addedToCart(menuItem.id)}/>
            })
          }
        </ul>
    )
  }
};

const WithData = (View) => {
  return class extends Component {

    componentDidMount() {
      const {RestoService, menuLoaded, menuRequested} = this.props;
      menuRequested();
      RestoService.getMenuItems()
        .then(response => menuLoaded(response))
        .catch(() => menuError())
    }

    render() {
      return <View {...this.props} />
    }
  }
}


const mapStateToProps = (state) => {
  return {
    menuItems: state.menu,
    loading: state.loading,
    error: state.error
  }
}

const mapDispatchToProps = {
  menuLoaded,
  menuRequested,
  addedToCart,
  menuError
};


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(WithData(MenuList)));
