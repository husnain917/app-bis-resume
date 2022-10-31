import { Box, Flex, HStack, Text,Image } from '@chakra-ui/react';
import React from 'react';

import { connect } from 'react-redux';
import { onBlurField } from '../../store/actions/builderAction';
import { BsFillPersonFill, BsLayersFill } from 'react-icons/bs';
import { IoLanguageSharp } from 'react-icons/io5';
import { MdCastForEducation, MdEmail } from 'react-icons/md';
import Experience from '../../src/components/graphicDesigner/Experience';
import Reference from '../../src/components/graphicDesigner/Reference';
import Personal from '../../src/components/graphicDesigner/Personal';
import Profile from '../../src/components/graphicDesigner/Profile';
import About from '../../src/components/graphicDesigner/About';
import Languages from '../../src/components/graphicDesigner/Languages';
import PersonalInfo from '../../src/components/graphicDesigner/PersonalInfo';
import Education from '../../src/components/graphicDesigner/Education';

const graphicDesigner = (props) => {
  const { resumeData } = props;
  console.log('resumeData:', resumeData);
  return (
    <Flex
      justifyContent={{ base: 'none', md: 'center' }}
      bg={{ md: 'none', lg: 'blackAlpha.100' }}
    >
      <HStack
        minW={830}
        maxW={830}
        h={'full'}
        alignItems="flex-start"
        borderRadius={6}
        bg={'#fff'}
        my={10}
        py={8}
        px={10}
      >
        <Box maxW={'48%'} minW={'48%'} >
          <Box  minH={250} maxW={250} minW={250} borderRadius={'none'} >
            <Image
              boxSize="300px"
              src="/profileDigi.png"
              alt="Profile"
            />
          </Box>

          <HStack minW={250} maxW={250} bg={'#2e4229'} h={35} mt={10} pl={2}>
            <Text
              color={'white'}
              fontSize={20}
              fontWeight="600"
              pb={0.7}
              pl={2}
              letterSpacing={3}
            >
              Profile
            </Text>
          </HStack>
          &nbsp;
          <About />
          
          <HStack minW={250} maxW={250} bg={'#2e4229'} h={35} mt={5} pl={2}>
            <Text
              color={'white'}
              fontSize={20}
              fontWeight="600"
              pb={0.7}
              pl={2}
              letterSpacing={3}
            >
              EXPERIENCE
            </Text>
          </HStack>
          &nbsp;
          <Experience
            data={
              resumeData?.work?.items.length
                ? [...resumeData?.work?.items]
                : [...sampleData?.data?.work?.items]
            }
          />

        </Box>
        <Box maxW={'48%'} minW={'48%'}>
          <Profile />
          <PersonalInfo />
          <HStack minW={250} maxW={250} bg={'#2e4229'} h={35} mt={61} pl={2}>
            <Text
              color={'white'}
              fontSize={20}
              fontWeight="600"
              pb={0.7}
              pl={2}
              letterSpacing={3}
            >
              EDUCATION
            </Text>
          </HStack>
          &nbsp;
          <Education
            data={
              resumeData?.education?.items.length
                ? [...resumeData?.education?.items]
                : [...sampleData?.data?.education?.items]
            }
          />

          <HStack minW={250} maxW={250} bg={'#2e4229'} h={35} mt={5} pl={2}>
            <Text
              color={'white'}
              fontSize={20}
              fontWeight="600"
              pb={0.7}
              pl={2}
              letterSpacing={3}
            >
              SKILLSET
            </Text>
          </HStack>
          &nbsp;
          <Personal
            data={
              resumeData?.skills?.items?.length
                ? [...resumeData?.skills?.items]
                : [...sampleData?.data?.skills?.items]
            }
          />
          <HStack minW={250} maxW={250} bg={'#2e4229'} h={35} mt={5} pl={2}>
            <Text
              color={'white'}
              fontSize={20}
              fontWeight="600"
              pb={0.7}
              pl={2}
              letterSpacing={3}
            >
              LANGUAGES
            </Text>
          </HStack>
          &nbsp;
          <Languages
            data={
              resumeData?.languages?.items
                ? [...resumeData?.languages?.items]
                : [...sampleData?.data?.languages?.items]
            }
          />


        </Box>
      </HStack>
    </Flex>
  );
};
const mapStateToProps = (store) => ({
  theme: store.editorReducer.theme,
  resumeData: store.editorReducer.resumeData,
  updater: store.editorReducer.updater,
});

export default connect(mapStateToProps, { onBlurField })(graphicDesigner);
