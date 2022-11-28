import React from "react";
import { useParams } from "react-router-dom";

const CartScreen = () => {
  const { id } = useParams();

  return <div>Cart with id prodct: {id ? id : "nie ma id :("} </div>;
};

export default CartScreen;
