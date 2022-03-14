import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "../lib/auth";

import { DashboardLayout } from "./dashboard/dashboard-layout";

import Login from "../pages/login.js";
import { storage } from "../utils";

const withAuth = (Component) => {
  const Auth = () => {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!user) router.push("/login");
    }, []);

    if (!user) return <Login />;

    return (
      <DashboardLayout>
        <Component />
      </DashboardLayout>
    );
  };

  return Auth;
};
export default withAuth;
