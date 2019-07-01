import React from 'react';
import {connect} from 'react-redux';
import {deleteFromCart, sendCartRequsted, sendCart} from '../../actions/'
import WithRestoService from '../hoc';
import Spiner from '../spinner';
import './cart-table.scss';

const CartTable = ({items, loading, deleteFromCart, sendCartRequsted, sendCart, RestoService}) => {

  const sendCartItems = () => {
    if (items.length === 0) return;
    sendCartRequsted();
    RestoService.saveOrders({id:'', items})
      .then(response => console.log(response))
    sendCart();
    document.querySelector('.cart__title').innerHTML = 'Ваш заказ отправлен в обработку.';
  }

  if (loading) return <Spiner />

    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
              {
                items.map(item => {
                  const {title, price, url, id, num} = item;
                  return (
                    <div className="cart__item" key={id}>
                      <img src={url} className="cart__item-img" alt={title}></img>
                      <div className="cart__item-title">{title}</div>
                      <div className="cart__item-price">{price} $</div>
                      <div onClick={() => deleteFromCart(id)} className="cart__close">&times;</div>
                      <div className="cart__num" style={num < 2 ? {display: 'none' } : {display: 'flex' }}>{num}</div>
                  </div>
                  )
                })
              }
              <button className="cart__send" style={items.length === 0 ? {display: 'none' } : {display: 'block' }} onClick={sendCartItems}>Отправить заказ</button>
            </div>
        </>
    );
};

const mapStateToProps = ({items, loading}) => {
  return {
    items,
    loading
  }
}

const mapDispatchToProps = {
  deleteFromCart,
  sendCartRequsted,
  sendCart
};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(CartTable));
