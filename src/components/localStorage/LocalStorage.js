const storeToken = (value) => {
  if (value) {
    localStorage.setItem('access_token', value);
  }
};

const getToken = () => {
  let access_token = localStorage.getItem('access_token');
  return { access_token };
};
const removeToken = () => {
  localStorage.removeItem('access_token');
};
const userToken = (value) => {
  if (value) {
    localStorage.setItem('user_access', JSON.stringify(value));
  }
}
const getUserToken = () => {
  let user_token = JSON.parse(localStorage.getItem('user_access'));
  return { user_token };
};
const removeUserToken = () => {
  localStorage.removeItem('user_access');
};
export { storeToken, getToken, removeToken, userToken, getUserToken, removeUserToken };
