import { Box, Flex, HStack } from '@chakra-ui/react';
import style from '../../styles/templates/template1.module.scss';
import Link from 'next/link';
import { Tooltip } from 'react-tippy';
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
import TempLayout from '../../src/components/tempNav/TempLayout';
import useShow from '../../src/components/tempSectionSide/useShow';
import SectionSideMenu from '../../src/components/tempSectionSide/SectionSideMenu';
import {
  EDUCATION,
  LANGUAGES,
  SKILL,
  WORK,
} from '../../src/components/tempSectionSide/SectionSideConstant';
import { useSelector } from 'react-redux';
import ImageSelector from '../../src/components/imageSelector';
import Navbar from '../../src/components/navbar/Navbar';
const FashionTemp5 = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const [show, setShow] = useShow();
  return (
    <div className={style.main}>
      {/* <Navbar /> */}
      <TempLayout work={true} education={true} languages={true} skills={true}>
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
          overflow="auto"
          flexDir={'column'}
          alignItems={{ sm: 'none', md: 'center' }}
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
            mt="100px"
            borderWidth="1px"
            borderColor={'#00000033'}
          >
            <Box
              minW={280}
              maxW={280}
              bg={'#011A34'}
              borderLeftRadius={6}
              pl={'30px'}
              py={5}
            >
              <ImageSelector
                minWidth={210}
                maxWidth={210}
                minHeight={210}
                maxHeight={210}
                marginLeft="3px"
              />

              <Heading
                title={'CONTACT'}
                color="#fff"
                line={true}
                minW={'full'}
                lineW={'230px'}
                margin="30px 0px 0px 5px"
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
                margin="0px 0px 0px 5px"
                parentStyle={Classes.mt}
              />
              {resumeData?.skills?.visible && (
                <div className={Classes.sideMenu}>
                  <div className={Classes.sideMenuBox}>
                    {show.skills && (
                      <SectionSideMenu
                        onHide={() => setShow({ ...show, skills: false })}
                        bg="#fff"
                        iconColor={'#011A34'}
                        onDelete={SKILL}
                      />
                    )}
                  </div>
                  <div>
                    <Heading
                      title={'SKILLS'}
                      color="#fff"
                      line={true}
                      minW={'full'}
                      lineW={'230px'}
                      margin="15px 0px 0px 10px"
                      lineBg={'#fff'}
                      lineH="3px"
                      fontWeight={700}
                      fontSize={'18px'}
                      onSideSectionShow={() =>
                        setShow({ ...show, skills: true })
                      }
                    />
                    <Skill
                      skillStyle={Classes.skillText}
                      parentContainerStyle={Classes.ml}
                    />
                  </div>
                </div>
              )}
              {resumeData?.languages?.visible && (
                <div className={Classes.sideMenu}>
                  <div className={Classes.sideMenuBox}>
                    {show.languages && (
                      <SectionSideMenu
                        onHide={() => setShow({ ...show, languages: false })}
                        bg="#fff"
                        iconColor={'#011A34'}
                        onDelete={LANGUAGES}
                      />
                    )}
                  </div>
                  <div>
                    <Heading
                      title={'LANGUAGES'}
                      color="#fff"
                      line={true}
                      minW={'full'}
                      lineW={'230px'}
                      margin="15px 0px 0px 10px"
                      lineBg={'#fff'}
                      lineH="3px"
                      fontWeight={700}
                      fontSize={'18px'}
                      onSideSectionShow={() =>
                        setShow({ ...show, languages: true })
                      }
                    />
                    <Language
                      langStyle={Classes.skillText}
                      langContainerStyle={Classes.ml}
                    />
                  </div>
                </div>
              )}
            </Box>
            <Box
              minW={540}
              maxW={540}
              borderRightRadius={6}
              paddingTop={'37px'}
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
              {resumeData?.work?.visible && (
                <div className={Classes.sideMenu}>
                  <div
                    className={Classes.sideMenuBox}
                    style={{ marginTop: '30px' }}
                  >
                    {show.work && (
                      <SectionSideMenu
                        onHide={() => setShow({ ...show, work: false })}
                        bg="#011A34"
                        iconColor={'#fff'}
                        onDelete={WORK}
                      />
                    )}
                  </div>
                  <div>
                    <Heading
                      title={'WORK EXPERIENCE'}
                      color="#000"
                      line={true}
                      minW={'full'}
                      lineW={'477px'}
                      margin="24px 0px 0px 10px"
                      lineBg={'#000'}
                      lineH="3px"
                      fontWeight={800}
                      fontSize={'25px'}
                      onSideSectionShow={() => setShow({ ...show, work: true })}
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
                  </div>
                </div>
              )}
              {resumeData?.education?.visible && (
                <div className={Classes.sideMenu}>
                  <div
                    className={Classes.sideMenuBox}
                    style={{ marginTop: '30px' }}
                  >
                    {show.education && (
                      <SectionSideMenu
                        onHide={() => setShow({ ...show, education: false })}
                        bg="#011A34"
                        iconColor={'#fff'}
                        onDelete={EDUCATION}
                      />
                    )}
                  </div>
                  <div>
                    <Heading
                      title={'EDUCATION'}
                      color="#000"
                      line={true}
                      minW={'full'}
                      lineW={'480px'}
                      margin="24px 0px 0px 10px"
                      lineBg={'#000'}
                      lineH="3px"
                      fontWeight={800}
                      fontSize={'25px'}
                      onSideSectionShow={() =>
                        setShow({ ...show, education: true })
                      }
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
                  </div>
                </div>
              )}
            </Box>
          </HStack>
        </Flex>
      </TempLayout>
    </div>
  );
};
export default FashionTemp5;
