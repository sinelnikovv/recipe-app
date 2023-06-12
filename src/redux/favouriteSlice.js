import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favourites: [],
};

export const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addFavourite: (state, action) => {
      state.favourites.push(action.payload);
    },
    deleteFavourite:(state,action)=>{
      state.favourites=state.favourites.filter(item=>item.id!=action.payload)
    }
  },
});

export const { addFavourite, deleteFavourite } = favouriteSlice.actions;

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = recipeSlice.actions

export default favouriteSlice.reducer;
