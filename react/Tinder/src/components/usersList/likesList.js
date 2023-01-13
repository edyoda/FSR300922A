import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./userCard";
import styles from "./userDetails.module.css";
import NoLikeImg from "../../assets/images/no-like.svg";
import { Box } from "@mui/system";
import { Button, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { dislikeUser } from "../../redux/actions/utilsActions";

const LikeList = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.utils.likesUsers);
  const [selectedUsers, setSelectedUsers] = useState({});

  const onSelectUser = (userId) => {
    const newSelections = { ...selectedUsers };
    if (newSelections[userId]) {
      delete newSelections[userId];
    } else {
      newSelections[userId] = true;
    }
    setSelectedUsers(newSelections);
  };


  const onRemoveUsers = () => {
    const newSelections = { ...selectedUsers };
    Object.keys(selectedUsers).forEach((id) => {
      dispatch(dislikeUser(id));
      delete newSelections[id];
    });
    setSelectedUsers(newSelections);
  };
  
  const showDelete = Object.keys(selectedUsers).length;

  return (
    <div className={styles.userDetailsWrapper}>
      {list && !!list.length && (
        <div>
          <div className={styles.userList}>
            {list.map((item) => (
              <UserCard
                onSelectUser={onSelectUser}
                userDetails={item}
                key={item.id}
                showDelete={true}
                isSelected={!!selectedUsers[item.id]}
              />
            ))}
          </div>
          {!!showDelete && (
            <Stack justifyContent={"center"} alignItems="center">
              <Button
                sx={{ margin: 8 }}
                variant="outlined"
                onClick={onRemoveUsers}
                startIcon={<DeleteIcon />}
              >
                Remove
              </Button>
            </Stack>
          )}
        </div>
      )}
      {list && list.length == 0 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            margin: 8,
          }}
        >
          <img src={NoLikeImg} style={{ height: 300, width: "50%" }} />
          <Typography mt={4} color={"gray"}>
            No Liked User
          </Typography>
        </Box>
      )}
    </div>
  );
};

export default LikeList;
