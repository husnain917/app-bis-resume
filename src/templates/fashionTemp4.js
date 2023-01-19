import { Box, Flex, HStack } from '@chakra-ui/react';
import React from 'react';
import Name from '../components/commonSection/Name';
import Classes from '../../styles/templates/fashionTemp4.module.css';
import Heading from '../components/commonSection/Heading';
import About from '../components/commonSection/About';
import Education from '../components/commonSection/Education';
import WorkExperience from '../components/commonSection/WorkExperience';
import Contact from '../components/commonSection/Contact';
import { useSelector } from 'react-redux';
import useShow from '../components/tempSectionSide/useShow';
import SectionSideMenu from '../components/tempSectionSide/SectionSideMenu';
import {
    EDUCATION,
    WORK,
} from '../components/tempSectionSide/SectionSideConstant';
import ImageSelector from '../components/imageSelector';

const FashionTemp4 = () => {
    let resumeData = useSelector((state) => state.editorReducer.resumeData);
    const [show, setShow] = useShow();
    const { backgroundColor, color } = useSelector(
        (store) => store.themeReducer.theme
    );

    return (
        <Flex
            justifyContent={{ base: 'none', lg: 'center' }}
            flexDir={'column'}
            alignItems={{ sm: 'none', lg: 'center' }}
            bg={'#fff'}
        >
            <Box
                mb={'20px'}
            >
                <Box
                    minW={830}
                    maxW={830}
                    h={'full'}
                    borderRadius={6}
                    bg={backgroundColor ? backgroundColor : '#fcd5ce'}
                    pl={'90px'}
                    pr={'70px'}
                    pt={8}
                    pb={20}
                    borderColor={'#00000023'}
                >
                    <HStack>
                        <ImageSelector
                            minWidth={150}
                            maxWidth={150}
                            minHeight={150}
                            maxHeight={150}
                        />
                        <Name
                            FName={true}
                            SName={true}
                            color={color}
                            FNameStyle={Classes.fashionName}
                            SNameStyle={Classes.fashionName}
                            parentContainerStyle={Classes.ml}
                        />
                    </HStack>
                    <HStack mt={10} alignItems="flex-start">
                        <Heading
                            title={'ABOUT ME'}
                            line={true}
                            lineW={'100px'}
                            lineBg={color}
                            letterSpacing={3}
                            fontSize={23}
                            color={color}
                            fontWeight={'600'}
                            lineAlign="flex-end"
                            minW={'fit-content'}
                            maxW="fit-content"
                            margin={'0px 40px 0px 40px '}
                        />
                        <About
                            minW="420px"
                            color={color}
                            maxW="420px"
                            aboutStyle={Classes.aboutText}
                            margin={'40px'}
                        />
                    </HStack>
                    {resumeData?.education?.visible && (
                        <HStack mt={10} alignItems="flex-start">
                            <Box w="20px">
                                {show.education && (
                                    <SectionSideMenu
                                        onHide={() => setShow({ ...show, education: false })}
                                        onDelete={EDUCATION}
                                        bg="#006772"
                                        iconColor={"#fff"}
                                    />
                                )}
                            </Box>
                            <Heading
                                title={'EDUCATION'}
                                line={true}
                                lineW={'100px'}
                                lineBg={color}
                                letterSpacing={3}
                                fontSize={23}
                                color={color}
                                fontWeight={'600'}
                                lineAlign="flex-end"
                                minW={'fit-content'}
                                maxW="fit-content"
                                margin={'0px 40px 0px 0px '}
                                onSideSectionShow={() =>
                                    setShow({ ...show, education: true })
                                }
                            />

                            <Education
                                textColor={color}
                                degree={true}
                                institution={true}
                                date={true}
                                summary={true}
                                degreeStyle={Classes.programText}
                                institutionStyle={Classes.institute}
                                degree_placeholder="Study Program"
                                summary_placeholder="Summary"
                                dateStyle={Classes.eduText}
                                summaryStyle={Classes.eduText}
                                parentContainerStyle={Classes.ml}
                            />
                        </HStack>
                    )}
                    {resumeData?.work?.visible && (
                        <HStack alignItems={'flex-start'} mt={10}>
                            <Box w="20px">
                                {show.work && (
                                    <SectionSideMenu
                                        onHide={() => setShow({ ...show, work: false })}
                                        onDelete={WORK}
                                        bg="#006772"
                                        iconColor={"#fff"}
                                    />
                                )}
                            </Box>
                            <Heading
                                title={'EXPERIENCE'}
                                line={true}
                                lineW={'100px'}
                                lineBg={color}
                                letterSpacing={3}
                                fontSize={23}
                                color={color}
                                fontWeight={'600'}
                                lineAlign="flex-end"
                                minW={'fit-content'}
                                maxW="fit-content"
                                onSideSectionShow={() => setShow({ ...show, work: true })}
                            />
                            <WorkExperience
                                position={true}
                                textColor={color}
                                company={true}
                                date={true}
                                summary={true}
                                summary_placeholder="Summary"
                                positionStyle={Classes.programText}
                                companyStyle={Classes.institute}
                                dateStyle={Classes.eduText}
                                summaryStyle={Classes.eduText}
                                parentContainerStyle={Classes.ml}
                            />
                        </HStack>
                    )}
                    <HStack alignItems={'flex-start'} mt={10}>
                        <Heading
                            title={'CONTACT'}
                            line={true}
                            lineW={'100px'}
                            lineBg={color}
                            letterSpacing={3}
                            fontSize={23}
                            color={color}
                            fontWeight={'600'}
                            lineAlign="flex-end"
                            minW={'fit-content'}
                            maxW="fit-content"
                            margin={'0px 40px 0px 60px '}
                        />
                        <Contact
                            color={color}
                            location={true}
                            email={true}
                            website={true}
                            phone={true}
                            iconSize={'16px'}
                            iconColor={color}
                            circleIcon={true}
                            style={Classes.contact}
                        />
                    </HStack>
                </Box>
            </Box>
        </Flex>
    );
};

export default FashionTemp4;