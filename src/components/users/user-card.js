import { Box, CardContent, Avatar, Typography } from "@mui/material";
import { getInitials, capitalizeName } from "../../utils";
import { BACKEND_URL } from "../../config";

const UserCardContent = ({ user }) => {
  return (
    <CardContent>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Avatar
          src={`${BACKEND_URL}/image/${user?.photo_url}`}
          sx={{ height: "75px", width: "75px", mb: 2 }}
        >
          {getInitials(user.full_name)}
        </Avatar>
        <Typography color="textPrimary" gutterBottom variant="h5">
          {capitalizeName(user.full_name)}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
          textAlign={"center"}
          sx={{ maxWidth: { sm: "300px", xs: "230px" } }}
        >
          {user.description}
        </Typography>
      </Box>
    </CardContent>
  );
};

export default UserCardContent;
