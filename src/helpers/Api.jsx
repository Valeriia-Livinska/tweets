import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
const limitPerPage = 8;

export const fetchUsers = async (page) => {
  const res = await axios.get(`/users?page=${page}&limit=${limitPerPage}`);
  return res.data;
};

export const updateIsFollowing = async (id, isFollowing, followers) => {
  if (!isFollowing) {
    followers = followers + 1;
  } else {
    followers = followers - 1;
  }

  const res = await axios.put(`/users/${id}`, {
    isFollowing: !isFollowing,
    followers: followers,
  });
  return res.data;
};
