import { storage } from "../utils";
import { DashboardLayout } from "./dashboard/dashboard-layout";

import Login from "../pages/login.js";
import { useAuth } from "../lib/auth";

const withAuth = (Component, isLoggedIn) => {
  const Auth = () => {
    const { user, login, refetchUser } = useAuth();
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
