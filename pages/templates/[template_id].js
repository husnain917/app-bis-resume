import React, { useState } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import styles from "../../styles/TemplateDetail.module.css";
import TempLayout from "../../src/components/tempNav/TempLayout";
import { useWindowSizing } from "../../customHooks/useWindowSizing";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { CUSTOM_TEMP_DATA } from "../../src/components/customTempData/CustomTempData";
import ChangeTempBtn from "../../src/components/changeTempbtn/ChangeTempBtn";
import PDFGenerater from "../../src/components/tempNav/PDFGenerater";
import { useRouter } from "next/router";
const TemplateDetail = () => {
  const router = useRouter();
  const { template_id } = router.query;
  const [sideTempSelect, setsideTempSelect] = useState(false);
  const { width } = useWindowSizing();
  const { downloadPDFHandler, pdfRef } = PDFGenerater();
  const [template, settemplate] = useState();
  const selected =
    CUSTOM_TEMP_DATA?.find((item) => item.id === template) ||
    CUSTOM_TEMP_DATA.find((item) => item.id === parseInt(template_id));

  return (
    <Box
      overflow={'auto'}
    >
      <TempLayout
        work={true}
        education={true}
        languages={true}
        skills={true}
        downloadPDF={downloadPDFHandler}
      >
        <ChangeTempBtn onPress={() => setsideTempSelect(!sideTempSelect)} />
        <Flex
          flexDir={"row"}
          alignItems={{
            base: "none",
            lg: sideTempSelect ? "flex-start" : "center",
          }}
          justifyContent={{ lg: sideTempSelect ? "flex-start" : "center" }}
          className={styles.flexContainer}
        >
          {sideTempSelect && (
            <Box
              className={styles.sideBarTempContainer}
              columns={{ base: 2, sm: 1, md: 1, lg: 2, xl: 2 }}
              margin={'11% 0% 0% 3%'}
              borderRadius={6}
              border={'1px solid #313b47'}
            >
              {CUSTOM_TEMP_DATA?.map((items, index) => (
                <>
                  <Box
                    key={index}
                    onClick={() => settemplate(items?.id)}
                    px={2}
                    py={4}
                    color={'#fff'}
                    cursor={'pointer'}
                    _hover={{
                      color: '#00c8aa'
                    }}
                  >
                    <Text
                      fontSize={'16px'}
                      fontWeight={700}
                      m={'0px 0px 3px 13px'}
                    >
                      {items?.heading}
                    </Text>
                    <Image
                      src={items?.src}
                      alt={items?.alt}
                      boxSize={'250px'}
                      borderRadius={8}
                      p={3}
                      _hover={{
                        border: '2px solid #00c8aa'
                      }}
                    />
                  </Box>
                </>
              ))}
            </Box>
          )}

          {CUSTOM_TEMP_DATA?.find((item) => item.id === template)?.component}
          <Box ref={pdfRef}>{selected && <selected.component />}</Box>
        </Flex>
        <div>
          <Modal
            isOpen={width < 1400 ? sideTempSelect : false}
            onClose={() => setsideTempSelect(false)}
            size={"full"}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <ModalBody>
                {sideTempSelect && (
                  <Box
                    className={styles.sideBarTempSmallContainer}
                    py={2}
                    mt={10}
                  >
                    {CUSTOM_TEMP_DATA?.map((items, index) => (
                      <>
                        <Box
                          key={index}
                          onClick={() => {
                            settemplate(items?.id);
                            setsideTempSelect(false);
                          }}
                          px={6}
                          py={4}
                          color={'#fff'}
                          cursor={'pointer'}
                          _hover={{
                            color: '#00c8aa'
                          }}
                        >
                          <Text
                            fontSize={'16px'}
                            fontWeight={700}
                            m={'0px 0px 3px 13px'}
                          >
                            {items?.heading}
                          </Text>
                          <Image
                            src={items?.src}
                            alt={items?.alt}
                            boxSize={'250px'}
                            borderRadius={8}
                            p={3}
                            _hover={{
                              border: '2px solid #00c8aa'
                            }}
                          />
                        </Box>
                      </>
                    ))}
                  </Box>
                )}
              </ModalBody>
            </ModalContent>
          </Modal>
        </div>
      </TempLayout>
    </Box>
  );
};
export default TemplateDetail;
