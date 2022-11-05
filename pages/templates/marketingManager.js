import { Box, Flex, HStack, Image } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { connect } from 'react-redux';
import { Tooltip } from 'react-tippy';
import MarkManagExpertise from '../../src/components/marketingManager/MarkManagExpertise';
import MarkMangEdu from '../../src/components/marketingManager/MarkMangEdu';
import MarkMangeLang from '../../src/components/marketingManager/MarkMangeLang';
import MarkMangeReference from '../../src/components/marketingManager/MarkMangeReference';
import MarkMangExp from '../../src/components/marketingManager/MarkMangExp';
import MarkMangpersonal from '../../src/components/marketingManager/MarkMangpersonal';
import MarkProfile from '../../src/components/marketingManager/MarkProfile';
import { onBlurField } from '../../store/actions/builderAction';
import style from '../../styles/templates/template1.module.scss';
const marketingManager = (props) => {
  const { resumeData } = props;
  console.log(resumeData);
  return (
    // ___________ Marketing Manager Template ____________
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
        bg={{ md: 'none', lg: 'blackAlpha.100' }}
      >
        <HStack
          minW={830}
          maxW={830}
          h={'full'}
          alignItems="stretch"
          borderRadius={6}
          bg={'white'}
          my={10}
          mx={10}
        >
          {/* ============== First Section ============== */}
          <Box
            minW={280}
            maxW={280}
            bg={'#2E4053'}
            borderLeftRadius={6}
            px={3}
            py={5}
          >
            <Box
              maxW={250}
              minW={250}
              borderRadius="full"
              mt={2}
              display={'flex'}
              mb={3}
              justifyContent="center"
            >
              <Image
                borderRadius={'full'}
                boxSize="160px"
                src="/profileDigi.png"
                alt="Profile"
              />
            </Box>
            <Box ml={6}>
              <MarkProfile />
              {/* ============== Education Section ============== */}
              <MarkMangEdu
                data={
                  resumeData?.education?.items.length
                    ? [...resumeData?.education?.items]
                    : [...sampleData?.data?.education?.items]
                }
              />
              {/* ============== Expertise or Skill Section ============== */}
              <MarkManagExpertise
                data={
                  resumeData?.skills?.items?.length
                    ? [...resumeData?.skills?.items]
                    : [...sampleData?.data?.skills?.items]
                }
              />
              {/* ============== Languages Section ============== */}
              <MarkMangeLang
                data={
                  resumeData?.languages?.items
                    ? [...resumeData?.languages?.items]
                    : [...sampleData?.data?.languages?.items]
                }
              />
            </Box>
          </Box>
          {/* ============== Second Section ============== */}
          <Box pl={4} minW={500} maxW={500}>
            {/* ============== Name Section ============== */}
            <MarkMangpersonal />
            {/* ============== Work Experience Section ============== */}
            <MarkMangExp
              data={
                resumeData?.work?.items.length
                  ? [...resumeData?.work?.items]
                  : [...sampleData?.data?.work?.items]
              }
            />
            {/* ============== Reference Section ============== */}
            <MarkMangeReference
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
export default connect(mapStateToProps, { onBlurField })(marketingManager);
