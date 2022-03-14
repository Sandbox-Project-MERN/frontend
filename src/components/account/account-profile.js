import { useAuth } from "../../lib/auth";
import { useMutation } from "react-query";
import { updateUserImage } from "../../query-functions";

import { Card, CardActions, Divider, Input } from "@mui/material";

import { LoadingButton } from "@mui/lab";
import UserCardContent from "../users/user-card";

const AccountProfile = () => {
  const { user, refetchUser } = useAuth();

  const { mutate, isLoading } = useMutation(
    (selectedFile) => updateUserImage(user._id, selectedFile),
    {
      onSuccess: () => refetchUser(),
      onError: (err) => {
        console.log(err.response, "ERROR");
      },
    }
  );

  return (
    <Card>
      <UserCardContent user={user} />

      <Divider />
      <CardActions>
        <LoadingButton
          color="primary"
          fullWidth
          variant="text"
          component="label"
          aria-label="upload picture"
          loading={isLoading}
        >
          Upload picture
          <Input
            name="file"
            onChange={(e) => mutate(e.target.files[0])}
            type="file"
            id="contained-button-file"
            sx={{ display: "none" }}
            inputProps={{ hidden: true, accept: "image/png, image/jpeg" }}
          />
        </LoadingButton>
      </CardActions>
    </Card>
  );
};

export default AccountProfile;
