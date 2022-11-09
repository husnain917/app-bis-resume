// import { Image, Box } from "@chakra-ui/react";
// import React from "react";
// import ReactDOM from "react-dom";
// import ImageUploading from "react-images-uploading";

// const ImageSelector = () => {
//   const [images, setImages] = React.useState([]);
//   const [hover, setHover] = React.useState("");
//   const maxNumber = 1;
//   const onChange = (imageList, addUpdateIndex) => {
//     // data for submit
//     console.log(imageList, addUpdateIndex);
//     setImages(imageList);
//   };

//   return (
//     <Box className="App">
//       <ImageUploading
//         multiple
//         value={images}
//         onChange={onChange}
//         maxNumber={maxNumber}
//         dataURLKey="data_url"
//         acceptType={["jpg"]}
//       >
//         {({
//           imageList,
//           onImageUpload,
//           onImageRemoveAll,
//           onImageUpdate,
//           onImageRemove,
//           isDragging,
//           dragProps,
//         }) => (
//           // write your building UI
//           <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
//             <Box className="upload__image-wrapper">
//               <button
//                 style={isDragging ? { color: "red" } : null}
//                 onClick={onImageUpload}
//                 {...dragProps}
//               >
//                 Click or Drop here
//               </button>
//               &nbsp;
//               {imageList.map((image, index) => {
//                 if (!image) {
//                 }
//                 return (
//                   <Box key={index} className="image-item">
//                     <Box className="pic_container">
//                       <Image
//                         src={image.data_url}
//                         alt="/imageProfile.jpg"
//                         width="100"
//                         borderRadius="50%"
//                         h={"16em"}
//                         w={"16em"}
//                       />
//                     </Box>
//                     <Box className="image-item__btn-wrapper">
//                       <button onClick={() => onImageUpdate(index)}>
//                         Update
//                       </button>
//                       <button onClick={() => onImageRemove(index)}>
//                         Remove
//                       </button>
//                     </Box>
//                   </Box>
//                 );
//               })}
//             </Box>
//           </Box>
//         )}
//       </ImageUploading>
//     </Box>
//   );
// };

// export default ImageSelector;

import React, { useState } from "react";
import { Box, Image } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

const ImageSelector = () => {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <Box>
      <input type="file" onChange={handleChange} />
      <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg" />
      <Box position={"absolute"}>
        <Box
          borderWidth={"1"}
          borderColor="black"
          className="pic_container"
          zIndex="-1"
        >
          <Box
            position={"absolute"}
            zIndex={"1"}
            top={"10"}
            right={"6"}
            bg="whitesmoke"
            h={6}
            w={6}
            display="flex"
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"50%"}
          >
            <EditIcon w={4} h={4} zIndex={"0.5"} />
          </Box>

          {file ? (
            <Image
              src={file}
              alt=""
              width="100"
              borderRadius="50%"
              h={"16em"}
              w={"16em"}
              borderWidth={4}
              borderColor="black"
            />
          ) : (
            <Image
              src="./UploadImage.jpg"
              alt=""
              width="100"
              borderRadius="50%"
              h={"16em"}
              w={"16em"}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ImageSelector;
