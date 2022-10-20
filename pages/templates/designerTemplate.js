import {
    Box,
    Container,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import avatar from "../../public/designer.jpg";
import { Text } from "../../src/components/template1/index";
import FashionCustomHook from "../../src/components/fashionTemp/FashionCustomHook";
import {
    FaPhoneAlt,
    FaRegEnvelope,
    FaLocationArrow,
    FaUserAlt,
    FaCog,
    FaBookOpen,
    FaRegAddressBook
} from "react-icons/fa";
import styles from "../../styles/designerTemplate.module.css";
import Underline from '../../src/components/digitalTemplate/Underline';
import DigitalSkill from "../../src/components/digitalTemplate/DigitalSkill";
import DigitalHobbies from "../../src/components/digitalTemplate/DigitalHobbies";
import DigitalEducation from "../../src/components/digitalTemplate/DigitalEducation";
import DigitalExperience from "../../src/components/digitalTemplate/DigitalExperience";

export default function designerTemplate() {
    // redux Data
    const { resumeEditor } = FashionCustomHook();
    return (
        <>
            <Container
                minW={'70%'}
            >
                {/* profile container */}
                <Box
                    backgroundColor={'#253439'}
                    marginTop={'30px'}
                    padding={'30px 30px 50px 30px'}
                    width={'100%'}
                >
                    <Box
                        display={'flex'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        width={'100%'}
                    >
                        <Box
                            width={'50%'}
                        >
                            {/* firstName */}
                            <Text
                                value={resumeEditor?.resumeData?.profile?.firstName}
                                placeholder="AARON LOEB"
                                customclass={`${styles.firstNameStyle}`}
                                path={"profile.firstName"}
                            />
                        </Box>
                        <Underline
                            height='0.1em'
                            width='50%'
                            bgColor='#fff'
                        />
                    </Box>
                    {/* lastName */}
                    <Text
                        value={resumeEditor?.resumeData?.profile?.lastName}
                        placeholder="DESIGNER"
                        customclass={`${styles.lastNameStyle}`}
                        path={"profile.lastName"}
                    />
                </Box>

                {/* avatar container */}
                <Box
                    backgroundColor={'#423E3A'}
                    display={'flex'}
                    justifyContent={'space-between'}
                    width={'100%'}
                    marginTop={'2px'}
                >
                    {/* avatar */}
                    <Box
                        width={'40%'}
                        position={'relative'}
                    >
                        <Box
                            width={'250px'}
                            position={'absolute'}
                            bottom={'-20%'}
                            left={'8%'}
                        >
                            <Image
                                src={avatar}
                                alt={'Image Not Found'}
                                height={'230px'}
                                width={'250px'}
                            />
                        </Box>
                    </Box>

                    {/* links */}
                    <Box
                        width={'50%'}
                        margin={'10px 0px'}
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
                </Box>

                {/* container */}
                <Box
                    width={'100%'}
                    display={'flex'}
                    justifyContent={'space-between'}
                    marginTop={'35px'}
                >
                    {/* left contaiiner */}
                    <Box
                        width={'35%'}
                        padding={'0px 60px 0px 30px'}
                    >
                        {/* content box */}
                        <Box
                            backgroundColor={'#CEB99E'}
                            padding={'25px 15px'}
                            borderRadius={'15px 15px'}
                            marginBottom={'30px'}
                        >
                            {/* title */}
                            <Box>
                                <Box
                                    display={'flex'}
                                    alignItems={'center'}
                                    justifyContent={'space-between'}
                                    width={'100%'}
                                >
                                    <Box
                                        width={'25%'}
                                        backgroundColor={'#253439'}
                                        padding={'15px 0px'}
                                        display={'flex'}
                                        justifyContent={'center'}
                                        alignItems={'center'}
                                    >
                                        <FaUserAlt color='#fff' size={'30px'} />
                                    </Box>
                                    <Box
                                        width={'70%'}
                                    >
                                        <Text
                                            value={resumeEditor?.resumeData?.objective?.aboutTitle}
                                            placeholder="PROFILE"
                                            customclass={`${styles.profileTitle}`}
                                            path={"objective.aboutTitle"}
                                            editable={false}
                                        />
                                    </Box>
                                </Box>
                                <Underline
                                    height='0.1em'
                                    width='100%'
                                    bgColor='#253439'
                                />
                            </Box>

                            {/* Profile */}
                            <Box>
                                <Text
                                    value={resumeEditor?.resumeData?.objective?.aboutBody}
                                    placeholder="Short and engaging pitch about yourself."
                                    customclass={`${styles.profileBodyDes}`}
                                    path={"objective.aboutBody"}
                                />
                            </Box>

                            {/* skill */}
                            {/* title */}
                            <Box
                                marginTop={'10px'}
                            >
                                <Box
                                    display={'flex'}
                                    alignItems={'center'}
                                    justifyContent={'space-between'}
                                    width={'100%'}
                                >
                                    <Box
                                        width={'25%'}
                                        backgroundColor={'#253439'}
                                        padding={'15px 0px'}
                                        display={'flex'}
                                        justifyContent={'center'}
                                        alignItems={'center'}
                                    >
                                        <FaCog color='#fff' size={'30px'} />
                                    </Box>
                                    <Box
                                        width={'70%'}
                                    >
                                        <Text
                                            value={resumeEditor?.resumeData?.skills?.heading}
                                            placeholder="SKILL"
                                            customclass={`${styles.profileTitle}`}
                                            path={"skills.heading"}
                                            editable={false}
                                        />
                                    </Box>
                                </Box>
                                <Underline
                                    height='0.1em'
                                    width='100%'
                                    bgColor='#253439'
                                />
                            </Box>

                            {/* skill description */}
                            <Box
                                margin={'20px 0px'}
                            >
                                {resumeEditor?.resumeData?.skills?.visible && (
                                    <>
                                        <DigitalSkill
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

                            {/* hobbies */}
                            {/* title */}
                            <Box
                                marginTop={'20px'}
                            >
                                <Box
                                    display={'flex'}
                                    alignItems={'center'}
                                    justifyContent={'space-between'}
                                    width={'100%'}
                                >
                                    <Box
                                        width={'25%'}
                                        backgroundColor={'#253439'}
                                        padding={'15px 0px'}
                                        display={'flex'}
                                        justifyContent={'center'}
                                        alignItems={'center'}
                                    >
                                        <FaBookOpen color='#fff' size={'30px'} />
                                    </Box>
                                    <Box
                                        width={'70%'}
                                    >
                                        <Text
                                            value={resumeEditor?.resumeData?.hobbies?.heading}
                                            placeholder="HOBBIES"
                                            customclass={`${styles.profileTitle}`}
                                            path={"hobbies.heading"}
                                            editable={false}
                                        />
                                    </Box>
                                </Box>
                                <Underline
                                    height='0.1em'
                                    width='100%'
                                    bgColor='#253439'
                                />
                            </Box>

                            {/* hobbies description */}
                            <Box
                                margin={'20px 0px'}
                            >
                                {resumeEditor?.resumeData?.hobbies?.visible && (
                                    <>
                                        <DigitalHobbies
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

                    {/* right container */}
                    <Box
                        width={'60%'}
                    >
                        {/* education */}
                        {/* title */}
                        <Box>
                            <Box
                                display={'flex'}
                                alignItems={'center'}
                                justifyContent={'space-between'}
                                width={'100%'}
                            >
                                <Box
                                    width={'10%'}
                                    backgroundColor={'#253439'}
                                    padding={'15px 0px'}
                                    display={'flex'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                >
                                    <FaBookOpen color='#fff' size={'30px'} />
                                </Box>
                                <Box
                                    width={'88%'}
                                >
                                    <Text
                                        value={resumeEditor?.resumeData?.education?.heading}
                                        placeholder="EDUCATION"
                                        customclass={`${styles.profileTitle}`}
                                        path={"education.heading"}
                                        editable={false}
                                    />
                                </Box>
                            </Box>
                            <Underline
                                height='0.2em'
                                width='100%'
                                bgColor='#253439'
                            />
                        </Box>

                        {/* education description */}
                        <Box
                            margin={'20px 0px'}
                        >
                            {resumeEditor?.resumeData?.education?.visible && (
                                <>
                                    <DigitalEducation
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


                        {/* experience */}
                        {/* title */}
                        <Box>
                            <Box
                                display={'flex'}
                                alignItems={'center'}
                                justifyContent={'space-between'}
                                width={'100%'}
                            >
                                <Box
                                    width={'10%'}
                                    backgroundColor={'#253439'}
                                    padding={'15px 0px'}
                                    display={'flex'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                >
                                    <FaRegAddressBook color='#fff' size={'30px'} />
                                </Box>
                                <Box
                                    width={'88%'}
                                >
                                    <Text
                                        value={resumeEditor?.resumeData?.experience?.heading}
                                        placeholder="WORK EXPERIENCE"
                                        customclass={`${styles.profileTitle}`}
                                        path={"experience.heading"}
                                        editable={false}
                                    />
                                </Box>
                            </Box>
                            <Underline
                                height='0.2em'
                                width='100%'
                                bgColor='#253439'
                            />
                        </Box>

                        {/* experience description */}
                        <Box
                            margin={'20px 0px'}
                        >
                            {resumeEditor?.resumeData?.work?.visible && (
                                <>
                                    <DigitalExperience
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
            </Container>
        </>
    )
}
