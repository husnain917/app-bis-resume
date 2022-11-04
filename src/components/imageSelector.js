import { Image, Box } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";

const ImageSelector = () => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <Box className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg"]}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <Box className="upload__image-wrapper">
            <button
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            {imageList.map((image, index) => (
              <Box key={index} className="image-item">
                <Image
                  src={image.data_url}
                  alt=""
                  width="100"
                  borderRadius="50%"
                  h={"12em"}
                  w={"12em"}
                />
                <Box className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </ImageUploading>
    </Box>
  );
};

export default ImageSelector;
