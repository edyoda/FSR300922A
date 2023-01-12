import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IconButton, CardActionArea, CardActions } from "@mui/material";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import { connect } from "react-redux";
import { likeUser, dislikeUser } from "../../redux/actions/utilsActions";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";

const UserCard = (props) => {
  const { userDetails, likesUsers, dispatch } = props;
  const navigate = useNavigate();
  const {
    avatar,
    email,
    id: userId,
    first_name,
    last_name,
  } = userDetails || {};

  const onLikeUser = () => {
    dispatch(likeUser(userDetails));
  };
  const onUnLikeUser = () => {
    dispatch(dislikeUser(userId));
  };
  const onCardClick = ()=>{
    navigate(`/user?userId=${userId}`)
  }

  const isLiked = Boolean((likesUsers || []).find((i) => i.id === userId));
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={onCardClick}>
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
        {isLiked && (
          <IconButton color="secondary" onClick={onUnLikeUser}>
            <FavoriteSharpIcon />
          </IconButton>
        )}
        {!isLiked && (
          <IconButton color="secondary" onClick={onLikeUser}>
            <FavoriteBorderIcon />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    likesUsers: state.utils.likesUsers,
  };
};

export default connect(mapStateToProps)(UserCard);
