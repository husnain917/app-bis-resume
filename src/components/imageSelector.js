import React, { useState, useEffect } from "react";
import { Box, Image } from "@chakra-ui/react";

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

  const [isImage, setIsImage] = useState();
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      setIsImage(1);
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
    <Box>
      <Box
        // position={"absolute"}
        marginTop={marginTop || ""}
        marginLeft={marginLeft || ""}
        marginBottom={marginBottom || ""}
      >
        <Box>
          <Box
            className="pic_container"
            width={width || "16em"}
            marginTop={marginTop || ""}
          >
            <Box className="p-image">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                ref={imageUploader}
                className="imageHidden"
                zIndex={2}
              />
            </Box>

            <Box onClick={() => imageUploader.current.click()}>
              <Image
                src="/UploadImage.jpg"
                ref={uploadedImage}
                alt=""
                width="100"
                borderRadius={borderRadius || "50%"}
                borderWidth={borderWidth || "4"}
                borderColor={borderColor || "rgba(255,255,255,0)"}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ImageSelector;
