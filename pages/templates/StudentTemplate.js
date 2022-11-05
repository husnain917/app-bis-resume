import { Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { connect } from 'react-redux';
import { Tooltip } from 'react-tippy';
import HybridText from '../../src/components/hybridTemplate/HybridText';
import StudentProfile from '../../src/components/studentTemp/StudentProfile';
import { onBlurField } from '../../store/actions/builderAction';
import style from '../../styles/templates/template1.module.scss';
import Style from '../../src/components/studentTemp/student.module.css';
import StudentEdu from '../../src/components/studentTemp/StudentEdu';
import StudentLang from '../../src/components/studentTemp/StudentLang';
import StudentSkill from '../../src/components/studentTemp/StudentSkill';
import StudentExp from '../../src/components/studentTemp/StudentExp';
const StudentTemplate = ({ resumeData }) => {
  console.log('resumeData:', resumeData);
  return (
    //  ~~~~~~~~~~~~~~ Student Resume Template ~~~~~~~~~~~~~~  //
    <div className={style.main}>
      <Link href={'/templates'}>
        <div className={style.swapCont}>
          <Tooltip title="Change Template" arrow distance={20}>
            <div className={style.swap}>
              <img src="/icons/swap.png" />
            </div>
          </Tooltip>
        </div>
      </Link>

      <Flex
        justifyContent={{ base: 'none', md: 'center' }}
        bg={{ md: 'none', lg: 'blackAlpha.200' }}
      >
        <Box
          minW={830}
          maxW={830}
          borderRadius={6}
          my={10}
          mx={5}
          pt={'50px'}
          bg="white"
        >
          <Box>
            <Box bg={'#EBC9BB'} h={'230px'}>
              <Box ml={'320px'} pt={'60px'}>
                {/* =============== Name Section =============== */}
                <HybridText
                  value={resumeData?.profile?.firstName}
                  placeholder="First Name"
                  customclass={`fullName  ${Style.name}`}
                  path={'profile.firstName'}
                />
                &nbsp;
                <HybridText
                  value={resumeData?.profile?.lastName}
                  placeholder="Last Name"
                  customclass={`fullName ${Style.name}`}
                  path={'profile.lastName'}
                />
                {/* =============== Profession Section =============== */}
                <HybridText
                  placeholder="Profession"
                  customclass={`${Style.Profession}`}
                  path={'profile.profession'}
                  value={resumeData?.profile?.profession}
                />
              </Box>
            </Box>
            <Box display={'flex'} alignItems="stretch">
              {/* __________________  First Section  __________________ */}
              <Box
                minW="250px"
                maxW={'250px'}
                bg={'#6B9999'}
                mt="-280px"
                ml="40px"
                pb={12}
              >
                {/* =============== Profile Section =============== */}
                <StudentProfile />
              </Box>
              {/* __________________  Second Section  __________________ */}
              <Box
                ml={'30px'}
                mt="20px"
                mr={'30px'}
                minW="450px"
                maxW={'450px'}
                mb="30px"
              >
                {/* =============== Education Section =============== */}
                <StudentEdu
                  data={
                    resumeData?.education?.items.length
                      ? [...resumeData?.education?.items]
                      : [...sampleData?.data?.education?.items]
                  }
                />
                {/* =============== Languages Section =============== */}
                <StudentLang
                  data={
                    resumeData?.languages?.items
                      ? [...resumeData?.languages?.items]
                      : [...sampleData?.data?.languages?.items]
                  }
                />
                {/* =============== Skill Section =============== */}
                <StudentSkill
                  data={
                    resumeData?.skills?.items?.length
                      ? [...resumeData?.skills?.items]
                      : [...sampleData?.data?.skills?.items]
                  }
                />
                {/* =============== Work Experience Section =============== */}
                <StudentExp
                  data={
                    resumeData?.work?.items.length
                      ? [...resumeData?.work?.items]
                      : [...sampleData?.data?.work?.items]
                  }
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </div>
  );
};

const mapStateToProps = (store) => ({
  theme: store.editorReducer.theme,
  resumeData: store.editorReducer.resumeData,
  updater: store.editorReducer.updater,
});
export default connect(mapStateToProps, { onBlurField })(StudentTemplate);
