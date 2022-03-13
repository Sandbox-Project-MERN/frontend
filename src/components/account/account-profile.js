import { useAuth } from "../../lib/auth";

import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";

import { getInitials, capitalizeName } from "../../utils";

const AccountProfile = () => {
  const { user } = useAuth();
  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Avatar
            src={user.photo_url}
            sx={{
              height: 75,
              mb: 2,
              width: 75,
            }}
          >
            {getInitials(user.full_name)}
          </Avatar>
          <Typography color="textPrimary" gutterBottom variant="h5">
            {capitalizeName(user.full_name)}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            {user.description}
          </Typography>
          {/* <Typography color="textSecondary" variant="body2">
          {new Date().getFullYear}
        </Typography> */}
        </Box>
      </CardContent>
      <Divider />
      {/* <CardActions>
      <Button color="primary" fullWidth variant="text">
        Upload picture
      </Button>
    </CardActions> */}
    </Card>
  );
};

export default AccountProfile;
