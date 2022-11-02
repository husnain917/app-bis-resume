import { Box, Flex, HStack, Image } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { connect } from 'react-redux';
import { Tooltip } from 'react-tippy';
import MarkManager1Exp from '../../src/components/marketingManager1/MarkManager1Exp';
import MarkMangerProfile from '../../src/components/marketingManager1/MarkMangerProfile';
import style from '../../styles/templates/template1.module.scss';
import { onBlurField } from '../../store/actions/builderAction';
import MarkManager1Contact from '../../src/components/marketingManager1/MarkManager1Contact';
import MarketingManagerEdu from '../../src/components/marketingManager1/MarketingManagerEdu';
import MarketingManagerSkill from '../../src/components/marketingManager1/MarketingManagerSkill';
const marketingManager1 = (props) => {
  const { resumeData } = props;
  return (
    // ==========Marketing Manager Template 1 ===========
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
          bg={'#01012a'}
          my={10}
          mx={5}
          pr={'30px'}
        >
          {/* ============== Profile Section ============== */}
          <MarkMangerProfile />
          <Box display={'flex'} alignItems={'stretch'} mt={10}>
            {/* ============== Work Experience Section ============== */}
            <MarkManager1Exp
              data={
                resumeData?.work?.items.length
                  ? [...resumeData?.work?.items]
                  : [...sampleData?.data?.work?.items]
              }
            />
            <Box minW={'300px'} maxW="300px" px="20px">
              {/* ============== Contact Section ============== */}
              <MarkManager1Contact />
              {/* ============== Education Section ============== */}
              <MarketingManagerEdu
                data={
                  resumeData?.education?.items.length
                    ? [...resumeData?.education?.items]
                    : [...sampleData?.data?.education?.items]
                }
              />
              {/* ============== Expertise or Skill Section ============== */}
              <MarketingManagerSkill
                data={
                  resumeData?.skills?.items?.length
                    ? [...resumeData?.skills?.items]
                    : [...sampleData?.data?.skills?.items]
                }
              />
            </Box>
            {/* ============== Right Border Section ============== */}
            <Box
              minW={'60px'}
              maxW="60px"
              bg={'white'}
              ml={'10px'}
              borderTopLeftRadius="50px"
              borderBottomRightRadius={5}
            ></Box>
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
export default connect(mapStateToProps, { onBlurField })(marketingManager1);
