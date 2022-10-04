import React from 'react'
import {  Text } from "@chakra-ui/react";
import {
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
  } from '@chakra-ui/react'
export default function List({text,marginTop}) {
  return (
    <>
        <UnorderedList>
  <ListItem fontSize="1.5rem" mt={marginTop}>{text}</ListItem>

</UnorderedList>
    </>
  )
}
