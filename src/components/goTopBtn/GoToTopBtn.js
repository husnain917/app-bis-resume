import React from 'react';
import Classes from './custom.module.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { FaArrowUp, FaMinus } from 'react-icons/fa';
import { Box } from '@chakra-ui/layout';
const GoToTopBtn = () => {
  const [visible, setVisible] = useState(false);
  const onClickHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  const scrollHandler = () => {
    const maxHeight = 250;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (windowScroll > maxHeight) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);
  return (
    <>
      {visible && (
        <Box className={Classes.container}>
          <div className={Classes.btn} onClick={onClickHandler}>
            <FaMinus color="#002d6b" size={'20px'} />
            <FaArrowUp color="#002d6b" className={Classes.icon} size={'20px'} />
          </div>
        </Box>
      )}
    </>
  );
};

export default GoToTopBtn;
