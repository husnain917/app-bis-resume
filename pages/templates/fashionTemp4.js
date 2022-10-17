import { Box, Flex, HStack, Image } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { Tooltip } from 'react-tippy';
import FashTemp4About from '../../src/components/fashionTemp4/FashTemp4About';
import FashTemp4Edu from '../../src/components/fashionTemp4/FashTemp4Edu';
import FashTemp4Profile from '../../src/components/fashionTemp4/FashTemp4Profile';
import style from '../../styles/templates/template1.module.scss';
import { onBlurField } from '../../store/actions/builderAction';
import { connect } from 'react-redux';
import FashTemp4Exp from '../../src/components/fashionTemp4/FashTemp4Exp';
import FashTemp4Contact from '../../src/components/fashionTemp4/FashTemp4Contact';
const fashionTemp4 = (props) => {
  const { resumeData } = props;
  console.log('resumeData:', resumeData);
  return (
    <div className={style.main}>
      <Link href={'/templates'}>
        <div className={style.swapCont}>
          <Tooltip title="Change Template" arrow distance={20}>
            <div className={style.swap}>
              <img src="/icons/swap.png" />
            </div>
          </Tooltip>
        </div>
      </Link>
      <Flex
        justifyContent={{ base: 'none', md: 'center' }}
        bg={{ md: 'none', lg: 'blackAlpha.100' }}
      >
        <Box
          minW={830}
          maxW={830}
          h={'full'}
          borderRadius={6}
          bg={'#F9E4D6'}
          my={10}
          pl={'120px'}
          pr={'70px'}
          pt={8}
          pb={20}
          mx={5}
        >
          <HStack>
            <Box
              maxW={'140px'}
              minW={'140px'}
              borderRadius="full"
              mt={'40px'}
              mb={3}
            >
              <Image
                borderRadius={'full'}
                boxSize="140px"
                src="/pr.png"
                alt="Profile"
              />
            </Box>
            <FashTemp4Profile />
          </HStack>
          <FashTemp4About />
          <FashTemp4Edu
            data={
              resumeData?.education?.items.length
                ? [...resumeData?.education?.items]
                : [...sampleData?.data?.education?.items]
            }
          />
          <FashTemp4Exp
            data={
              resumeData?.work?.items.length
                ? [...resumeData?.work?.items]
                : [...sampleData?.data?.work?.items]
            }
          />
          <FashTemp4Contact />
        </Box>
      </Flex>
    </div>
  );
};
const mapStateToProps = (store) => ({
  theme: store.editorReducer.theme,
  resumeData: store.editorReducer.resumeData,
  updater: store.editorReducer.updater,
});
export default connect(mapStateToProps, { onBlurField })(fashionTemp4);
