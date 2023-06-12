import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./recipeSlice";
import favouriteReducer from "./favouriteSlice";
const store = configureStore({
  reducer: {  
    recipes:recipeReducer,
    favourite:favouriteReducer
  }  
});

export default store;
