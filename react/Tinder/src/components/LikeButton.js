import { Badge, Button } from "@mui/material";
import React from "react";

const LikeRouteButton = () => {
    const likeCount = 0;
  const onClick = () => {};
  return (
    <Badge showZero={false} badgeContent={likeCount} color="secondary">
      <Button onClick={onClick} color="inherit">
        Likes
      </Button>
    </Badge>
  );
};

export default LikeRouteButton;
