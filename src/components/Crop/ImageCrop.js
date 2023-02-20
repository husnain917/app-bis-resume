import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
export default function ImageCrop({
  isOpen,
  onClose,
  src,
  crop = {
    unit: "%",
    width: 50,
    height: 50,
    x: 25,
    y: 25,
  },
  setCrop,
  onDone,
  imgRef,
}) {
  const [isClose, setIsClose] = useState(isOpen);
  const [cancelImage, setCancelImage] = useState(src);
  const onCancel = () => {
    setIsClose(!isOpen);
    setCancelImage("/uploadimage1.png");
  };
  return (
    <>
      <Modal isOpen={isClose} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent minHeight={crop.height + 20} minWidth={crop.width + 20}>
          <ModalBody>
            <ReactCrop crop={crop} onChange={(c) => setCrop(c)}>
              <Image src={cancelImage} alt={""} ref={imgRef} />
            </ReactCrop>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onCancel}>
              Cancel
            </Button>
            <Button colorScheme="blue" mr={3} onClick={onDone}>
              Done
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
