import {
  Box,
  Container,
  // Text,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Link,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'
import Image from 'next/image';
import { useSelector } from "react-redux";
import React from 'react'
import avatar from "../../../public/avatar.jpg";
import {
  FaRegUser,
  FaSignLanguage,
} from "react-icons/fa";
import { CUSTOM_CONTENT, CUSTOM_LINKS, RANGE_DATA } from "./fashionConstant";
import { Text } from "../../../src/components/template1/index";
import FashionEducation from "../../../src/components/fashionTemp/FashionEducation";
import FashionExperience from "../../../src/components/fashionTemp/FashionExperience";
import styles from "../../../styles/fashionTemp.module.css";
import {
  FaPhoneAlt,
  FaRegEnvelope,
  FaLocationArrow,
  FaIntercom,
  FaDigitalOcean,
  FaWpexplorer,
  FaBuromobelexperte
} from "react-icons/fa";

export default function fashionTemp() {
  // redux Data
  let resumeEditor = useSelector((state) => state.editorReducer);

  return (
    <>
      <Container
        maxW={'70%'}
        display={'flex'}
      >
        {/* ist content container start */}
        <Box
          backgroundColor={'#FDC726'}
          width={'30%'}
          margin={'30px 0px'}
          padding={'30px 20px 30px 20px'}
        >
          <Text
            value={resumeEditor?.resumeData?.profile?.firstName}
            placeholder="ALFREDO TORRES"
            customclass={`${styles.firstNameStyle} ${styles.fashionContentEditableContainer}`}
            path={"profile.firstName"}
          />

          <Text
            value={resumeEditor?.resumeData?.profile?.lastName}
            placeholder="FASHION DESIGNER"
            customclass={`${styles.lastNameStyle} ${styles.fashionContentEditableContainer}`}
            path={"profile.lastName"}
          />

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
              }} />
          </Box>
          {/* about section */}
          <Box
            padding={'0px 10px'}
          >
            <Box
              display={'flex'}
              alignItems={'center'}
            >
              <FaRegUser size={'35px'} color={'#000000'} />
              <Text
                value={resumeEditor?.resumeData?.objective?.aboutTitle}
                placeholder="About Me"
                customclass={`${styles.aboutHeadingTitle} ${styles.fashionContentEditableContainer}`}
                path={"objective.aboutTitle"}
                editable={false}
              />

            </Box>
            {/* about description */}
            <Box>
              <Text
                value={resumeEditor?.resumeData?.objective?.aboutBody}
                placeholder='Let me introduce myself, I am a
                fashion designer who has 7 years
                of experience in this job. I am very
                experienced in various fashion
                styles for all seasons and I have
                made various models for men
                and women for a world famous
                brand'
                customclass={`${styles.aboutFbody} ${styles.fashionContentEditableContainer}`}
                path={"objective.aboutBody"}
              />
            </Box>
          </Box>
          {/* languages section */}
          <Box
            padding={'0px 10px'}
          >
            <Box
              display={'flex'}
              alignItems={'center'}
              margin={'20px 0px 0px 0px'}
            >
              <FaSignLanguage size={'35px'} color={'#000000'} />
              <Text
                value={resumeEditor?.resumeData?.objective?.languageTitle}
                placeholder="LANGUAGES"
                customclass={`${styles.aboutHeadingTitle} ${styles.fashionContentEditableContainer}`}
                path={"objective.languageTitle"}
                editable={false}
              />
            </Box>
            {/* language description */}
            <Box
              margin={'15px 0px 25px 0px'}
            >
              {/* English Language */}
              <Text
                value={resumeEditor?.resumeData?.objective?.languageBodyEnglish}
                placeholder={'English'}
                customclass={`${styles.languageBodyHeadings} ${styles.fashionContentEditableContainer}`}
                path={"objective.languageBodyEnglish"}
              />
              <RangeSlider aria-label={['min', 'max']} defaultValue={[0, 70]}>
                <RangeSliderTrack>
                  <RangeSliderFilledTrack bg={'#000000'} />
                </RangeSliderTrack>
                <RangeSliderThumb index={1} />
              </RangeSlider>

              {/* Russion Language */}
              <Text
                value={resumeEditor?.resumeData?.objective?.languageBodyRussion}
                placeholder={'Russion'}
                customclass={`${styles.languageBodyHeadings} ${styles.fashionContentEditableContainer}`}
                path={"objective.languageBodyRussion"}
              />
              <RangeSlider aria-label={['min', 'max']} defaultValue={[0, 60]}>
                <RangeSliderTrack>
                  <RangeSliderFilledTrack bg={'#000000'} />
                </RangeSliderTrack>
                <RangeSliderThumb index={1} />
              </RangeSlider>

              {/* Dutch Langusge */}
              <Text
                value={resumeEditor?.resumeData?.objective?.languageBodyDutch}
                placeholder={'Dutch'}
                customclass={`${styles.languageBodyHeadings} ${styles.fashionContentEditableContainer}`}
                path={"objective.languageBodyDutch"}
              />
              <RangeSlider aria-label={['min', 'max']} defaultValue={[0, 45]}>
                <RangeSliderTrack>
                  <RangeSliderFilledTrack bg={'#000000'} />
                </RangeSliderTrack>
                <RangeSliderThumb index={1} />
              </RangeSlider>

              {/* German Language */}
              <Text
                value={resumeEditor?.resumeData?.objective?.languageBodyGerman}
                placeholder={'German'}
                customclass={`${styles.languageBodyHeadings} ${styles.fashionContentEditableContainer}`}
                path={"objective.languageBodyGerman"}
              />
              <RangeSlider aria-label={['min', 'max']} defaultValue={[0, 35]}>
                <RangeSliderTrack>
                  <RangeSliderFilledTrack bg={'#000000'} />
                </RangeSliderTrack>
                <RangeSliderThumb index={1} />
              </RangeSlider>
            </Box>
          </Box>
        </Box>

        {/* 2nd content container start */}
        <Box
          backgroundColor={'#0F0F0F'}
          width={'70%'}
          margin={'30px 0px'}
          padding={'30px 40px'}
        >
          {/* links */}
          <Box
            margin={'40px 0px 10px 0px'}
          >
            {/* phone No */}
            <Box
              margin={'10px 0px'}
              display={'flex'}
              alignItems={'center'}
            >
              <Box
                backgroundColor={'#FDC726'}
                height={'35px'}
                width={'35px'}
                borderRadius={'100% 100%'}
                _hover={{
                  backgroundColor: '#0F0F0F',
                  border: '1px solid #CCC',
                  color: '#FDC726',
                  transition: '0.4s'
                }}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <FaPhoneAlt />
              </Box>
              <Box>
                <Text
                  value={resumeEditor?.resumeData?.contact?.fashionContectNo}
                  placeholder={`+123-456-7890`}
                  customclass={`${styles.fashionContectStyle} ${styles.fashionContentEditableContainer}`}
                  path={"contact.fashionContectNo"}
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
                backgroundColor={'#FDC726'}
                height={'35px'}
                width={'35px'}
                borderRadius={'100% 100%'}
                _hover={{
                  backgroundColor: '#0F0F0F',
                  border: '1px solid #CCC',
                  color: '#FDC726',
                  transition: '0.4s'
                }}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <FaRegEnvelope />
              </Box>
              <Box>
                <Text
                  value={resumeEditor?.resumeData?.contact?.fashionContectEmail}
                  placeholder={`hello@reallygreatsite.com`}
                  customclass={`${styles.fashionContectStyle} ${styles.fashionContentEditableContainer}`}
                  path={"contact.fashionContectEmail"}
                />
              </Box>
            </Box>

            {/* Real Site */}
            <Box
              margin={'10px 0px'}
              display={'flex'}
              alignItems={'center'}
            >
              <Box
                backgroundColor={'#FDC726'}
                height={'35px'}
                width={'35px'}
                borderRadius={'100% 100%'}
                _hover={{
                  backgroundColor: '#0F0F0F',
                  border: '1px solid #CCC',
                  color: '#FDC726',
                  transition: '0.4s'
                }}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <FaIntercom />
              </Box>
              <Box>
                <Text
                  value={resumeEditor?.resumeData?.contact?.fashionContectRealSite}
                  placeholder={`www.reallygreatsite.com`}
                  customclass={`${styles.fashionContectStyle} ${styles.fashionContentEditableContainer}`}
                  path={"contact.fashionContectRealSite"}
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
                backgroundColor={'#FDC726'}
                height={'35px'}
                width={'35px'}
                borderRadius={'100% 100%'}
                _hover={{
                  backgroundColor: '#0F0F0F',
                  border: '1px solid #CCC',
                  color: '#FDC726',
                  transition: '0.4s'
                }}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <FaLocationArrow />
              </Box>
              <Box>
                <Text
                  value={resumeEditor?.resumeData?.contact?.fashionContectLocation}
                  placeholder={`123 Anywhere St., Any City, ST 12345`}
                  customclass={`${styles.fashionContectStyle} ${styles.fashionContentEditableContainer}`}
                  path={"contact.fashionContectLocation"}
                />
              </Box>
            </Box>
          </Box>
          {/* education heading */}
          {
            CUSTOM_CONTENT?.map((items) => {
              return (
                items?.label === 'Education' ?
                  <>
                    <Box
                      margin={'30px 0px 5px 0px'}
                      display={'flex'}
                      alignItems={'center'}
                    >
                      <Box
                        backgroundColor={'#FDC726'}
                        height={'35px'}
                        width={'35px'}
                        borderRadius={'100% 100%'}
                        _hover={{
                          backgroundColor: '#0F0F0F',
                          border: '1px solid #CCC',
                          color: '#FDC726',
                          transition: '0.4s'
                        }}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                      >
                        {items?.icon}
                      </Box>
                      <Box>
                        <Text
                          value={resumeEditor?.resumeData?.education?.heading}
                          placeholder="Education"
                          customclass={`${styles.experienceSumHeading} ${styles.fashionContentEditableContainer}`}
                          path={"education.heading"}
                          editable={false}
                        />
                      </Box>
                    </Box>
                    {/* education description */}
                    <Box>
                      {resumeEditor?.resumeData?.education?.visible && (
                        <>
                          <FashionEducation
                            data={
                              resumeEditor?.resumeData?.education?.items.length
                                ? [...resumeEditor?.resumeData?.education?.items]
                                : [...sampleData?.data?.education?.items]
                            }
                            color={resumeEditor?.color}
                            updater={resumeEditor?.updater}
                          />
                        </>
                      )}
                    </Box>
                  </>
                  :
                  items?.label === 'Experience' ?
                    <>
                      <Box
                        margin={'20px 0px 5px 0px'}
                        display={'flex'}
                        alignItems={'center'}
                      >
                        <Box
                          backgroundColor={'#FDC726'}
                          height={'35px'}
                          width={'35px'}
                          borderRadius={'100% 100%'}
                          _hover={{
                            backgroundColor: '#0F0F0F',
                            border: '1px solid #CCC',
                            color: '#FDC726',
                            transition: '0.4s'
                          }}
                          display={'flex'}
                          alignItems={'center'}
                          justifyContent={'center'}
                        >
                          {items?.icon}
                        </Box>
                        <Box>
                          <Text
                            value={resumeEditor?.resumeData?.experience?.heading}
                            placeholder="Experience"
                            customclass={`${styles.experienceSumHeading} ${styles.fashionContentEditableContainer}`}
                            path={"experience.heading"}
                            editable={false}
                          />
                        </Box>
                      </Box>
                      {/* education description */}
                      <Box>
                        {resumeEditor?.resumeData?.work?.visible && (
                          <>
                            <FashionExperience
                              data={
                                resumeEditor?.resumeData?.work?.items.length
                                  ? [...resumeEditor?.resumeData?.work?.items]
                                  : [...sampleData?.data?.work?.items]
                              }
                              color={resumeEditor?.color}
                              updater={resumeEditor?.updater}
                            />
                          </>
                        )}
                      </Box>
                    </>
                    :
                    items?.label === 'Expertise' ?
                      <>
                        <Box
                          margin={'20px 0px 30px 0px'}
                          display={'flex'}
                          alignItems={'center'}
                        >
                          <Box
                            backgroundColor={'#FDC726'}
                            height={'35px'}
                            width={'35px'}
                            borderRadius={'100% 100%'}
                            _hover={{
                              backgroundColor: '#0F0F0F',
                              border: '1px solid #CCC',
                              color: '#FDC726',
                              transition: '0.4s'
                            }}
                            display={'flex'}
                            alignItems={'center'}
                            justifyContent={'center'}
                          >
                            {items?.icon}
                          </Box>
                          <Box>
                            <Text
                              value={resumeEditor?.resumeData?.expertise?.expertiseTitle}
                              placeholder={items?.label}
                              customclass={`${styles.experienceSumHeading} ${styles.fashionContentEditableContainer}`}
                              path={"expertise.expertiseTitle"}
                              editable={false}
                            />
                          </Box>
                        </Box>
                        {/* Expertise description */}
                        <Box
                          display={'flex'}
                          justifyContent={'space-between'}
                          width={'100%'}
                        >
                          <Box
                            width={'40%'}
                          >
                            <UnorderedList
                              color={'#fff'}
                            >
                              {/* Design List */}
                              <ListItem>
                                <Text
                                  value={resumeEditor?.resumeData?.expertise?.expertiseBodyDesign}
                                  placeholder={'Design'}
                                  customclass={`${styles.expertiseBodyStyle} ${styles.fashionContentEditableContainer}`}
                                  path={"expertise.expertiseBodyDesign"}
                                />
                              </ListItem>
                              {/* Sewing List */}
                              <ListItem>
                                <Text
                                  value={resumeEditor?.resumeData?.expertise?.expertiseBodySewing}
                                  placeholder={'Sewing'}
                                  customclass={`${styles.expertiseBodyStyle} ${styles.fashionContentEditableContainer}`}
                                  path={"expertise.expertiseBodySewing"}
                                />
                              </ListItem>
                              {/* Blogging List */}
                              <ListItem>
                                <Text
                                  value={resumeEditor?.resumeData?.expertise?.expertiseBodyBlogging}
                                  placeholder={'Blogging'}
                                  customclass={`${styles.expertiseBodyStyle} ${styles.fashionContentEditableContainer}`}
                                  path={"expertise.expertiseBodyBlogging"}
                                />
                              </ListItem>
                            </UnorderedList>
                          </Box>
                          <Box
                            width={'60%'}
                          >
                            <UnorderedList
                              color={'#fff'}
                            >
                              {/* commentary */}
                              <ListItem>
                                <Text
                                  value={resumeEditor?.resumeData?.expertise?.expertiseBodyCommentary}
                                  placeholder={'Commentary'}
                                  customclass={`${styles.expertiseBodyStyle} ${styles.fashionContentEditableContainer}`}
                                  path={"expertise.expertiseBodyCommentary"}
                                />
                              </ListItem>
                              {/* opinion */}
                              <ListItem>
                                <Text
                                  value={resumeEditor?.resumeData?.expertise?.expertiseBodyOpinion}
                                  placeholder={'Opinion'}
                                  customclass={`${styles.expertiseBodyStyle} ${styles.fashionContentEditableContainer}`}
                                  path={"expertise.expertiseBodyOpinion"}
                                />
                              </ListItem>
                              {/* moxie */}
                              <ListItem>
                                <Text
                                  value={resumeEditor?.resumeData?.expertise?.expertiseBodyMoxie}
                                  placeholder={'Moxie'}
                                  customclass={`${styles.expertiseBodyStyle} ${styles.fashionContentEditableContainer}`}
                                  path={"expertise.expertiseBodyMoxie"}
                                />
                              </ListItem>
                            </UnorderedList>
                          </Box>
                        </Box>
                      </>
                      :
                      <></>
              )
            })
          }
        </Box>
      </Container>
    </>
  )
}