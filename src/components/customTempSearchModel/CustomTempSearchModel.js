import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    useDisclosure,
    Button,
    Box,
    Link,
    Image
} from '@chakra-ui/react'
import { FaSearchPlus } from "react-icons/fa";
import CommonButton from '../commonButton/CommonButton';
import { CloseIcon } from "@chakra-ui/icons";

export default function CustomTempSearchModel({
    href,
    src,
    alt,
}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Box
                className="tempSearchIcon"
                as='button'
                onClick={onOpen}
            >
                <FaSearchPlus size={16} />
            </Box>

            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} size={'2xl'}>
                <ModalOverlay />
                <ModalContent
                    bg={'none'}
                    boxShadow={'none'}
                >
                    <ModalHeader
                        bg={'#fff'}
                        width={['100%', '100%', '75%', '55%', '38%']}
                        ml={['0px', '0px', '48px', '55px', '65px']}
                        borderRadius={'50px 50px'}
                        display={'flex'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        position={'fixed'}
                        top={'30px'}
                        p={'12px 30px'}
                    >
                        <Link
                            href={href ?? '#'}
                            _hover={{
                                textDecoration: 'none'
                            }}
                        >
                            <CommonButton
                                title={'Customize Now'}
                                backgroundColor={'#2CACD5'}
                                color={'#fff'}
                                padding={'5px 20px 5px 20px'}
                            />
                        </Link>
                        <Button
                            borderRadius={'50px 50px'}
                            padding={'10px 0px'}
                            bg={'gray.600'}
                            color={'#fff'}
                            _hover={{
                                color: '#00c8aa',
                                transition: '0.5s'
                            }}
                            onClick={onClose}
                        >
                            <CloseIcon />
                        </Button>
                    </ModalHeader>
                    <ModalBody
                        mt={'60px'}
                        bg={'#fff'}
                        display={'flex'}
                        justifyContent={'center'}
                        borderRadius={'10px 10px'}
                    >
                        <Image
                            src={src ?? ''}
                            alt={alt ?? ''}
                            boxSize={'680px'}
                        />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
