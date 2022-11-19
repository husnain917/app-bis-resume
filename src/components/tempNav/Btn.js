import React from 'react';
import { Button } from '@chakra-ui/react';
export default function Btn({ title, onClick, bgColor }) {
  return (
    <div>
      <Button
        m="5px"
        size={['sm', 'md', 'lg']}
        onClick={onClick}
        bgColor={bgColor}
        color="white"
        opacity="0.5"
        _hover={{
          opacity: '1',
        }}
      >
        {title}
      </Button>
    </div>
  );
}
