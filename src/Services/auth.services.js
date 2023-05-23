import axios from 'axios';
import {uri} from './config.js';

const signin = data => {
  console.log(data);
  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
  };
  return axios.post(`${uri}/recyclapp/auth/signin`, JSON.stringify(data), {
    headers,
  });
};

const signup = data => {
  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
  };
  return axios.post(
    `${uri}/recyclapp/auth/natural/signup`,
    JSON.stringify(data),
    headers,
  );
};

const restore = data => {
  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
  };

  return axios.post(
    `${uri}/recyclapp/auth/forgot`,
    JSON.stringify(data),
    headers,
  );
};

export {signin, signup, restore};
