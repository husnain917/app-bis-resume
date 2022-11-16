import React from "react"
import {
    RESUME_TABLE_DATA,
} from "./CustomData";
import {
    Box,
    Container,
    ListItem,
    OrderedList,
    Text
} from "@chakra-ui/react"
import { Link } from "react-scroll";
import styles from "../../../styles/resumeFormats.module.css";

export default function ResumeTable() {
    return (
        <Container
            maxW={"100%"}
            p={0}
        >
            <Box
                padding={"20px 0px 30px 0px"}
            >
                <Text
                    fontSize={"18px"}
                    fontWeight={"bold"}
                >
                    TABLE OF CONTENTS
                </Text>
            </Box>
            <Box
                padding={"0px 30px 30px 30px"}
            >
                <OrderedList
                    fontSize={"16px"}
                    fontWeight={"medium"}
                    lineHeight={8}
                >
                    <ListItem>
                        <Link
                            className={styles.links}
                            to={RESUME_TABLE_DATA?.istContent?.link}
                            smooth={true}
                            duration={800}
                            offset={0}
                        >
                            {RESUME_TABLE_DATA?.istContent?.title}
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link
                            className={styles.links}
                            to={RESUME_TABLE_DATA?.secContent?.link}
                            smooth={true}
                            duration={800}
                            offset={0}
                        >
                            {RESUME_TABLE_DATA?.secContent?.title}
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link
                            className={styles.links}
                            to={RESUME_TABLE_DATA?.thirdContent?.link}
                            smooth={true}
                            duration={800}
                            offset={0}
                        >
                            {RESUME_TABLE_DATA?.thirdContent?.title}
                        </Link>
                        <OrderedList>
                            {
                                RESUME_TABLE_DATA?.thirdContent?.data?.map((item, index) => (
                                    <>
                                        <ListItem
                                            key={index}
                                        >
                                            <Link
                                                className={styles.links}
                                                to={item?.link}
                                                smooth={true}
                                                duration={800}
                                                offset={0}
                                            >
                                                {item?.text}
                                            </Link>
                                        </ListItem>
                                    </>
                                ))
                            }
                        </OrderedList>
                    </ListItem>
                    <ListItem>
                        <Link
                            className={styles.links}
                            to={RESUME_TABLE_DATA?.fourthContent?.link}
                            smooth={true}
                            duration={800}
                            offset={0}
                        >
                            {RESUME_TABLE_DATA?.fourthContent?.title}
                        </Link>
                    </ListItem>
                </OrderedList>
            </Box>
        </Container>
    )
}
