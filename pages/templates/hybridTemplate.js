import { Box, Circle, Flex, HStack, Text } from '@chakra-ui/react';
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
const hybridTemplate = (props) => {
  const { resumeData } = props;
  return (
    <Flex justifyContent={{ base: 'none', lg: 'center' }} bg={'blackAlpha.100'}>
      <Box minW={910} py={12} px={2} bg={'white'} m={4} borderRadius={6}>
        <HybridProfile />
        <HStack mt={5} alignItems="flex-start">
          <Box minW={580} maxW={580} h="full">
            <Box pl={8}>
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
          <Box
            minW={302}
            maxW={302}
            bg="#D6D6D6"
            h="full"
            p={4}
            borderRadius={6}
          >
            <HStack mb={3}>
              <Circle size={'38px'} bg="#313B47">
                <GiSkills color="white" size={18} />
              </Circle>
              <Text fontSize={'2xl'} fontWeight="bold" color={'#313B47'}>
                SKILLS
              </Text>
            </HStack>
            <HybridSkill
              data={
                resumeData?.skills?.items?.length
                  ? [...resumeData?.skills?.items]
                  : [...sampleData?.data?.skills?.items]
              }
            />
            <HStack mb={3}>
              <Circle size={'38px'} bg="#313B47">
                <GoProject color="white" size={18} />
              </Circle>
              <Text fontSize={'2xl'} fontWeight="bold" color={'#313B47'}>
                PERSONAL PROJECTS
              </Text>
            </HStack>
            <HybridProject
              data={
                resumeData?.projects?.items?.length
                  ? [...resumeData?.projects?.items]
                  : [...sampleData?.data?.projects?.items]
              }
            />
            <HStack mb={3}>
              <Circle size={'38px'} bg="#313B47">
                <GiOrganigram color="white" size={18} />
              </Circle>
              <Text fontSize={'2xl'} fontWeight="bold" color={'#313B47'}>
                ORGANIZATION
              </Text>
            </HStack>
            <HybridOrganization
              data={
                resumeData?.organization?.items?.length
                  ? [...resumeData?.organization?.items]
                  : [...sampleData?.data?.organization?.items]
              }
            />
            <HStack mb={3}>
              <Circle size={'38px'} bg="#313B47">
                <TbCertificate color="white" size={18} />
              </Circle>
              <Text fontSize={'2xl'} fontWeight="bold" color={'#313B47'}>
                CERTIFICATES
              </Text>
            </HStack>
            <HybridCertificates
              data={
                resumeData?.certifications?.items?.length
                  ? [...resumeData?.certifications?.items]
                  : [...sampleData?.data?.certifications?.items]
              }
            />
            <HStack mb={3}>
              <Circle size={'38px'} bg="#313B47">
                <IoLanguageOutline color="white" size={18} />
              </Circle>
              <Text fontSize={'2xl'} fontWeight="bold" color={'#313B47'}>
                LANGUAGES
              </Text>
            </HStack>
            <HybridLanguage
              data={
                resumeData?.languages?.items
                  ? [...resumeData?.languages?.items]
                  : [...sampleData?.data?.languages?.items]
              }
            />
            <HStack mb={3}>
              <Circle size={'38px'} bg="#313B47">
                <FaHorseHead color="white" size={18} />
              </Circle>
              <Text fontSize={'2xl'} fontWeight="bold" color={'#313B47'}>
                INTEREST
              </Text>
            </HStack>
            <HybridHobbies
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
  );
};
const mapStateToProps = (store) => ({
  theme: store.editorReducer.theme,
  resumeData: store.editorReducer.resumeData,
  updater: store.editorReducer.updater,
});
export default connect(mapStateToProps, { onBlurField })(hybridTemplate);
