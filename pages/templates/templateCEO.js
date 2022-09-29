import React from 'react'
import { Box } from '@chakra-ui/react'
import Profile from '../../src/components/template1/Profile'
import { Text } from '../../src/components/template1'
import { useSelector } from 'react-redux'

export default function templateCEO() {
    const resumeData = (store => store.editorReducer.resumeData);

    return (
        <Box bg='#f6f5f0' minHeight="fit-content" minW="fit-content" px={90} py={50} >
            <Box maxW="1100px" minW="1100px" display="flex" style={{ height: '100%' }}>
                <Box bg='#1c2125' width="270px" padding="0 25px" style={{ minHeight: '100%' }}>
                    <Box height={270} py={10}>
                        <Box border="7px solid #ffffff" width={220} height={220} borderRadius="100%">
                        </Box>
                    </Box>
                    <Box>
                        <Text
                            value={resumeData?.contact?.heading}
                            placeholder="Contact"
                            customclass={"contact-f-heading-title"}
                            path={"contact.heading"}
                            editable={false}
                        />
                        <Text
                            value={resumeData?.objective?.body}
                            placeholder="Summary Detail"
                            customclass={`${style.managerFName} ${style.managerTemplateTextBold}`}
                            path={"objective.body"}
                        />
                    </Box>
                </Box>
                <Box bg='#ffffff' width="830px" padding='80px 30px' style={{ minHeight: '100%' }}>
                    <Profile cId='ceo' />
                </Box>
            </Box>
        </Box>
    )
}

