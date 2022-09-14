import "./style.css";
import React, { useEffect, useState } from "react";
import { DB_CART } from "./db";

const Cart = function () {
  const [cartData, setCartData] = useState(DB_CART.products);
  const [checkedMap, setCheckedMap] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    calculate();
  }, [checkedMap]);

  function calculate() {
    const sumPrice = cartData
      .filter((product) => checkedMap.includes(product.sku_id))
      .reduce((sum, cur) => sum + cur.price, 0);
    setTotal(sumPrice);
  }

  function onChecked(sku_id) {
    let newCheckedMap = [...checkedMap];
    if (checkedMap.includes(sku_id)) {
      const index = newCheckedMap.findIndex((id) => id === sku_id);
      newCheckedMap.splice(index, 1);
    } else {
      newCheckedMap = [...checkedMap, sku_id];
    }
    setCheckedMap(newCheckedMap);
  }

  function onCheckedAll(e) {
    const isChecked = e.target.checked;
    const newCheckedMap = [];
    if (!isChecked) {
      setCheckedMap([]);
    } else {
      cartData.map((product) => newCheckedMap.push(product.sku_id));
    }
    setCheckedMap(newCheckedMap);
  }

  return (
    <div className="cart-wrapper">
      {cartData.map((product, index) => {
        return (
          <CartItem
            key={`cart_item${index}`}
            product={product}
            checkedMap={checkedMap}
            onCheckout={onChecked}
          />
        );
      })}

      <div className="cart-checkout flex-layout">
        <div>
          <input
            type="checkbox"
            checked={checkedMap.length === cartData.length}
            onChange={onCheckedAll}
          />
          <span className="check-all">全选</span>
        </div>
        <div>{total}</div>
      </div>
    </div>
  );
};

const CartItem = function ({ product, onCheckout, checkedMap }) {
  const { sku_id, name, price } = product;
  return (
    <div className="cart-item flex-layout">
      <div>
        <input
          type="checkbox"
          checked={checkedMap.includes(sku_id)}
          onChange={() => onCheckout(sku_id)}
        />
        <span className="product-name">{name}</span>
      </div>
      <div>{price}</div>
    </div>
  );
};

CartItem.displayName = "CartItem";

export default Cart;
