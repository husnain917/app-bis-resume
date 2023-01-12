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
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent minHeight={400} minWidth={400}>
          <ModalBody>
            <ReactCrop crop={crop} onChange={(c) => setCrop(c)}>
              <Image src={src} alt={""} ref={imgRef}  />
            </ReactCrop>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onDone}>
              Done
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
