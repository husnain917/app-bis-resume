import { Box, Flex, HStack, Link } from '@chakra-ui/react';
import { MdCastForEducation } from 'react-icons/md';
import { BsFillLayersFill } from 'react-icons/bs';
import { GiSkills, GiOrganigram } from 'react-icons/gi';
import { IoLanguageOutline } from 'react-icons/io5';
import { GoProject } from 'react-icons/go';
import { TbCertificate } from 'react-icons/tb';
import { FaHorseHead } from 'react-icons/fa';
import style from '../../styles/templates/template1.module.scss';
import Classes from '../../src/components/hybridTemplate/hybridStyle.module.css';
import { Tooltip } from 'react-tippy';
import ImageSection from '../../src/components/commonSection/ImageSection';
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
const hybridTemplate = () => {
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
        justifyContent={{ base: 'none', lg: 'center' }}
        bg={'blackAlpha.100'}
        overflow="auto"
        flexDir={'column'}
        alignItems={{ sm: 'none', md: 'center' }}
      >
        <Box
          minW={910}
          pt={12}
          pb={2}
          px={2}
          bg={'white'}
          m={4}
          borderRadius={6}
        >
          <HStack>
            <ImageSection margin=" 0px 0px 0px 40px" />
            <Box>
              <Name
                FName={true}
                SName={true}
                direction="row"
                FNameStyle={Classes.hybridName}
                SNameStyle={Classes.hybridName}
              />
              <Profession professionStyle={Classes.ProfessionHybrid} />
            </Box>
          </HStack>

          <HStack
            bg={'#313B47'}
            width="full"
            minH={'110px'}
            borderTopRightRadius={6}
            borderTopLeftRadius={6}
            alignItems="flex-start"
            mt={-10}
          >
            <Box maxW={'200px'} minW={'200px'}></Box>
            <Box maxW={'660px'} minW={'660px'} p={2}>
              <About
                aboutStyle={Classes.profileText}
                maxW={'660px'}
                minW={'660px'}
              />
            </Box>
          </HStack>
          <Box
            bg={'#449399'}
            borderBottomRightRadius={6}
            borderBottomLeftRadius={6}
            w={'full'}
            display="flex"
            justifyContent="center"
          >
            <Contact
              parentDirection="row"
              phone={true}
              email={true}
              location={true}
              circleIcon={true}
              iconColor="#fff"
              iconSize={'20px'}
              style={Classes.profileText}
              margin={'0px 4px 0px 4px'}
            />
          </Box>
          <HStack mt={5} alignItems="stretch">
            <Box minW={580} maxW={580} h="full">
              <Box pl={8}>
                <Heading
                  title="EDUCATION"
                  circleSize="38px"
                  circleBg="#313B47"
                  circleIconHeading={true}
                  icon={(props) => (
                    <MdCastForEducation {...props} size={18} color={'white'} />
                  )}
                  fontSize="23px"
                  fontWeight={'bold'}
                  color="#313B47"
                  margin={'0px 0px 10px 0px'}
                />
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
                <Heading
                  title="WORK EXPERIENCE"
                  circleSize="38px"
                  circleBg="#313B47"
                  circleIconHeading={true}
                  icon={(props) => (
                    <BsFillLayersFill {...props} size={18} color={'white'} />
                  )}
                  fontSize="23px"
                  fontWeight={'bold'}
                  color="#313B47"
                  minW={'full'}
                  maxW="full"
                  margin={'10px 0px'}
                />

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
              </Box>
            </Box>
            <Box minW={302} maxW={302} bg="#D6D6D6" p={4} borderRadius={6}>
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
                minW={302}
                maxW={302}
                margin={'10px 0px'}
              />
              <RowSkill skillStyle={Classes.skillText} />
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
              />

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
              />
              <Organization
                organization={true}
                date={true}
                role={true}
                organizationStyle={Classes.projectTitleText}
                dateStyle={Classes.description}
                roleStyle={Classes.description}
                rolePlaceholder="Role"
              />
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
              />
              <Certificate
                issueDate={true}
                certificate={true}
                institute={true}
                certificateStyle={Classes.projectTitleText}
                issueDateStyle={Classes.description}
                instituteStyle={Classes.description}
              />

              <Heading
                title="LANGUAGES"
                circleSize="38px"
                circleBg="#313B47"
                circleIconHeading={true}
                icon={(props) => (
                  <IoLanguageOutline {...props} size={18} color={'white'} />
                )}
                fontSize="23px"
                fontWeight={'bold'}
                color="#313B47"
                minW={250}
                maxW={250}
                margin={'15px 0px'}
              />
              <Language langStyle={Classes.projectTitleText} />
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
              />
              <Interest
                dndDirection="horizontal"
                interestStyle={Classes.skillText}
              />
            </Box>
          </HStack>
        </Box>
      </Flex>
    </div>
  );
};

export default hybridTemplate;
