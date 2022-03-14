import { useFormik } from "formik";
import { useAuth } from "../../lib/auth";
import { useQuery, useMutation } from "react-query";

import { updateUserProfile } from "../../query-functions";

import * as Yup from "yup";

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

const AccountProfileDetails = () => {
  const { user, refetchUser } = useAuth();

  const { mutate, isLoading } = useMutation(
    (formValues) => updateUserProfile(user._id, formValues),
    {
      onSuccess: () => {
        refetchUser();
      },
      onError: (err) => {
        console.log(err.response);
      },
    }
  );

  const formik = useFormik({
    initialValues: {
      full_name: user.full_name,
      email: user.email,
      description: user.description,
    },
    validationSchema: Yup.object({
      full_name: Yup.string().max(255).required("can't be blank"),
      email: Yup.string()
        .email("invalid email")
        .max(255)
        .required("can't be blank"),
      description: Yup.string()
        .max(150, "only 150 characters long please...")
        .required("don't be shy 😆"),
    }),
    onSubmit: (formValues, { setErrors }) => {
      mutate(formValues);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      autoComplete="false"
      autoCorrect="false"
    >
      <Card>
        <CardHeader title="Profile" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                error={Boolean(
                  formik.touched.full_name && formik.errors.full_name
                )}
                helperText={formik.touched.full_name && formik.errors.full_name}
                label="Name"
                name="full_name"
                required
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.full_name}
                variant="outlined"
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                error={Boolean(formik.touched.email && formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                label="Email Address"
                name="email"
                required
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
                variant="outlined"
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                error={Boolean(
                  formik.touched.description && formik.errors.description
                )}
                helperText={
                  formik.touched.description && formik.errors.description
                }
                label="Description"
                name="description"
                required
                multiline
                rows={2}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.description}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <LoadingButton
            color="primary"
            variant="contained"
            type="submit"
            disabled={!formik.isValid}
            loading={isLoading}
          >
            Save Details
          </LoadingButton>
        </Box>
      </Card>
    </form>
  );
};

export default AccountProfileDetails;
