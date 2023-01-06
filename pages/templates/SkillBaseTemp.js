import React from 'react';
import TempLayout from '../../src/components/tempNav/TempLayout';
import { background, Box, Flex, HStack } from '@chakra-ui/react';
import { MdCastForEducation } from 'react-icons/md';
import { BsFillLayersFill } from 'react-icons/bs';
import { GiSkills, GiOrganigram } from 'react-icons/gi';
import { IoLanguageOutline } from 'react-icons/io5';
import { GoProject } from 'react-icons/go';
import { TbCertificate } from 'react-icons/tb';
import { FaHorseHead } from 'react-icons/fa';
import Classes from '../../styles/templates/hybridTemplate.module.css';
import Name from '../../src/components/commonSection/Name';
import Profession from '../../src/components/commonSection/Profession';
import About from '../../src/components/commonSection/About';
import Contact from '../../src/components/commonSection/Contact';
import Heading from '../../src/components/commonSection/Heading';
import Education from '../../src/components/commonSection/Education';
import WorkExperience from '../../src/components/commonSection/WorkExperience';
import RowSkill from '../../src/components/commonSection/RowSkill';
import Project from '../../src/components/commonSection/Project';
import Organization from '../../src/components/commonSection/Organization';
import Certificate from '../../src/components/commonSection/Certificate';
import Language from '../../src/components/commonSection/Language';
import Interest from '../../src/components/commonSection/Interest';
import { useSelector } from 'react-redux';
import useShow from '../../src/components/tempSectionSide/useShow';
import SectionSideMenu from '../../src/components/tempSectionSide/SectionSideMenu';
import {
  CERTIFICATE,
  EDUCATION,
  INTEREST,
  LANGUAGES,
  ORGANIZATION,
  PROJECT,
  SKILL,
  WORK,
} from '../../src/components/tempSectionSide/SectionSideConstant';
import ImageSelector from '../../src/components/imageSelector';
import ChangeTempBtn from '../../src/components/changeTempbtn/ChangeTempBtn';
import PDFGenerater from '../../src/components/tempNav/PDFGenerater';
const SkillBaseTemp = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const { backgroundColor, color } = useSelector(
    (store) => store.themeReducer.theme
  );
  // custom Hook For Template
  const [show, setShow] = useShow();
  // PDF Download Hook
  const { downloadPDFHandler, pdfRef } = PDFGenerater();
  return (
    <div style={{ overflow: 'auto' }}>
      <TempLayout
        education={true}
        skills={true}
        languages={true}
        work={true}
        organization={true}
        projects={true}
        certificate={true}
        interest={true}
        downloadPDF={downloadPDFHandler}
      >
        <ChangeTempBtn />
        <Flex
          justifyContent={{ base: 'none', lg: 'center' }}
          flexDir={'column'}
          alignItems={{ sm: 'none', lg: 'center' }}
        >
          <Box margin={'100px 20px 50px 20px'}>
            <Box
              minW={910}
              maxW={910}
              bg={'white'}
              borderRadius={6}
              borderColor={'#00000023'}
              ref={pdfRef}
            >
              <HStack alignItems="stretch">
                <Box
                  minW={302}
                  maxW={302}
                  bg={backgroundColor ? backgroundColor : '#313c4e'}
                  py={4}
                  pr={2}
                  transition={'0.5s background'}
                  borderLeftRadius={6}
                >
                  {/* Image Section  */}
                  <Box display={'flex'} justifyContent="center">
                    <ImageSelector
                      minWidth={150}
                      maxWidth={150}
                      minHeight={150}
                      maxHeight={150}
                      marginTop="30px"
                      borderColor={color ? color : ''}
                    />
                  </Box>
                  {/* skill Section  */}
                  {resumeData?.skills?.visible && (
                    <div className={Classes.sideMenu}>
                      <div className={Classes.width}>
                        {show.skills && (
                          <SectionSideMenu
                            bg={color ? color : '#fff'}
                            iconColor={
                              backgroundColor ? backgroundColor : '#313B47'
                            }
                            onHide={() => setShow({ ...show, skills: false })}
                            onDelete={SKILL}
                          />
                        )}
                      </div>
                      <div>
                        {/* skill Heading */}
                        <Heading
                          title="SKILLS"
                          circleSize="38px"
                          circleBg={color ? color : '#fff'}
                          circleIconHeading={true}
                          icon={(props) => (
                            <GiSkills
                              {...props}
                              size={18}
                              color={
                                backgroundColor ? backgroundColor : '#313B47'
                              }
                            />
                          )}
                          fontSize="23px"
                          fontWeight={'bold'}
                          color={color ? color : '#fff'}
                          minW={250}
                          maxW={250}
                          margin={'10px 0px'}
                          onSideSectionShow={() =>
                            setShow({ ...show, skills: true })
                          }
                        />
                        {/* Skill Row Components */}
                        <RowSkill skillStyle={Classes.baseText} bg="gray" />
                      </div>
                    </div>
                  )}

                  {/* Language Section */}
                  {resumeData?.languages?.visible && (
                    <div className={Classes.sideMenu}>
                      <div className={Classes.width}>
                        {/* Section Side Menu */}
                        {show.languages && (
                          <SectionSideMenu
                            bg={color ? color : '#fff'}
                            iconColor={
                              backgroundColor ? backgroundColor : '#313B47'
                            }
                            onHide={() =>
                              setShow({ ...show, languages: false })
                            }
                            onDelete={LANGUAGES}
                          />
                        )}
                      </div>
                      <div>
                        {/* languages Heading */}
                        <Heading
                          title="LANGUAGES"
                          circleSize="38px"
                          circleBg={color ? color : '#fff'}
                          circleIconHeading={true}
                          icon={(props) => (
                            <IoLanguageOutline
                              {...props}
                              size={18}
                              color={
                                backgroundColor ? backgroundColor : '#313B47'
                              }
                            />
                          )}
                          fontSize="23px"
                          fontWeight={'bold'}
                          color={color ? color : '#fff'}
                          minW={250}
                          maxW={250}
                          margin={'15px 0px'}
                          onSideSectionShow={() =>
                            setShow({ ...show, languages: true })
                          }
                        />
                        {/* Language Component */}
                        <Language langStyle={Classes.baseText} />
                      </div>
                    </div>
                  )}
                  {/* Interest Section */}
                  {resumeData?.hobbies?.visible && (
                    <>
                      <div className={Classes.sideMenu}>
                        <div className={Classes.width}>
                          {/* Section Side Menu */}
                          {show.interest && (
                            <SectionSideMenu
                              iconColor={
                                backgroundColor ? backgroundColor : '#313B47'
                              }
                              onHide={() =>
                                setShow({ ...show, interest: false })
                              }
                              onDelete={INTEREST}
                              bg={color ? color : '#fff'}
                            />
                          )}
                        </div>
                        <div>
                          {/* Interest Heading */}
                          <Heading
                            title="INTEREST"
                            circleSize="38px"
                            circleBg={color ? color : '#fff'}
                            circleIconHeading={true}
                            icon={(props) => (
                              <FaHorseHead
                                {...props}
                                size={18}
                                color={
                                  backgroundColor ? backgroundColor : '#313B47'
                                }
                              />
                            )}
                            fontSize="23px"
                            fontWeight={'bold'}
                            color={color ? color : '#fff'}
                            minW={250}
                            maxW={250}
                            margin={'15px 0px'}
                            onSideSectionShow={() =>
                              setShow({ ...show, interest: true })
                            }
                          />
                          {/* Interest Component  */}
                          <Interest
                            dndDirection="horizontal"
                            interestStyle={Classes.baseText}
                            borderColor={'#fff'}
                          />
                        </div>
                      </div>
                    </>
                  )}
                </Box>
                <Box minW={580} maxW={580} p={5} h="full">
                  <Name
                    FName={true}
                    SName={true}
                    direction="row"
                    FNameStyle={Classes.hybridName}
                    SNameStyle={Classes.hybridName}
                    fontColor={backgroundColor ? backgroundColor : ''}
                  />
                  {/* Profession Section  */}
                  <Profession
                    professionStyle={Classes.baseTempProfession}
                    fontColor={color ? color : ''}
                  />
                  {/* About Section */}
                  <About minW="full" aboutStyle={Classes.description} />

                  <Box
                    bg={backgroundColor ? backgroundColor : '#313B47'}
                    borderRadius={8}
                    w={'full'}
                    my={6}
                    padding="2"
                    trasnsition="0.5s background"
                    display="flex"
                    justifyContent="center"
                  >
                    {/* Contact Section  */}
                    <Contact
                      parentDirection="row"
                      phone={true}
                      email={true}
                      circleIcon={true}
                      iconColor={color ? color : '#fff'}
                      iconSize={'20px'}
                      style={Classes.profileText}
                      margin={'0px 4px 0px 4px'}
                    />
                  </Box>
                  {/* Education Section  */}
                  {resumeData?.education?.visible && (
                    <div className={Classes.sideMenu}>
                      <div
                        className={Classes.sideMenuBox}
                        style={{ marginTop: '0px' }}
                      >
                        {/* Section Side Menu */}
                        {show.education && (
                          <SectionSideMenu
                            bg={backgroundColor ? backgroundColor : '#313B47'}
                            onHide={() =>
                              setShow({ ...show, education: false })
                            }
                            onDelete={EDUCATION}
                            iconColor={color ? color : ''}
                          />
                        )}
                      </div>
                      <div>
                        {/* Heading For Education Section  */}
                        <Heading
                          title="EDUCATION"
                          circleSize="38px"
                          circleBg={
                            backgroundColor ? backgroundColor : '#313B47'
                          }
                          circleIconHeading={true}
                          icon={(props) => (
                            <MdCastForEducation
                              {...props}
                              size={18}
                              color={color ? color : 'white'}
                            />
                          )}
                          fontSize="23px"
                          fontWeight={'bold'}
                          color={backgroundColor ? backgroundColor : '#313B47'}
                          margin={'0px 0px 10px 0px'}
                          onSideSectionShow={() =>
                            setShow({ ...show, education: true })
                          }
                        />
                        {/* Education Components */}
                        <Education
                          institution={true}
                          degree={true}
                          degree_placeholder="Study Program"
                          date={true}
                          location={true}
                          institutionStyle={Classes.institute}
                          degreeStyle={Classes.programText}
                          dateStyle={Classes.date}
                          locationStyle={Classes.date}
                        />
                      </div>
                    </div>
                  )}
                  {/* Work Experience Section */}
                  {resumeData?.work?.visible && (
                    <div className={Classes.sideMenu}>
                      <div className={Classes.sideMenuBox}>
                        {/* Section Side Menu */}
                        {show.work && (
                          <SectionSideMenu
                            bg={backgroundColor ? backgroundColor : '#313B47'}
                            onHide={() => setShow({ ...show, work: false })}
                            onDelete={WORK}
                            iconColor={color ? color : ''}
                          />
                        )}
                      </div>
                      <div>
                        {/* Work Experience Heading  */}
                        <Heading
                          title="WORK EXPERIENCE"
                          circleSize="38px"
                          circleBg={
                            backgroundColor ? backgroundColor : '#313B47'
                          }
                          circleIconHeading={true}
                          icon={(props) => (
                            <BsFillLayersFill
                              {...props}
                              size={18}
                              color={color ? color : 'white'}
                            />
                          )}
                          fontSize="23px"
                          fontWeight={'bold'}
                          color={backgroundColor ? backgroundColor : '#313B47'}
                          minW={'full'}
                          maxW="full"
                          margin={'10px 0px'}
                          onSideSectionShow={() =>
                            setShow({ ...show, work: true })
                          }
                        />
                        {/* Work Experience Components */}
                        <WorkExperience
                          date={true}
                          position={true}
                          company={true}
                          location={true}
                          summary={true}
                          summary_placeholder="Company Description (optional,fill when the company is not well known"
                          location_placeholder="Country,City"
                          dateStyle={Classes.date}
                          positionStyle={Classes.programText}
                          companyStyle={Classes.institute}
                          locationStyle={Classes.date}
                          summaryStyle={Classes.date}
                        />
                      </div>
                    </div>
                  )}
                  {/* Project Section  */}
                  {resumeData?.projects?.visible && (
                    <div className={Classes.sideMenu}>
                      <div className={Classes.sideMenuBox}>
                        {/* Section Side Menu */}
                        {show.project && (
                          <SectionSideMenu
                            bg={backgroundColor ? backgroundColor : '#313B47'}
                            onHide={() => setShow({ ...show, project: false })}
                            onDelete={PROJECT}
                            iconColor={color ? color : ''}
                          />
                        )}
                      </div>
                      <div>
                        {/* project Section Heading */}
                        <Heading
                          title="PERSONAL PROJECTS"
                          circleSize="38px"
                          circleBg={
                            backgroundColor ? backgroundColor : '#313B47'
                          }
                          circleIconHeading={true}
                          icon={(props) => (
                            <GoProject
                              {...props}
                              size={18}
                              color={color ? color : 'white'}
                            />
                          )}
                          fontSize="23px"
                          fontWeight={'bold'}
                          color={backgroundColor ? backgroundColor : '#313B47'}
                          minW={'full'}
                          maxW={'full'}
                          margin={'15px 0px'}
                          onSideSectionShow={() =>
                            setShow({ ...show, project: true })
                          }
                        />
                        {/* project Component */}
                        <Project
                          project={true}
                          duration={true}
                          summary={true}
                          projectStyle={Classes.projectTitleText}
                          summaryStyle={Classes.description}
                          durationStyle={Classes.description}
                          projectPlaceholder={'Project Name'}
                          durationPlaceholder="Project Duration"
                          summaryPlaceholder="Project Summary"
                        />
                      </div>
                    </div>
                  )}
                  {/* Organization Section */}
                  {resumeData?.organization?.visible && (
                    <div className={Classes.sideMenu}>
                      <div className={Classes.sideMenuBox}>
                        {/* Section Side Menu */}
                        {show.organization && (
                          <SectionSideMenu
                            bg={backgroundColor ? backgroundColor : '#313B47'}
                            onHide={() =>
                              setShow({ ...show, organization: false })
                            }
                            onDelete={ORGANIZATION}
                            iconColor={color ? color : ''}
                          />
                        )}
                      </div>
                      <div>
                        {/* Organization Heading */}
                        <Heading
                          title="ORGANIZATION"
                          circleSize="38px"
                          circleBg={
                            backgroundColor ? backgroundColor : '#313B47'
                          }
                          circleIconHeading={true}
                          icon={(props) => (
                            <GiOrganigram
                              {...props}
                              size={18}
                              color={color ? color : 'white'}
                            />
                          )}
                          fontSize="23px"
                          fontWeight={'bold'}
                          color={backgroundColor ? backgroundColor : '#313B47'}
                          minW={250}
                          maxW={250}
                          margin={'15px 0px'}
                          onSideSectionShow={() =>
                            setShow({ ...show, organization: true })
                          }
                        />
                        {/* Organization Component */}
                        <Organization
                          organization={true}
                          date={true}
                          role={true}
                          organizationStyle={Classes.projectTitleText}
                          dateStyle={Classes.description}
                          roleStyle={Classes.description}
                          rolePlaceholder="Role"
                        />
                      </div>
                    </div>
                  )}
                  {/* Certificate Section  */}
                  {resumeData?.certifications?.visible && (
                    <div className={Classes.sideMenu}>
                      <div className={Classes.sideMenuBox}>
                        {/* Section Side Menu */}
                        {show.certificates && (
                          <SectionSideMenu
                            bg={backgroundColor ? backgroundColor : '#313B47'}
                            onHide={() =>
                              setShow({ ...show, certificates: false })
                            }
                            onDelete={CERTIFICATE}
                            iconColor={color ? color : ''}
                          />
                        )}
                      </div>
                      <div>
                        {/* Certificate Heading */}
                        <Heading
                          title="CERTIFICATES"
                          circleSize="38px"
                          circleBg={
                            backgroundColor ? backgroundColor : '#313B47'
                          }
                          circleIconHeading={true}
                          icon={(props) => (
                            <TbCertificate
                              {...props}
                              size={18}
                              color={color ? color : 'white'}
                            />
                          )}
                          fontSize="23px"
                          fontWeight={'bold'}
                          color={backgroundColor ? backgroundColor : '#313B47'}
                          minW={250}
                          maxW={250}
                          margin={'15px 0px'}
                          onSideSectionShow={() =>
                            setShow({ ...show, certificates: true })
                          }
                        />
                        {/* Certificate Component */}
                        <Certificate
                          issueDate={true}
                          certificate={true}
                          institute={true}
                          certificateStyle={Classes.projectTitleText}
                          issueDateStyle={Classes.description}
                          instituteStyle={Classes.description}
                        />
                      </div>
                    </div>
                  )}
                </Box>
              </HStack>
            </Box>
          </Box>
        </Flex>
      </TempLayout>
    </div>
  );
};

export default SkillBaseTemp;
