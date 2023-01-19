import { Box, Flex, HStack } from '@chakra-ui/react';
import Heading from '../components/commonSection/Heading';
import Contact from '../components/commonSection/Contact';
import Classes from '../../styles/templates/fashionTemp5.module.css';
import Skill from '../components/commonSection/Skill';
import Language from '../components/commonSection/Language';
import Name from '../components/commonSection/Name';
import Profession from '../components/commonSection/Profession';
import About from '../components/commonSection/About';
import WorkExperience from '../components/commonSection/WorkExperience';
import Education from '../components/commonSection/Education';
import useShow from '../components/tempSectionSide/useShow';
import SectionSideMenu from '../components/tempSectionSide/SectionSideMenu';
import {
    EDUCATION,
    LANGUAGES,
    SKILL,
    WORK,
} from '../components/tempSectionSide/SectionSideConstant';
import { useSelector } from 'react-redux';
import ImageSelector from '../components/imageSelector';

const FashionTemp5 = () => {
    let resumeData = useSelector((state) => state.editorReducer.resumeData);
    let font = useSelector((state) => state.fontReducer.font);
    console.log('Font:', font);
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
            <Box mb={'20px'}>
                <HStack
                    minW={830}
                    maxW={830}
                    alignItems="stretch"
                    borderRadius={6}
                    bg={'white'}
                    borderColor={'#00000033'}
                >
                    <Box
                        minW={280}
                        maxW={280}
                        bgColor={backgroundColor ? backgroundColor : '#1c2125'}
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
                            borderColor={color ? color : ''}
                        />

                        <Heading
                            title={'CONTACT'}
                            color={color ? color : '#fff'}
                            line={true}
                            minW={'full'}
                            lineW={'230px'}
                            margin="30px 0px 0px 5px"
                            lineBg={color ? color : '#fff'}
                            lineH="3px"
                            fontWeight={700}
                            fontSize={'18px'}
                        />
                        <Contact
                            phone={true}
                            email={true}
                            location={true}
                            color={color ? color : '#fff'}
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
                                            bg="#006772"
                                            iconColor={"#fff"}
                                            onDelete={SKILL}
                                        />
                                    )}
                                </div>
                                <div>
                                    <Heading
                                        title={'SKILLS'}
                                        color={color ? color : '#fff'}
                                        line={true}
                                        minW={'full'}
                                        lineW={'230px'}
                                        margin="15px 0px 0px 10px"
                                        lineBg={color ? color : '#fff'}
                                        lineH="3px"
                                        fontWeight={700}
                                        fontSize={'18px'}
                                        onSideSectionShow={() =>
                                            setShow({ ...show, skills: true })
                                        }
                                    />
                                    <Skill
                                        color={color ? color : '#fff'}
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
                                            bg="#006772"
                                            iconColor={"#fff"}
                                            onDelete={LANGUAGES}
                                        />
                                    )}
                                </div>
                                <div>
                                    <Heading
                                        title={'LANGUAGES'}
                                        color={color ? color : '#fff'}
                                        line={true}
                                        minW={'full'}
                                        lineW={'230px'}
                                        margin="15px 0px 0px 10px"
                                        lineBg={color ? color : '#fff'}
                                        lineH="3px"
                                        fontWeight={700}
                                        fontSize={'18px'}
                                        onSideSectionShow={() =>
                                            setShow({ ...show, languages: true })
                                        }
                                    />
                                    <Language
                                        color={color ? color : '#fff'}
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
                        bg={color ? color : '#fff'}
                        paddingTop={'37px'}
                        px={6}
                        pb={6}
                    >
                        <Name
                            FName={true}
                            SName={true}
                            FNameStyle={Classes.fashionName}
                            SNameStyle={Classes.fashionName}
                            fontColor={backgroundColor ? backgroundColor : '#000000'}
                        />
                        <Profession
                            professionStyle={Classes.ProfessionFashion}
                            fontColor={backgroundColor ? backgroundColor : '#000000'}
                        />
                        <Heading
                            title={'ABOUT ME'}
                            color={backgroundColor ? backgroundColor : '#000000'}
                            line={true}
                            minW={'full'}
                            lineW={'480px'}
                            margin="24px 0px 0px 0px"
                            lineBg={backgroundColor ? backgroundColor : '#000000'}
                            lineH="3px"
                            fontWeight={800}
                            fontSize={'25px'}
                        />
                        <About
                            minW={'full'}
                            maxW="full"
                            aboutStyle={Classes.aboutText}
                            fontColor="#000000"
                            fontWeight={'600'}
                        />
                        {resumeData?.work?.visible && (
                            <div className={Classes.sideMenu}>
                                <div
                                    className={Classes.sideMenuBox}
                                    style={{ marginTop: '30px' }}
                                >
                                    {show.work && (
                                        <SectionSideMenu
                                            onHide={() => setShow({ ...show, work: false })}
                                            bg="#006772"
                                            iconColor={"#fff"}
                                            onDelete={WORK}
                                        />
                                    )}
                                </div>
                                <div>
                                    <Heading
                                        title={'WORK EXPERIENCE'}
                                        color={backgroundColor ? backgroundColor : '#000000'}
                                        line={true}
                                        minW={'full'}
                                        lineW={'477px'}
                                        margin="24px 0px 0px 10px"
                                        lineBg={backgroundColor ? backgroundColor : '#000000'}
                                        lineH="3px"
                                        fontWeight={800}
                                        fontSize={'25px'}
                                        onSideSectionShow={() =>
                                            setShow({ ...show, work: true })
                                        }
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
                                            bg="#006772"
                                            iconColor={"#fff"}
                                            onDelete={EDUCATION}
                                        />
                                    )}
                                </div>
                                <div>
                                    <Heading
                                        title={'EDUCATION'}
                                        color={backgroundColor ? backgroundColor : '#000000'}
                                        line={true}
                                        minW={'full'}
                                        lineW={'480px'}
                                        margin="24px 0px 0px 10px"
                                        lineBg={backgroundColor ? backgroundColor : '#000000'}
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
            </Box>
        </Flex>
    );
};
export default FashionTemp5;