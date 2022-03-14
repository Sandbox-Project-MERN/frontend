import { DashboardLayout } from "./dashboard/dashboard-layout";

import Login from "../pages/login.js";
import { storage } from "../utils";

const withAuth = (Component, isLoggedIn) => {
  const Auth = () => {
    if (!storage.getToken()) return <Login />;

    return (
      <DashboardLayout>
        <Component />
      </DashboardLayout>
    );
  };

  return Auth;
};
export default withAuth;
