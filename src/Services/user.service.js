import axios from 'axios';
import {uri} from './config';

const getUserData = token => {
  const headers = {
    'Content-Type': 'aplication/json; charset=utf-8',
    Authorization: `Bearer ${token}`,
  };

  return axios.get(`${uri}/recyclapp/user`, {
    headers,
  });
};

const updateAddress = (data, id, token) => {
  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: `Bearer ${token}`,
  };
  return axios.put(`${uri}/recyclapp/address/${id}`, JSON.stringify(data), {
    headers,
  });
};

const updateUserData = (data, token) => {
  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: `Bearer ${token}`,
  };

  return axios.patch(`${uri}/recyclapp/users`, JSON.stringify({data: data}), {
    headers,
  });
};

const createAddress = (data, token) => {
  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: `Bearer ` + token,
  };
  return axios.post(`${uri}/recyclapp/address`, JSON.stringify(data), {
    headers,
  });
};
export {updateAddress, createAddress, getUserData, updateUserData};
