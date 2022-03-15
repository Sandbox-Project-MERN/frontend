import Head from "next/head";

import { Box, Container, Grid, Typography } from "@mui/material";

import { DashboardLayout } from "../components/dashboard/dashboard-layout";

import AccountProfile from "../components/account/account-profile";
import AccountProfileDetails from "../components/account/account-profile-details";
import withAuth from "../components/with-auth";
import { useAuth } from "../lib/auth";

const Account = () => {
  const { user } = useAuth();

  return (
    <>
      <Head>
        <title>Account</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 5,
          px: 3,
        }}
      >
        {user && (
          <Container maxWidth="lg">
            <Typography sx={{ mb: 3 }} variant="h4">
              Account
            </Typography>
            <Grid container spacing={3}>
              <Grid item lg={4} md={6} xs={12}>
                <AccountProfile />
              </Grid>
              <Grid item lg={8} md={6} xs={12}>
                <AccountProfileDetails />
              </Grid>
            </Grid>
          </Container>
        )}
      </Box>
    </>
  );
};

export default withAuth(Account);
