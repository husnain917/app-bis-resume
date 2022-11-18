import { Box, Flex, HStack, Image } from '@chakra-ui/react';
import { connect } from 'react-redux';
import FashTemp5Lang from '../../src/components/fashionTemp5/FashTemp5Lang';
import FashTemp5Profile from '../../src/components/fashionTemp5/FashTemp5Profile';
import FashTemp5Skill from '../../src/components/fashionTemp5/FashTemp5Skill';
import { onBlurField } from '../../store/actions/builderAction';
import FashTemp5About from '../../src/components/fashionTemp5/FashTempAbout';
import FashTemp5Work from '../../src/components/fashionTemp5/FashTemp5Work';
import FashTemp5Edu from '../../src/components/fashionTemp5/FashTemp5Edu';
import style from '../../styles/templates/template1.module.scss';
import Link from 'next/link';
import { Tooltip } from 'react-tippy';
import ImageSection from '../../src/components/commonSection/ImageSection';
import Heading from '../../src/components/commonSection/Heading';
import Contact from '../../src/components/commonSection/Contact';
import Classes from '../../styles/templates/fashionTemp5.module.css';
import Skill from '../../src/components/commonSection/Skill';
import Language from '../../src/components/commonSection/Language';
import Name from '../../src/components/commonSection/Name';
import Profession from '../../src/components/commonSection/Profession';
import About from '../../src/components/commonSection/About';
import WorkExperience from '../../src/components/commonSection/WorkExperience';
import Education from '../../src/components/commonSection/Education';
const fashionTemp5 = (props) => {
  const { resumeData } = props;
  console.log('resumeData:', resumeData);
  return (
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
          <Box
            minW={280}
            maxW={280}
            bg={'#011A34'}
            borderLeftRadius={6}
            px={3}
            py={5}
          >
            {/* <Box maxW={250} minW={250} borderRadius="full" ml={2} mt={2} mb={3}>
              <Image
                borderRadius={'full'}
                boxSize="240px"
                src="/profileDigi.png"
                alt="Profile"
              />
            </Box> */}
            <ImageSection
              minW={250}
              maxW={250}
              minH={250}
              maxH={250}
              margin={'0px 0px 0px 3px'}
            />
            <Heading
              title={'CONTACT'}
              color="#fff"
              line={true}
              minW={'full'}
              lineW={'230px'}
              margin="15px 0px 0px 15px"
              lineBg={'#fff'}
              lineH="3px"
              fontWeight={700}
              fontSize={'18px'}
            />
            <Contact
              phone={true}
              email={true}
              location={true}
              heading={true}
              headingStyle={Classes.contactText}
              style={Classes.profileText}
              direction="column"
              margin="0px 0px 0px 15px"
              parentStyle={Classes.mt}
            />
            <Heading
              title={'SKILLS'}
              color="#fff"
              line={true}
              minW={'full'}
              lineW={'230px'}
              margin="15px 0px 0px 15px"
              lineBg={'#fff'}
              lineH="3px"
              fontWeight={700}
              fontSize={'18px'}
            />
            <Skill
              skillStyle={Classes.skillText}
              parentContainerStyle={Classes.ml}
            />

            {/* <FashTemp5Profile /> */}
            {/* <FashTemp5Skill
                data={
                  resumeData?.skills?.items?.length
                    ? [...resumeData?.skills?.items]
                    : [...sampleData?.data?.skills?.items]
                }
              /> */}
            <Heading
              title={'LANGUAGES'}
              color="#fff"
              line={true}
              minW={'full'}
              lineW={'230px'}
              margin="15px 0px 0px 15px"
              lineBg={'#fff'}
              lineH="3px"
              fontWeight={700}
              fontSize={'18px'}
            />
            <Language
              langStyle={Classes.skillText}
              langContainerStyle={Classes.ml}
            />
          </Box>
          <Box
            minW={540}
            maxW={540}
            borderRightRadius={6}
            paddingTop={'60px'}
            px={6}
            pb={6}
          >
            <Name
              FName={true}
              SName={true}
              FNameStyle={Classes.fashionName}
              SNameStyle={Classes.fashionName}
            />
            <Profession professionStyle={Classes.ProfessionFashion} />
            <Heading
              title={'ABOUT ME'}
              color="#000"
              line={true}
              minW={'full'}
              lineW={'480px'}
              margin="24px 0px 0px 0px"
              lineBg={'#000'}
              lineH="3px"
              fontWeight={800}
              fontSize={'25px'}
            />
            <About minW={'full'} maxW="full" aboutStyle={Classes.aboutText} />
            <Heading
              title={'WORK EXPERIENCE'}
              color="#000"
              line={true}
              minW={'full'}
              lineW={'480px'}
              margin="24px 0px 0px 0px"
              lineBg={'#000'}
              lineH="3px"
              fontWeight={800}
              fontSize={'25px'}
            />
            <WorkExperience
              position={true}
              date={true}
              summary={true}
              sideLine={true}
              childContainerStyle={Classes.childWork}
              parentContainerStyle={Classes.parentWork}
              positionStyle={Classes.workText}
              dateStyle={Classes.workText}
              summaryStyle={Classes.summaryText}
              summary_placeholder="Summary"
            />
            <Heading
              title={'EDUCATION'}
              color="#000"
              line={true}
              minW={'full'}
              lineW={'480px'}
              margin="24px 0px 0px 0px"
              lineBg={'#000'}
              lineH="3px"
              fontWeight={800}
              fontSize={'25px'}
            />
            <Education
              institution={true}
              date={true}
              summary={true}
              institutionStyle={Classes.workText}
              dateStyle={Classes.workText}
              summaryStyle={Classes.summaryText}
              summary_placeholder="Summary"
              parentContainerStyle={Classes.parentWork}
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
export default connect(mapStateToProps, { onBlurField })(fashionTemp5);
