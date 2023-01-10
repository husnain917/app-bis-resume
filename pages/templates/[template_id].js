import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
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
    <div style={{ overflow: "auto" }}>
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
              columns={{ base: 1, sm: 1, md: 1, lg: 2, xl: 2 }}
              spacing={10}
              py={4}
              px={10}
            >
              {CUSTOM_TEMP_DATA?.map((items, index) => (
                <>
                  <Box
                    className="cursor"
                    key={index}
                    onClick={() => settemplate(items?.id)}
                    style={{ paddingLeft: 20, paddingTop: 20 }}
                  >
                    <img
                      src={items?.src}
                      alt={items?.alt}
                      height={items?.height}
                      width={items?.width}
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
                    columns={{ base: 1, sm: 1, md: 1, lg: 2, xl: 2 }}
                    spacing={10}
                    py={4}
                    px={10}
                  >
                    {CUSTOM_TEMP_DATA?.map((items, index) => (
                      <>
                        <Box
                          className="cursor"
                          key={index}
                          onClick={() => {
                            settemplate(items?.id);
                            setsideTempSelect(false);
                          }}
                          style={{ paddingLeft: 20, paddingTop: 20 }}
                        >
                          <img
                            src={items?.src}
                            alt={items?.alt}
                            height={items?.height}
                            width={items?.width}
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
    </div>
  );
};
export default TemplateDetail;
