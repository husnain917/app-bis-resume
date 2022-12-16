import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Router, { useRouter } from 'next/router';
import { Spinner } from '@chakra-ui/react';

const WithPrivate = (Component) => {
  //   const router = useRouter();

  const auth = getAuth();
  const [uid, setUid] = useState('');
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
      } else {
        setUid(null);
        return;
      }
    });
  });
  //   if (uid) {
  //     return <Component {...props} />;
  //   } else {

  //     return;
  //   }
};

export default WithPrivate;
