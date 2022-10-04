import { useSelector } from "react-redux";


export default function FashionCustomHook() {
    // redux Data
  let resumeEditor = useSelector((state) => state.editorReducer);
  
  return {
    resumeEditor,
  }
}
