import {
    Box,
    Container,
} from '@chakra-ui/react';
import React from 'react';
import { Text } from "../../src/components/template1/index";
import FashionCustomHook from "../../src/components/fashionTemp/FashionCustomHook";
import {
    FaPhoneAlt,
    FaRegEnvelope,
    FaLocationArrow,
} from "react-icons/fa";
import styles from "../../styles/graphicTemplate.module.css";
import Underline from "../../src/components/aaronGraphicTemp/Underline";
import GraphicEducation from "../../src/components/aaronGraphicTemp/GraphicEducation";
import GraphicExperience from "../../src/components/aaronGraphicTemp/GraphicExperience";
import GraphicSkill from "../../src/components/aaronGraphicTemp/GraphicSkill";
import GraphicHobbies from "../../src/components/aaronGraphicTemp/GraphicHobbies";

export default function aaronGraphicTemp() {
    // redux Data
    const { resumeEditor } = FashionCustomHook();
    return (
        <>
            <Container
                backgroundColor={'#000000'}
                minW={'70%'}
                padding={'0px 40px'}
            >
                {/* profile section */}
                <Box
                    marginTop={'30px'}
                    padding={'30px 0px 30px 0px'}
                    width={'100%'}
                >
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        {/* firstName */}
                        <Text
                            value={resumeEditor?.resumeData?.profile?.firstName}
                            placeholder="AARON LOEB"
                            customclass={`${styles.firstNameStyle}`}
                            path={"profile.firstName"}
                        />

                        {/* lastName */}
                        <Text
                            value={resumeEditor?.resumeData?.profile?.lastName}
                            placeholder="GRAPHIC DESIGNER"
                            customclass={`${styles.lastNameStyle}`}
                            path={"profile.lastName"}
                        />
                    </Box>
                </Box>

                {/* contact section */}
                <Box>
                    <Underline
                        height='0.1em'
                        width='100%'
                        bgColor='#fff'
                    />
                    <Box
                        display={'flex'}
                        justifyContent={'space-between'}
                        padding={'5px 0px'}
                    >
                        {/* phone No */}
                        <Box
                            margin={'10px 0px'}
                            display={'flex'}
                            alignItems={'center'}
                        >
                            <Box
                                height={'35px'}
                                width={'35px'}
                                borderRadius={'100% 100%'}
                                border={'2px solid #fff'}
                                display={'flex'}
                                alignItems={'center'}
                                justifyContent={'center'}
                            >
                                <FaPhoneAlt color='#fff' />
                            </Box>
                            <Box>
                                <Text
                                    value={resumeEditor?.resumeData?.contact?.designerContectNo}
                                    placeholder={`123-456-7890`}
                                    customclass={`${styles.designerContectStyle}`}
                                    path={"contact.designerContectNo"}
                                />
                            </Box>
                        </Box>

                        {/* E-mail */}
                        <Box
                            margin={'10px 0px'}
                            display={'flex'}
                            alignItems={'center'}
                        >
                            <Box
                                height={'35px'}
                                width={'35px'}
                                borderRadius={'100% 100%'}
                                border={'2px solid #fff'}
                                display={'flex'}
                                alignItems={'center'}
                                justifyContent={'center'}
                            >
                                <FaRegEnvelope color='#fff' />
                            </Box>
                            <Box>
                                <Text
                                    value={resumeEditor?.resumeData?.contact?.designerContectEmail}
                                    placeholder={`HELLO@REALLYGREATSITE.COM`}
                                    customclass={`${styles.designerContectStyle}`}
                                    path={"contact.designerContectEmail"}
                                />
                            </Box>
                        </Box>

                        {/* Live Location */}
                        <Box
                            margin={'10px 0px'}
                            display={'flex'}
                            alignItems={'center'}
                        >
                            <Box
                                height={'35px'}
                                width={'35px'}
                                borderRadius={'100% 100%'}
                                border={'2px solid #fff'}
                                display={'flex'}
                                alignItems={'center'}
                                justifyContent={'center'}
                            >
                                <FaLocationArrow color='#fff' />
                            </Box>
                            <Box>
                                <Text
                                    value={resumeEditor?.resumeData?.contact?.designerContectLocation}
                                    placeholder={`123 ANYWHERE ST., ANY CITY`}
                                    customclass={`${styles.designerContectStyle}`}
                                    path={"contact.designerContectLocation"}
                                />
                            </Box>
                        </Box>
                    </Box>
                    <Underline
                        height='0.1em'
                        width='100%'
                        bgColor='#fff'
                    />
                </Box>

                {/* main container */}
                <Box
                    width={'100%'}
                    display={'flex'}
                    justifyContent={'space-between'}
                    margin={'40px 0px'}
                >
                    {/* left container */}
                    <Box
                        width={'55%'}
                        paddingRight={'30px'}
                        borderRight={'1px solid #fff'}
                    >
                        {/* education section */}
                        <Box>
                            <Text
                                value={resumeEditor?.resumeData?.education?.heading}
                                placeholder="EDUCATION"
                                customclass={`${styles.profileTitle}`}
                                path={"education.heading"}
                                editable={false}
                            />
                            <Underline
                                height='0.1em'
                                width='10%'
                                bgColor='#fff'
                            />

                            {/* education description */}
                            <Box
                                margin={'20px 0px'}
                            >
                                {resumeEditor?.resumeData?.education?.visible && (
                                    <>
                                        <GraphicEducation
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
                        </Box>

                        <Underline
                            height='0.1em'
                            width='100%'
                            bgColor='#fff'
                        />

                        {/* experience section */}
                        <Box
                            marginTop={'10px'}
                        >
                            <Text
                                value={resumeEditor?.resumeData?.experience?.heading}
                                placeholder="WORK EXPERIENCE"
                                customclass={`${styles.profileTitle}`}
                                path={"experience.heading"}
                                editable={false}
                            />
                            <Underline
                                height='0.1em'
                                width='10%'
                                bgColor='#fff'
                            />

                            {/* experience description */}
                            <Box
                                margin={'20px 0px'}
                            >
                                {resumeEditor?.resumeData?.work?.visible && (
                                    <>
                                        <GraphicExperience
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
                    </Box>

                    {/* right container */}
                    <Box
                        width={'43%'}
                        paddingLeft={'25px'}
                        borderLeft={'1px solid #fff'}
                    >
                        {/* profile section */}
                        <Box>
                            <Text
                                value={resumeEditor?.resumeData?.objective?.aboutTitle}
                                placeholder="PROFILE"
                                customclass={`${styles.profileTitle}`}
                                path={"objective.aboutTitle"}
                                editable={false}
                            />
                            <Underline
                                height='0.1em'
                                width='10%'
                                bgColor='#fff'
                            />

                            {/* Profile */}
                            <Box>
                                <Text
                                    value={resumeEditor?.resumeData?.objective?.aboutBody}
                                    placeholder="Short and engaging pitch about yourself."
                                    customclass={`${styles.profileBodyDes}`}
                                    path={"objective.aboutBody"}
                                />
                            </Box>
                        </Box>

                        <Underline
                            height='0.1em'
                            width='100%'
                            bgColor='#fff'
                        />

                        <Box
                            marginTop={'10px'}
                        >
                            <Text
                                value={resumeEditor?.resumeData?.skills?.heading}
                                placeholder="SKILL"
                                customclass={`${styles.profileTitle}`}
                                path={"skills.heading"}
                                editable={false}
                            />
                            <Underline
                                height='0.1em'
                                width='10%'
                                bgColor='#fff'
                            />

                            {/* skill section */}
                            <Box
                                margin={'20px 0px'}
                            >
                                {resumeEditor?.resumeData?.skills?.visible && (
                                    <>
                                        <GraphicSkill
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
                        </Box>

                        <Underline
                            height='0.1em'
                            width='100%'
                            bgColor='#fff'
                        />

                        {/* INTERESTS section */}
                        <Box
                            marginTop={'10px'}
                        >
                            <Text
                                value={resumeEditor?.resumeData?.hobbies?.interestHeading}
                                placeholder="INTERESTS"
                                customclass={`${styles.profileTitle}`}
                                path={"hobbies.interestHeading"}
                                editable={false}
                            />
                            <Underline
                                height='0.1em'
                                width='10%'
                                bgColor='#fff'
                            />

                            {/* hobbies description */}
                            <Box
                                margin={'20px 0px'}
                            >
                                {resumeEditor?.resumeData?.hobbies?.visible && (
                                    <>
                                        <GraphicHobbies
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
                </Box>
            </Container>
        </>
    )
}
