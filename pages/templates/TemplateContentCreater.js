import React from 'react'
import { Box } from '@chakra-ui/react'
import Classes from '../../styles/templates/templateContentCreater.module.css'
import Classe from '../../styles/templates/flightAttendant.module.css';
import useStoreData from '../../src/components/templateMarket/useStoreData';
import Name from '../../src/components/commonSection/Name';
import Profession from '../../src/components/commonSection/Profession';
import About from '../../src/components/commonSection/About';
import Contact from '../../src/components/commonSection/Contact';
import Heading from '../../src/components/commonSection/Heading';
import Education from '../../src/components/commonSection/Education';
import TempLayout from '../../src/components/tempNav/TempLayout';
import useShow from '../../src/components/tempSectionSide/useShow';
import SectionSideMenu from '../../src/components/tempSectionSide/SectionSideMenu';
import WorkExperience from '../../src/components/commonSection/WorkExperience';
import ChangeTempBtn from '../../src/components/changeTempbtn/ChangeTempBtn';
import PDFGenerater from "../../src/components/tempNav/PDFGenerater";
import {
    EDUCATION,
    WORK,
} from '../../src/components/tempSectionSide/SectionSideConstant';
import ImageSelector from '../../src/components/imageSelector';

export default function TemplateContentCreater() {
    const {
        resumeData,
        theme,
        updater
    } = useStoreData();
    const [show, setShow] = useShow();
    // PDF Download Hook
    const { downloadPDFHandler, pdfRef } = PDFGenerater();
    return (
        <div style={{ overflow: 'auto' }}>
            <TempLayout
                education={true}
                work={true}
                downloadPDF={downloadPDFHandler}
            >
                <ChangeTempBtn />
                <Box className={Classes.mainDiv}>
                    <Box
                        display={'flex'}
                        justifyContent={'center'}
                        ref={pdfRef}
                    >
                        <Box className={Classes.innerMainDiv} mb={'30px'}>
                            <Box className={Classes.innerMainDiv1}>
                                <Box display="flex" flexDirection="row">
                                    <Box w="50%" marginTop="30px" >
                                        <Box style={{ overflow: 'hidden' }}>
                                            <Name
                                                FName={true}
                                                SName={true}
                                                direction="column"
                                                FNameStyle={Classes.name}
                                                SNameStyle={Classes.name}
                                            />
                                        </Box>
                                        <Box bgColor="#E2CDC1" w="100%" h="5px" mt="2%" ml="10%"></Box>
                                        <Profession
                                            professionStyle={Classes.profession}
                                        />
                                    </Box>
                                    <Box w="50%" height={300} display='flex' justifyContent='center' alignItems='center' >
                                        <Box borderRadius="100%" >
                                            <ImageSelector
                                                height={"200px"}
                                                width={"200px"}
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className={Classes.ProfileIcons}>
                                    <Box display="flex" flexDirection="row" justifyContent="space-around" padding="10px 0px">
                                        <Box display="flex" mt="1">
                                            <Contact
                                                location={true}
                                                locationPlaceholder={"City"}
                                                iconSize={'30px'}
                                                iconColor="black"
                                                circleIcon={true}
                                                style={Classes.contact}
                                            />
                                        </Box>
                                        <Box display="flex" mt="1">
                                            <Contact
                                                email={true}
                                                iconSize={'30px'}
                                                iconColor="black"
                                                circleIcon={true}
                                                style={Classes.contact}
                                            />
                                        </Box>
                                        <Box display="flex" mt="1">
                                            <Contact
                                                phone={true}
                                                iconSize={'30px'}
                                                iconColor="black"
                                                circleIcon={true}
                                                style={Classes.contact}
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className={Classes.profileDiv}>
                                    <About
                                        aboutStyle={Classes.description}
                                        aboutPlaceholder={"Profile Summary"}
                                    />
                                    <Box
                                        margin={'30px 0px 10px 0px'}
                                    >
                                        {resumeData?.work?.visible && (
                                            <div className={Classe.sideMenu}>
                                                <div className={Classe.sideMenuBox}>
                                                    {show?.work && (
                                                        <SectionSideMenu
                                                            onHide={() => setShow({ ...show, work: false })}
                                                            onDelete={WORK}
                                                            bg="#006772"
                                                            iconColor={"#fff"}
                                                        />
                                                    )}
                                                </div>
                                                <div>
                                                    <div className={Classes.workExp}>
                                                        <div className={Classes.bgImage}>
                                                            <Box marginLeft="35%">
                                                                <Heading
                                                                    title="WORK EXPERIENCE"
                                                                    fontSize="23px"
                                                                    fontWeight={900}
                                                                    minW="700px"
                                                                    maxW="700px"
                                                                    onSideSectionShow={() =>
                                                                        setShow({ ...show, work: true })
                                                                    }
                                                                />
                                                            </Box>
                                                        </div>
                                                    </div>
                                                    <WorkExperience
                                                        company={true}
                                                        position={true}
                                                        date={true}
                                                        summary={true}
                                                        companyStyle={Classe.company}
                                                        positionStyle={Classe.programText}
                                                        dateStyle={Classe.date}
                                                        summaryStyle={Classe.description}
                                                        parentContainerStyle={Classes.rightContainerWork}
                                                        textColor="#000000"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </Box>
                                    {/* education */}
                                    <Box
                                        margin={'30px 0px 10px 0px'}
                                    >
                                        {resumeData?.education?.visible && (
                                            <div className={Classe.sideMenu}>
                                                <div className={Classe.sideMenuBox}>
                                                    {show?.education && (
                                                        <SectionSideMenu
                                                            onHide={() =>
                                                                setShow({ ...show, education: false })
                                                            }
                                                            onDelete={EDUCATION}
                                                            bg="#006772"
                                                            iconColor={"#fff"}
                                                        />
                                                    )}
                                                </div>
                                                <div>
                                                    <div className={Classes.workExp}>
                                                        <div className={Classes.bgImage}>
                                                            <Box marginLeft="40%">
                                                                <Heading
                                                                    title="EDUCATION"
                                                                    fontSize="23px"
                                                                    fontWeight={900}
                                                                    margin={'0px 0px 10px 0px'}
                                                                    minW="700px"
                                                                    maxW="700px"
                                                                    onSideSectionShow={() =>
                                                                        setShow({ ...show, education: true })
                                                                    }
                                                                />
                                                            </Box>
                                                        </div>
                                                    </div>
                                                    <Education
                                                        degree={true}
                                                        institution={true}
                                                        date={true}
                                                        summary={true}
                                                        parentContainerStyle={Classes.rightContainerWork}
                                                        institutionStyle={Classe.company}
                                                        degreeStyle={Classe.programText}
                                                        dateStyle={Classe.date}
                                                        summaryStyle={Classe.description}
                                                        degree_placeholder="Study Program"
                                                        textColor="#000000"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </Box>
                                </Box>
                                <Box bgColor="#E2CDC1" w="100%" h="5px" mt="2%" mb="5%"></Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </TempLayout>
        </div>
    )
}
