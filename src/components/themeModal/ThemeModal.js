import {
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
} from '@chakra-ui/popover';
import { Button } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { themeMode } from '../../../store/actions/themeAction';
import { themeData } from './themeData';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import { useSwiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

const ThemeModal = () => {
  const swiperRef = useRef();
  const dispatch = useDispatch();
  const themeHandler = (theme) => {
    dispatch(
      themeMode({
        backgroundColor: theme.backgroundColor,
        color: theme.color,
      })
    );
  };

  return (
    <PopoverContent bg={'#fff'} w="225px" pl="5px">
      <PopoverArrow bg={'#fff'} />
      <PopoverCloseButton />
      <PopoverHeader color={'black'}>Theme Changer</PopoverHeader>
      <PopoverBody>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            size={'xs'}
            my="10px"
            onClick={() =>
              dispatch(
                themeMode({
                  backgroundColor: '',
                  color: '',
                })
              )
            }
          >
            Default
          </Button>
          <div style={{ display: 'flex', marginTop: '10px' }}>
            <AiFillCaretLeft
              color="black"
              size={16}
              style={{ cursor: 'pointer' }}
              onClick={() => swiperRef.current.slidePrev()}
            />
            <AiFillCaretRight
              color="black"
              size={16}
              style={{ cursor: 'pointer' }}
              onClick={() => swiperRef.current.slideNext()}
            />
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            el: '.swiper-pagination',
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          // navigation={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                flexFlow: 'wrap',
              }}
            >
              {themeData.slice(0, 15).map((item, index) => (
                <div key={index} style={{ flexBasis: '20%' }}>
                  <div
                    style={item.style}
                    onClick={() => themeHandler(item.theme)}
                  ></div>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                flexFlow: 'wrap',
              }}
            >
              {themeData.slice(15, 30).map((item, index) => (
                <div
                  key={index}
                  style={{ flexBasis: '20%' }}
                  className="themeActive"
                >
                  <div
                    style={item.style}
                    onClick={() => themeHandler(item.theme)}
                  ></div>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                flexFlow: 'wrap',
              }}
            >
              {themeData.slice(30, 40).map((item, index) => (
                <div key={index} style={{ flexBasis: '20%' }}>
                  <div
                    style={item.style}
                    onClick={() => themeHandler(item.theme)}
                  ></div>
                </div>
              ))}
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>Slide 4</SwiperSlide> */}
        </Swiper>
      </PopoverBody>
    </PopoverContent>
  );
};

export default ThemeModal;
