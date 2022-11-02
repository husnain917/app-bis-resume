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

export default function Cookie() {


    return (
        <>
            <Container
                maxW={['100%', '100%', '100%', '80%', '60%']}
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
                                        fontSize={['2em', '3em', '3em', '3em']}
                                        fontWeight={'bold'}
                                        color={'#313B47'}
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
                                        lineHeight={'1.5'}
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
                        >
                            {TERMS_DATA?.TermsOfUse?.description}
                        </Text>
                    </Box>

                    {/* Table of Contents */}
                    <Box
                        margin={'40px 0px'}
                    >
                        <Text
                            fontSize={['2em', '2.4em', '2.4em', '2.4em']}
                            fontWeight={'bold'}
                            color={'#313B47'}
                        >
                            {TERMS_DATA?.TableOfContents?.heading}
                        </Text>

                        {/* description */}
                        <Box
                            margin={'10px 0px 40px 0px'}
                        >
                            <OrderedList>
                                {
                                    TABLE_CONTENT_DATA?.map((item) => (
                                        <>
                                            <ListItem>
                                                <Link
                                                    href={item?.href ?? '#'}
                                                    color={'#2679C7'}
                                                    lineHeight={'1.5'}
                                                    fontSize={'1.1em'}
                                                >
                                                    {item?.label}
                                                </Link>
                                            </ListItem>
                                        </>
                                    ))
                                }
                            </OrderedList>
                        </Box>
                    </Box>

                    <Box
                        margin={'40px 0px'}
                    >
                        <Text
                            fontSize={['2em', '2.4em', '2.4em', '2.4em']}
                            fontWeight={'bold'}
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
                                            fontSize={'1rem'}
                                            lineHeight={'1.5'}
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
                    >
                        <Text
                            fontSize={['2em', '2.4em', '2.4em', '2.4em']}
                            fontWeight={'bold'}
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
                                            fontSize={'1.2rem'}
                                            lineHeight={'1.5'}
                                            marginBottom={'1rem'}
                                            fontWeight={"bold"}
                                        >

                                            {item?.head}
                                        </Text>
                                        <Text
                                            key={index}
                                            fontSize={'1rem'}
                                            lineHeight={'1.5'}
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
                                                lineHeight={'1.5'}
                                                fontSize={'1.1em'}
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
                    >
                        <Text
                            fontSize={['2em', '2.4em', '2.4em', '2.4em']}
                            fontWeight={'bold'}
                            color={'#313B47'}
                        >
                            {TERMS_DATA?.WarrantyAndPremiumAccount?.heading}
                        </Text>

                        <Box
                            margin={'10px 0px 40px 0px'}
                        >
                            <Text
                                fontSize={'1rem'}
                                lineHeight={'1.5'}
                                marginBottom={'1rem'}
                            >
                                {TERMS_DATA?.WarrantyAndPremiumAccount?.description}
                            </Text>



                            {
                                TERMS_DATA?.WarrantyAndPremiumAccount?.paragraphs?.map((item, index) => (
                                    <>
                                        <Text
                                            fontSize={'1.1rem'}
                                            lineHeight={'1.5'}
                                            margin={'1rem 0rem'}
                                            fontWeight={"bold"}
                                            key={index}
                                        >
                                            {item?.head}
                                        </Text>
                                        <Text
                                            fontSize={'1rem'}
                                            lineHeight={'1.5'}
                                            margin={'1rem 0rem'}
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
                                                lineHeight={'1.5'}
                                                fontSize={'1.1em'}
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
                            fontSize={['2em', '2.4em', '2.4em', '2.4em']}
                            fontWeight={'bold'}
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
                                fontSize={'1rem'}
                                lineHeight={'1.5'}
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
                                                        lineHeight={'1.5'}
                                                        fontSize={'1.1em'}
                                                    >
                                                        <Text
                                                            fontSize={'1rem'}
                                                            lineHeight={'1.5'}
                                                            marginBottom={'1rem'}
                                                        >
                                                            If you have any questions, please feel free to contact us at any time at
                                                            <Link

                                                                color={'#2679C7'}
                                                                lineHeight={'1.5'}
                                                                fontSize={'1rem'}
                                                                marginLeft={"2"}
                                                            >
                                                                contact@novoresume.com
                                                            </Link>

                                                        </Text>

                                                    </ListItem>
                                                </>
                                                :
                                                item?.label === 'second' ?
                                                    <>
                                                        <ListItem
                                                            lineHeight={'1.5'}
                                                            fontSize={'1.1em'}
                                                        >
                                                            {item?.description}

                                                        </ListItem>
                                                    </>
                                                    :
                                                    item?.label === 'third' ?
                                                        <>
                                                            <ListItem
                                                                lineHeight={'1.5'}
                                                                fontSize={'1.1em'}
                                                            >
                                                                {item?.description}

                                                            </ListItem>
                                                        </>
                                                        :
                                                        item?.label === 'thirdLink' ?
                                                            <>
                                                                <ListItem
                                                                    lineHeight={'1.5'}
                                                                    fontSize={'1.1em'}
                                                                    marginBottom="20"
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
            </Container>
        </>
    )
}

