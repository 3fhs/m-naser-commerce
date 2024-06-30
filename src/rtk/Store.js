import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./slices/Product-slice";
import  cartSlice  from "./slices/Cart-slice";

export const store = configureStore({
    reducer: {
        product: ProductSlice,
        cart: cartSlice,
    }
})