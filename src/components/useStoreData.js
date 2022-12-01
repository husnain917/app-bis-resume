import React from 'react'
import { useSelector } from 'react-redux'

export default function useStoreData() {
    const resumeData = useSelector(store => store.editorReducer.resumeData);
    const theme = useSelector(store => store.editorReducer.theme);
    const updater = useSelector(store => store.editorReducer.updater);
    return (
        {
            resumeData,
            theme,
            updater
        }

    )
}
