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

          color: '#00c8aa',
          transition: '0.4s',
        }}
        fontSize={{ base: '12px', sm: '14px', md: '16px' }}
      >
        <AttachmentIcon mr="5px" />
        Section
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: 'xs', md: 'sm', lg: 'md' }}
      >
        <ModalOverlay />
        <ModalContent bgColor="#425061">
          <ModalCloseButton color="white" />
          <ModalBody bgColor="#425061" mt="10%">
            <Box
              w="100%"
              display={'flex'}
              // flexDir={{ base: 'column', md: 'row' }}
              flexWrap="wrap"
            >
              {education ? (
                resumeData?.education?.visible ? (
                  <>
                    <Btn
                      title="Education"
                      bgColor="#006772"
                      className="sectionModalBtn2"
                      onClick={() => dispatch(visibleEduSection(false))}
                    />
                  </>
                ) : (
                  <Btn
                    title="Education"
                    bgColor="gray"
                    className="sectionModalBtn"
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
                      bgColor="#006772"
                      title="Project"
                      className="sectionModalBtn2"
                      onClick={() => dispatch(visibleProjectSection(false))}
                    />
                  </>
                ) : (
                  <Btn
                    title="Project"
                    className="sectionModalBtn"
                    bgColor="gray"
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
                      bgColor="#006772"
                      className="sectionModalBtn2"
                      onClick={() => dispatch(visibleWorkSection(false))}
                    />
                  </>
                ) : (
                  <Btn
                    bgColor="gray"
                    className="sectionModalBtn"
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
                      className="sectionModalBtn2"
                      bgColor="#006772"
                      onClick={() => dispatch(visibleLangSection(false))}
                    />
                  </>
                ) : (
                  <Btn
                    title="Language"
                    bgColor="gray"
                    className="sectionModalBtn"
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
                      bgColor="#006772"
                      className="sectionModalBtn2"
                      onClick={() =>
                        dispatch(visibleOrganizationSection(false))
                      }
                    />
                  </>
                ) : (
                  <Btn
                    title="Organization"
                    className="sectionModalBtn"
                    bgColor="gray"
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
                    bgColor="#006772"
                    onClick={() => dispatch(visibleAchievementSection(false))}
                  />
                </>
              ) : (
                <Btn
                  title="About"
                  bgColor="gray"
                  onClick={() => dispatch(visibleAchievementSection(true))}
                />
              )} */}
              {skills ? (
                resumeData?.skills?.visible ? (
                  <>
                    <Btn
                      title="Skills"
                      className="sectionModalBtn2"
                      bgColor="#006772"
                      onClick={() => dispatch(visibleSkillSection(false))}
                    />
                  </>
                ) : (
                  <Btn
                    title="Skills"
                    bgColor="gray"
                    className="sectionModalBtn"
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
                      bgColor="#006772"
                      className="sectionModalBtn2"
                      onClick={() => dispatch(visibleHobbiesSection(false))}
                    />
                  </>
                ) : (
                  <Btn
                    title="Interest"
                    className="sectionModalBtn"
                    bgColor="gray"
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
                      bgColor="#006772"
                      className="sectionModalBtn2"
                      title="Certificates"
                      onClick={() =>
                        dispatch(visibleCertificatesSection(false))
                      }
                    />
                  </>
                ) : (
                  <Btn
                    title="Certificates"
                    className="sectionModalBtn"
                    bgColor="gray"
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
                      bgColor="#006772"
                      title="Reference"
                      className="sectionModalBtn2"
                      onClick={() => dispatch(visibleReferenceSection(false))}
                    />
                  </>
                ) : (
                  <Btn
                    title="Reference"
                    bgColor="gray"
                    className="sectionModalBtn"
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
