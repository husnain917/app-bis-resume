import Link from 'next/link';
import React from 'react';
import { Tooltip } from 'react-tippy';
import style from '../../../styles/templates/template1.module.scss';
const ChangeTempBtn = () => {
  return (
    <Link href={'/templates'}>
      <div style={{ position: 'fixed', top: '80px', left: '50px' }}>
        <Tooltip title="Change Template" arrow distance={20}>
          <div className={style.swap}>
            <img src="/icons/swap.png" />
          </div>
        </Tooltip>
      </div>
    </Link>
  );
};

export default ChangeTempBtn;
