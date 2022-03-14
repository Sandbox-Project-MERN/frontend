import Head from "next/head";
import NextLink from "next/link";

import * as Yup from "yup";

import { useAuth } from "../lib/auth";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";

import LoadingButton from "@mui/lab/LoadingButton";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";

import { Facebook as FacebookIcon } from "../icons/facebook";
import { Google as GoogleIcon } from "../icons/google";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const SignIn = () => {
  const [pwVisible, setPwVisibility] = useState(false);
  const { login, isLoggingIn } = useAuth();

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "guest@gmail.com",
      password: "guestPassword!!11$",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: (formData, { setErrors }) => {
      login(formData)
        .then(() => router.push("/"))
        .catch((err) => {
          if (err.response.data.message.includes("email"))
            setErrors({ email: err.response.data.message });
          if (err.response.data.message.includes("password"))
            setErrors({ password: err.response.data.message });
        });
    },
  });

  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
          py: 5,
          px: 3,
        }}
      >
        <Container maxWidth="sm">
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Sign in
              </Typography>
              {/* <Typography color="textSecondary" gutterBottom variant="body2">
                Sign in with Oauth
              </Typography> */}
            </Box>
            {/* <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Button
                  color="info"
                  fullWidth
                  startIcon={<FacebookIcon />}
                  onClick={formik.handleSubmit}
                  size="large"
                  variant="contained"
                >
                  Sign In with Facebook
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Button
                  fullWidth
                  color="error"
                  startIcon={<GoogleIcon />}
                  onClick={formik.handleSubmit}
                  size="large"
                  variant="contained"
                >
                  Sign In with Google
                </Button>
              </Grid>
            </Grid> */}
            {/* <Box
              sx={{
                pb: 1,
                pt: 3,
              }}
            >
              <Typography align="center" color="textSecondary" variant="body1">
                or sign in with your email address
              </Typography>
            </Box> */}
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.email}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type={pwVisible ? "text" : "password"}
              value={formik.values.password}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setPwVisibility(!pwVisible)}
                      edge="end"
                    >
                      {pwVisible ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Box sx={{ py: 2 }}>
              <LoadingButton
                color="primary"
                loading={isLoggingIn}
                disabled={!formik.isValid}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign In Now
              </LoadingButton>
            </Box>
            <Typography color="textSecondary" variant="body2">
              Don&apos;t have an account?{" "}
              <NextLink href="/register">
                <Link
                  to="/register"
                  variant="subtitle2"
                  underline="hover"
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  Sign Up
                </Link>
              </NextLink>
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default SignIn;
