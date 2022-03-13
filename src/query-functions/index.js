import axiosWithAuth from "../utils/axiosWithAuth";

export const access = async (userInfo, type) => {
  const { data } = await axiosWithAuth().post(`/auth/${type}`, userInfo);

  return data;
};

// user functions
export const getUserProfile = async (user_id) => {
  const { data } = await axiosWithAuth().get(`/user/${user_id}`);

  return data;
};
