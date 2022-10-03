import { SimpleGrid, Box } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'

function Templates() {
  return (
    <div>
      <SimpleGrid columns={{ base: 2, sm: 3, md: 4 }} spacing={10} py={4} px={10}>
        <Box>
          <Link href='/templates/templateceo'>
              <img src='Chief_Exclusive_Office.jpg' alt='Chief_Exclusive_Office' height='200px' width='250px' />
          </Link>
        </Box>
        {/* <Box>
          <img src='Chief_Exclusive_Office.jpg' alt='Chief_Exclusive_Office' height='200px' width='250px' />
        </Box>
        <Box>
          <img src='Chief_Exclusive_Office.jpg' alt='Chief_Exclusive_Office' height='200px' width='250px' />
        </Box>
        <Box>
          <img src='Chief_Exclusive_Office.jpg' alt='Chief_Exclusive_Office' height='200px' width='250px' />
        </Box> */}
      </SimpleGrid>
    </div>
  )
}

export default Templates
