import {
    Box,
    Container,
    ListItem,
    UnorderedList,
} from '@chakra-ui/react'
import Image from 'next/image';
import React from 'react'
import avatar from "../../public/avatar.jpg";
import { Text } from "../../src/components/template1/index";
import {
    FaPhoneAlt,
    FaRegEnvelope,
    FaLocationArrow,
} from "react-icons/fa";
import FashionCustomHook from "../../src/components/fashionTemp/FashionCustomHook";
import Underline from "../../src/components/aaronGraphicTemp/Underline";
import styles from "../../styles/harumiGraphicTemp.module.css";
import HarumiGraphicEducation from "../../src/components/harumiGraphicTemp/HarumiGraphicEducation";
import HarumiGraphicExpertise from "../../src/components/harumiGraphicTemp/HarumiGraphicExpertise";
import HarumiGraphicExperience from "../../src/components/harumiGraphicTemp/HarumiGraphicExperience";
import HarumiGraphicSkill from "../../src/components/harumiGraphicTemp/HarumiGraphicSkill";
import HarumiGraphicHobbies from "../../src/components/harumiGraphicTemp/HarumiGraphicHobbies";

export default function harumiGraphicTemp() {
    // redux Data
    const { resumeEditor } = FashionCustomHook();
    return (
        <>
            <Container
                minW={'70%'}
                display={'flex'}
            >
                {/* ist container */}
                <Box
                    backgroundColor={'#0C1E37'}
                    width={'40%'}
                    padding={'50px 30px 20px 30px'}
                    margin={'30px 0px'}
                >
                    {/* avatar */}
                    <Box
                        height={'330px'}
                        width={'100%'}
                        margin={'25px 0px'}
                    >
                        <Image
                            src={avatar}
                            alt={'Image Not Found'}
                            style={{
                                width: '100%',
                                borderRadius: '100% 100%'
                            }}
                        />
                    </Box>

                    {/* contact section */}
                    <Box
                        marginTop={'50px'}
                    >
                        <Text
                            value={resumeEditor?.resumeData?.contact?.heading}
                            placeholder="CONTACTS"
                            customclass={`${styles.contentHeadings}`}
                            path={"contact.heading"}
                            editable={false}
                        />
                        <Underline
                            height='0.1em'
                            width='30%'
                            bgColor='#fff'
                        />
                    </Box>

                    {/* contacts links */}
                    <Box
                        margin={'20px 0px'}
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
                                    placeholder={`hello@reallygreatsite.com`}
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


                    {/* education section */}
                    <Box
                        marginTop={'20px'}
                    >
                        <Text
                            value={resumeEditor?.resumeData?.education?.heading}
                            placeholder="EDUCATION"
                            customclass={`${styles.contentHeadings}`}
                            path={"education.heading"}
                            editable={false}
                        />
                        <Underline
                            height='0.1em'
                            width='34%'
                            bgColor='#fff'
                        />
                    </Box>

                    {/* education description */}
                    <Box
                        margin={'20px 0px 10px 0px'}
                    >
                        {resumeEditor?.resumeData?.education?.visible && (
                            <>
                                <HarumiGraphicEducation
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

                {/* 2nd container */}
                <Box
                    width={'60%'}
                    margin={'30px 0px'}
                    padding={'50px 30px 20px 30px'}
                    backgroundColor={'#0C1E37'}
                >
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                    >
                        {/* firstName */}
                        <Text
                            value={resumeEditor?.resumeData?.profile?.firstName}
                            placeholder="HARUMI KOBAYASHI"
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


                    {/* about section */}
                    <Box
                        margin={'20px 0px 0px 0px'}
                    >
                        <Text
                            value={resumeEditor?.resumeData?.objective?.aboutTitle}
                            placeholder="About Me"
                            customclass={`${styles.contentHeadings}`}
                            path={"objective.aboutTitle"}
                            editable={false}
                        />
                        <Underline
                            height='0.1em'
                            width='20%'
                            bgColor='#fff'
                        />
                    </Box>

                    {/* Profile */}
                    <Box
                        margin={'20px 0px 10px 0px'}
                    >
                        <Text
                            value={resumeEditor?.resumeData?.objective?.aboutBody}
                            placeholder="Short and engaging pitch about yourself."
                            customclass={`${styles.profileBodyDes}`}
                            path={"objective.aboutBody"}
                        />
                    </Box>


                    {/* experience section */}
                    <Box
                        margin={'20px 0px 0px 0px'}
                    >
                        <Text
                            value={resumeEditor?.resumeData?.experience?.heading}
                            placeholder="WORK EXPERIENCE"
                            customclass={`${styles.contentHeadings}`}
                            path={"experience.heading"}
                            editable={false}
                        />
                        <Underline
                            height='0.1em'
                            width='34%'
                            bgColor='#fff'
                        />
                    </Box>

                    {/* experience description */}
                    <Box
                        margin={'20px 0px'}
                    >
                        {resumeEditor?.resumeData?.work?.visible && (
                            <>
                                <HarumiGraphicExperience
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


                    {/* expertise section */}
                    <Box>
                        <Text
                            value={resumeEditor?.resumeData?.expertise?.expertiseTitle}
                            placeholder='EXPERTISE'
                            customclass={`${styles.contentHeadings}`}
                            path={"expertise.expertiseTitle"}
                            editable={false}
                        />
                        <Underline
                            height='0.1em'
                            width='18%'
                            bgColor='#fff'
                        />
                    </Box>

                    {/* expertise section */}
                    <Box
                        margin={'20px 0px'}
                    >
                        {resumeEditor?.resumeData?.expertise?.visible && (
                            <>
                                <HarumiGraphicExpertise
                                    data={
                                        resumeEditor?.resumeData?.expertise?.items?.length
                                            ? [...resumeEditor?.resumeData?.expertise?.items]
                                            : [...sampleData?.data?.expertise?.items]
                                    }
                                    color={resumeEditor?.color}
                                    updater={resumeEditor?.updater}
                                />
                            </>
                        )}
                    </Box>


                    {/* skill section */}
                    <Box
                        margin={'20px 0px 0px 0px'}
                    >
                        <Text
                            value={resumeEditor?.resumeData?.skills?.heading}
                            placeholder="SKILL"
                            customclass={`${styles.contentHeadings}`}
                            path={"skills.heading"}
                            editable={false}
                        />
                        <Underline
                            height='0.1em'
                            width='12%'
                            bgColor='#fff'
                        />
                    </Box>

                    {/* skill description */}
                    <Box
                        margin={'20px 0px'}
                    >
                        {resumeEditor?.resumeData?.skills?.visible && (
                            <>
                                <HarumiGraphicSkill
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


                    {/* hobbies section */}
                    <Box
                        margin={'20px 0px 0px 0px'}
                    >
                        <Text
                            value={resumeEditor?.resumeData?.hobbies?.heading}
                            placeholder="HOBBIES"
                            customclass={`${styles.contentHeadings}`}
                            path={"hobbies.heading"}
                            editable={false}
                        />
                        <Underline
                            height='0.1em'
                            width='16%'
                            bgColor='#fff'
                        />
                    </Box>

                    {/* hobbies description */}
                    <Box
                        margin={'20px 0px'}
                    >
                        {resumeEditor?.resumeData?.hobbies?.visible && (
                            <>
                                <HarumiGraphicHobbies
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
            </Container>
        </>
    )
}
