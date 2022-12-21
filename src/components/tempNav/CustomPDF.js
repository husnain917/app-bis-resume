import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { pdfTempHandler } from "../../../store/actions/builderAction";
export default function CustomPDF(props) {
    // action height and width
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(pdfTempHandler({
            height: props.height,
            width: props.width,
        }))
    }, [])
    return (
        <></>
    )
}
