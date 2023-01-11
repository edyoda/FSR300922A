import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IconButton, CardActionArea, CardActions } from "@mui/material";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";


const UserCard = ({ userDetails }) => {
  const { avatar, email, first_name, last_name } = userDetails || {};

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={avatar}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {first_name + " " + last_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton color="secondary">
          <FavoriteSharpIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default UserCard;
