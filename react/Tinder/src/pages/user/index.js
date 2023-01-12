import { Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Header from "../../components/header";
import UserCard from "../../components/usersList/userCard";
import { Toast } from "../../components/utils";
import { showToast } from "../../redux/actions/utilsActions";
import { getUserDetails } from "../../services/dashboard";

const UserPage = () => {
  const dispatch = useDispatch();
  let [searchParams] = useSearchParams();
  const userId = searchParams.get("userId");

  const [isLoading, setIsLoading] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    if (userId) {
      setIsLoading(true);
      getUserDetails(userId)
        .then((res) => {
          setUserDetails(res.data);
        })
        .catch((err) => {
          dispatch(
            showToast({
              message: "Something went Wrong",
            })
          );
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [userId]);

  const showUserDetails = !isLoading && !!userDetails;
  return (
    <div>
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 8,
        }}
      >
        {showUserDetails && <UserCard userDetails={userDetails} />}
        {isLoading && (
          <Skeleton variant="rectangular" width={200} height={290} />
        )}
      </Box>
      <Toast />
    </div>
  );
};

export default UserPage;
