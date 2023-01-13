import { Box, Flex, HStack } from '@chakra-ui/react';
import { MdCastForEducation } from 'react-icons/md';
import { BsFillLayersFill } from 'react-icons/bs';
import { GiSkills, GiOrganigram } from 'react-icons/gi';
import { IoLanguageOutline } from 'react-icons/io5';
import { GoProject } from 'react-icons/go';
import { TbCertificate } from 'react-icons/tb';
import { FaHorseHead } from 'react-icons/fa';
import ImageSelector from '../../src/components/imageSelector';
import Name from '../../src/components/commonSection/Name';
import Profession from '../../src/components/commonSection/Profession';
import Classes from '../../styles/templates/hybridTemplate.module.css';
import Contact from '../../src/components/commonSection/Contact';
import About from '../../src/components/commonSection/About';
import SectionSideMenu from '../../src/components/tempSectionSide/SectionSideMenu';
import Heading from '../../src/components/commonSection/Heading';
import Education from '../../src/components/commonSection/Education';
import WorkExperience from '../../src/components/commonSection/WorkExperience';
import RowSkill from '../../src/components/commonSection/RowSkill';
import Project from '../../src/components/commonSection/Project';
import Organization from '../../src/components/commonSection/Organization';
import Certificate from '../../src/components/commonSection/Certificate';
import Language from '../../src/components/commonSection/Language';
import Interest from '../../src/components/commonSection/Interest';
import useShow from '../../src/components/tempSectionSide/useShow';
import { useSelector } from 'react-redux';
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
import TempLayout from '../../src/components/tempNav/TempLayout';
import ChangeTempBtn from '../../src/components/changeTempbtn/ChangeTempBtn';
import PDFGenerater from "../../src/components/tempNav/PDFGenerater";

