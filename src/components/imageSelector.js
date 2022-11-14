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

import React, { useState, useEffect } from "react";
import { Box, Image } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

const ImageSelector = ({
  height,
  width,
  marginTop,
  marginBottom,
  marginLeft,
  borderRadius,
  borderWidth,
  borderColor,
}) => {
  useEffect(() => {
    console.log("Height", height, "Width", width);
  }, [height, width]);

  const [file, setFile] = useState();
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box
      position={"absolute"}
      marginTop={marginTop || ""}
      marginLeft={marginLeft || ""}
      marginBottom={marginBottom || ""}
    >
      <Box>
        <Box
          borderWidth={"1"}
          borderColor="black"
          className="pic_container"
          zIndex="-1"
        >
          <Box position={"absolute"} className="p-image">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              ref={imageUploader}
              className="imageHidden"
            />
          </Box>
          <Box onClick={() => imageUploader.current.click()}>
            <Image
              ref={uploadedImage}
              alt=""
              width="100"
              borderRadius={borderRadius || "50%"}
              h={height || "16em"}
              w={width || "16em"}
              borderWidth={borderWidth || "4"}
              borderColor={borderColor || "rgba(255,255,255,0)"}
            />
          </Box>

          {/* {file ? (
            <Box onClick={() => imageUploader.current.click()}>
              <Image
                ref={uploadedImage}
                alt=""
                width="100"
                borderRadius="50%"
                h={"16em"}
                w={"16em"}
                borderWidth={4}
                borderColor="black"
              />
            </Box>
          ) : (
            <Box onClick={() => imageUploader.current.click()}>
              <Image
                src="./UploadImage.jpg"
                alt=""
                width="100"
                borderRadius="50%"
                h={"16em"}
                w={"16em"}
              />
            </Box>
          )} */}
        </Box>
      </Box>
    </Box>
  );
};

export default ImageSelector;
