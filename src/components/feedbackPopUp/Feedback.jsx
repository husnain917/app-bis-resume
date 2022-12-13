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
  Text,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import Rating from '../rating/Rating';

const Feedback = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const onRatingHandler = (value) => {
    console.log('Rating Value:', value);
  };
  return (
    <div>
      <Button onClick={onOpen} mt="75px" ml="100px">
        Feedback
      </Button>

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
            <button className="feedbackBtn">Rate</button>
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
