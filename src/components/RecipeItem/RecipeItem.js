import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useSelector, useDispatch } from "react-redux";
import { addFavourite, deleteFavourite } from "../../redux/favouriteSlice";
import React, { useState } from "react";

const RecipeItem = (props) => {
  const favourite = useSelector((state) => state.favourite.favourites);
  const [isFavourite, setIsFavourite] = useState(
    favourite.filter((item) => item.title == props.item.title).length > 0
  );

  console.log(isFavourite);

  const [expanded, setExpanded] = React.useState(false);

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const dispatch = useDispatch();

  const handleAddToFavButton = () => {
    if (isFavourite) {
      setIsFavourite(false);
      dispatch(deleteFavourite(props.item.title));
    } else {
      setIsFavourite(true);
      dispatch(addFavourite(props.item));
    }
  };

  return (
    <Card sx={{ maxWidth: 345 , m:2}}>
      <CardHeader title={props.item.title} />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.item.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          onClick={handleAddToFavButton}
          aria-label="add to favorites"
        >
          <FavoriteIcon color={isFavourite ? "error" : "primary"} />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          {props.item.instructions.map((item, index) => (
            <Typography paragraph>
              {index + 1}&#41; {item}
            </Typography>
          ))}
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default RecipeItem;
