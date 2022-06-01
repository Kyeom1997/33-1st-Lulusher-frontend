import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Item from '../../components/Bag/Item';
import Footer from '../../components/Footer/Footer';
import OrderSummary from '../../components/Bag/OrderSummary';
import './Bag.scss';
import EmptyBag from './EmptyBag/EmptyBag';

const Bag = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/');
  };

  const [itemList, setItemList] = useState([]);
  const [isEmpty, setEmpty] = useState(false);

  useEffect(() => {
    fetch('http://10.58.0.59:8000/carts', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setItemList(data.results);
        console.log(data);
      });
  }, []);

  const onRemove = useCallback(
    id => {
      setItemList(itemList.filter(item => item.cart_id !== id));
      if (itemList.length === 1) {
        setEmpty(!isEmpty);
      }
    },
    [itemList, isEmpty]
  );
  return (
    <div className="bag">
      <nav>
        <button type="submit" onClick={goToMain}>
          <img src="/bagImages/lemon.png" alt="logo" />
        </button>
      </nav>
      {isEmpty ? (
        <EmptyBag goToMain={goToMain} />
      ) : (
        <div className="bagContainer">
          <div className="leftContainer">
            <h1>
              My Bag <span>({itemList.length} Items)</span>
            </h1>
            {itemList &&
              itemList.map(item => {
                return (
                  <Item item={item} key={item.cart_id} onRemove={onRemove} />
                );
              })}
          </div>
          <OrderSummary itemList={itemList} />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Bag;
