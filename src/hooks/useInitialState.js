import { useState } from "react";
import initalState from "../initalState";

const useInitialState = () => {
  
  const [state, setState] = useState(initalState);

  const addTocart = payload => {
    setState({
        ...state, cart: [...state.cart, payload]
    });
  }

  const removeFromCart = payload => {
    setState({
        ...state,
        cart:state.cart.filter(item => item.id !== payload.id)
    })
  }

  const addToBuyer = payload =>{
    setState({
      ...state,
      buyer: [...state.buyer, payload]
  })
  }

  const addNewOrder = payload => {
    setState({
      ...state,
      orders: [...state.orders, payload]
  })
  }

    return {
        addTocart,
        removeFromCart,
        addToBuyer,
        addNewOrder,
        state,
    }
}

export {useInitialState}