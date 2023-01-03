import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { Tooltip } from 'react-tippy';
import style from '../../../styles/templates/template1.module.scss';
const ChangeTempBtn = () => {
  return (
    <Link href={'/templates'}>
      <Box
        position={{ base: 'relative', lg: 'fixed' }}
        top={{ base: '50px', lg: '100px' }}
        mb={{ base: '20px', lg: '0px' }}
        left={'50px'}
        zIndex="999"
      >
        <Tooltip title="Change Template" arrow distance={20}>
          <div className={style.swap} style={{ background: '#006772' }}>
            <img src="/icons/swap.png" />
          </div>
        </Tooltip>
      </Box>
    </Link>
  );
};

export default ChangeTempBtn;
