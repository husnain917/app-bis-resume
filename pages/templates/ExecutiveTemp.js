import { Box, Circle, Flex, HStack, Link, Text } from '@chakra-ui/react';
import { MdCastForEducation } from 'react-icons/md';
import { BsFillLayersFill } from 'react-icons/bs';
import { GiSkills, GiOrganigram } from 'react-icons/gi';
import { IoLanguageOutline } from 'react-icons/io5';
import { connect } from 'react-redux';
import { GoProject } from 'react-icons/go';
import { TbCertificate } from 'react-icons/tb';
import { FaHorseHead } from 'react-icons/fa';
import EducationHybridTemplate from '../../src/components/hybridTemplate/EducationHybridTemplate';
import HybridProfile from '../../src/components/hybridTemplate/HybridProfile';
import { onBlurField } from '../../store/actions/builderAction';
import WorkExperienceHybrid from '../../src/components/hybridTemplate/WorkExperienceHybrid';
import HybridSkill from '../../src/components/hybridTemplate/HybridSkill';
import HybridProject from '../../src/components/hybridTemplate/HybridProject';
import HybridOrganization from '../../src/components/hybridTemplate/HybridOrganization';
import HybridCertificates from '../../src/components/hybridTemplate/HybridCertificates';
import HybridLanguage from '../../src/components/hybridTemplate/HybridLanguage';
import HybridHobbies from '../../src/components/hybridTemplate/HybridHobbies';
import style from '../../styles/templates/template1.module.scss';
import { sampleData } from '../../constants/sampleData';
import { Tooltip } from 'react-tippy';
import ExecutiveProfile from '../../src/components/executiveTemp/ExecutiveProfile';
import ExecutiveCertificates from '../../src/components/executiveTemp/ExecutiveCertificates';
import ExecutiveLang from '../../src/components/executiveTemp/ExecutiveLang';
import ExecutiveOrganization from '../../src/components/executiveTemp/ExecutiveOrganiztion';
import ExecutiveProject from '../../src/components/executiveTemp/ExecutiveProject';
import ExecutiveInterest from '../../src/components/executiveTemp/ExecutiveInterest';
import ExecutiveSkill from '../../src/components/executiveTemp/ExecutiveSkill';

const ExecutiveTemp = (props) => {
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
        bg={'blackAlpha.100'}
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
          <ExecutiveProfile />
          <HStack mt={5} alignItems="stretch">
            {/* _______________ First Section _______________ */}
            <Box minW={580} maxW={580} h="full">
              <Box pl={8}>
                {/* =============== Education Section =============== */}
                <HStack mb={3}>
                  <Circle size={'38px'} bg="#313B47">
                    <MdCastForEducation color={'white'} size={18} />
                  </Circle>
                  <Text fontSize={'2xl'} fontWeight="bold" color={'#313B47'}>
                    EDUCATION
                  </Text>
                </HStack>
                <EducationHybridTemplate
                  data={
                    resumeData?.education?.items.length
                      ? [...resumeData?.education?.items]
                      : [...sampleData?.data?.education?.items]
                  }
                />
                {/* =============== Work Experience Section =============== */}
                <HStack mb={3}>
                  <Circle size={'38px'} bg="#313B47">
                    <BsFillLayersFill color="white" size={18} />
                  </Circle>
                  <Text fontSize={'2xl'} fontWeight="bold" color={'#313B47'}>
                    WORK EXPERIENCE
                  </Text>
                </HStack>
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
            <Box minW={302} maxW={302} bg="#fff" p={4} borderRadius={6}>
              {/* =============== Skill Section =============== */}
              <HStack mb={3}>
                <Circle size={'38px'} bg="#313B47">
                  <GiSkills color="white" size={18} />
                </Circle>
                <Text fontSize={'2xl'} fontWeight="bold" color={'#313B47'}>
                  SKILLS
                </Text>
              </HStack>
              <ExecutiveSkill
                data={
                  resumeData?.skills?.items?.length
                    ? [...resumeData?.skills?.items]
                    : [...sampleData?.data?.skills?.items]
                }
              />
              {/* =============== Personal Project Section =============== */}
              <HStack mb={3}>
                <Circle size={'38px'} bg="#313B47">
                  <GoProject color="white" size={18} />
                </Circle>
                <Text fontSize={'2xl'} fontWeight="bold" color={'#313B47'}>
                  PERSONAL PROJECTS
                </Text>
              </HStack>
              <ExecutiveProject
                data={
                  resumeData?.projects?.items?.length
                    ? [...resumeData?.projects?.items]
                    : [...sampleData?.data?.projects?.items]
                }
              />
              {/* =============== Organization Section =============== */}
              <HStack mb={3}>
                <Circle size={'38px'} bg="#313B47">
                  <GiOrganigram color="white" size={18} />
                </Circle>
                <Text fontSize={'2xl'} fontWeight="bold" color={'#313B47'}>
                  ORGANIZATION
                </Text>
              </HStack>
              <ExecutiveOrganization
                data={
                  resumeData?.organization?.items?.length
                    ? [...resumeData?.organization?.items]
                    : [...sampleData?.data?.organization?.items]
                }
              />
              {/* =============== Certificates Section =============== */}
              <HStack mb={3}>
                <Circle size={'38px'} bg="#313B47">
                  <TbCertificate color="white" size={18} />
                </Circle>
                <Text fontSize={'2xl'} fontWeight="bold" color={'#313B47'}>
                  CERTIFICATES
                </Text>
              </HStack>
              <ExecutiveCertificates
                data={
                  resumeData?.certifications?.items?.length
                    ? [...resumeData?.certifications?.items]
                    : [...sampleData?.data?.certifications?.items]
                }
              />
              {/* =============== Languages Section =============== */}
              <HStack mb={3}>
                <Circle size={'38px'} bg="#313B47">
                  <IoLanguageOutline color="white" size={18} />
                </Circle>
                <Text fontSize={'2xl'} fontWeight="bold" color={'#313B47'}>
                  LANGUAGES
                </Text>
              </HStack>
              <ExecutiveLang
                data={
                  resumeData?.languages?.items
                    ? [...resumeData?.languages?.items]
                    : [...sampleData?.data?.languages?.items]
                }
              />
              {/* =============== Interest Section =============== */}
              <HStack mb={3}>
                <Circle size={'38px'} bg="#313B47">
                  <FaHorseHead color="white" size={18} />
                </Circle>
                <Text fontSize={'2xl'} fontWeight="bold" color={'#313B47'}>
                  INTEREST
                </Text>
              </HStack>
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
export default connect(mapStateToProps, { onBlurField })(ExecutiveTemp);
