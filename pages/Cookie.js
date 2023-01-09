
import { useRef } from 'react';

import {
    Box,
    Container,
    Link,
    ListItem,
    OrderedList,
    Text,
    UnorderedList,
} from '@chakra-ui/react'
import React from 'react'
import { TABLE_CONTENT_DATA, PREMIUM_ACCOUNT_DATA, PREMIUM_ACCOUNT_DATA_LINKS, CONTACT_US_DATA, TERMS_DATA, Marketing } from "../src/components/cookieData/CookieData";
import Underline from "../src/components/aaronGraphicTemp/Underline";
import Layout from '../src/Layout';
import styles from "../styles/sideBarSection.module.css"
import SideBar from '../src/components/sideBar/SideBar';


export default function Cookie() {
    const scollToRef = useRef();
    const scrollSecend = useRef();
    const scrollThird = useRef();

    return (
        <>


            <Container
                maxW={["100%", "100%", "80%", "80%"]}
                display={"flex"}
                justifyContent={"space-between"}
            >
                <Box
                    maxW={["0%", "0%", "0%", "5%"]}
                    // padding={'70px 0px 0px 0px'}
                    display={["none", "none", "none", "block"]}
                >
                    <Box
                        className={styles.sideBarContainer}
                    >
                        <SideBar />
                    </Box>
                </Box>
                <Box
                    maxW={["100%", "100%", "100%", "88%"]}

                >
                    <Box>
                        {/* main title */}
                        <Box
                            padding={'40px 0px'}
                        >
                            {
                                TERMS_DATA?.TermsOfUse?.heading?.map((item, index) => (
                                    <>
                                        <Text
                                            key={index}
                                            textAlign={'center'}
                                            fontWeight={'bold'}
                                            color={'#313B47'}
                                            className='main-heading'
                                        >
                                            {item?.title}
                                        </Text>
                                    </>
                                ))
                            }
                        </Box>

                        {/* description */}
                        <Box>
                            {
                                TERMS_DATA?.TermsOfUse?.data?.map((item, index) => (
                                    <>
                                        <Text
                                            key={index}
                                            fontSize={'1rem'}
                                            className='small-text'
                                            marginBottom={'1rem'}
                                        >
                                            {item?.text}
                                        </Text>
                                    </>
                                ))
                            }
                            <Text
                                fontSize={'0.80rem'}
                                lineHeight={'1.5'}
                                marginBottom={'1rem'}
                                color={'#757575'}
                                fontFamily={`'EuclidCircularB', sans-serif`}

                            >
                                {TERMS_DATA?.TermsOfUse?.description}
                            </Text>
                        </Box>

                        {/* Table of Contents */}
                        <Box
                            margin={'40px 0px'}
                        >
                            <Text
                                className='medium-heading1'
                                color={'#313B47'}
                            >
                                {TERMS_DATA?.TableOfContents?.heading}
                            </Text>

                            {/* description */}
                            <Box
                                margin={'10px 0px 40px 0px'} >
                                <OrderedList>

                                    <ListItem>
                                        <Text

                                            fontSize={'1em'}

                                            color={'#2679C7'}
                                            className='small-text'
                                            cursor="pointer"
                                            smooth={true}
                                            onClick={() => scollToRef.current.scrollIntoView({ behavior: 'smooth' })}
                                        >

                                            What is a cookie?
                                        </Text>
                                    </ListItem>

                                    <ListItem>
                                        <Text
                                            fontSize={'1em'}

                                            color={'#2679C7'}
                                            className='small-text'
                                            cursor="pointer"
                                            smooth={true}
                                            onClick={() => scrollSecend.current.scrollIntoView({ behavior: 'smooth' })}
                                        >

                                            Use of cookies and web storage(browsing data) by Bisresume
                                        </Text>
                                    </ListItem>

                                    <ListItem>
                                        <Text
                                            fontSize={'1em'}

                                            color={'#2679C7'}
                                            className='small-text'
                                            cursor="pointer"
                                            smooth={true}
                                            onClick={() => scrollThird.current.scrollIntoView({ behavior: 'smooth' })}


                                        >

                                            Disabling/Enabling Cookies
                                        </Text>
                                    </ListItem>


                                </OrderedList>
                            </Box>
                        </Box>

                        <Box
                            margin={'40px 0px'}
                            ref={scollToRef}


                        >
                            <Text
                                className='medium-heading1'
                                color={'#313B47'}
                            >
                                {TERMS_DATA?.TheNovoresumeContent?.heading}
                            </Text>

                            <Box
                                margin={'10px 0px 40px 0px'}
                            >
                                {
                                    TERMS_DATA?.TheNovoresumeContent?.data?.map((item, index) => (
                                        <>
                                            <Text
                                                key={index}
                                                className='small-text'
                                                marginBottom={'1rem'}
                                            >
                                                {item?.text}
                                            </Text>
                                        </>
                                    ))
                                }
                            </Box>
                        </Box>

                        <Box
                            margin={'40px 0px'}
                            ref={scrollSecend}

                        >
                            <Text
                                className='medium-heading1'
                                color={'#313B47'}
                            >
                                {TERMS_DATA?.AcceptableUse?.heading}
                            </Text>

                            <Box
                                margin={'10px 0px 40px 0px'}

                            >
                                {
                                    TERMS_DATA?.AcceptableUse?.data?.map((item, index) => (
                                        <>
                                            <Text
                                                key={index}
                                                className={"small-text"}
                                                fontWeight={'bold'}
                                                color="black"

                                            >

                                                {item?.head}
                                            </Text>
                                            <Text
                                                key={index}
                                                className='small-text'
                                                marginBottom={'1rem'}
                                            >

                                                {item?.text}
                                            </Text>
                                        </>
                                    ))
                                }

                                <UnorderedList>
                                    {
                                        PREMIUM_ACCOUNT_DATA?.map((item) => (
                                            <>
                                                <ListItem
                                                    className='small-text'
                                                    fontSize={'1em'}
                                                >
                                                    {item?.label}
                                                </ListItem>
                                            </>
                                        ))
                                    }
                                </UnorderedList>
                            </Box>
                        </Box>




                        <Box
                            margin={'40px 0px'}
                            ref={scrollThird}

                        >
                            <Text
                                className='medium-heading1'
                                color={'#313B47'}
                            >
                                {TERMS_DATA?.WarrantyAndPremiumAccount?.heading}
                            </Text>

                            <Box
                                margin={'10px 0px 40px 0px'}
                            >
                                <Text
                                    className='small-text'
                                    marginBottom={'1rem'}
                                >
                                    {TERMS_DATA?.WarrantyAndPremiumAccount?.description}
                                </Text>



                                {
                                    TERMS_DATA?.WarrantyAndPremiumAccount?.paragraphs?.map((item, index) => (
                                        <>
                                            <Text
                                                className={"small-text"}
                                                fontWeight={'bold'}
                                                color="black"

                                                key={index}
                                            >
                                                {item?.head}
                                            </Text>
                                            <Text
                                                className='small-text'
                                                marginBottom={'1rem'}


                                                key={index}
                                            >
                                                {item?.text}
                                            </Text>
                                        </>
                                    ))
                                }
                                <UnorderedList>
                                    {
                                        Marketing?.map((item) => (
                                            <>
                                                <ListItem
                                                    className='small-text'
                                                    fontSize={'1em'}
                                                >
                                                    {item?.label}
                                                </ListItem>
                                            </>
                                        ))
                                    }
                                </UnorderedList>

                            </Box>
                        </Box>






                        {/* underline */}
                        <Underline
                            height='0.1em'
                            width='100%'
                            bgColor='#000'
                        />


                        {/* Contact Us */}
                        <Box
                            margin={'30px 0px'}
                        >
                            <Text
                                className='medium-heading1'
                                color={'#313B47'}
                            >
                                {TERMS_DATA?.ContactUs?.heading}
                            </Text>

                            {/* description */}
                            <Box
                                margin={'10px 0px 40px 0px'}
                                marginBottom={'20px'}
                            >
                                <Text
                                    className='small-text'
                                    marginBottom={'1rem'}

                                >
                                    {TERMS_DATA?.ContactUs?.subHeading}
                                </Text>

                                <Box>
                                    <UnorderedList>
                                        {
                                            CONTACT_US_DATA?.map((item) => (
                                                item?.label === 'one' ?
                                                    <>
                                                        <ListItem

                                                            className='small-text'
                                                            fontSize={'1em'}

                                                        >
                                                            <Text

                                                                className='small-text'


                                                            >
                                                                If you have any questions, please feel free to contact us at any time at
                                                                <Link

                                                                    color={'#2679C7'}
                                                                    className='small-text'


                                                                    marginLeft={"2"}
                                                                    href="mailto:contact@bisresume.com"
                                                                >
                                                                    contact@bisresume.com
                                                                </Link>

                                                            </Text>

                                                        </ListItem>
                                                    </>
                                                    :
                                                    item?.label === 'second' ?
                                                        <>
                                                            <ListItem
                                                                className='small-text'

                                                            >
                                                                {item?.description}

                                                            </ListItem>
                                                        </>
                                                        :
                                                        item?.label === 'third' ?
                                                            <>
                                                                <ListItem
                                                                    className='small-text'

                                                                >
                                                                    {item?.description}

                                                                </ListItem>
                                                            </>
                                                            :
                                                            item?.label === 'thirdLink' ?
                                                                <>
                                                                    <ListItem
                                                                        className='small-text'

                                                                    >
                                                                        {item?.description}
                                                                    </ListItem>
                                                                </>
                                                                :

                                                                <></>
                                            ))
                                        }
                                    </UnorderedList>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>

        </>
    )
}