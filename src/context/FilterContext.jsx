import { createContext, useReducer } from "react"
import { useContext } from "react";
import { FilterReducer } from "../reducer/filterReducer";

const filterInitialState = {
    productList:[],
    onlyInStock:false,
    bestSellerOnly: false,
    sortBy:null,
    ratings:null,

}

export const FilterContext =createContext(filterInitialState);

export const FilterProvider = ({children})=>{

    const [state, dispatch] = useReducer(FilterReducer, filterInitialState);

    function initialProductList(products){
        dispatch({
            type: "PRODUCT_LIST",
            payload:{

                products: products
            }
        })
    }

    function inStockOnly(products){
        return state.onlyInStock ? products.filter((product) => product.in_stock ===true):products
    }

    function bestSeller(products){
        return state.bestSellerOnly? products.filter((product) => product.best_seller === true):products
    }

    function sortBy(products){
        if(state.sortBy === "lowtohigh"){
            return products.sort((a,b) => Number(a.price) - Number(b.price))
        }
        if(state.sortBy === "hightolow"){
            return products.sort((a,b) => Number(b.price) - Number(a.price))
        }
        return products
    }

    function rating(products){
        if(state.ratings==="4STARSABOVE"){
            return products.filter((product)=> product.rating >=4)
        }
        if(state.ratings==="3STARSABOVE"){
            return products.filter((product)=> product.rating >=3)
        }
        if(state.ratings==="2STARSABOVE"){
            return products.filter((product)=> product.rating >=2)
        }
        if(state.ratings==="1STARSABOVE"){
            return products.filter((product)=> product.rating >=1)
        }

        return products
    }

    const filteredProductList = rating(sortBy(bestSeller(inStockOnly(state.productList))))
    
    const value= {
        state,
        dispatch,
        productList: filteredProductList,
        initialProductList

    }

    return(
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
  
}

export const useFilter= ()=>{
    const context = useContext(FilterContext);
    return context;
}

