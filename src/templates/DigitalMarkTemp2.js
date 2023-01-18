import { Box, HStack } from '@chakra-ui/react';
import Name from '../components/commonSection/Name';
import Classes from '../../styles/templates/digitalMarkTemp2.module.css';
import Profession from '../components/commonSection/Profession';
import About from '../components/commonSection/About';
import Heading from '../components/commonSection/Heading';
import Contact from '../components/commonSection/Contact';
import Skill from '../components/commonSection/Skill';
import Education from '../components/commonSection/Education';
import WorkExperience from '../components/commonSection/WorkExperience';
import { useSelector } from 'react-redux';
import useShow from '../components/tempSectionSide/useShow';
import SectionSideMenu from '../components/tempSectionSide/SectionSideMenu';
import {
    EDUCATION,
    SKILL,
    WORK,
} from '../components/tempSectionSide/SectionSideConstant';
import ImageSelector from '../components/imageSelector';

const DigitalMarkTemp2 = () => {
    let resumeData = useSelector((state) => state.editorReducer.resumeData);
    const [show, setShow] = useShow();
    const { backgroundColor, color } = useSelector(
        (store) => store.themeReducer.theme
    );

    return (
        <Box
            display={'flex'}
            justifyContent={{ base: 'none', md: 'center' }}
            flexDir={'column'}
            alignItems={{ base: 'none', lg: 'center' }}
        >
            <Box
                minW={830}
                bg={'white'}
                borderRadius={6}
                h={'full'}
                pb={4}
                borderWidth="1px"
                borderColor={'#00000033'}
                mb={'20px'}
            >
                <Box
                    bg={backgroundColor ? backgroundColor : '#E0EFFA'}
                    h={'60px'}
                    borderBottomRightRadius={25}
                    minW={410}
                    maxW={410}
                ></Box>
                <HStack minW={830} maxW={830} alignItems="flex-start">
                    <Box minW={410} maxW={410}>
                        <Name
                            FName={true}
                            SName={true}
                            direction="row"
                            margin={'20px 0px 0px 20px'}
                            FNameStyle={Classes.digitalName}
                            SNameStyle={Classes.digitalName}
                        />
                        <Box
                            minH={10}
                            bg={backgroundColor ? backgroundColor : '#E0EFFA'}
                            maxW={310}
                            minW={310}
                            borderRightRadius={8}
                            justifyContent="center"
                            alignItems={'center'}
                            pt={0.5}
                            mt={4}
                        >
                            <Profession
                                professionStyle={Classes.ProfessionDigital}
                                fontColor={color ? color : '#000000'}
                            />
                        </Box>
                        <About aboutStyle={Classes.about} minW="full" maxW="full" />
                        <Heading
                            title={'CONTACT'}
                            textMargin="10px 0px 10px 20px"
                            headBg={backgroundColor ? backgroundColor : '#E0EFFA'}
                            borderRadius="0px 8px 8px 0px"
                            fontSize={'23px'}
                            letterSpacing="1px"
                            fontWeight={700}
                            color={color ? color : '#000000'}
                            height="40px"
                            minW={260}
                            maxW={260}
                            margin={'20px 0px 20px 0px'}
                        />
                        <Contact
                            phone={true}
                            email={true}
                            location={true}
                            website={true}
                            heading={true}
                            headingStyle={Classes.contactHead}
                            style={Classes.profileText}
                            direction="column"
                            margin="5px 0px 0px 30px"
                        />
                        {resumeData?.skills?.visible && (
                            <div className={Classes.sideMenu}>
                                <div>
                                    <Heading
                                        title={'SKILLS'}
                                        textMargin="10px 0px 10px 20px"
                                        headBg={backgroundColor ? backgroundColor : '#E0EFFA'}
                                        borderRadius="0px 8px 8px 0px"
                                        fontSize={'23px'}
                                        letterSpacing="1px"
                                        fontWeight={700}
                                        height="40px"
                                        minW={260}
                                        maxW={260}
                                        margin={'20px 0px 30px 0px'}
                                        color={color ? color : '#000000'}
                                        onSideSectionShow={() =>
                                            setShow({ ...show, skills: true })
                                        }
                                    />
                                    <Skill
                                        progressBar={true}
                                        strokeWidth="2"
                                        lineStyle={Classes.line}
                                        direction="row"
                                        strokeColor="#9ccced"
                                        trailColor="#80808073"
                                        skillStyle={Classes.skillText}
                                        percentageStyle={Classes.percent}
                                        percentStyle={Classes.percent2}
                                        minWText="215px"
                                        maxWText={'215px'}
                                        parentContainerStyle={Classes.ml}
                                    />
                                </div>
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
                            </div>
                        )}
                    </Box>
                    <Box minW={410} maxW={410}>
                        <Box
                            display={'flex'}
                            justifyContent={'center'}
                        >
                            <ImageSelector
                                minWidth={300}
                                maxWidth={300}
                                minHeight={300}
                                maxHeight={300}
                            />
                        </Box>
                        <Box
                            bg={backgroundColor ? backgroundColor : '#E0EFFA'}
                            minW={372}
                            maxW={372}
                            ml={'30px'}
                            borderLeftRadius={23}
                            p={'10px 0px 10px 35px'}
                            mt={10}
                        >
                            {resumeData?.education?.visible && (
                                <div className={Classes.sideMenu}>
                                    <div className={Classes.sideMenuBox1}>
                                        {show.education && (
                                            <SectionSideMenu
                                                onHide={() =>
                                                    setShow({ ...show, education: false })
                                                }
                                                bg="#006772"
                                                iconColor={"#fff"}
                                                onDelete={EDUCATION}
                                            />
                                        )}
                                    </div>
                                    <div>
                                        <Heading
                                            title={'EDUCATION'}
                                            fontSize={'23px'}
                                            letterSpacing="1px"
                                            fontWeight={700}
                                            color={color ? color : '#000000'}
                                            onSideSectionShow={() =>
                                                setShow({ ...show, education: true })
                                            }
                                        />
                                        <Education
                                            degree={true}
                                            date={true}
                                            summary={true}
                                            degreeStyle={Classes.programText}
                                            dateStyle={Classes.date}
                                            summaryStyle={Classes.desText}
                                            degree_placeholder={'Study Program'}
                                        />
                                    </div>
                                </div>
                            )}
                            {resumeData?.work?.visible && (
                                <div className={Classes.sideMenu}>
                                    <div className={Classes.sideMenuBox1}>
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
                                            fontSize={'23px'}
                                            letterSpacing="1px"
                                            fontWeight={700}
                                            color={color ? color : '#000000'}
                                            onSideSectionShow={() =>
                                                setShow({ ...show, work: true })
                                            }
                                        />
                                        <WorkExperience
                                            position={true}
                                            date={true}
                                            summary={true}
                                            positionStyle={Classes.programText}
                                            dateStyle={Classes.date}
                                            summaryStyle={Classes.desText}
                                        />
                                    </div>
                                </div>
                            )}
                        </Box>
                    </Box>
                </HStack>
            </Box>
        </Box>
    );
};
export default DigitalMarkTemp2;
