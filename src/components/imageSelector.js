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
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
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
      console.log("FileWidth: " + file.width);
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
        marginTop={marginTop || ""}
        marginLeft={marginLeft || ""}
        marginBottom={marginBottom || ""}
      >
        <Box>
          <Box className="pic_container" marginTop={marginTop || ""}>
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
                src="/uploadpic1.png"
                background={"white"}
                ref={uploadedImage}
                alt="will load soon"
                borderRadius={borderRadius || "full"}
                minHeight={minHeight || "15.7em"}
                maxHeight={maxHeight || "15.7em"}
                minWidth={minWidth || "15.7em"}
                maxWidth={maxWidth || "15.7em"}
                transition={"0.5s borderColor"}
                style={{
                  // objectFit: "cover",
                  objectPosition: "center",
                  // objectFit: "contain",
                  border: ` ${borderWidth ? borderWidth : "4px"} solid ${
                    borderColor ? borderColor : "black"
                  }`,
                  transition: "1s border",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ImageSelector;