const ExecutiveTemp = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  // custom Hook For Template
  const [show, setShow] = useShow();
  // PDF Download Hook
  const { downloadPDFHandler, pdfRef } = PDFGenerater();

  return (
    //  ~~~~~~~~~~~~~~ Executive Resume Template ~~~~~~~~~~~~~~  //
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
          alignItems={{ base: 'none', lg: 'center' }}
        >
          <Box
            margin={'100px 20px 30px 20px'}
          >
            <Box
              minW={910}
              pt={12}
              pb={2}
              px={2}
              bg={'white'}
              borderRadius={6}
              borderWidth="1px"
              borderColor={'#00000023'}
              ref={pdfRef}
            >
              {/* =============== Profile Section =============== */}
              <HStack>
                <ImageSelector
                  minWidth={150}
                  maxWidth={150}
                  minHeight={150}
                  maxHeight={150}
                  marginLeft="40px"
                  marginTop={'5px'}
                />
                <Box>
                  <Name
                    FName={true}
                    SName={true}
                    direction="row"
                    FNameStyle={Classes.hybridName}
                    SNameStyle={Classes.hybridName}
                  />
                  {/* Profession Section  */}
                  <Profession professionStyle={Classes.ProfessionHybrid} />
                </Box>
              </HStack>
              <HStack minH={'80px'} alignItems="flex-start" mt={-10}>
                <Box maxW={'182px'} minW={'182px'}></Box>
                <Box maxW={'660px'} minW={'660px'} p={2}>
                  {/* About Section */}
                  <About
                    maxW={'660px'}
                    minW={'660px'}
                    aboutStyle={Classes.profile}
                  />
                </Box>
              </HStack>
              <Box
                w={'full'}
                display="flex"
                justifyContent="center"
                borderRadius={6}
                bg="blackAlpha.200"
                py={2}
              >
                {/* Contact Section  */}
                <Contact
                  parentDirection="row"
                  phone={true}
                  email={true}
                  location={true}
                  circleIcon={true}
                  iconColor="#313c4e"
                  iconSize={'20px'}
                  style={Classes.profile}
                  margin={'0px 4px 0px 4px'}
                />
              </Box>
              <HStack mt={5} alignItems="stretch" py={'20px'}>
                <Box minW={580} maxW={580} h="full">
                  <Box pl={8}>
                    {/* Education Section  */}
                    {resumeData?.education?.visible && (
                      <div className={Classes.sideMenu}>
                        <div className={Classes.sideMenuBox}>
                          {/* Section Side Menu */}
                          {show.education && (
                            <SectionSideMenu
                              bg="#006772"
                              iconColor={"#fff"}
                              onHide={() =>
                                setShow({ ...show, education: false })
                              }
                              onDelete={EDUCATION}
                            />
                          )}
                        </div>
                        <div>
                          {/* Heading For Education Section  */}
                          <Heading
                            title="EDUCATION"
                            circleSize="38px"
                            circleBg="#313B47"
                            circleIconHeading={true}
                            icon={(props) => (
                              <MdCastForEducation
                                {...props}
                                size={18}
                                color={'white'}
                              />
                            )}
                            fontSize="23px"
                            fontWeight={'bold'}
                            color="#313B47"
                            margin={' 10px 0px'}
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
                              bg="#006772"
                              iconColor={"#fff"}
                              onHide={() => setShow({ ...show, work: false })}
                              onDelete={WORK}
                            />
                          )}
                        </div>
                        <div>
                          {/* Work Experience Heading  */}
                          <Heading
                            title="WORK EXPERIENCE"
                            circleSize="38px"
                            circleBg="#313B47"
                            circleIconHeading={true}
                            icon={(props) => (
                              <BsFillLayersFill
                                {...props}
                                size={18}
                                color={'white'}
                              />
                            )}
                            fontSize="23px"
                            fontWeight={'bold'}
                            color="#313B47"
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
                  </Box>
                </Box>
                <Box minW={302} maxW={302} pr={2} borderRadius={6}>
                  {/* skill Section  */}
                  {resumeData?.skills?.visible && (
                    <div className={Classes.sideMenu}>
                      <div className={Classes.width}>
                        {show.skills && (
                          <SectionSideMenu
                            bg="#006772"
                            iconColor={"#fff"}
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
                          circleBg="#313B47"
                          circleIconHeading={true}
                          icon={(props) => (
                            <GiSkills {...props} size={18} color={'white'} />
                          )}
                          fontSize="23px"
                          fontWeight={'bold'}
                          color="#313B47"
                          minW={250}
                          maxW={250}
                          margin={'10px 0px'}
                          onSideSectionShow={() =>
                            setShow({ ...show, skills: true })
                          }
                        />
                        {/* Skill Row Components */}
                        <RowSkill skillStyle={Classes.skillText} />
                      </div>
                    </div>
                  )}
                  {/* Project Section  */}
                  {resumeData?.projects?.visible && (
                    <div className={Classes.sideMenu}>
                      <div className={Classes.width}>
                        {/* Section Side Menu */}
                        {show.project && (
                          <SectionSideMenu
                            bg="#006772"
                            iconColor={"#fff"}
                            onHide={() => setShow({ ...show, project: false })}
                            onDelete={PROJECT}
                          />
                        )}
                      </div>
                      <div>
                        {/* project Section Heading */}
                        <Heading
                          title="PERSONAL PROJECTS"
                          circleSize="38px"
                          circleBg="#313B47"
                          circleIconHeading={true}
                          icon={(props) => (
                            <GoProject {...props} size={18} color={'white'} />
                          )}
                          fontSize="23px"
                          fontWeight={'bold'}
                          color="#313B47"
                          minW={250}
                          maxW={250}
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
                      <div className={Classes.width}>
                        {/* Section Side Menu */}
                        {show.organization && (
                          <SectionSideMenu
                            bg="#006772"
                            iconColor={"#fff"}
                            onHide={() =>
                              setShow({ ...show, organization: false })
                            }
                            onDelete={ORGANIZATION}
                          />
                        )}
                      </div>
                      <div>
                        {/* Organization Heading */}
                        <Heading
                          title="ORGANIZATION"
                          circleSize="38px"
                          circleBg="#313B47"
                          circleIconHeading={true}
                          icon={(props) => (
                            <GiOrganigram {...props} size={18} color={'white'} />
                          )}
                          fontSize="23px"
                          fontWeight={'bold'}
                          color="#313B47"
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
                      <div className={Classes.width}>
                        {/* Section Side Menu */}
                        {show.certificates && (
                          <SectionSideMenu
                            bg="#006772"
                            iconColor={"#fff"}
                            onHide={() =>
                              setShow({ ...show, certificates: false })
                            }
                            onDelete={CERTIFICATE}
                          />
                        )}
                      </div>
                      <div>
                        {/* Certificate Heading */}
                        <Heading
                          title="CERTIFICATES"
                          circleSize="38px"
                          circleBg="#313B47"
                          circleIconHeading={true}
                          icon={(props) => (
                            <TbCertificate {...props} size={18} color={'white'} />
                          )}
                          fontSize="23px"
                          fontWeight={'bold'}
                          color="#313B47"
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
                  {/* Language Section */}
                  {resumeData?.languages?.visible && (
                    <div className={Classes.sideMenu}>
                      <div className={Classes.width}>
                        {/* Section Side Menu */}
                        {show.languages && (
                          <SectionSideMenu
                            bg="#006772"
                            iconColor={"#fff"}
                            onHide={() => setShow({ ...show, languages: false })}
                            onDelete={LANGUAGES}
                          />
                        )}
                      </div>
                      <div>
                        {/* languages Heading */}
                        <Heading
                          title="LANGUAGES"
                          circleSize="38px"
                          circleBg="#313B47"
                          circleIconHeading={true}
                          icon={(props) => (
                            <IoLanguageOutline
                              {...props}
                              size={18}
                              color={'white'}
                            />
                          )}
                          fontSize="23px"
                          fontWeight={'bold'}
                          color="#313B47"
                          minW={250}
                          maxW={250}
                          margin={'15px 0px'}
                          onSideSectionShow={() =>
                            setShow({ ...show, languages: true })
                          }
                        />
                        {/* Language Component */}
                        <Language langStyle={Classes.projectTitleText} />
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
                              bg="#006772"
                              iconColor={"#fff"}
                              onHide={() => setShow({ ...show, interest: false })}
                              onDelete={INTEREST}
                            />
                          )}
                        </div>
                        <div>
                          {/* Interest Heading */}
                          <Heading
                            title="INTEREST"
                            circleSize="38px"
                            circleBg="#313B47"
                            circleIconHeading={true}
                            icon={(props) => (
                              <FaHorseHead {...props} size={18} color={'white'} />
                            )}
                            fontSize="23px"
                            fontWeight={'bold'}
                            color="#313B47"
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
                            interestStyle={Classes.skillText}
                          />
                        </div>
                      </div>
                    </>
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
export default ExecutiveTemp;
