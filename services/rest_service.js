import fetch from 'isomorphic-unfetch';

const { frontend_url: FRONTEND_URL } = process.env;

export const loginCall = async (url, data, state) => {
  const response = await fetch(`${FRONTEND_URL}${url}`, {
    credentials: 'include',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'x-state': state,
    },
    body: JSON.stringify({ data }),
  });
  const res = await response.json();
  return res;
};

export const post = async (url, data) => {
  const response = await fetch(`${FRONTEND_URL}/post`, {
    credentials: 'include',
    headers: {
      path: url,
      'Content-Type': 'application/json',
    },
    method: 'post',
    body: data,
  });
  const res = await response.json();
  return res;
};

export const get = async (url) => {
  const response = await fetch(`${FRONTEND_URL}/get`, {
    credentials: 'include',
    headers: {
      path: url,
    },
    method: 'get',
  });
  const res = await response.json();
  return res;
};
