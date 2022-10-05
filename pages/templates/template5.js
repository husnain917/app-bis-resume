import {
  Box,
  Circle,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { sampleData } from '../../constants/sampleData';
import { connect } from 'react-redux';
import { onBlurField } from '../../store/actions/builderAction';
import SkillBase from '../../src/components/template5/SkillTemplate5';
import ProfileTemplate5 from '../../src/components/template5/ProfileTemplate5';
import ExperienceTemplate5 from '../../src/components/template5/ExperienceTemplate5';
import EducationTemplate5 from '../../src/components/template5/EducationTemplate5';
import AboutTemplate5 from '../../src/components/template5/AboutTemplate5';
import CertificationTemplate5 from '../../src/components/template5/CertificationTemplate5';
const template5 = (props) => {
  const { resumeData } = props;
  return (
    <Flex justifyContent={{ base: 'none', lg: 'center' }}>
      <SimpleGrid minW={850} bg={'blackAlpha.300'} py={12}>
        <HStack>
          <VStack
            align={'flex-end'}
            justify="start"
            lineHeight="34px"
            pr={6}
            w="399px"
          >
            <ProfileTemplate5 />
          </VStack>

          <VStack h={'full'} width="2px" bg="black"></VStack>

          <VStack align={'right'} pl={6} w={370} pr={6}>
            <Heading size={'lg'}>About Me</Heading>
            <AboutTemplate5 />
          </VStack>
        </HStack>
        <HStack>
          <Heading size={'lg'} ml="45px" mb={10}>
            Experience
          </Heading>
          <Stack width={565}>
            <Divider borderColor={'black'} />
          </Stack>
        </HStack>
        <VStack mt={-5}>
          <ExperienceTemplate5
            data={
              resumeData?.work?.items.length
                ? [...resumeData?.work?.items]
                : [...sampleData?.data?.work?.items]
            }
          />
          <HStack>
            <Heading size={'lg'} ml="-54px" w={150}>
              Education
            </Heading>
            <Stack width={545}>
              <Divider p={3} borderColor={'black'} />
            </Stack>
          </HStack>

          <VStack>
            <EducationTemplate5
              data={
                resumeData?.education?.items.length
                  ? [...resumeData?.education?.items]
                  : [...sampleData?.data?.education?.items]
              }
            />
          </VStack>
          <HStack>
            <Heading size={'lg'} ml="-54px" w={150}>
              Certificate
            </Heading>
            <Stack width={545}>
              <Divider p={3} borderColor={'black'} />
            </Stack>
          </HStack>
          <CertificationTemplate5
            data={
              resumeData?.certifications?.items.length
                ? [...resumeData?.certifications?.items]
                : [...sampleData?.data?.certifications?.items]
            }
          />
          <HStack>
            <Heading w={220} size={'lg'} ml="-45px">
              Skill & Hobbies
            </Heading>
            <Stack width={480}>
              <Divider p={3} borderColor={'black'} />
            </Stack>
          </HStack>
          <Box>
            <SkillBase
              data={
                resumeData?.skills?.items?.length
                  ? [...resumeData?.skills?.items]
                  : [...sampleData?.data?.skills?.items]
              }
            />
          </Box>
        </VStack>
      </SimpleGrid>
    </Flex>
  );
};
const mapStateToProps = (store) => ({
  theme: store.editorReducer.theme,
  resumeData: store.editorReducer.resumeData,
  updater: store.editorReducer.updater,
});

export default connect(mapStateToProps, { onBlurField })(template5);
