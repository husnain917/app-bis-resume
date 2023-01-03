import {
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
} from '@chakra-ui/popover';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { themeMode } from '../../../store/actions/themeAction';

const ThemeModal = () => {
  const borderColor = (color) => {
    return {
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      borderWidth: '8px',
      borderStyle: 'solid',
      borderColor: color,
      cursor: 'pointer',
    };
  };
  const theme = useSelector((store) => store.themeReducer.theme);
  console.log('store:', theme);
  const dispatch = useDispatch();
  const themeHandler = (theme) => {
    console.log('htfa', theme.backgroundColor);
    dispatch(
      themeMode({
        backgroundColor: theme.backgroundColor,
        color: theme.color,
      })
    );
  };

  const data = [
    {
      style: borderColor('red'),
      theme: {
        backgroundColor: 'red',
        color: 'black',
      },
    },
    {
      style: borderColor('green'),
      theme: {
        backgroundColor: 'green',
        color: 'white',
      },
    },
    {
      style: borderColor('blue'),
      theme: {
        backgroundColor: 'blue',
        color: 'white',
      },
    },
    {
      style: borderColor('yellow'),
      theme: {
        backgroundColor: 'yellow',
        color: 'white',
      },
    },
    {
      style: borderColor('brown'),
      theme: {
        backgroundColor: 'brown',
        color: 'white',
      },
    },
  ];
  return (
    <PopoverContent bg={'#006772'}>
      <PopoverArrow bg={'#006772'} />
      <PopoverCloseButton color={'white'} />
      <PopoverHeader color={'white'}>Theme Changer</PopoverHeader>
      <PopoverBody>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: '10px',
          }}
        >
          {data.map((item, index) => (
            <div key={index}>
              <div
                style={item.style}
                onClick={() => themeHandler(item.theme)}
              ></div>
            </div>
          ))}
        </div>
      </PopoverBody>
    </PopoverContent>
  );
};

export default ThemeModal;
