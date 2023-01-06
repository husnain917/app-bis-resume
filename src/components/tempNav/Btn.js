import React from 'react';
import { Button } from '@chakra-ui/react';
export default function Btn({ title, onClick, bgColor, className }) {
  return (
    <div>
      <Button
        m="5px"
        // size={['sm', 'md', 'lg']}
        onClick={onClick}
        bgColor={bgColor}
        color="white"
        fontSize={{ base: '10px', md: '16px' }}
        height={{ base: '30px', md: '70px' }}
        w={{ base: '120px', md: '150px ', lg: '180px' }}
        // width={'50%'}
        className={className}
        opacity="1"
        _hover={{
          opacity: '1',
        }}
      >
        {title}
      </Button>
    </div>
  );
}
