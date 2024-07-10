import React, { useState } from "react";
import {
  Typography,
  Stack,
  Card,
  CardContent,
  Link as MuiLink,
  Divider,
  Snackbar,
  Alert,
} from "@mui/material";
import { GoogleLogo } from "../../assets/index.js";
import { Input, Button } from "../index.js";
import "./signup.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  createAccount,
  loginWithGoogle,
} from "../../firebase/authentication.js";
import { getUser } from "../../firebase/database.js";
import { login } from "../../store/slices/authSlice.js";
import { Link } from "react-router-dom";

function Signup() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  const create = async (data) => {
    setError(false);
    try {
      const createdUser = await createAccount(data);

      if (createdUser) {
        const userData = await getUser(createdUser?.uid);

        dispatch(login(userData));
        navigate("/");
        //console.log(createdUser);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    try {
      const user = await loginWithGoogle();
      if (user) {
        //console.log(user);
        const userData = await getUser(user?.uid);
        dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setError(false);
  };

  return (
    <Card className="signup__card" component="section">
      <CardContent>
        <Typography variant="h4" align="center">
          Sign Up
        </Typography>

        <form onSubmit={handleSubmit(create)}>
          <Stack className="stack__1">
            <Input
              label="Full Name*"
              helperText={errors.fullName ? errors.fullName.message : null}
              {...register("fullName", { required: "Name is required" })}
            />
            <Input
              type="email"
              label="Email*"
              helperText={errors.email ? errors.email.message : null}
              {...register("email", {
                required: "Email is required",
                validate: {
                  matchPattern: (value) =>
                    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
                      value
                    ) || "Email address must be valid address",
                },
              })}
            />
            <Input
              type="password"
              label="Password*"
              helperText={errors.password ? errors.password.message : null}
              {...register("password", {
                required: "Password is required",
                validate: {
                  matchPattern: (value) =>
                    /^[a-z0-9]{8,}$/.test(value) ||
                    "Password must be at least 8 character long containing a-z & 0-9",
                },
              })}
            />
          </Stack>
          <Stack className="stack__2">
            <Button type="submit">create account</Button>
            <Typography align="center">
              Already have an account? <Link to={"/login"}><MuiLink>Log in</MuiLink></Link> here.
            </Typography>
            <Divider>or</Divider>
            <Button onClick={handleGoogleSignIn} startIcon={<GoogleLogo />}>
              sign in with google
            </Button>
          </Stack>
        </form>
        {error && (
          <Snackbar
            open={error ? true : false}
            autoHideDuration={5000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert severity="error" onClose={handleClose}>
              {error}
            </Alert>
          </Snackbar>
        )}
      </CardContent>
    </Card>
  );
}

export default Signup;
