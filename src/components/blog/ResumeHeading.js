import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export default function ResumeHeading(props) {
    return (
        <>
            <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                padding={'10px 0px'}
            >
                <Box
                    backgroundColor={'#000000'}
                    height={'1px'}
                    width={'15%'}
                ></Box>
                <Box
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    border={'1px solid #000000'}
                    width={'50px'}
                >
                    <Text
                        color={'#000000'}
                        fontSize={'16px'}
                        fontWeight={'medium'}
                        padding={'10px 0px'}
                    >
                        {props?.text}
                    </Text>
                </Box>
                <Box
                    backgroundColor={'#000000'}
                    height={'1px'}
                    width={'15%'}
                ></Box>
            </Box>
        </>
    )
}
