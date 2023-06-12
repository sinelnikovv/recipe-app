import { Box, Button, TextField } from "@mui/material";
import React from "react";

import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { addRecipe } from "../../redux/recipeSlice";
import TextareaAutosize from '@mui/base/TextareaAutosize';

import { useForm } from "react-hook-form";

const AddReceipt = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm({});

  const formSubmitHandler = (formData) => {
    let body = {
      id:formData.title,
      title: formData.title,
      description: formData.description,
      ingredients:formData.ingredients.split(","),
      instructions:formData.instructions.split(";"),      
    };

    console.log(body);
    dispatch(addRecipe(body));
    reset()
  };

  return (
    <form onSubmit={handleSubmit(formSubmitHandler)}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <TextField required id="title" label="Title" {...register("title")} />
        <TextField required id="description" label="Description" {...register("description")} />
        <TextField multiline required id="ingredients" label="Ingredients" {...register("ingredients")} />
        <TextField multiline required id="instructions" label="Instructions" {...register("instructions")} />
        <Typography> Devide components by "," and instructions by ";"</Typography>
        <button type="submit">Add receipt</button>
      </Box>
    </form>
   
  );
};

export default AddReceipt;
