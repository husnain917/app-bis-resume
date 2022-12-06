import { Box, Button, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  visibleAchievementSection,
  visibleCertificatesSection,
  visibleEduSection,
  visibleHobbiesSection,
  visibleLangSection,
  visibleOrganization,
  visibleOrganizationSection,
  visibleProjectSection,
  visibleReferenceSection,
  visibleSkillSection,
  visibleWorkSection,
} from '../../../store/actions/builderAction';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { AddIcon, AttachmentIcon, DeleteIcon } from '@chakra-ui/icons';
import Btn from './Btn';
export default function LayoutModal({
  work,
  education,
  references,
  skills,
  languages,
  projects,
  organization,
  interest,
  certificate,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  let updater = useSelector((state) => state.editorReducer.updater);
  let color = useSelector((state) => state.editorReducer.color);
  const dispatch = useDispatch();
  return (
    <div>
      <Button
        onClick={onOpen}
        bgColor="transparent"
        color="white"
        _hover={{
          backgroundColor: 'transparent',

          color: '#313C4E',
          transition: '0.4s',
        }}
        fontSize={{ base: '12px', sm: '14px', md: '16px' }}
      >
        <AttachmentIcon mr="5px" />
        Section
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={'md'}>
        <ModalOverlay />
        <ModalContent bgColor="#313C4E">
          <ModalCloseButton color="white" />
          <ModalBody bgColor="#313C4E">
            <Box w="100%" display="flex" flexWrap="wrap" mt="5%">
              {education ? (
                resumeData?.education?.visible ? (
                  <>
                    <Btn
                      title="Education"
                      bgColor="tomato"
                      onClick={() => dispatch(visibleEduSection(false))}
                    />
                  </>
                ) : (
                  <Btn
                    title="Education"
                    bgColor="green"
                    onClick={() => dispatch(visibleEduSection(true))}
                  />
                )
              ) : (
                ''
              )}
              {projects ? (
                resumeData?.projects?.visible ? (
                  <>
                    <Btn
                      bgColor="tomato"
                      title="Project"
                      onClick={() => dispatch(visibleProjectSection(false))}
                    />
                  </>
                ) : (
                  <Btn
                    title="Project"
                    bgColor="green"
                    onClick={() => dispatch(visibleProjectSection(true))}
                  />
                )
              ) : (
                ''
              )}
              {work ? (
                resumeData?.work?.visible ? (
                  <>
                    <Btn
                      title="Experience"
                      bgColor="tomato"
                      onClick={() => dispatch(visibleWorkSection(false))}
                    />
                  </>
                ) : (
                  <Btn
                    bgColor="green"
                    title="Experience"
                    onClick={() => dispatch(visibleWorkSection(true))}
                  />
                )
              ) : (
                ''
              )}

              {languages ? (
                resumeData?.languages?.visible ? (
                  <>
                    <Btn
                      title="Language"
                      bgColor="tomato"
                      onClick={() => dispatch(visibleLangSection(false))}
                    />
                  </>
                ) : (
                  <Btn
                    title="Language"
                    bgColor="green"
                    onClick={() => dispatch(visibleLangSection(true))}
                  />
                )
              ) : (
                ''
              )}
              {organization ? (
                resumeData?.organization?.visible ? (
                  <>
                    <Btn
                      title="Organization"
                      bgColor="tomato"
                      onClick={() =>
                        dispatch(visibleOrganizationSection(false))
                      }
                    />
                  </>
                ) : (
                  <Btn
                    title="Organization"
                    bgColor="green"
                    onClick={() => dispatch(visibleOrganizationSection(true))}
                  />
                )
              ) : (
                ''
              )}
              {/* {resumeData?.achievements?.visible ? (
                <>
                  <Btn
                    title="About"
                    bgColor="tomato"
                    onClick={() => dispatch(visibleAchievementSection(false))}
                  />
                </>
              ) : (
                <Btn
                  title="About"
                  bgColor="green"
                  onClick={() => dispatch(visibleAchievementSection(true))}
                />
              )} */}
              {skills ? (
                resumeData?.skills?.visible ? (
                  <>
                    <Btn
                      title="Skills"
                      bgColor="tomato"
                      onClick={() => dispatch(visibleSkillSection(false))}
                    />
                  </>
                ) : (
                  <Btn
                    title="Skills"
                    bgColor="green"
                    onClick={() => dispatch(visibleSkillSection(true))}
                  />
                )
              ) : (
                ''
              )}
              {interest ? (
                resumeData?.hobbies?.visible ? (
                  <>
                    <Btn
                      title="Interest"
                      bgColor="tomato"
                      onClick={() => dispatch(visibleHobbiesSection(false))}
                    />
                  </>
                ) : (
                  <Btn
                    title="Interest"
                    bgColor="green"
                    onClick={() => dispatch(visibleHobbiesSection(true))}
                  />
                )
              ) : (
                ''
              )}
              {certificate ? (
                resumeData?.certifications?.visible ? (
                  <>
                    <Btn
                      bgColor="tomato"
                      title="Certificates"
                      onClick={() =>
                        dispatch(visibleCertificatesSection(false))
                      }
                    />
                  </>
                ) : (
                  <Btn
                    title="Certificates"
                    bgColor="green"
                    onClick={() => dispatch(visibleCertificatesSection(true))}
                  />
                )
              ) : (
                ''
              )}
              {references ? (
                resumeData?.references?.visible ? (
                  <>
                    <Btn
                      bgColor="tomato"
                      title="Reference"
                      onClick={() => dispatch(visibleReferenceSection(false))}
                    />
                  </>
                ) : (
                  <Btn
                    title="Reference"
                    bgColor="green"
                    onClick={() => dispatch(visibleReferenceSection(true))}
                  />
                )
              ) : (
                ''
              )}
            </Box>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
