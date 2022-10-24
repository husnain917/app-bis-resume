import {
    Box,
    Container,
    Image,
} from '@chakra-ui/react'
import React from 'react'
import { Text } from "../../src/components/template1/index";
import FashionCustomHook from "../../src/components/fashionTemp/FashionCustomHook";
import styles from "../../styles/simpleTempDesign.module.css";
import { GrMail } from 'react-icons/gr';
import { BsPhoneFill } from 'react-icons/bs';
import SimpleTempEducation from "../../src/components/simpleTempDesign/SimpleTempEducation";
import SimpleTempExperience from "../../src/components/simpleTempDesign/SimpleTempExperience";
import SimpleTempSkill from "../../src/components/simpleTempDesign/SimpleTempSkill";
import SimpleTempProject from "../../src/components/simpleTempDesign/SimpleTempProject";
import SimpleTempOrganization from "../../src/components/simpleTempDesign/SimpleTempOrganization";
import SimpleTempCertificate from "../../src/components/simpleTempDesign/SimpleTempCertificate";
import SimpleTempLanguage from "../../src/components/simpleTempDesign/SimpleTempLanguage";
import SimpleTempInterest from "../../src/components/simpleTempDesign/SimpleTempInterest";

export default function simpleTempDesign() {
    // redux Data
    const { resumeEditor } = FashionCustomHook();

    // path
    const path = 'achievements.items';
    return (
        <>
            <Box
                backgroundColor={'blackAlpha.100'}
                padding={'30px 0px'}
            >
                <Container
                    minW={'70%'}
                    backgroundColor={'white'}
                    borderRadius={6}
                >
                    {/* header section */}
                    <Box
                        display={'flex'}
                        width={'100%'}
                        padding={'30px 20px'}
                        justifyContent={'space-between'}
                    >
                        <Box
                            minH={150}
                            minW={150}
                        >
                            <Image
                                borderRadius={'full'}
                                boxSize="150px"
                                src="/avatar.jpg"
                                alt="Profile"
                            />
                        </Box>
                        <Box
                            width={'83%'}
                            padding={'0px 20px 20px 20px'}
                        >
                            <Box
                                display={'flex'}
                            >
                                <Text
                                    value={resumeEditor?.resumeData?.profile?.firstName}
                                    placeholder="First Name"
                                    customclass={`${styles.hybridName}`}
                                    path={"profile.firstName"}
                                />
                                &nbsp;
                                <Text
                                    value={resumeEditor?.resumeData?.profile?.lastName}
                                    placeholder="Last Name"
                                    customclass={`${styles.hybridName}`}
                                    path={"profile.lastName"}
                                />
                            </Box>
                            <Box>
                                <Text
                                    value={resumeEditor?.resumeData?.profile?.profession}
                                    placeholder="Professional Title"
                                    customclass={`${styles.ProfessionHybrid}`}
                                    path={'profile.profession'}
                                />
                                <Text
                                    value={resumeEditor?.resumeData?.achievements?.items?.Description}
                                    placeholder="Short and Engaging Pitch about Yourself"
                                    customclass={`${styles.profileText}`}
                                    path={`${path}.Description`}
                                />
                            </Box>
                        </Box>
                    </Box>


                    {/* link section */}
                    <Box
                        bg={'blackAlpha.200'}
                        borderRadius={6}
                        w={'100%'}
                        display={'flex'}
                        justifyContent={'center'}
                        padding={'5px 0px'}
                        margin={'10px 0px'}
                    >
                        <Box
                            display={'flex'}
                            alignItems={'center'}
                            margin={'0px 5px'}
                        >
                            <GrMail size={20} color="#313B47" />
                            <Text
                                value={resumeEditor?.resumeData?.profile?.email}
                                placeholder="hello@reallygreatsite.com"
                                customclass={`${styles.profileText}`}
                                path={'profile.email'}
                            />
                        </Box>
                        <Box
                            display={'flex'}
                            alignItems={'center'}
                            margin={'0px 5px'}
                        >
                            <BsPhoneFill size={20} color="#313B47" />
                            <Text
                                value={resumeEditor?.resumeData?.profile?.phone}
                                placeholder="123-456-7890"
                                customclass={`${styles.profileText}`}
                                path={'profile.phone'}
                            />
                        </Box>
                    </Box>


                    {/* main section */}
                    <Box
                        width={'100%'}
                        padding={'0px 20px'}
                        display={'flex'}
                        justifyContent={'space-between'}
                    >
                        {/* left container */}
                        <Box
                            width={'53%'}
                        >
                            {/* education section */}
                            <Box
                                margin={'10px 0px 0px 0px'}
                            >
                                <Text
                                    value={resumeEditor?.resumeData?.education?.heading}
                                    placeholder="EDUCATION"
                                    customclass={`${styles.contentHeadings}`}
                                    path={"education.heading"}
                                    editable={false}
                                />
                            </Box>

                            {/* education description */}
                            <Box
                                margin={'5px 0px'}
                            >
                                {resumeEditor?.resumeData?.education?.visible && (
                                    <>
                                        <SimpleTempEducation
                                            data={
                                                resumeEditor?.resumeData?.education?.items?.length
                                                    ? [...resumeEditor?.resumeData?.education?.items]
                                                    : [...sampleData?.data?.education?.items]
                                            }
                                            color={resumeEditor?.color}
                                            updater={resumeEditor?.updater}
                                        />
                                    </>
                                )}
                            </Box>


                            {/* experience section */}
                            <Box
                                margin={'10px 0px 0px 0px'}
                            >
                                <Text
                                    value={resumeEditor?.resumeData?.experience?.heading}
                                    placeholder="WORK EXPERIENCE"
                                    customclass={`${styles.contentHeadings}`}
                                    path={"experience.heading"}
                                    editable={false}
                                />
                            </Box>

                            {/* experience description */}
                            <Box
                                margin={'5px 0px'}
                            >
                                {resumeEditor?.resumeData?.work?.visible && (
                                    <>
                                        <SimpleTempExperience
                                            data={
                                                resumeEditor?.resumeData?.work?.items?.length
                                                    ? [...resumeEditor?.resumeData?.work?.items]
                                                    : [...sampleData?.data?.work?.items]
                                            }
                                            color={resumeEditor?.color}
                                            updater={resumeEditor?.updater}
                                        />
                                    </>
                                )}
                            </Box>
                        </Box>


                        {/* right container */}
                        <Box
                            width={'45%'}
                            paddingBottom={'20px'}
                        >
                            {/* skill section */}
                            <Box
                                margin={'10px 0px 0px 0px'}
                            >
                                <Text
                                    value={resumeEditor?.resumeData?.skills?.heading}
                                    placeholder="SKILL"
                                    customclass={`${styles.contentHeadings}`}
                                    path={"skills.heading"}
                                    editable={false}
                                />
                            </Box>

                            {/* skill description */}
                            <Box
                                margin={'5px 0px'}
                            >
                                {resumeEditor?.resumeData?.skills?.visible && (
                                    <>
                                        <SimpleTempSkill
                                            data={
                                                resumeEditor?.resumeData?.skills?.items?.length
                                                    ? [...resumeEditor?.resumeData?.skills?.items]
                                                    : [...sampleData?.data?.skills?.items]
                                            }
                                            color={resumeEditor?.color}
                                            updater={resumeEditor?.updater}
                                        />
                                    </>
                                )}
                            </Box>


                            {/* project section */}
                            <Box
                                margin={'10px 0px 0px 0px'}
                            >
                                <Text
                                    value={resumeEditor?.resumeData?.projects?.heading}
                                    placeholder="PERSONAL PROJECTS"
                                    customclass={`${styles.contentHeadings}`}
                                    path={"projects.heading"}
                                    editable={false}
                                />
                            </Box>

                            {/* projects description */}
                            <Box
                                margin={'5px 0px'}
                            >
                                {resumeEditor?.resumeData?.skills?.visible && (
                                    <>
                                        <SimpleTempProject
                                            data={
                                                resumeEditor?.resumeData?.projects?.items?.length
                                                    ? [...resumeEditor?.resumeData?.projects?.items]
                                                    : [...sampleData?.data?.projects?.items]
                                            }
                                            color={resumeEditor?.color}
                                            updater={resumeEditor?.updater}
                                        />
                                    </>
                                )}
                            </Box>


                            {/* organization section */}
                            <Box
                                margin={'10px 0px 0px 0px'}
                            >
                                <Text
                                    value={resumeEditor?.resumeData?.organization?.heading}
                                    placeholder="ORGANIZATION"
                                    customclass={`${styles.contentHeadings}`}
                                    path={"organization.heading"}
                                    editable={false}
                                />
                            </Box>


                            {/* organization description */}
                            <Box
                                margin={'5px 0px'}
                            >
                                {resumeEditor?.resumeData?.skills?.visible && (
                                    <>
                                        <SimpleTempOrganization
                                            data={
                                                resumeEditor?.resumeData?.organization?.items?.length
                                                    ? [...resumeEditor?.resumeData?.organization?.items]
                                                    : [...sampleData?.data?.organization?.items]
                                            }
                                            color={resumeEditor?.color}
                                            updater={resumeEditor?.updater}
                                        />
                                    </>
                                )}
                            </Box>


                            {/* certificates section */}
                            <Box
                                margin={'10px 0px 0px 0px'}
                            >
                                <Text
                                    value={resumeEditor?.resumeData?.certifications?.heading}
                                    placeholder="Certificates"
                                    customclass={`${styles.contentHeadings}`}
                                    path={"certifications.heading"}
                                    editable={false}
                                />
                            </Box>


                            {/* certificates description */}
                            <Box
                                margin={'5px 0px'}
                            >
                                {resumeEditor?.resumeData?.skills?.visible && (
                                    <>
                                        <SimpleTempCertificate
                                            data={
                                                resumeEditor?.resumeData?.certifications?.items?.length
                                                    ? [...resumeEditor?.resumeData?.certifications?.items]
                                                    : [...sampleData?.data?.certifications?.items]
                                            }
                                            color={resumeEditor?.color}
                                            updater={resumeEditor?.updater}
                                        />
                                    </>
                                )}
                            </Box>


                            {/* languages section */}
                            <Box
                                margin={'10px 0px 0px 0px'}
                            >
                                <Text
                                    value={resumeEditor?.resumeData?.languages?.heading}
                                    placeholder="LANGUAGES"
                                    customclass={`${styles.contentHeadings}`}
                                    path={"languages.heading"}
                                    editable={false}
                                />
                            </Box>


                            {/* languages description */}
                            <Box
                                margin={'5px 0px'}
                            >
                                {resumeEditor?.resumeData?.languages?.visible && (
                                    <>
                                        <SimpleTempLanguage
                                            data={
                                                resumeEditor?.resumeData?.languages?.items?.length
                                                    ? [...resumeEditor?.resumeData?.languages?.items]
                                                    : [...sampleData?.data?.languages?.items]
                                            }
                                            color={resumeEditor?.color}
                                            updater={resumeEditor?.updater}
                                        />
                                    </>
                                )}
                            </Box>


                            {/* interest section */}
                            <Box
                                margin={'10px 0px 0px 0px'}
                            >
                                <Text
                                    value={resumeEditor?.resumeData?.hobbies?.title}
                                    placeholder="INTEREST"
                                    customclass={`${styles.contentHeadings}`}
                                    path={"hobbies.heading"}
                                    editable={false}
                                />
                            </Box>


                            {/* interest description */}
                            <Box
                                margin={'5px 0px'}
                            >
                                {resumeEditor?.resumeData?.hobbies?.visible && (
                                    <>
                                        <SimpleTempInterest
                                            data={
                                                resumeEditor?.resumeData?.hobbies?.items?.length
                                                    ? [...resumeEditor?.resumeData?.hobbies?.items]
                                                    : [...sampleData?.data?.hobbies?.items]
                                            }
                                            color={resumeEditor?.color}
                                            updater={resumeEditor?.updater}
                                        />
                                    </>
                                )}
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    )
}