import {
  Box,
  Container,
  Text,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Link,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'
import Image from 'next/image';
import React from 'react'
import avatar from "../../../public/avatar.jpg";
import {
  FaRegUser,
  FaSignLanguage,
} from "react-icons/fa";
import { CUSTOM_CONTENT, CUSTOM_LINKS, RANGE_DATA } from "./fashionConstant";

export default function fashionTemp() {
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
            fontSize={'40px'}
            fontWeight={'medium'}
            textAlign={'center'}
            margin={'30px 0px 20px 0px'}
          >
            ALFREDO TORRES
          </Text>
          <Text
            fontSize={'22px'}
            fontWeight={'normal'}
            textAlign={'center'}
          >
            FASHION DESIGNER
          </Text>

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
              <FaRegUser size={'35px'} />
              <Text
                fontSize={'22px'}
                fontWeight={'medium'}
                marginLeft={'20px'}
              >
                About Me
              </Text>
            </Box>
            {/* about description */}
            <Box>
              <Text
                textAlign={'justify'}
                margin={'15px 0px 10px 0px'}
              >
                Let me introduce myself, I am a
                fashion designer who has 7 years
                of experience in this job. I am very
                experienced in various fashion
                styles for all seasons and I have
                made various models for men
                and women for a world famous
                brand
              </Text>
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
              <FaSignLanguage size={'35px'} />
              <Text
                fontSize={'22px'}
                fontWeight={'medium'}
                marginLeft={'20px'}
              >
                LANGUAGES
              </Text>
            </Box>
            {/* language description */}
            <Box
              margin={'15px 0px 25px 0px'}
            >
              {
                RANGE_DATA?.map((items) => (
                  <>
                    <Text
                      margin={'10px 0px 5px 0px'}
                      fontWeight={'bold'}
                    >
                      {items?.label}
                    </Text>
                    <RangeSlider aria-label={['min', 'max']} defaultValue={[0, items?.range]}>
                      <RangeSliderTrack>
                        <RangeSliderFilledTrack bg={'#000000'} />
                      </RangeSliderTrack>
                      <RangeSliderThumb index={1} />
                    </RangeSlider>
                  </>
                ))
              }
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
            {
              CUSTOM_LINKS?.map((items) => (
                <>
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
                        backgroundColor:'#0F0F0F',
                        border:'1px solid #CCC',
                        color:'#FDC726',
                        transition:'0.4s'
                      }}
                      display={'flex'}
                      alignItems={'center'}
                      justifyContent={'center'}
                    >
                      {items?.icon}
                    </Box>
                    <Box>
                      <Link
                        href={items?.path ?? '#'}
                        color={'#fff'}
                        marginLeft={'20px'}
                        textDecoration={'none'}
                        _hover={{
                          color: '#CCC',
                          textDecoration: 'none'
                        }}
                      >
                        {items?.label}
                      </Link>
                    </Box>
                  </Box>
                </>
              ))
            }
          </Box>
          {/* education heading */}
          {
            CUSTOM_CONTENT?.map((items) => {
              return (
                items?.label === 'Education' ?
                  <>
                    <Box
                      margin={'30px 0px 30px 0px'}
                      display={'flex'}
                      alignItems={'center'}
                    >
                      <Box
                        backgroundColor={'#FDC726'}
                        height={'35px'}
                        width={'35px'}
                        borderRadius={'100% 100%'}
                        _hover={{
                          backgroundColor:'#0F0F0F',
                          border:'1px solid #CCC',
                          color:'#FDC726',
                          transition:'0.4s'
                        }}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                      >
                        {items?.icon}
                      </Box>
                      <Box>
                        <Text
                          color={'#fff'}
                          marginLeft={'20px'}
                          fontSize={'26px'}
                        >
                          {items?.label}
                        </Text>
                      </Box>
                    </Box>
                    {
                      items?.content?.map((item) => {
                        return (
                          <>
                            {/* education description */}
                            <Box
                              display={'flex'}
                              justifyContent={'space-between'}
                              width={'100%'}
                              margin={'10px 0px'}
                            >
                              <Box
                                width={'40%'}
                              >
                                <Text
                                  color={'#fff'}
                                  fontSize={'18px'}
                                >
                                  {item.istHeading}
                                </Text>
                                <Text
                                  color={'#CCC'}
                                  fontSize={'13px'}
                                >
                                  {item.istDescription}
                                </Text>
                              </Box>
                              <Box
                                width={'60%'}
                              >
                                <Text
                                  color={'#fff'}
                                  fontSize={'18px'}
                                >
                                  {item.secHeading}
                                </Text>
                                <Text
                                  color={'#CCC'}
                                  fontSize={'13px'}
                                  textAlign={'justify'}
                                >
                                  {item.secDescription}
                                </Text>
                              </Box>
                            </Box>
                          </>
                        )
                      })
                    }
                  </>
                  :
                  items?.label === 'Experience' ?
                    <>
                      <Box
                        margin={'30px 0px 30px 0px'}
                        display={'flex'}
                        alignItems={'center'}
                      >
                        <Box
                          backgroundColor={'#FDC726'}
                          height={'35px'}
                          width={'35px'}
                          borderRadius={'100% 100%'}
                          _hover={{
                            backgroundColor:'#0F0F0F',
                            border:'1px solid #CCC',
                            color:'#FDC726',
                            transition:'0.4s'
                          }}
                          display={'flex'}
                          alignItems={'center'}
                          justifyContent={'center'}
                        >
                          {items?.icon}
                        </Box>
                        <Box>
                          <Text
                            color={'#fff'}
                            marginLeft={'20px'}
                            fontSize={'26px'}
                          >
                            {items?.label}
                          </Text>
                        </Box>
                      </Box>
                      {
                        items?.content?.map((item) => {
                          return (
                            <>
                              {/* education description */}
                              <Box
                                display={'flex'}
                                justifyContent={'space-between'}
                                width={'100%'}
                                margin={'10px 0px'}
                              >
                                <Box
                                  width={'40%'}
                                >
                                  <Text
                                    color={'#fff'}
                                    fontSize={'18px'}
                                  >
                                    {item.istHeading}
                                  </Text>
                                  <Text
                                    color={'#CCC'}
                                    fontSize={'13px'}
                                  >
                                    {item.istDescription}
                                  </Text>
                                </Box>
                                <Box
                                  width={'60%'}
                                >
                                  <Text
                                    color={'#fff'}
                                    fontSize={'18px'}
                                  >
                                    {item.secHeading}
                                  </Text>
                                  <Text
                                    color={'#CCC'}
                                    fontSize={'13px'}
                                    textAlign={'justify'}
                                  >
                                    {item.secDescription}
                                  </Text>
                                </Box>
                              </Box>
                            </>
                          )
                        })
                      }
                    </>
                    :
                    items?.label === 'Expertise' ?
                      <>
                        <Box
                          margin={'30px 0px 30px 0px'}
                          display={'flex'}
                          alignItems={'center'}
                        >
                          <Box
                            backgroundColor={'#FDC726'}
                            height={'35px'}
                            width={'35px'}
                            borderRadius={'100% 100%'}
                            _hover={{
                              backgroundColor:'#0F0F0F',
                              border:'1px solid #CCC',
                              color:'#FDC726',
                              transition:'0.4s'
                            }}
                            display={'flex'}
                            alignItems={'center'}
                            justifyContent={'center'}
                          >
                            {items?.icon}
                          </Box>
                          <Box>
                            <Text
                              color={'#fff'}
                              marginLeft={'20px'}
                              fontSize={'26px'}
                            >
                              {items?.label}
                            </Text>
                          </Box>
                        </Box>
                        {
                          items?.content?.map((item) => {
                            return (
                              <>
                                {/* Expertise description */}
                                <Box
                                  display={'flex'}
                                  justifyContent={'space-between'}
                                  width={'100%'}
                                  margin={'10px 0px'}
                                >
                                  <Box
                                    width={'40%'}
                                  >
                                    <UnorderedList
                                      color={'#fff'}
                                    >
                                      <ListItem>{item}</ListItem>
                                    </UnorderedList>
                                  </Box>
                                  <Box
                                    width={'60%'}
                                  >
                                    <UnorderedList
                                      color={'#fff'}
                                    >
                                      <ListItem>{item}</ListItem>
                                    </UnorderedList>
                                  </Box>
                                </Box>
                              </>
                            )
                          })
                        }
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