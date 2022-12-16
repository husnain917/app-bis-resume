import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user.uid) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  });
  return user;
};
export default useAuth;
export const getAuthData = async () => {
  const user = getAuth();
  let uid = null;
  await onAuthStateChanged(user, (data) => {
    if (data.uid) {
      uid = data.uid;
    } else {
      uid = data.uid;
    }
  });
  return uid;
};
