import { Button } from '@chakra-ui/button';
import { Text } from '@chakra-ui/layout';
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from '@chakra-ui/popover';
import React from 'react';
import { useDispatch } from 'react-redux';
import { customFont } from '../../../store/actions/fontAction';
const FontPopover = () => {
  const dispatch = useDispatch();
  const data = [
    { title: 'cursive' },
    { title: 'sans-serif' },
    { title: 'grInter' },
    { title: 'fangsong' },
    { title: 'monospace' },
    { title: 'inherit' },
    { title: 'fantasy' },
    { title: 'ui-serif' },
    { title: 'revert' },
    { title: 'EuclidCircularB' },
  ];
  const onClickHandler = (title) => {
    dispatch(
      customFont({
        font: title,
      })
    );
  };
  return (
    <PopoverContent bg={'#006772'} width="230px">
      <PopoverArrow bg={'#006772'} />
      <PopoverCloseButton color="white" />
      <PopoverHeader
        color="white"
        fontSize={{ base: '12px', sm: '14px', md: '16px' }}
        fontWeight="600"
      >
        Font Changer
      </PopoverHeader>
      <PopoverBody>
        {data.map((item, index) => (
          <Text
            key={index}
            color="white"
            cursor={'pointer'}
            textTransform="capitalize"
            onClick={() => onClickHandler(item.title)}
            marginTop="10px"
          >
            {item.title}
          </Text>
        ))}
      </PopoverBody>
    </PopoverContent>
  );
};

export default FontPopover;
