import { Box, Typography } from "@mui/material";
import React from "react";
import RecipeItem from "../RecipeItem/RecipeItem";
import { useSelector} from "react-redux";
import { deleteFavourite } from "../../redux/favouriteSlice";



const Favourites = ()=>{
  const favourite = useSelector((state) => state.favourite.favourites);  
  return(
    
    <Box>
      <Typography variant="h4" component="h2">My favourites receiptes</Typography>
      {favourite.map((item) => (
        <RecipeItem item={item} dispatch={deleteFavourite(item.id)}/>
      ))}
    </Box>
  )
}

export default Favourites;