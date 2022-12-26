import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function PDFGenerater() {
    // pdf generater
    const pdfRef = useRef(null);
    const downloadPDFHandler = useReactToPrint({
        content: () => pdfRef.current,
        documentTitle: 'download.pdf',
        // onAfterPrint: () => alert('download success')
    })
    return {
        pdfRef,
        downloadPDFHandler,
    }
}
