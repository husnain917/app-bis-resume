import React from 'react'
import { TABLE_CONTENT_DATA } from "./CustomData";
import { OrderedList, ListItem } from "@chakra-ui/react";
import { Link } from "react-scroll";
import styles from "./tableOfContent.module.css";
export default function TableOfContent() {
    return (
        <>
            <OrderedList>
                {
                    TABLE_CONTENT_DATA?.map((item, index) => (
                        <>
                            <ListItem
                                key={index}
                            >
                                <Link
                                    className={`${styles.links} ${`small-text`}`}
                                    to={item.href}
                                    smooth={true}
                                    duration={800}
                                    offset={0}
                                >
                                    {item?.label}
                                </Link>
                            </ListItem>
                        </>
                    ))
                }
            </OrderedList>
        </>
    )
}
