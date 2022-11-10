import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { BsFillPersonFill, BsLayersFill } from 'react-icons/bs';
import { IoLanguageSharp } from 'react-icons/io5';
import { MdCastForEducation, MdEmail } from 'react-icons/md';
import style from '../../styles/templates/template1.module.scss';
import Link from 'next/link';
import Style from '../../src/components/fashionTemp1/fashionTemp1.module.css';
import { Tooltip } from 'react-tippy';
import WorkExperience from '../../src/components/commonSection/WorkExperience';
import Reference from '../../src/components/commonSection/Reference';
import About from '../../src/components/commonSection/About';
import Language from '../../src/components/commonSection/Language';
import Heading from '../../src/components/commonSection/Heading';
import Education from '../../src/components/commonSection/Education';
import Skill from '../../src/components/commonSection/Skill';
import Name from '../../src/components/commonSection/Name';
import Profession from '../../src/components/commonSection/Profession';
import Contact from '../../src/components/commonSection/Contact';
const fashionTemp1 = () => {
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
        overflow="auto"
        flexDir={'column'}
        alignItems={{ sm: 'none', md: 'center' }}
      >
        <HStack
          minW={830}
          maxW={830}
          h={'full'}
          alignItems="flex-start"
          borderRadius={6}
          bg={'#fff'}
          my={10}
          py={8}
          px={10}
        >
          <Box maxW={336} minW={336}>
            <Name
              direction="column"
              FName={true}
              SName={true}
              FNameStyle={Style.fashionName}
              SNameStyle={Style.fashionName}
            />
            <Profession professionStyle={Style.ProfessionFashion} />
            <Heading
              title={'ABOUT ME'}
              headBg={'#3498DB'}
              iconHeading={true}
              icon={(props) => (
                <BsFillPersonFill {...props} size={20} color={'#fff'} />
              )}
              color={'white'}
              fontSize={20}
              fontWeight="600"
              letterSpacing={3}
              minW={250}
              maxW={250}
              textPadding={'0px 0px 1px 0px'}
              padding={'0px 0px 0px 5px'}
              margin={'10px 0px 0px 0px'}
            />
            &nbsp;
            <About aboutStyle={Style.profileText} />
            <Heading
              title={'PERSONAL'}
              headBg={'#3498DB'}
              iconHeading={true}
              icon={(props) => (
                <BsFillPersonFill {...props} size={20} color={'#fff'} />
              )}
              color={'white'}
              fontSize={20}
              fontWeight="600"
              textPadding={'0px 0px 1px 0px'}
              padding={'0px 0px 0px 5px'}
              letterSpacing={3}
              minW={250}
              maxW={250}
              margin={'10px 0px 0px 0px'}
            />
            &nbsp;
            <Skill skillStyle={Style.personalText} />
            <Heading
              title={'LANGUAGES'}
              headBg={'#3498DB'}
              iconHeading={true}
              icon={(props) => (
                <IoLanguageSharp {...props} size={20} color={'#fff'} />
              )}
              color={'white'}
              fontSize={20}
              fontWeight="600"
              textPadding={'0px 0px 1px 0px'}
              padding={'0px 0px 0px 5px'}
              letterSpacing={3}
              minW={250}
              maxW={250}
              margin={'10px 0px 0px 0px'}
            />
            &nbsp;
            <Language langStyle={Style.langText} />
          </Box>
          <Box maxW={406} minW={406}>
            <Contact
              location={true}
              email={true}
              website={true}
              phone={true}
              iconSize={'16px'}
              iconColor="#3498DB"
              circleIcon={true}
            />
            <Heading
              title={'EDUCATION'}
              headBg={'#3498DB'}
              iconHeading={true}
              icon={(props) => (
                <MdCastForEducation {...props} size={20} color={'#fff'} />
              )}
              color={'white'}
              fontSize={20}
              fontWeight="600"
              textPadding={'0px 0px 1px 0px'}
              padding={'0px 0px 0px 5px'}
              letterSpacing={3}
              minW={400}
              maxW={400}
              margin={'10px 0px 0px 0px'}
            />
            &nbsp;
            <Education
              date={true}
              summary={true}
              degree={true}
              institution={true}
              degree_placeholder="Study Program"
              degreeStyle={Style.date}
              dateStyle={Style.date}
              institutionStyle={Style.date}
              summaryStyle={Style.profileText}
              dateDirection="row"
              direction="row"
            />
            <Heading
              title={'EXPERIENCE'}
              margin={'10px 0px 0px 0px'}
              headBg={'#3498DB'}
              iconHeading={true}
              icon={(props) => (
                <BsLayersFill {...props} size={20} color={'#fff'} />
              )}
              color={'white'}
              fontSize={20}
              fontWeight="600"
              textPadding={'0px 0px 1px 0px'}
              padding={'0px 0px 0px 5px'}
              letterSpacing={3}
              minW={400}
              maxW={400}
            />
            &nbsp;
            <WorkExperience
              company={true}
              date={true}
              position={true}
              summary={true}
              dateStyle={Style.date}
              companyStyle={Style.date}
              positionStyle={Style.date}
              summaryStyle={Style.profileText}
              direction="row"
            />
            <Heading
              title={'REFERENCE'}
              headBg={'#3498DB'}
              margin={'10px 0px 0px 0px'}
              iconHeading={true}
              icon={(props) => <MdEmail {...props} size={20} color={'#fff'} />}
              color={'white'}
              fontSize={20}
              fontWeight="600"
              textPadding={'0px 0px 1px 0px'}
              padding={'0px 0px 0px 5px'}
              letterSpacing={3}
              minW={400}
              maxW={400}
            />
            &nbsp;
            <Reference
              name={true}
              profession={true}
              email={true}
              phone={true}
              phoneStyle={Style.profileText}
              emailStyle={Style.profileText}
              professionStyle={Style.profileText}
              nameStyle={Style.referenceName}
              DndDirection="horizontal"
            />
          </Box>
        </HStack>
      </Flex>
    </div>
  );
};
export default fashionTemp1;
