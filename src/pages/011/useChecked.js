import React, { useReducer } from "react";

const CART_ITEM_CHECKED = "CART_ITEM_CHECKED";
const CART_CHECKED_ALL = "CART_CHECKED_ALL";

const initState = {
  checkedMap: [],
};

const useChecked = function (data) {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case CART_ITEM_CHECKED: {
        const { sku_id } = action.payload;
        const { checkedMap } = state;
        let newCheckedMap = [...checkedMap];
        if (checkedMap.includes(sku_id)) {
          const index = newCheckedMap.findIndex((id) => id === sku_id);
          newCheckedMap.splice(index, 1);
        } else {
          newCheckedMap = [...checkedMap, sku_id];
        }
        return {
          checkedMap: newCheckedMap,
        };
      }

      case CART_CHECKED_ALL: {
        const { checked } = action.payload;
        const newCheckedMap = [];
        if (checked) {
          data.map((product) => newCheckedMap.push(product.sku_id));
        }
        console.log(newCheckedMap);
        return {
          checkedMap: newCheckedMap,
        };
      }

      default:
        return state;
    }
  }, initState);

  const onChecked = (sku_id) => {
    dispatch({
      type: CART_ITEM_CHECKED,
      payload: { sku_id },
    });
  };

  const onCheckedAll = (checked) => {
    dispatch({
      type: CART_CHECKED_ALL,
      payload: {
        checked,
      },
    });
  };

  return {
    checkedMap: state.checkedMap,
    onChecked,
    onCheckedAll,
  };
};

export default useChecked;
