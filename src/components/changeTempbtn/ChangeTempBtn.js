import { Box,Image } from '@chakra-ui/react';
import React from 'react';
import { Tooltip } from 'react-tippy';
import style from '../../../styles/templates/template1.module.scss';

const ChangeTempBtn = ({onPress}) => {
  return (

      <Box
        position={{ base: "relative", lg: "fixed" }}
        top={{ base: "50px", lg: "100px" }}
        mb={{ base: "20px", lg: "0px" }}
        left={"50px"}
        zIndex="999"
        onClick={onPress}
      >
        <Tooltip title="Change Template" arrow distance={20}>
          <div className={style.swap} style={{ background: "#006772" }}>
            <Image src="/icons/swap.png" alt="will show soon" />
          </div>
        </Tooltip>
      </Box>
  
  );
};

export default ChangeTempBtn;
