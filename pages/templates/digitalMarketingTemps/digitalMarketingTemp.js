import {
  Box,
  Container,
  // Text,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'
import Image from 'next/image';
import React from 'react'
import avatar from "../../../public/avatar.jpg";
import { Text } from "../../../src/components/template1/index";
import {
  FaPhoneAlt,
  FaRegEnvelope,
  FaLocationArrow,
} from "react-icons/fa";
import FashionCustomHook from "../../../src/components/fashionTemp/FashionCustomHook";
import styles from "../../../styles/digitalMarketingTemp.module.css";
import DigitalMarketingEducation from "../../../src/components/digitalMarketingTemp/DigitalMarketingEducation";
import DigitalMarketingSkill from "../../../src/components/digitalMarketingTemp/DigitalMarketingSkill";
import DigitalMarketingExperience from "../../../src/components/digitalMarketingTemp/DigitalMarketingExperience";

export default function digitalMarketingTemp() {
  // redux Data
  const { resumeEditor } = FashionCustomHook();

  return (
    <>
      <Container
        minW={'70%'}
        display={'flex'}
      >
        {/* ist content box */}
        <Box
          backgroundColor={'#3A4D6C'}
          width={'30%'}
          margin={'30px 0px'}
          padding={'50px 20px 30px 20px'}
        >
          {/* avatar */}
          <Box
            height={'250px'}
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
          {/* links */}
          <Box
            marginTop={'50px'}
          >
            <Text
              value={resumeEditor?.resumeData?.contact?.heading}
              placeholder="CONTACT PERSON"
              customclass={`${styles.leftContainerHeadings} ${styles.digitalContentEditableContainer}`}
              path={"contact.heading"}
              editable={false}
            />
          </Box>
          <Box
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
                border={'1px solid #CCC'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <FaPhoneAlt color='#fff' />
              </Box>
              <Box>
                <Text
                  value={resumeEditor?.resumeData?.contact?.fashionContectNo}
                  placeholder={`123-456-7890`}
                  customclass={`${styles.digitalContectStyle} ${styles.digitalContentEditableContainer}`}
                  path={"contact.fashionContectNo"}
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
                border={'1px solid #CCC'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <FaLocationArrow color='#fff' />
              </Box>
              <Box>
                <Text
                  value={resumeEditor?.resumeData?.contact?.fashionContectLocation}
                  placeholder={`123 Anywhere St., Any City`}
                  customclass={`${styles.digitalContectStyle} ${styles.digitalContentEditableContainer}`}
                  path={"contact.fashionContectLocation"}
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
                border={'1px solid #CCC'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <FaRegEnvelope color='#fff' />
              </Box>
              <Box>
                <Text
                  value={resumeEditor?.resumeData?.contact?.fashionContectEmail}
                  placeholder={`hello@reallygreatsite.com`}
                  customclass={`${styles.digitalContectStyle} ${styles.digitalContentEditableContainer}`}
                  path={"contact.fashionContectEmail"}
                />
              </Box>
            </Box>
          </Box>

          {/* education section */}
          <Box
            margin={'30px 0px 10px 0px'}
          >
            <Text
              value={resumeEditor?.resumeData?.education?.heading}
              placeholder="EDUCATION"
              customclass={`${styles.leftContainerHeadings} ${styles.digitalContentEditableContainer}`}
              path={"education.heading"}
              editable={false}
            />
          </Box>

          {/* education description */}
          <Box>
            {resumeEditor?.resumeData?.education?.visible && (
              <>
                <DigitalMarketingEducation
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

          {/* skill section */}
          <Box
            margin={'30px 0px 10px 0px'}
          >
            <Text
              value={resumeEditor?.resumeData?.skills?.heading}
              placeholder="SKILL"
              customclass={`${styles.leftContainerHeadings} ${styles.digitalContentEditableContainer}`}
              path={"skills.heading"}
              editable={false}
            />
          </Box>

          {/* skill description */}
          <Box
            margin={'0px 0px 25px 0px'}
          >
            {resumeEditor?.resumeData?.skills?.visible && (
              <>
                <DigitalMarketingSkill
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

        {/* 2nd content box */}
        <Box
          width={'70%'}
          margin={'30px 0px'}
        >
          <Box
            backgroundColor={'#F2DB7A'}
            padding={'25px 0px 25px 0px'}
            marginTop={'12%'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            {/* firstName */}
            <Text
              value={resumeEditor?.resumeData?.profile?.firstName}
              placeholder="SEBASTIAN"
              customclass={`${styles.nameStyle} ${styles.digitalContentEditableContainer}`}
              path={"profile.firstName"}
            />

            {/* lastName */}
            <Text
              value={resumeEditor?.resumeData?.profile?.lastName}
              placeholder="BENNETT"
              customclass={`${styles.nameStyle} ${styles.digitalContentEditableContainer}`}
              path={"profile.lastName"}
            />

            {/* subtitle */}
            <Text
              value={resumeEditor?.resumeData?.profile?.subtitle}
              placeholder="DIGITAL MARKETING"
              customclass={`${styles.profileSubTitle} ${styles.digitalContentEditableContainer}`}
              path={"profile.subtitle"}
            />
          </Box>

          {/* about section */}
          <Box
            padding={'30px 25px 0px 25px'}
          >
            <Text
              value={resumeEditor?.resumeData?.objective?.aboutTitle}
              placeholder="About Me"
              customclass={`${styles.rightContainerHeading} ${styles.digitalContentEditableContainer}`}
              path={"objective.aboutTitle"}
              editable={false}
            />
          </Box>

          {/* about description */}
          <Box
            padding={'0px 30px'}
          >
            <Text
              value={resumeEditor?.resumeData?.objective?.aboutBody}
              placeholder="A passionate digital marketer who loves to make plans
              to introduce products or services to the right people
              digitally. And love to make clients satisfied and feel their
              excitement during the whole process."
              customclass={`${styles.aboutBodyDes} ${styles.digitalContentEditableContainer}`}
              path={"objective.aboutBody"}
            />
          </Box>

          {/* experience section */}
          <Box
            padding={'25px 25px 0px 25px'}
          >
            <Text
              value={resumeEditor?.resumeData?.experience?.heading}
              placeholder="EXPERIENCE WORK"
              customclass={`${styles.rightContainerHeading} ${styles.digitalContentEditableContainer}`}
              path={"experience.heading"}
              editable={false}
            />
          </Box>
          {/* experience description */}
          <Box
            padding={'0px 30px'}
          >
            {resumeEditor?.resumeData?.work?.visible && (
              <>
                <DigitalMarketingExperience
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

          {/* footer */}
          <Box
            height={'60px'}
            width={'100%'}
            backgroundColor={'#F2DB7A'}
            marginTop={'28%'}
          >
            {/* footer */}
          </Box>
        </Box>
      </Container>
    </>
  )
}
