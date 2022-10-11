import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react';
import { connect } from 'react-redux';
import DigiEducation from '../../src/components/digitalMarkTemp/DigiEducation';
import DigiExperience from '../../src/components/digitalMarkTemp/DigiExperience';
import DigiProfile from '../../src/components/digitalMarkTemp/DigiProfile';
import DigiSkill from '../../src/components/digitalMarkTemp/DigiSkill';
import { onBlurField } from '../../store/actions/builderAction';

const digitalMarkTemp2 = (props) => {
  const { resumeData } = props;
  console.log('resumeData:', resumeData);
  return (
    <Flex
      justifyContent={{ base: 'none', lg: 'center' }}
      bg={'blackAlpha.100'}
      alignItems="flex-start"
      h={'full'}
    >
      <Box minW={820} bg={'white'} m={4} borderRadius={6} h={'full'} pb={4}>
        <Box
          bg={'#AED6F1'}
          h={'60px'}
          borderBottomRightRadius={25}
          minW={410}
          maxW={410}
        ></Box>
        <HStack minW={820} maxW={820} alignItems="flex-start">
          <Box minW={410} maxW={410}>
            <DigiProfile />
            <DigiSkill
              data={
                resumeData?.skills?.items?.length
                  ? [...resumeData?.skills?.items]
                  : [...sampleData?.data?.skills?.items]
              }
            />
          </Box>
          <Box minW={410} maxW={410} alignItems="flex-start">
            <Box minH={300} maxW={300} minW={300} borderRadius="full" ml={12}>
              <Image
                borderRadius={'full'}
                boxSize="300px"
                src="/profileDigi.png"
                alt="Profile"
              />
            </Box>
            <Box
              bg={'#AED6F1'}
              minW={372}
              maxW={372}
              ml={'30px'}
              borderLeftRadius={23}
              p={5}
              mt={10}
            >
              <Text
                fontSize={'23px'}
                fontWeight="700"
                color={'black'}
                letterSpacing={1}
              >
                EDUCATION
              </Text>
              <DigiEducation
                data={
                  resumeData?.education?.items.length
                    ? [...resumeData?.education?.items]
                    : [...sampleData?.data?.education?.items]
                }
              />
              <Text
                fontSize={'23px'}
                fontWeight="700"
                color={'black'}
                letterSpacing={1}
              >
                EXPERIENCE WORK
              </Text>
              <DigiExperience
                data={
                  resumeData?.work?.items.length
                    ? [...resumeData?.work?.items]
                    : [...sampleData?.data?.work?.items]
                }
              />
            </Box>
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
export default connect(mapStateToProps, { onBlurField })(digitalMarkTemp2);
