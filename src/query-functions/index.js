import axiosWithAuth from "../utils/axiosWithAuth";

// auth functions
export const access = async (userInfo, type) => {
  const { data } = await axiosWithAuth().post(`/auth/${type}`, userInfo);

  return data;
};

// user functions
export const getUserProfile = async (user_id) => {
  const { data } = await axiosWithAuth().get(`/user/${user_id}`);

  return data;
};

export const updateUserProfile = async (user_id, userProfile) => {
  const { data } = await axiosWithAuth().put(
    `/user/update/${user_id}`,
    userProfile
  );

  console.log(data, "here i am");

  return data;
};
