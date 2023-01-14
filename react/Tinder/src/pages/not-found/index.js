import { Button, Typography } from "@mui/material";
import React, { memo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../components/container";
import SampleComponent from "../../components/container/sample";

const NotFound = () => {
  const ref = useRef(0);
  const [state, setState] = useState(0);
  const navigate = useNavigate();
  const onClickMe = () => {
    setState(state + 1);
  };
  const onClickRef = () => {
    ref.current = ref.current + 1;
  };
  return (
    <div>
      <Container
        headingComponent={
          <Typography variant="h1" component={"h1"} color={"seagreen"}>
            Oops! Wrong Path
          </Typography>
        }
      >
        <h2>Not Found- 404</h2>
        <Button
          sx={{ marginTop: 8 }}
          variant="contained"
          onClick={() => navigate("/")}
        >
          Go to Home
        </Button>
      </Container>
      <SampleComponent />
      <Button onClick={onClickMe}>Change State {state}</Button>
      <Button onClick={onClickRef}>Change Ref {ref.current}</Button>
    </div>
  );
};

export default NotFound;
