import axiosWithAuth from "../utils/axiosWithAuth";

export const access = async (userInfo, type) => {
  const { data } = await axiosWithAuth().post(`/auth/${type}`, userInfo);

  return data;
};

// user client crud functions
export const getUserClients = async (user_id) => {
  const { data } = await axiosWithAuth().get(`/client/getAll/${user_id}`);

  return data;
};
export const addClient = async (newClient) => {
  const { data } = await axiosWithAuth().post(`/client/add`, newClient);

  return data;
};

// user employee crud functions

export const getUserEmployees = async (user_id) => {
  const { data } = await axiosWithAuth().get(`/employee/getAll/${user_id}`);

  return data;
};

export const addEmployee = async (newEmployee) => {
  const { data } = await axiosWithAuth().post(`/employee/add`, newEmployee);

  return data;
};
