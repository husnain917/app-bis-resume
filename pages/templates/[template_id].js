import React, { useState } from "react";
import { Box, Flex, Image, Text, } from "@chakra-ui/react";
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
    CUSTOM_TEMP_DATA?.find((item) => item.id === template_id);

  return (
    <Box
      overflow={'auto'}
    >
      <TempLayout
        work={selected?.sections?.work}
        education={selected?.sections?.education}
        languages={selected?.sections?.languages}
        skills={selected?.sections?.skills}
        projects={selected?.sections?.projects}
        references={selected?.sections?.references}
        organization={selected?.sections?.organization}
        interest={selected?.sections?.interest}
        certificate={selected?.sections?.certificate}
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
              margin={'9% 0% 0% 0%'}
              ml={'74px'}
              borderRadius={6}
              border={'1px solid #313b47'}
            >
              {CUSTOM_TEMP_DATA?.map((items, index) => (
                <>
                  <Box
                    key={index}
                    onClick={() => settemplate(items?.id)}
                    m={'15px 8px 8px 8px'}
                    color={'#fff'}
                    cursor={'pointer'}
                    _hover={{
                      color: '#00c8aa',
                      transition: '0.5s color'
                    }}
                  >
                    <Text
                      fontSize={'14px'}
                      fontWeight={700}
                      m={'0px 0px 3px 13px'}
                    >
                      {items?.heading}
                    </Text>
                    <Image
                      src={items?.src}
                      alt={items?.alt}
                      boxSize={'190px'}
                      borderRadius={8}
                      p={'1px'}
                      _hover={{
                        border: '3px solid #00c8aa'
                      }}
                    />
                  </Box>
                </>
              ))}
            </Box>
          )}

          {CUSTOM_TEMP_DATA?.find((item) => item.id === template)?.component}
          <Box
            mt={'70px'}
            ml={'50px'}
            overflow={'auto'}
          >
            <Box ref={pdfRef}>{selected && <selected.component />}</Box>
          </Box>
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
                            color: '#00c8aa',
                            transition: '0.5s color'
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
                            p={'1px'}
                            _hover={{
                              border: '3px solid #00c8aa'
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
