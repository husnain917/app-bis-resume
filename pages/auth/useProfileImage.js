import React, { useState, useEffect, useRef } from "react";
import { Box, Image } from "@chakra-ui/react";
import ImageCrop from "../../src/components/Crop/ImageCrop";
import { canvasPreview } from "../../src/components/canvasPreview";
import { useDispatch, useSelector } from "react-redux";
import { onBlurField } from "../../store/actions/builderAction";
import { EmailIcon } from "@chakra-ui/icons";
import ImgsViewer from "react-images-viewer";
const UseProfileImage = ({
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
  className,
  changeImage,
  image,
  setShowFull,
  showFull,
}) => {
  useEffect(() => {
    console.log("Height", height, "Width", width);
  }, [height, width]);
  const userData = useSelector((store) => store.AuthReducer.user);
  const [isOpen, setisOpen] = useState(false);
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);
  const [picture, setPicture] = useState(userData?.picture);
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [crop, setCrop] = useState();
  const [aspect, setAspect] = useState(16 / 9);
  const imgRef = useRef(null);
  const [src, setsrc] = useState();
  const dispatch = useDispatch();

  const handleImageUpload = (e) => {
    setsrc(URL.createObjectURL(e.target.files[0]));
    setisOpen(true);
    return;
  };

  const onDone = async () => {
    setisOpen(false);
    const result = await canvasPreview(imgRef.current, crop, scale, rotate);
    const { current } = uploadedImage;
    current.src = result;
    dispatch(onBlurField(result, "profile.profileImage"));
  };

  const onCancel = async () => {
    setisOpen(false);
    // const result = await canvasPreview(imgRef.current, crop, scale, rotate);
    // const { current } = uploadedImage;
    // current.src = result;
    // dispatch(onBlurField(result, "profile.profileImage"));
    return console.log("cancelButtonClicked");
  };

  return (
    <Box>
      {isOpen && (
        <ImageCrop
          isOpen={isOpen}
          onClose={() => setisOpen(false)}
          crop={crop}
          setCrop={setCrop}
          src={src}
          onDone={onDone}
          imgRef={imgRef}
          onCancel={onCancel}
        />
      )}
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

            <Box>
              <Image
                // src={picture ? picture : "/uploadpic1.png"}
                src={image || "/uploadpic2.png"}
                background={"white"}
                ref={uploadedImage}
                alt=""
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
                className={className}
                onClick={() => setShowFull(true)}
              />
            </Box>
            <Box>
              <ImgsViewer
                imgs={[{ src: `${image}` }]}
                isOpen={showFull}
                onClose={() => setShowFull(false)}
                style={{ width: "100%", height: "100vh" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UseProfileImage;
