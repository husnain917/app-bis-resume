import { Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { connect } from 'react-redux';
import { Tooltip } from 'react-tippy';
import Graph8Contact from '../../src/components/graphicDesigner8/Graph8Contact';
import Graph8Edu from '../../src/components/graphicDesigner8/Graph8Edu';
import Graph8Profile from '../../src/components/graphicDesigner8/Graph8Profile';
import HybridText from '../../src/components/hybridTemplate/HybridText';
import { onBlurField } from '../../store/actions/builderAction';
import style from '../../styles/templates/template1.module.scss';
import Style from '../../src/components/graphicDesigner8/graph8.module.css';
import Graph8Exp from '../../src/components/graphicDesigner8/Graph8Exp';
import Graph8Skill from '../../src/components/graphicDesigner8/Graph8Skill';
const GraphicDesigner8 = (props) => {
  const { resumeData } = props;
  return (
    // Graphic Designer Template 8 //
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
          bg={'#fff'}
          my={10}
          mx={5}
          pr={'30px'}
          py={'60px'}
          display="flex"
          alignItems={'stretch'}
        >
          {/* _______________ First Section _______________  */}
          <Box
            w="40%"
            pb="10%"
            minW={'340px'}
            maxW={'340px'}
            bgColor="#2A78AB"
            borderBottomRadius={6}
            borderTopRadius={'180px'}
            pr={5}
            pl={12}
            ml={'40px'}
            py={8}
          >
            {/* =============== Profile Section ============== */}
            <Graph8Profile />
            {/* =============== Education Section ============== */}
            <Graph8Edu
              data={
                resumeData?.education?.items.length
                  ? [...resumeData?.education?.items]
                  : [...sampleData?.data?.education?.items]
              }
            />
            {/* =============== Contact Section ============== */}
            <Graph8Contact />
          </Box>
          {/* _______________ Second Section _______________  */}
          <Box
            w="60%"
            bg="white"
            minW="450"
            maxW={'450'}
            pl={'30px'}
            pt={'100px'}
            pr="30px"
          >
            {/* =============== Name Section ============== */}
            <Box>
              <HybridText
                value={resumeData?.profile?.firstName}
                placeholder="First Name"
                customclass={` ${Style.name}`}
                path={'profile.firstName'}
              />
              <HybridText
                value={resumeData?.profile?.lastName}
                placeholder="Last Name"
                customclass={` ${Style.name}`}
                path={'profile.lastName'}
              />
            </Box>
            {/* =============== Work Experience Section ============== */}
            <Graph8Exp
              data={
                resumeData?.work?.items.length
                  ? [...resumeData?.work?.items]
                  : [...sampleData?.data?.work?.items]
              }
            />
            {/* =============== Skill Section ============== */}
            <Graph8Skill
              data={
                resumeData?.skills?.items?.length
                  ? [...resumeData?.skills?.items]
                  : [...sampleData?.data?.skills?.items]
              }
            />
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
export default connect(mapStateToProps, { onBlurField })(GraphicDesigner8);
