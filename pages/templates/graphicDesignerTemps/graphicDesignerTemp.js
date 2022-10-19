import {
  Box,
  Container,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import avatar from "../../../public/avatar.jpg";
import { Text } from "../../../src/components/template1/index";
import FashionCustomHook from "../../../src/components/fashionTemp/FashionCustomHook";
import styles from "../../../styles/graphicDesignerTemp.module.css";
import {
  FaPhoneAlt,
  FaRegEnvelope,
  FaLocationArrow,
  FaIntercom,
} from "react-icons/fa";
import Underline from '../../../src/components/graphicDesignerTemp/Underline';
import DesignerExpertise from "../../../src/components/graphicDesignerTemp/DesignerExpertise";
import DigitalEducation from "../../../src/components/graphicDesignerTemp/DigitalEducation";
import DigitalExperience from "../../../src/components/graphicDesignerTemp/DigitalExperience";
import DigitalSkill from "../../../src/components/graphicDesignerTemp/DigitalSkill";

export default function graphicDesignTemp() {
  // redux Data
  const { resumeEditor } = FashionCustomHook();

  return (
    <>
      <Container
        minW={'70%'}
        display={'flex'}
      >
        <Box
          backgroundColor={'#F4F5F7'}
          margin={'30px 0px'}
          padding={'10px 30px'}
          width={'100%'}
        >
          {/* profile heading */}
          <Box
            display={'flex'}
            justifyContent={'center'}
            flexDirection={'column'}
            alignItems={'center'}
          >
            {/* firstName */}
            <Text
              value={resumeEditor?.resumeData?.profile?.firstName}
              placeholder="AARON LOEB"
              customclass={`${styles.nameStyle}`}
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
          {/* profile heading end */}


          {/* avatar container */}
          <Box
            border={'3px solid #3D3D3D'}
            display={'flex'}
            justifyContent={'space-between'}
            padding={'0px 100px'}
            width={'100%'}
            margin={'50px 0px'}
          >
            {/* left container */}
            <Box
              display={'flex'}
              alignItems={'flex-end'}
              flexDirection={'column'}
              margin={'25px 0px'}
              width={'32%'}
            >
              {/* phone No */}
              <Box
                margin={'10px 0px'}
                display={'flex'}
                alignItems={'center'}
              >
                <Box>
                  <Text
                    value={resumeEditor?.resumeData?.contact?.graphicContectNo}
                    placeholder={`+123-456-7890`}
                    customclass={`${styles.graphicContectLeftStyle}`}
                    path={"contact.graphicContectNo"}
                  />
                </Box>
                <Box
                  height={'35px'}
                  width={'35px'}
                  borderRadius={'100% 100%'}
                  backgroundColor={'#947F57'}
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'center'}
                >
                  <FaPhoneAlt color='#fff' />
                </Box>
              </Box>

              {/* E-mail */}
              <Box
                margin={'10px 0px'}
                display={'flex'}
                alignItems={'center'}
              >
                <Box>
                  <Text
                    value={resumeEditor?.resumeData?.contact?.graphicContectEmail}
                    placeholder={`hello@reallygreatsite.com`}
                    customclass={`${styles.graphicContectLeftStyle}`}
                    path={"contact.graphicContectEmail"}
                  />
                </Box>
                <Box
                  height={'35px'}
                  width={'35px'}
                  borderRadius={'100% 100%'}
                  backgroundColor={'#947F57'}
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'center'}
                >
                  <FaRegEnvelope color='#fff' />
                </Box>
              </Box>
            </Box>
            {/* center container */}
            <Box
              width={'32%'}
              position={'relative'}
            >
              {/* avatar */}
              <Box
                height={'200px'}
                width={'100%'}
                position={'absolute'}
                bottom={'0%'}
              >
                <Image
                  src={avatar}
                  alt={'Image Not Found'}
                  style={{
                    height: '200px',
                    width: '100%',
                    borderRadius: '50% 50%'
                  }}
                />
              </Box>
            </Box>


            {/* right container */}
            <Box
              display={'flex'}
              alignItems={'flex-start'}
              flexDirection={'column'}
              margin={'25px 0px'}
              width={'32%'}
            >
              {/* Real Site */}
              <Box
                margin={'10px 0px'}
                display={'flex'}
                alignItems={'center'}
              >
                <Box
                  height={'35px'}
                  width={'35px'}
                  borderRadius={'100% 100%'}
                  backgroundColor={'#947F57'}
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'center'}
                >
                  <FaIntercom color='#fff' />
                </Box>
                <Box>
                  <Text
                    value={resumeEditor?.resumeData?.contact?.graphicContectRealSite}
                    placeholder={`reallygreatsite.com`}
                    customclass={`${styles.graphicContectRightStyle}`}
                    path={"contact.graphicContectRealSite"}
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
                  backgroundColor={'#947F57'}
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'center'}
                >
                  <FaLocationArrow color='#fff' />
                </Box>
                <Box>
                  <Text
                    value={resumeEditor?.resumeData?.contact?.graphicContectLocation}
                    placeholder={`123 Anywhere St., Any City`}
                    customclass={`${styles.graphicContectRightStyle}`}
                    path={"contact.graphicContectLocation"}
                  />
                </Box>
              </Box>
            </Box>
            {/* right container end */}
          </Box>
          {/* avatar container end */}


          {/* profile section */}
          <Box>
            <Underline
              width='100%'
              bgColor='#947F57'
            />
            <Text
              value={resumeEditor?.resumeData?.objective?.aboutTitle}
              placeholder="PROFILE"
              customclass={`${styles.profileTxt}`}
              path={"objective.aboutTitle"}
              editable={false}
            />
            <Underline
              width='100%'
              bgColor='#947F57'
            />

            {/* profile description */}
            <Box>
              <Text
                value={resumeEditor?.resumeData?.objective?.aboutBody}
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a pretium nisl. Vivamus vitae ante rutrum, cursus
                mauris id, pretium nunc. Phasellus eget sollicitudin augue. Sed turpis massa, efficitur vel arcu sit amet, viverra
                ornare libero. Suspendisse ut sapien risus. Cras condimentum eget odio a scelerisque."
                customclass={`${styles.aboutBodyDes}`}
                path={"objective.aboutBody"}
              />
            </Box>
          </Box>

          {/* main section */}
          <Box
            marginTop={'30px'}
            width={'100%'}
            display={'flex'}
          >
            {/* left container */}
            <Box
              width={'40%'}
              borderRight={'2px solid #947F57'}
              padding={'0px 40px 0px 0px'}
            >
              {/* expertise section */}
              <Underline
                width='100%'
                bgColor='#947F57'
              />
              <Text
                value={resumeEditor?.resumeData?.expertise?.expertiseTitle}
                placeholder='EXPERTISE'
                customclass={`${styles.sectionHeadings}`}
                path={"expertise.expertiseTitle"}
                editable={false}
              />
              <Underline
                width='100%'
                bgColor='#947F57'
              />
              <Box
                margin={'20px 0px'}
              >
                {resumeEditor?.resumeData?.expertise?.visible && (
                  <>
                    <DesignerExpertise
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

              {/* education section */}
              <Underline
                width='100%'
                bgColor='#947F57'
              />
              <Text
                value={resumeEditor?.resumeData?.education?.heading}
                placeholder="EDUCATION"
                customclass={`${styles.sectionHeadings}`}
                path={"education.heading"}
                editable={false}
              />
              <Underline
                width='100%'
                bgColor='#947F57'
              />
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
            </Box>

            {/* right container */}
            <Box
              width={'60%'}
              padding={'0px 0px 0px 40px'}
            >
              {/* work experience */}
              <Underline
                width='100%'
                bgColor='#947F57'
              />
              <Text
                value={resumeEditor?.resumeData?.experience?.heading}
                placeholder="WORK EXPERIENCE"
                customclass={`${styles.sectionHeadings}`}
                path={"experience.heading"}
                editable={false}
              />
              <Underline
                width='100%'
                bgColor='#947F57'
              />
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

              {/* skill */}
              <Underline
                width='100%'
                bgColor='#947F57'
              />
              <Text
                value={resumeEditor?.resumeData?.skills?.heading}
                placeholder="SKILL"
                customclass={`${styles.sectionHeadings}`}
                path={"skills.heading"}
                editable={false}
              />
              <Underline
                width='100%'
                bgColor='#947F57'
              />
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
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  )
}
