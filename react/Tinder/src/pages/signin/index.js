import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MLink from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { TinderInput } from "../../components/input";
import { validateForm } from "../../utils/validation";
import { Link } from "react-router-dom";

const initalValues = {
  email: "",
  password: "",
};
const Signin = () => {
  const [values, setValues] = useState(initalValues);
  const [errors, setErrors] = useState(initalValues);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    /* const newValues = { ...values };
    newValues[name] = value;
     setValues(newValues); */
    setValues((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValidated = validateForm(values, setErrors);
    if (isValidated) {
      //submit the form
      //make an api call to send values
      //redirect to the user to dashaboard
      //show error to user
    }
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TinderInput
              label="Email Address"
              name="email"
              type="email"
              onChange={onInputChange}
              value={values.email}
              isError={!!errors.email}
              helperText={errors.email}
            />
            <TinderInput
              name="password"
              label="Password"
              type="password"
              onChange={onInputChange}
              value={values.password}
              isError={!!errors.password}
              helperText={errors.password}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign in
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <Link to="/signup">
                  <MLink href="#" variant="body2">
                    Don't have an account? Sign Up
                  </MLink>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default Signin;
