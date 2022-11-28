import React from "react";
import axios from "axios";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);
    dispatch({ type: CART_ADD_ITEM,
    payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
    },
    });
    //in local storage we can only store strings
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
