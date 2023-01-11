import React, { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, doc, setDoc } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { db } from '../../../config/firebase';
import { useDispatch } from 'react-redux';
import { feedbackAction } from '../../../store/actions/feedbackAction';
const SaveTempData = () => {
  let resumeData = useSelector((store) => store?.editorReducer?.resumeData);
  const dispatch = useDispatch();
  const [uid, setUid] = React.useState('');
  const toast = useToast();
  const resumeRef = collection(db, 'templateData');
  const auth = getAuth();
  const feedBackGetHandler = () => {
    dispatch(feedbackAction(true));
  };
  const onClickHandler = () => {
    if (uid) {
      setDoc(doc(resumeRef, uid), {
        resumeData,
        by: uid,
      })
        .then((res) => {
          toast({
            title: 'Success',
            description: 'Your Data is saved',
            status: 'success',
            duration: 2000,
            isClosable: true,
            position: 'top-right',
          });
          feedBackGetHandler();
        })
        .catch((e) => {
          toast({
            title: 'Error',
            description: 'Something Went Wrong Try Again Later',
            status: 'error',
            duration: 2000,
            isClosable: true,
            position: 'top-right',
          });
        });
    }
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setUid(user?.uid);
      }
    });
  }, [auth]);

  return {
    onClickHandler,
  };
};

export default SaveTempData;
