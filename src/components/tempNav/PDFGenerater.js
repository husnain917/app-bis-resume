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
        documentTitle: 'download.pdf',
        onAfterPrint: () => { onClickHandler() },
    })
    return {
        pdfRef,
        downloadPDFHandler,
    }
}
