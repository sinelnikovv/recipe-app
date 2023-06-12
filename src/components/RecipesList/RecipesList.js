import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import RecipeItem from "../RecipeItem/RecipeItem";

const RecipeList = () => {
  const recipes = useSelector((state) => state.recipes.recipes);  
  
  return (
    <Box>
      <Typography variant="h4" component="h2">All receipes</Typography>
      <Box sx={{display:"flex", m:2}}>
      {recipes.map((item) => (
        <RecipeItem item={item}/>
      ))}
      </Box>
    </Box>
  );
};

export default RecipeList;
