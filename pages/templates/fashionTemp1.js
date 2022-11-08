import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { connect } from 'react-redux';
import { onBlurField } from '../../store/actions/builderAction';
import { BsFillPersonFill, BsLayersFill } from 'react-icons/bs';
import { IoLanguageSharp } from 'react-icons/io5';
import { MdCastForEducation, MdEmail } from 'react-icons/md';
import FashTemp1Experience from '../../src/components/fashionTemp1/FashTemp1Experience';
import FashTemp1Reference from '../../src/components/fashionTemp1/FashTemp1Reference';
import FashTemp1Personal from '../../src/components/fashionTemp1/FashTemp1Personal';
import FashTemp1sProfile from '../../src/components/fashionTemp1/FashTemp1Profile';
import FashTemp1About from '../../src/components/fashionTemp1/FashTemp1About';
import FashTemp1Lang from '../../src/components/fashionTemp1/FashTemp1Lang';
import FashTemp1PersonalInfo from '../../src/components/fashionTemp1/FashTemp1PersonalInfo';
import FashTemp1Edu from '../../src/components/fashionTemp1/FashTemp1Edu';
import style from '../../styles/templates/template1.module.scss';
import Link from 'next/link';
import Style from '../../src/components/fashionTemp1/fashionTemp1.module.css';
import { Tooltip } from 'react-tippy';
import Education1 from '../../src/components/commonSection/Education1';
const fashionTemp1 = (props) => {
  const { resumeData } = props;
  console.log('resumeData:', resumeData);
  return (
    <div className={style.main}>
      <Link href={'/templates'}>
        <div style={{ position: 'fixed', top: '30px', right: '30px' }}>
          <Tooltip title="Change Template" arrow distance={20}>
            <div className={style.swap}>
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
        >
          <Box maxW={336} minW={336}>
            <FashTemp1sProfile />
            <HStack minW={250} maxW={250} bg={'#3498DB'} h={35} mt={10} pl={2}>
              <BsFillPersonFill color="white" size={20} />
              <Text
                color={'white'}
                fontSize={20}
                fontWeight="600"
                pb={0.7}
                pl={2}
                letterSpacing={3}
              >
                ABOUT ME
              </Text>
            </HStack>
            &nbsp;
            <FashTemp1About />
            <HStack minW={250} maxW={250} bg={'#3498DB'} h={35} mt={5} pl={2}>
              <BsFillPersonFill color="white" size={20} />
              <Text
                color={'white'}
                fontSize={20}
                fontWeight="600"
                pb={0.7}
                pl={2}
                letterSpacing={3}
              >
                PERSONAL
              </Text>
            </HStack>
            &nbsp;
            <FashTemp1Personal
              data={
                resumeData?.skills?.items?.length
                  ? [...resumeData?.skills?.items]
                  : [...sampleData?.data?.skills?.items]
              }
            />
            <HStack minW={250} maxW={250} bg={'#3498DB'} h={35} mt={5} pl={2}>
              <IoLanguageSharp color="white" size={20} />
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
            <FashTemp1Lang
              data={
                resumeData?.languages?.items
                  ? [...resumeData?.languages?.items]
                  : [...sampleData?.data?.languages?.items]
              }
            />
          </Box>
          <Box maxW={406} minW={406}>
            <FashTemp1PersonalInfo />
            <HStack minW={400} maxW={400} bg={'#3498DB'} h={35} mt={61} pl={2}>
              <MdCastForEducation color="white" size={20} />
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
            <Education1
              data={
                resumeData?.education?.items.length
                  ? [...resumeData?.education?.items]
                  : [...sampleData?.data?.education?.items]
              }
              date={true}
              summary={true}
              degree={true}
              institution={true}
              degree_placeholder="Study Program"
              degreeStyle={Style.date}
              dateStyle={Style.date}
              institutionStyle={Style.date}
              summaryStyle={Style.profileText}
              direction="row"
            />
            <HStack minW={400} maxW={400} bg={'#3498DB'} h={35} mt={5} pl={2}>
              <BsLayersFill color="white" size={20} />
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
            <FashTemp1Experience
              data={
                resumeData?.work?.items.length
                  ? [...resumeData?.work?.items]
                  : [...sampleData?.data?.work?.items]
              }
            />
            <HStack minW={400} maxW={400} bg={'#3498DB'} h={35} mt={5} pl={2}>
              <MdEmail color="white" size={20} />
              <Text
                color={'white'}
                fontSize={20}
                fontWeight="600"
                pb={0.7}
                pl={2}
                letterSpacing={3}
              >
                REFERENCE
              </Text>
            </HStack>
            &nbsp;
            <FashTemp1Reference
              data={
                resumeData?.references?.items.length
                  ? [...resumeData?.references?.items]
                  : [...sampleData?.data?.references?.items]
              }
            />
          </Box>
        </HStack>
      </Flex>
    </div>
  );
};
const mapStateToProps = (store) => ({
  theme: store.editorReducer.theme,
  resumeData: store.editorReducer.resumeData,
  updater: store.editorReducer.updater,
});

export default connect(mapStateToProps, { onBlurField })(fashionTemp1);
