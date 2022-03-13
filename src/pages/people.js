import Head from "next/head";
import { Box, Container } from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";

const People = () => (
  <>
    <Head>
      <title>People</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <Box sx={{ mt: 3 }}></Box>
      </Container>
    </Box>
  </>
);
People.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default People;
