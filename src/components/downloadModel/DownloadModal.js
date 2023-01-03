import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    useDisclosure,
    Button,
    Text,
    Link,
    Box
} from '@chakra-ui/react'
import React from "react";
import {
    DownloadIcon,
} from '@chakra-ui/icons';

export default function DownloadModal({
    downloadPDF,
}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    // Close Model Handler Function
    const closeModel = () => {
        onClose();
        downloadPDF();
    }
    return (
        <>
            <Button
                onClick={onOpen}
                bgColor="transparent"
                color="white"
                _hover={{
                    backgroundColor: 'transparent',

                    color: '#313C4E',
                    transition: '0.4s',
                }}
                fontSize={{ base: '12px', sm: '14px', md: '16px' }}
            >
                <DownloadIcon mr="5px" />
                Download
            </Button>

            <Modal
                blockScrollOnMount={false}
                isOpen={isOpen}
                onClose={onClose}
                size={'md'}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalBody
                        textAlign={'center'}
                        className={'noselectText'}
                    >
                        <Text
                            margin={'30px 0px 10px 0px'}
                            color={'#000000'}
                            fontSize={'20px'}
                            fontWeight={'bold'}
                            fontFamily={`EuclidCircularB-Bold', sans-serif`}
                        >
                            Are you download template?
                        </Text>
                        <Text
                            fontSize={'14px'}
                            fontFamily={`EuclidCircularB-Bold', sans-serif`}
                        >
                            You are trying to download a resume that uses &nbsp;
                            <Link
                                href='/'
                                _hover={{
                                    color: '#1890ff !important',
                                    textDecoration: 'underline',
                                }}
                                color={'#1890ff'}
                                boxShadow='none !important'
                            >
                                Bisresume
                            </Link>
                            &nbsp;features. Do you like this?
                        </Text>
                        {/* Buttons */}
                        <Box
                            margin={'20px 0px 0px 0px'}
                        >
                            <Button
                                bg="#2CACD5"
                                colorScheme="#2CACD5"
                                borderRadius="20px"
                                fontWeight="bold"
                                color="white"
                                rightIcon={<DownloadIcon color="white" fontWeight="bold" />}
                                margin={'0px 10px 0px 0px'}
                                _hover={{
                                    bg: '#50bce0',
                                    boxShadow: '0px -1px 4px 4px #8fd1e7',
                                    borderRadius: '6px'
                                }}
                                onClick={closeModel}
                            >
                                PDF
                            </Button>
                            <Button
                                bg="#2CACD5"
                                colorScheme="#2CACD5"
                                borderRadius="20px"
                                fontWeight="bold"
                                color="white"
                                rightIcon={<DownloadIcon color="white" fontWeight="bold" />}
                                margin={'0px 0px 0px 10px'}
                                _hover={{
                                    bg: '#50bce0',
                                    boxShadow: '0px -1px 4px 4px #8fd1e7',
                                    borderRadius: '6px'
                                }}
                            >
                                DOC
                            </Button>
                        </Box>
                    </ModalBody>

                    <ModalFooter>
                        <Link
                            onClick={onClose}
                            boxShadow='none'
                            textDecoration={'underline'}
                            bg={'#fff'}
                            _hover={{
                                bg: '#fff',
                                color: '#1890ff',
                                textDecoration: 'underline',
                            }}
                            color={'#9b9b9b'}
                            fontSize={'13px'}
                        >
                            Maybe Later
                        </Link>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}