import { Box, Flex, HStack, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { Tooltip } from 'react-tippy';
import Link from "next/link";
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
import styles from "../../src/components/graphicDesigner/graphicDesigner.module.css";

const graphicDesigner = (props) => {
  const { resumeData } = props;
  console.log('resumeData:', resumeData);
  return (
    <>
      <Link href={"/templates"}>
        <div className={styles.swapCont}>
          <Tooltip title="Change Template" arrow distance={20}>
            <div className={styles.swap}>
              <img src="/icons/swap.png" />
            </div>
          </Tooltip>
        </div>
      </Link>
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
          display={'flex'}
          justifyContent={'space-between'}
        >
          <Box maxW={'50%'} minW={'50%'}>
            <Box minH={250} maxW={250} minW={250} border={'5px solid black'} ml={10}>
              <Image
                boxSize="267px"
                src="/profileDigi.png"
                alt="Profile"
                position={'relative'}
                top={'25px'}
                right={'45px'}
              />
            </Box>

            <Box
              minW={250}
              maxW={250}
              bg={'#1C4532'}
              h={35}
              margin={'90px 0px 0px 0px'}
            >
              <Box
                minW={250}
                maxW={250}
                bg={'#1C4532'}
                h={'40px'}
                mt={'40px'}
                pl={2}
                position={'relative'}
                bottom={'20px'}
                right={'15px'}
                boxShadow={'dark-lg'}
              >
                <Text
                color={'white'}
                fontSize={20}
                fontWeight="600"
                pb={0.7}
                pl={2}
                letterSpacing={3}
                pt={1}
                textAlign={'center'}
              >
                PROFILE
              </Text>
              </Box>
            </Box>
            &nbsp;
            <About />

            <Box
              minW={250}
              maxW={250}
              bg={'#1C4532'}
              h={35}
            >
              <Box
                minW={250}
                maxW={250}
                bg={'#1C4532'}
                h={'40px'}
                mt={'40px'}
                pl={2}
                position={'relative'}
                bottom={'20px'}
                right={'15px'}
                boxShadow={'dark-lg'}
              >
                <Text
                color={'white'}
                fontSize={20}
                fontWeight="600"
                pb={0.7}
                pl={2}
                letterSpacing={3}
                pt={1}
                textAlign={'center'}
              >
                EXPERIENCE
              </Text>
              </Box>
            </Box>
            &nbsp;
            <Box
              minW={310}
              maxW={310}
            >
              <Experience
                data={
                  resumeData?.work?.items.length
                    ? [...resumeData?.work?.items]
                    : [...sampleData?.data?.work?.items]
                }
              />
            </Box>
          </Box>
          <Box maxW={'49%'} minW={'49%'}>
            <Profile />
            <PersonalInfo />
            <Box
              minW={250}
              maxW={250}
              bg={'#1C4532'}
              h={35}
              margin={'85px 0px 0px 0px'}
            >
              <Box
                minW={250}
                maxW={250}
                bg={'#1C4532'}
                h={'40px'}
                mt={'40px'}
                pl={2}
                position={'relative'}
                bottom={'20px'}
                right={'15px'}
                boxShadow={'dark-lg'}
              >
                <Text
                  color={'white'}
                  fontSize={20}
                  fontWeight="600"
                  pb={0.7}
                  pl={2}
                  letterSpacing={3}
                  pt={1}
                  textAlign={'center'}
                >
                  EDUCATION
                </Text>
              </Box>
            </Box>
            &nbsp;
            <Box
              minW={330}
              maxW={330}
            >
              <Education
                data={
                  resumeData?.education?.items.length
                    ? [...resumeData?.education?.items]
                    : [...sampleData?.data?.education?.items]
                }
              />
            </Box>

            <Box
              minW={250}
              maxW={250}
              bg={'#1C4532'}
              h={35}
            >
              <Box
                minW={250}
                maxW={250}
                bg={'#1C4532'}
                h={'40px'}
                mt={'40px'}
                pl={2}
                position={'relative'}
                bottom={'20px'}
                right={'15px'}
                boxShadow={'dark-lg'}
              >
                <Text
                color={'white'}
                fontSize={20}
                fontWeight="600"
                pb={0.7}
                pl={2}
                letterSpacing={3}
                pt={1}
                textAlign={'center'}
              >
                SKILLSET
              </Text>
              </Box>
            </Box>
            &nbsp;
            <Box
              minW={330}
              maxW={330}
            >
              <Personal
                data={
                  resumeData?.skills?.items?.length
                    ? [...resumeData?.skills?.items]
                    : [...sampleData?.data?.skills?.items]
                }
              />
            </Box>
            <Box
              minW={250}
              maxW={250}
              bg={'#1C4532'}
              h={35}
            >
              <Box
                minW={250}
                maxW={250}
                bg={'#1C4532'}
                h={'40px'}
                mt={'40px'}
                pl={2}
                position={'relative'}
                bottom={'20px'}
                right={'15px'}
                boxShadow={'dark-lg'}
              >
                <Text
                color={'white'}
                fontSize={20}
                fontWeight="600"
                pb={0.7}
                pl={2}
                letterSpacing={3}
                pt={1}
                textAlign={'center'}
              >
                LANGUAGES
              </Text>
              </Box>
            </Box>
            &nbsp;
            <Box
              minW={330}
              maxW={330}
            >
              <Languages
                data={
                  resumeData?.languages?.items
                    ? [...resumeData?.languages?.items]
                    : [...sampleData?.data?.languages?.items]
                }
              />
            </Box>
          </Box>
        </HStack>
      </Flex>
    </>
  );
};
const mapStateToProps = (store) => ({
  theme: store.editorReducer.theme,
  resumeData: store.editorReducer.resumeData,
  updater: store.editorReducer.updater,
});

export default connect(mapStateToProps, { onBlurField })(graphicDesigner);
