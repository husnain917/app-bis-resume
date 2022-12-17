import { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export default function PDFGenerater() {
    const pdfRef = useRef(null);
    const downloadPDFHandler = () => {
        html2canvas(pdfRef.current).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF('p', 'mm', [254, 242]);
            pdf.addImage(imgData, "JPEG", 0, 0);
            pdf.save("download.pdf");
        });
    };
    return {
        pdfRef,
        downloadPDFHandler,
    }
}
