import "./style.css";
import React, { useEffect, useState } from "react";
import { List, Checkbox } from "antd";
import { DB_CART } from "./db";
import useChecked from "./useChecked";

const Cart = function () {
  const cartData = DB_CART.products;
  const { checkedMap, onChecked, onCheckedAll } = useChecked(cartData);
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

  return (
    <div className="cart-wrapper">
      <List
        bordered
        dataSource={cartData}
        renderItem={(item, index) => (
          <CartItem
            key={`cart_item${index}`}
            product={item}
            checkedMap={checkedMap}
            onChecked={onChecked}
          />
        )}
      />

      <div className="cart-checkout flex-layout">
        <div>
          <input
            type="checkbox"
            checked={checkedMap.length === cartData.length}
            onChange={(e) => onCheckedAll(e.target.checked)}
          />
          <span className="check-all">全选</span>
        </div>
        <div>{total}</div>
      </div>
    </div>
  );
};

const CartItem = function ({ product, onChecked, checkedMap }) {
  const { sku_id, name, price } = product;
  return (
    <div className="cart-item flex-layout">
      <div>
        <Checkbox
          checked={checkedMap.includes(sku_id)}
          onChange={() => onChecked(sku_id)}
        >
          {name}
        </Checkbox>
      </div>
      <div>{price}</div>
    </div>
  );
};

export default Cart;
