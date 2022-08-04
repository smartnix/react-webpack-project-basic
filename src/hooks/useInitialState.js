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

    return {
        addTocart,
        removeFromCart,
        state,
    }
}

export {useInitialState}