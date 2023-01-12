import { Badge, Button } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const LikeRouteButton = ({likesCount}) => {
  const navigate = useNavigate()
  const onClick = () => {
    navigate('/likes')
  };
  return (
    <Badge showZero={false} badgeContent={likesCount} color="secondary">
      <Button onClick={onClick} color="inherit">
        Likes
      </Button>
    </Badge>
  );
};


const mapStateToProps = (state) => {
  return {
    likesCount: (state.utils.likesUsers||[]).length,
  };
};

export default connect(mapStateToProps)(LikeRouteButton);

