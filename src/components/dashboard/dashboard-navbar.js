import PropTypes from "prop-types";
import NextLink from "next/link";

import { useAuth } from "../../lib/auth";
import { getInitials } from "../../utils";

import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import styled from "@emotion/styled";

import { Users as UsersIcon } from "../../icons/users";
import { User as UserIcon } from "../../icons/user";
import { BACKEND_URL } from "../../config";

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

const DashboardNavbar = ({ onSidebarOpen }) => {
  const { user } = useAuth();

  return (
    <>
      <DashboardNavbarRoot
        sx={{
          left: {
            lg: 280,
          },
          width: {
            lg: "calc(100% - 280px)",
          },
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2,
          }}
        >
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: "inline-flex",
                lg: "none",
              },
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <NextLink href="/people">
            <Tooltip title="People">
              <IconButton sx={{ ml: 1 }}>
                <UsersIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </NextLink>
          <NextLink href="/account">
            <Tooltip title="My Account">
              <IconButton sx={{ ml: 1 }}>
                <Avatar
                  sx={{
                    height: 40,
                    width: 40,
                    ml: 1,
                  }}
                  src={`${BACKEND_URL}/image/${user.photo_url}`}
                >
                  {getInitials(user?.full_name)}
                </Avatar>
              </IconButton>
            </Tooltip>
          </NextLink>
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};

DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func,
};

export default DashboardNavbar;
