import React from 'react'
import { Box } from '@chakra-ui/react'
import Profile from '../../src/components/template1/Profile'
import { Text } from '../../src/components/template1'

export default function templateCEO() {

    return (
        <Box bg='#f6f5f0' minHeight="fit-content" minW="fit-content" px={90} py={50} >
            <Box maxW="1100px" minW="1100px" display="flex">
                <Box bg='#1c2125' width="300px" padding="0 40px">
                    <Box height={300} py={10}>
                        <Box border="7px solid #ffffff" width={220} height={220} borderRadius="100%">
                        </Box>
                        <Box>
                            <p>Contact</p>
                                
                        </Box>
                    </Box>
                </Box>
                <Box bg='#ffffff' width="800px" padding='80px 30px'>
                    <Profile cId='ceo' />
                </Box>
            </Box>
        </Box>
    )
}

