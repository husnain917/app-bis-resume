import {
    Box,
    Link,
    Text
} from '@chakra-ui/react';
import React from 'react'
import styles from "../../../styles/resumeFormats.module.css";
import { SIDEBAR_DATA } from "./CustomData";

export default function sideBar() {
    return (
        <>
            <Box
                width={'5rem'}
                backgroundColor={'#ffffff'}
                boxShadow={'sm'}
                borderRadius={'0.5rem'}
                className={styles.sideBarContainer}
                margin={'25px 0px'}
            >
                {
                    SIDEBAR_DATA?.map((item, index) => (
                        index === 0 ?
                            <>
                                <Box
                                    key={index}
                                    display={'flex'}
                                    flexDirection={'column'}
                                    alignItems={'center'}
                                    color={'#3983fa'}
                                    _hover={{
                                        color: '#293f71',
                                        transition: '0.5s'
                                    }}
                                    cursor={'pointer'}
                                    padding={'15px 0px'}
                                >
                                    <Box
                                        fontSize={'26px'}
                                    >
                                        {item?.icon}
                                    </Box>
                                    <Box
                                        fontSize={'12px'}
                                        fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                                    >
                                        <Text>
                                            {item?.like}
                                        </Text>
                                        <Text>
                                            {item?.text}
                                        </Text>
                                    </Box>
                                </Box>
                            </>
                            :
                            index === 1 || index === 2 || index === 3 || index === 4 ?
                                <>
                                    <Box
                                        key={index}
                                        display={'flex'}
                                        flexDirection={'column'}
                                        alignItems={'center'}
                                        color={'#3983fa'}
                                        _hover={{
                                            color: '#293f71',
                                            transition: '0.5s'
                                        }}
                                        padding={'15px 0px'}
                                    >
                                        <Box
                                            fontSize={'26px'}
                                        >
                                            <Link
                                                href={item?.href ?? "#"}
                                                _hover={{
                                                    color: '#293f71',
                                                    transition: '0.5s'
                                                }}
                                            >
                                                {item?.icon}
                                            </Link>
                                        </Box>
                                    </Box>
                                </>
                                :
                                index === 5 ?
                                    <>
                                        <Box
                                            key={index}
                                            display={'flex'}
                                            flexDirection={'column'}
                                            alignItems={'center'}
                                            color={'#3983fa'}
                                            _hover={{
                                                color: '#293f71',
                                                transition: '0.5s'
                                            }}
                                            cursor={'pointer'}
                                            padding={'15px 0px'}
                                        >
                                            <Box
                                                fontSize={'26px'}
                                            >
                                                {item?.icon}
                                            </Box>
                                            <Box
                                                fontSize={'12px'}
                                                fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                                            >
                                                <Text>
                                                    {item?.text}
                                                </Text>
                                            </Box>
                                        </Box>
                                    </>
                                    :
                                    <></>
                    ))
                }
            </Box>
        </>
    )
}  