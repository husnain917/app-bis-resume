import { Box, Flex, HStack, Link, Text } from '@chakra-ui/react';
import { connect } from 'react-redux';
import EducationHybridTemplate from '../../src/components/hybridTemplate/EducationHybridTemplate';
import { onBlurField } from '../../store/actions/builderAction';
import WorkExperienceHybrid from '../../src/components/hybridTemplate/WorkExperienceHybrid';
import style from '../../styles/templates/template1.module.scss';
import { sampleData } from '../../constants/sampleData';
import { Tooltip } from 'react-tippy';
import ExecutiveCertificates from '../../src/components/executiveTemp/ExecutiveCertificates';
import ExecutiveLang from '../../src/components/executiveTemp/ExecutiveLang';
import ExecutiveOrganization from '../../src/components/executiveTemp/ExecutiveOrganiztion';
import ExecutiveProject from '../../src/components/executiveTemp/ExecutiveProject';
import ExecutiveInterest from '../../src/components/executiveTemp/ExecutiveInterest';
import ExecutiveSkill from '../../src/components/executiveTemp/ExecutiveSkill';
import CollegeProfile from '../../src/components/collegeTemp/CollegeProfile';

const CollegeTemp = (props) => {
  const { resumeData } = props;
  return (
    //  ~~~~~~~~~~~~~~ Executive Resume Template ~~~~~~~~~~~~~~  //
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
        justifyContent={{ base: 'none', lg: 'center' }}
        overflow="auto"
        flexDir={'column'}
        alignItems={{ sm: 'none', md: 'center' }}
      >
        <Box
          minW={910}
          pt={12}
          pb={2}
          px={2}
          bg={'white'}
          m={4}
          borderRadius={6}
        >
          {/* =============== Profile Section =============== */}
          <CollegeProfile />
          <HStack mt={5} alignItems="stretch">
            {/* _______________ First Section _______________ */}
            <Box minW={580} maxW={580} h="full">
              <Box pl={8}>
                {/* =============== Education Section =============== */}
                <Text
                  fontSize={'2xl'}
                  fontWeight="bold"
                  color={'#313B47'}
                  borderTopWidth={2}
                  borderBottomWidth={2}
                  borderColor="#313B47"
                  w="fit-content"
                  mb={5}
                >
                  EDUCATION
                </Text>
                <EducationHybridTemplate
                  data={
                    resumeData?.education?.items.length
                      ? [...resumeData?.education?.items]
                      : [...sampleData?.data?.education?.items]
                  }
                />
                {/* =============== Work Experience Section =============== */}
                <Text
                  fontSize={'2xl'}
                  fontWeight="bold"
                  color={'#313B47'}
                  borderTopWidth={2}
                  borderBottomWidth={2}
                  borderColor="#313B47"
                  my={5}
                  w="fit-content"
                >
                  WORK EXPERIENCE
                </Text>
                <WorkExperienceHybrid
                  data={
                    resumeData?.work?.items.length
                      ? [...resumeData?.work?.items]
                      : [...sampleData?.data?.work?.items]
                  }
                />
              </Box>
            </Box>
            {/* _______________ Second Section _______________ */}
            <Box minW={302} maxW={302} bg="#fff" borderRadius={6}>
              {/* =============== Skill Section =============== */}
              <Text
                fontSize={'2xl'}
                fontWeight="bold"
                color={'#313B47'}
                borderTopWidth={2}
                borderBottomWidth={2}
                borderColor="#313B47"
                w="fit-content"
                mb={5}
              >
                SKILLS
              </Text>
              <ExecutiveSkill
                data={
                  resumeData?.skills?.items?.length
                    ? [...resumeData?.skills?.items]
                    : [...sampleData?.data?.skills?.items]
                }
              />
              {/* =============== Personal Project Section =============== */}

              <Text
                fontSize={'2xl'}
                fontWeight="bold"
                color={'#313B47'}
                borderTopWidth={2}
                borderBottomWidth={2}
                borderColor="#313B47"
                my={5}
                w="fit-content"
              >
                PERSONAL PROJECTS
              </Text>

              <ExecutiveProject
                data={
                  resumeData?.projects?.items?.length
                    ? [...resumeData?.projects?.items]
                    : [...sampleData?.data?.projects?.items]
                }
              />

              {/* =============== Certificates Section =============== */}
              <Text
                fontSize={'2xl'}
                fontWeight="bold"
                color={'#313B47'}
                borderTopWidth={2}
                borderBottomWidth={2}
                borderColor="#313B47"
                my={5}
                w="fit-content"
              >
                CERTIFICATES
              </Text>
              <ExecutiveCertificates
                data={
                  resumeData?.certifications?.items?.length
                    ? [...resumeData?.certifications?.items]
                    : [...sampleData?.data?.certifications?.items]
                }
              />
              {/* =============== Languages Section =============== */}
              <Text
                fontSize={'2xl'}
                fontWeight="bold"
                color={'#313B47'}
                borderTopWidth={2}
                borderBottomWidth={2}
                borderColor="#313B47"
                my={5}
                w="fit-content"
              >
                LANGUAGES
              </Text>
              <ExecutiveLang
                data={
                  resumeData?.languages?.items
                    ? [...resumeData?.languages?.items]
                    : [...sampleData?.data?.languages?.items]
                }
              />
              {/* =============== Interest Section =============== */}
              <Text
                fontSize={'2xl'}
                fontWeight="bold"
                color={'#313B47'}
                borderTopWidth={2}
                borderBottomWidth={2}
                borderColor="#313B47"
                my={5}
                w="fit-content"
              >
                INTEREST
              </Text>
              <ExecutiveInterest
                data={
                  resumeData?.hobbies?.items
                    ? [...resumeData?.hobbies?.items]
                    : [...sampleData?.data?.hobbies?.items]
                }
              />
            </Box>
          </HStack>
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
export default connect(mapStateToProps, { onBlurField })(CollegeTemp);
