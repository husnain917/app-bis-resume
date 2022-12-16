import { useRef } from 'react'

export default function CustomHook() {
    // Hook
    const pdfRef = useRef(null);

    return {
        pdfRef,
    }
}
