import Head from "next/head";

import { useQuery } from "react-query";

import { Box, Paper, Skeleton, Grid, Avatar, Typography } from "@mui/material";
import { DashboardLayout } from "../components/dashboard/dashboard-layout";
import { getUserProfiles } from "../query-functions";
import UserCardContent from "../components/users/user-card";

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
          px: 8,
          py: 8,
        }}
      >
        {(isLoading ? Array.from(new Array(3)) : data ? data : []).map(
          (user, index) => {
            console.log(user);
            if (user) return <UserCardContent user={user} key={index} />;
            else return <div>Loading</div>;
          }
        )}
      </Grid>
    </>
  );
};
People.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default People;
