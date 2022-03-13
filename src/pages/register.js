import Head from "next/head";
import NextLink from "next/link";

import { useState } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { useAuth } from "../lib/auth";

import * as Yup from "yup";

import {
  Box,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";

import LoadingButton from "@mui/lab/LoadingButton";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Register = () => {
  const { register } = useAuth();
  const router = useRouter();

  const [pwVisible, setPwVisibility] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      full_name: "",
      description: "",
      password: "",
      policy: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("must be a valid email")
        .max(255)
        .required("email is required"),
      full_name: Yup.string()
        .max(255)
        .required("can't be empty")
        .matches(/^[\p{L} ,.'-]+$/u, "invalid name"),
      description: Yup.string()
        .max(150, "only 150 characters long please...")
        .required("don't be shy 😆"),
      password: Yup.string().max(255).required("can't be empty"),
      policy: Yup.boolean().oneOf([true], "this field must be checked"),
    }),
    onSubmit: ({ email, full_name, description }, { setErrors }) => {
      register({ email, full_name, description }).then((res) => {
        console.log(res);
      });
    },
  });

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <Container maxWidth="sm">
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Create a new account 🥳
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                Use your email to create a new account
              </Typography>
            </Box>
            <TextField
              error={Boolean(
                formik.touched.full_name && formik.errors.full_name
              )}
              fullWidth
              helperText={formik.touched.full_name && formik.errors.full_name}
              label="Name"
              margin="normal"
              name="full_name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.full_name}
              variant="outlined"
            />
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

            <TextField
              error={Boolean(
                formik.touched.description && formik.errors.description
              )}
              fullWidth
              helperText={
                formik.touched.description && formik.errors.description
              }
              label="Brief Description"
              margin="normal"
              name="description"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              multiline
              maxRows={2}
              value={formik.values.description}
              variant="outlined"
            />
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                ml: -1,
              }}
            >
              <Checkbox
                checked={formik.values.policy}
                name="policy"
                onChange={formik.handleChange}
              />
              <Typography color="textSecondary" variant="body2">
                I have read the{" "}
                <NextLink href="#" passHref>
                  <Link color="primary" underline="always" variant="subtitle2">
                    Terms and Conditions
                  </Link>
                </NextLink>
              </Typography>
            </Box>
            {Boolean(formik.touched.policy && formik.errors.policy) && (
              <FormHelperText error>{formik.errors.policy}</FormHelperText>
            )}
            <Box sx={{ py: 2 }}>
              <LoadingButton
                color="primary"
                loading={false}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign Up Now
              </LoadingButton>
            </Box>
            <Typography color="textSecondary" variant="body2">
              Have an account?{" "}
              <NextLink href="/login" passHref>
                <Link variant="subtitle2" underline="hover">
                  Sign In
                </Link>
              </NextLink>
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Register;
