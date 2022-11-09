import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { connect } from 'react-redux';
import { onBlurField } from '../../store/actions/builderAction';
import { BsFillPersonFill, BsLayersFill } from 'react-icons/bs';
import { IoLanguageSharp } from 'react-icons/io5';
import { MdCastForEducation, MdEmail } from 'react-icons/md';
import FashTemp1sProfile from '../../src/components/fashionTemp1/FashTemp1Profile';
import FashTemp1PersonalInfo from '../../src/components/fashionTemp1/FashTemp1PersonalInfo';
import style from '../../styles/templates/template1.module.scss';
import Link from 'next/link';
import Style from '../../src/components/fashionTemp1/fashionTemp1.module.css';
import { Tooltip } from 'react-tippy';
import WorkExperience from '../../src/components/commonSection/WorkExperience';
import Reference from '../../src/components/commonSection/Reference';
import About from '../../src/components/commonSection/About';
import Language from '../../src/components/commonSection/Language';
import Heading from '../../src/components/commonSection/Heading';
import Education from '../../src/components/commonSection/Education';
import Skill from '../../src/components/commonSection/Skill';
import Name from '../../src/components/commonSection/Name';
import Profession from '../../src/components/commonSection/Profession';
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
        overflow="auto"
        flexDir={'column'}
        alignItems={{ sm: 'none', md: 'center' }}
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
            <Name
              direction="column"
              FName={true}
              SName={true}
              FNameStyle={Style.fashionName}
              SNameStyle={Style.fashionName}
            />
            <Profession professionStyle={Style.ProfessionFashion} />
            <Heading
              title={'ABOUT ME'}
              headBg={'#3498DB'}
              icon={(props) => (
                <BsFillPersonFill {...props} size={20} color={'#fff'} />
              )}
              color={'white'}
              fontSize={20}
              fontWeight="600"
              pb={0.7}
              pl={2}
              letterSpacing={3}
              minW={250}
              maxW={250}
            />
            &nbsp;
            <About aboutStyle={Style.profileText} />
            <Heading
              title={'PERSONAL'}
              headBg={'#3498DB'}
              icon={(props) => (
                <BsFillPersonFill {...props} size={20} color={'#fff'} />
              )}
              color={'white'}
              fontSize={20}
              fontWeight="600"
              pb={0.7}
              pl={2}
              letterSpacing={3}
              minW={250}
              maxW={250}
            />
            &nbsp;
            <Skill
              data={
                resumeData?.skills?.items?.length
                  ? [...resumeData?.skills?.items]
                  : [...sampleData?.data?.skills?.items]
              }
              skillStyle={Style.personalText}
            />
            <Heading
              title={'LANGUAGES'}
              headBg={'#3498DB'}
              icon={(props) => (
                <IoLanguageSharp {...props} size={20} color={'#fff'} />
              )}
              color={'white'}
              fontSize={20}
              fontWeight="600"
              pb={0.7}
              pl={2}
              letterSpacing={3}
              minW={250}
              maxW={250}
            />
            &nbsp;
            <Language
              data={
                resumeData?.languages?.items
                  ? [...resumeData?.languages?.items]
                  : [...sampleData?.data?.languages?.items]
              }
              langStyle={Style.langText}
            />
          </Box>
          <Box maxW={406} minW={406}>
            <FashTemp1PersonalInfo />
            <Heading
              title={'EDUCATION'}
              headBg={'#3498DB'}
              icon={(props) => (
                <MdCastForEducation {...props} size={20} color={'#fff'} />
              )}
              color={'white'}
              fontSize={20}
              fontWeight="600"
              pb={0.7}
              pl={2}
              letterSpacing={3}
              minW={400}
              maxW={400}
            />
            &nbsp;
            <Education
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
              dateDirection="row"
            />
            <Heading
              title={'EXPERIENCE'}
              headBg={'#3498DB'}
              icon={(props) => (
                <BsLayersFill {...props} size={20} color={'#fff'} />
              )}
              color={'white'}
              fontSize={20}
              fontWeight="600"
              pb={0.7}
              pl={2}
              letterSpacing={3}
              minW={400}
              maxW={400}
            />
            &nbsp;
            <WorkExperience
              data={
                resumeData?.work?.items.length
                  ? [...resumeData?.work?.items]
                  : [...sampleData?.data?.work?.items]
              }
              company={true}
              date={true}
              position={true}
              summary={true}
              dateStyle={Style.date}
              companyStyle={Style.date}
              positionStyle={Style.date}
              summaryStyle={Style.profileText}
              direction="row"
            />
            <Heading
              title={'REFERENCE'}
              headBg={'#3498DB'}
              icon={(props) => <MdEmail {...props} size={20} color={'#fff'} />}
              color={'white'}
              fontSize={20}
              fontWeight="600"
              pb={0.7}
              pl={2}
              letterSpacing={3}
              minW={400}
              maxW={400}
            />
            &nbsp;
            <Reference
              data={
                resumeData?.references?.items.length
                  ? [...resumeData?.references?.items]
                  : [...sampleData?.data?.references?.items]
              }
              name={true}
              profession={true}
              email={true}
              phone={true}
              phoneStyle={Style.profileText}
              emailStyle={Style.profileText}
              professionStyle={Style.profileText}
              nameStyle={Style.referenceName}
              DndDirection="horizontal"
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
