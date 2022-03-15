import { storage } from "../utils";
import { DashboardLayout } from "./dashboard/dashboard-layout";

import Login from "../pages/login.js";

const withAuth = (Component, isLoggedIn) => {
  const Auth = () => {
    if (storage.getToken()) {
      return (
        <DashboardLayout>
          <Component />
        </DashboardLayout>
      );
    } else return <Login />;
  };

  return Auth;
};
export default withAuth;
