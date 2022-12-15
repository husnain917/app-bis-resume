import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
  useBreakpointValue,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Rating from '../rating/Rating';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { collection, doc, getDoc, setDoc } from '@firebase/firestore';
import { db } from '../../../config/firebase';
const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [disable, setDisable] = useState(false);
  const [id, setId] = useState('');
  const toast = useToast();
  const feedbackRef = collection(db, 'feedback');
  var auth = getAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const onRatingHandler = (value) => {
    setRating(value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setDisable(true);
    if (id) {
      const docRef = setDoc(doc(feedbackRef, id), {
        rating: rating,
        by: id,
      })
        .then((res) => {
          onClose();
          setDisable(false);
          toast({
            title: 'Success',
            description: 'Thank You For your Feedback',
            status: 'success',
            duration: 2000,
            isClosable: true,
            position: 'top-right',
          });
        })
        .catch((e) => {
          onClose();
          toast({
            title: 'Error',
            description: 'Something Went Wrong please Try Again later',
            status: 'error',
            duration: 2000,
            isClosable: true,
            position: 'top-right',
          });
        });
    }
  };
  const feedBackHandler = async (uid) => {
    console.log('id:', id);
    const docRef = doc(db, 'feedback', uid);
    const getDocData = await getDoc(docRef);
    if (!getDocData.data()) {
      setTimeout(() => {
        onOpen();
      }, 5000);
    } else {
      clearTimeout();
    }
  };
  useEffect(() => {
    //  CheckUser;
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setId(user.uid);
        feedBackHandler(user.uid);
      } else {
        console.log('user is not found');
      }
    });
  }, []);
  return (
    <div>
      {/* <Button onClick={onOpen} mt="75px" ml="100px">
        Feedback
      </Button> */}

      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: 'sm', md: 'xl' }}
      >
        <ModalOverlay />
        <ModalContent borderRadius={'20px'}>
          <ModalHeader display={'flex'} justifyContent="center">
            <Image
              src="/feedback4.png"
              alt="FeedBack Image"
              mt={'-70px'}
              width={{ base: '150px', md: '250px' }}
              height={{ base: '150px', md: '250px' }}
              borderRadius={'full'}
            />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display={'flex'}
            justifyContent="center"
            flexDirection={'column'}
            alignItems="center"
          >
            <Text
              fontSize={{ base: '20px', md: '25px' }}
              color="blackAlpha.800"
              fontWeight={700}
              textAlign="center"
            >
              Your Opinion matters to us!
            </Text>
            <Text
              fontSize={{ base: '13px', md: '15px' }}
              color="blackAlpha.800"
              textAlign={'center'}
              fontWeight={500}
            >
              Give us a quick review and help us improve?
            </Text>
            <Rating
              activeColor={'#006772'}
              size={useBreakpointValue({ lg: 50, md: 40, sm: 30 })}
              ratingChanged={onRatingHandler}
            />
          </ModalBody>

          <ModalFooter display={'flex'} justifyContent="center">
            <button
              className="feedbackBtn"
              onClick={onSubmitHandler}
              disabled={disable}
            >
              {disable ? <Spinner color="#fff" size={'sm'} /> : 'Rate'}
            </button>
            <button onClick={onClose} className="feedbackBtn2">
              Cancel
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Feedback;
