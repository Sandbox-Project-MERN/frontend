import { useAuth } from "../../lib/auth";
import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Input,
  Typography,
} from "@mui/material";

import { getInitials, capitalizeName } from "../../utils";

const AccountProfile = () => {
  const { user } = useAuth();

  const [selectedFile, setSelectedFile] = useState();

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
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          color="primary"
          fullWidth
          variant="text"
          component="label"
          aria-label="upload picture"
        >
          Upload picture
          <Input
            name="file"
            onChange={(e) => setSelectedFile(e.target.files[0])}
            type="file"
            id="contained-button-file"
            sx={{ display: "none" }}
            inputProps={{ hidden: true, accept: "image/png, image/jpeg" }}
          />
        </Button>
      </CardActions>
    </Card>
  );
};

export default AccountProfile;
