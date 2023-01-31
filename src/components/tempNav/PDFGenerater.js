import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import SaveTempData from "../saveTempBtn/SaveTempData";

export default function PDFGenerater() {
  // Save Template Data in DB Hook
  const { onClickHandler } = SaveTempData();

  // pdf generater
  const pdfRef = useRef(null);
  const downloadPDFHandler = useReactToPrint({
    content: () => pdfRef.current,
    documentTitle: "download.pdf",
    onAfterPrint: () => {
      onClickHandler();
    },
  });

  return {
    pdfRef,
    downloadPDFHandler,
    downloadWordHandler,
  };
}
const downloadWordHandler = async (resumeData) => {
  try {
    console.log("resumeData", resumeData);

    const options = {
      method: "POST",
      body: JSON.stringify(resumeData),
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      },
    };

    fetch("https://nabeeltahirdeveloper.pythonanywhere.com/get-doc", options)
      .then((response) => response?.blob())
      .then((data) => {
        const url = window.URL.createObjectURL(new Blob([data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "file.docx");
        document.body.appendChild(link);
        link.click();
        link.remove();
      })
      .catch((error) => {
        console.error("docfile api inside=>error=>", error);
      });
  } catch (error) {
    console.error("docfile api error=>", error);
  }
};
