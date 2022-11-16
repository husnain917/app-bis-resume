import { Box, Flex, HStack } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { connect } from 'react-redux';
import { Tooltip } from 'react-tippy';
import FlightAttendantSkill from '../../src/components/flightAttendant/FlightAttendantSkill';
import FlightAttendCertificate from '../../src/components/flightAttendant/FlightAttendCertificate';
import FlightAttendEdu from '../../src/components/flightAttendant/FlightAttendEdu';
import FlightAttendHeading from '../../src/components/flightAttendant/FlightAttendHeading';
import FlightAttendProfile from '../../src/components/flightAttendant/FlightAttendProfile';
import FlightAttendWork from '../../src/components/flightAttendant/FlightAttendWork';
import { onBlurField } from '../../store/actions/builderAction';
import style from '../../styles/templates/template1.module.scss';
const FlightAttendant1 = (props) => {
  const { resumeData } = props;
  console.log('resumedData:', resumeData);
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
        py={6}
      >
        <Box
          display="flex"
          flexDir="row"
          w="100%"
          h="100%"
          minW="850px"
          maxW="850px"
          my={'5%'}
          mx={'20px'}
        >
          {/* =============== First Section ============== */}
          <Box
            w="40%"
            pb="10%"
            minW={'340px'}
            bgColor="#2A78AB"
            borderLeftRadius={6}
            pr={3}
            pl={12}
            py={8}
          >
            {/* _____________ Profile _____________ */}
            <FlightAttendProfile />
            {/* _____________ Skill _____________ */}
            <FlightAttendantSkill
              data={
                resumeData?.skills?.items?.length
                  ? [...resumeData?.skills?.items]
                  : [...sampleData?.data?.skills?.items]
              }
            />
          </Box>
          {/* =============== Second Section ============== */}
          <Box
            w="60%"
            bg="white"
            h="auto"
            minW="510px"
            pl={'30px'}
            borderRightRadius={6}
          >
            <FlightAttendHeading text={'work experience'} />
            {/* _____________ Work Experience _____________ */}
            <FlightAttendWork
              data={
                resumeData?.work?.items.length
                  ? [...resumeData?.work?.items]
                  : [...sampleData?.data?.work?.items]
              }
            />
            {/* _____________ Education _____________ */}
            <FlightAttendEdu
              data={
                resumeData?.education?.items.length
                  ? [...resumeData?.education?.items]
                  : [...sampleData?.data?.education?.items]
              }
            />
            {/* _____________ Certification _____________ */}
            <FlightAttendCertificate
              data={
                resumeData?.certifications?.items.length
                  ? [...resumeData?.certifications?.items]
                  : [...sampleData?.data?.certifications?.items]
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
export default connect(mapStateToProps, { onBlurField })(FlightAttendant1);
