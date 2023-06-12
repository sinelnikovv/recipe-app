import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RecipeList from "../RecipesList/RecipesList";
import RecipeItem from "../RecipeItem/RecipeItem";
import Favourites from "../Favourites/Favourites";
import AddReceipt from "../AddReceipt/AddReceipt";



const AppRouter = () => {
  

  const routes = (
    <Routes>
      <Route path="/" element={<Navigate to="/recipes" />} />      
      <Route path="/recipes" element={<RecipeList />} />      
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/addreceipt" element={<AddReceipt />} />

    </Routes>
  );

  

  return routes;
};

export default AppRouter;
