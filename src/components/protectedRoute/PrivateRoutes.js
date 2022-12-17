import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
export function privateRoutes(Handler) {
  return function PrivateRoutes(props) {
    const auth = getAuth();
    const router = useRouter();
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          router.replace('/');
          setLoader(false);
          return;
        }
      });
    });

    return <Handler {...props} auth={auth} />;
  };
}
