import Head from "next/head";

import { useQuery } from "react-query";

import { Box, Paper, Card, Skeleton, Grid } from "@mui/material";
import { DashboardLayout } from "../components/dashboard/dashboard-layout";
import { getUserProfiles } from "../query-functions";
import UserCardContent from "../components/users/user-card";
import withAuth from "../components/with-auth";

const People = () => {
  const { data, isLoading, status } = useQuery("users", getUserProfiles);

  return (
    <>
      <Head>
        <title>People</title>
      </Head>

      <Grid
        container
        component="main"
        sx={{
          justifyContent: "center",
          gap: 3,
          overflow: "auto",
          px: 3,
          pt: 3,
          pb: 8,
        }}
      >
        {status === "success" &&
          data.map((user, index) => {
            return (
              <Card sx={{ backgroundColor: "gray.100", w: "auto" }}>
                <UserCardContent user={user} key={index} />
              </Card>
            );
          })}

        {status === "error" && <div>Error...</div>}

        {isLoading && <div>Loading...</div>}
      </Grid>
    </>
  );
};

People.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default withAuth(People);
