import { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useSelector } from 'react-redux';

export default function PDFGenerater() {
    // redux data
    let tempSize = useSelector((state) => state.editorReducer.templateSize);

    // pdf generater
    const pdfRef = useRef(null);
    const downloadPDFHandler = () => {
        html2canvas(pdfRef.current).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF('p', 'mm', [tempSize.tempWidth, tempSize.tempHeight]);
            pdf.addImage(imgData, "JPEG", 0, 0);
            pdf.save("download.pdf");
        });
    };
    return {
        pdfRef,
        downloadPDFHandler,
    }
}
