import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "../reducer/CartReducer";

const initialCartState = {
    cartList: [],
    total: 0
};

const CartContext = createContext(initialCartState);

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, initialCartState);

    function addToCart(product) {
        const updatedCart = state.cartList.concat(product);
        const updatedTotal = state.total + product.price;

        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedCart,
                total: updatedTotal
            }
        });
    }

    function removeFromCart(product) {
        const updatedCart = state.cartList.filter(item => item.id !== product.id);
        const updatedTotal = state.total - product.price;

        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedCart,
                total: updatedTotal
            }
        });
    }

    function clearCart() {
        dispatch({
            type: "CLEAR_CART",
            payload: {
                cartList: [],
                total: 0
            }
        });
    }

    const value = {
        cartList: state.cartList || [],
        total: state.total || 0,
        addToCart,
        removeFromCart,
        clearCart
    };

    return (<CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>)
};

export const useCart = () => {
    return useContext(CartContext);
};
