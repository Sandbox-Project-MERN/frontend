import { axiosWithAuth } from "../utils";

// auth functions
export const access = async (userInfo, type) => {
  const { data } = await axiosWithAuth().post(`/auth/${type}`, userInfo);

  return data;
};

// user functions

/**
 * Returns a user profile with the following object structure
 ```
 {_id, full_name, description, photo_url, photo_id}
 ```
 *
 * @param {string} user_id The id of a user profile on the database
 * @return {object} the users profile information
 */

export const getUserProfile = async (user_id) => {
  const { data } = await axiosWithAuth().get(`/user/${user_id}`);
  return data;
};

/**
 * Returns all user profiles the following structure:
 ```
{_id, full_name, description, photo_url, photo_id} 
 ```
 *
 * @return {object} all user profiles on the database
 */
export const getUserProfiles = async () => {
  const { data } = await axiosWithAuth().get("/user");

  return data;
};

export const updateUserProfile = async (user_id, userProfile) => {
  const { data } = await axiosWithAuth().put(
    `/user/update/${user_id}`,
    userProfile
  );

  return data;
};

export const updateUserImage = async (user_id, userImage) => {
  let formData = new FormData();
  formData.append("file", userImage);

  const { data } = await axiosWithAuth().post(
    `/user/image-upload/${user_id}`,
    formData
  );

  return data;
};
