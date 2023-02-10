import {
  Box,
  Container,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  Image,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  RESUME_FORMATS,
  RESUME_EXAMPLES,
  PASS_SCAN_FORMATS,
} from "./CustomData";
import ResumeHeading from "./ResumeHeading";
import ResumeTable from "./ResumeTable";
import styles from "../../../styles/resumeFormats.module.css";
import CommonButton from "../commonButton/CommonButton";
export default function FormatsTables() {
  // state
  const [over, setOver] = useState(false);
  return (
    <>
      {/* resume table */}
      {/* <ResumeTable /> */}
      {/* ist table heading explain */}
      <Container maxW={"100%"} p={0}>
        <Box id={"b1"}>
          <ResumeHeading text={"1"} />
          {/* title */}
          <Text
            textAlign={"center"}
            fontSize={"30px"}
            fontWeight={"medium"}
            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
            paddingBottom={"25px"}
          >
            Resume Formatting
          </Text>
          {/* description */}
          {RESUME_FORMATS?.istTitle?.map((item, index) => (
            <>
              <Text
                key={index}
                fontSize={"16px"}
                paddingBottom={"25px"}
                fontFamily={`'EuclidCircularB-Medium', sans-serif`}
              >
                {item?.text}
              </Text>
            </>
          ))}
          <Text
            fontSize={"16px"}
            paddingBottom={"25px"}
            fontWeight={"medium"}
            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
          >
            {RESUME_FORMATS?.secTitle}
          </Text>

          <Text
            fontSize={"26px"}
            fontWeight={"medium"}
            paddingBottom={"25px"}
            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
          >
            {RESUME_FORMATS?.thirdTitle}
          </Text>

          {/* list items */}
          <OrderedList
            fontSize={"16px"}
            padding={"0px 30px"}
            lineHeight={8}
            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
          >
            <ListItem>
              <strong>
                Use a clear and consistent layout throughout your resume. This
                will make it easy for recruiters to read and understand your
                qualifications.
              </strong>
              &nbsp;
            </ListItem>
            <ListItem>
              <strong>
                Use a professional and modern resume font, such as Calibri,
                Arial or Times New Roman, and stick to one font throughout your
                resume.
              </strong>
              &nbsp;
            </ListItem>
            <ListItem>
              <strong>
                Set one-inch margins on all four sides to give your resume a
                clean and polished look.
              </strong>
              &nbsp;
            </ListItem>
            <ListItem>
              <strong>
                Create a proper header format for your contact details,
                including your name, address, phone number, and email address.
              </strong>{" "}
              &nbsp;
            </ListItem>
            <ListItem>
              <strong>
                Divide your resume into clear and legible sections, such as
                Contact Information, Resume Summary, Work Experience, Education,
                and Skills.
              </strong>
              &nbsp;
            </ListItem>
            <ListItem>
              <strong>
                Use bullet points to talk about your past jobs and
                accomplishments. This makes it easy for recruiters to quickly
                scan your resume and understand your qualifications.
              </strong>
              &nbsp;
            </ListItem>
            <ListItem>
              <strong>
                Be consistent with your resume formatting throughout. Use the
                same date format for all your job listings, and make sure to use
                the same font, spacing, and formatting for all sections.
              </strong>
            </ListItem>
            <ListItem>
              <strong>
                Use single or 1.15 line spacing to make your resume easy to
                read.
              </strong>
            </ListItem>
            <ListItem>
              <strong>
                Add an extra space before and after each section heading to make
                it clear where one section ends and the other begins.
              </strong>
              &nbsp;
            </ListItem>
            <ListItem>
              <strong>
                Make your resume as long as it needs to be, but keep in mind
                that recruiters usually spend only a few seconds scanning each
                resume, so try to keep it concise and to the point. Unless the
                job description specifically asks for them. You re looking for a
                job, not a date!
              </strong>
            </ListItem>
            <ListItem>
              <strong>
                Avoid using photos on your resume, unless the job description
                specifically asks for them, remember that you are looking for a
                job, not a date!
              </strong>
            </ListItem>
          </OrderedList>

          <Text
            fontSize={"16px"}
            padding={"30px 0px 15px 0px"}
            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
          >
            {RESUME_FORMATS?.fileFormat?.title}
          </Text>

          <UnorderedList padding={"0px 30px"}>
            {RESUME_FORMATS?.fileFormat?.data?.map((item, index) => (
              <>
                <ListItem
                  key={index}
                  fontSize={"16px"}
                  lineHeight={8}
                  fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                >
                  {item.text}
                </ListItem>
              </>
            ))}
          </UnorderedList>

          <Text
            fontSize={"16px"}
            padding={"30px 0px 15px 0px"}
            lineHeight={8}
            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
          >
            {RESUME_FORMATS?.idealFormat}
            <Link color={"#3983fa"}>{RESUME_FORMATS?.idealFormatPDF}</Link>
          </Text>

          <Text
            fontSize={"16px"}
            padding={"10px 0px 20px 0px"}
            lineHeight={8}
            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
          >
            {RESUME_FORMATS?.enoughTheory}
          </Text>
        </Box>
        <Box margin={"20px 0px 40px 0px"}>
          <Image src={"/resumeTipsImg.jpg"} alt={"Image Not Found"} />
        </Box>
      </Container>
      {/* ist table heading explain */}

      {/* 2nd table heading explain */}
      <Container maxW={"100%"} p={0}>
        <Box id={"b2"}>
          <ResumeHeading text={"2"} />
          {/* title */}
          <Text
            textAlign={"center"}
            fontSize={"30px"}
            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
            fontWeight={"medium"}
            paddingBottom={"20px"}
          >
            Examples of Well-Formatted Resumes You <br />
            Can Use
          </Text>
          {/* description */}
          <Box>
            {RESUME_EXAMPLES?.titleDes?.map((item, index) => (
              <>
                <Text
                  key={index}
                  fontSize={"16px"}
                  lineHeight={8}
                  fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                >
                  {item.text}
                </Text>
              </>
            ))}
          </Box>
          {/* Examples */}
          <Box>
            {RESUME_EXAMPLES?.examplesContent?.map((item, index) => (
              <>
                <Box key={index}>
                  <Text
                    fontSize={"24px"}
                    fontWeight={"medium"}
                    padding={"0px 0px 20px 0px"}
                    fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                  >
                    {index + 1}.&nbsp;{item?.title}
                  </Text>
                  {/* Image */}
                  <Box
                    position={"relative"}
                    onMouseEnter={() => setOver(true)}
                    onMouseLeave={() => setOver(false)}
                  >
                    <Image
                      src={item?.img}
                      alt={"Image Not Found"}
                      onMouseEnter={() => setOver(true)}
                      onMouseLeave={() => setOver(false)}
                    />
                    {over ? (
                      <>
                        <Box
                          margin={"40px 0px 0px 0px"}
                          className={styles.resumeTemplateDiv}
                          width={["70%", "70%", "50%", "50%", "50%"]}
                          onMouseEnter={() => setOver(true)}
                          onMouseLeave={() => setOver(false)}
                        >
                          <Link
                            href={"/templates"}
                            textDecoration={"none"}
                            _hover={{
                              textDecoration: "none",
                            }}
                          >
                            <CommonButton
                              title={"CREATE MY RESUME NOW"}
                              fontSize={[
                                "13px",
                                "16px",
                                "16px",
                                "16px",
                                "16px",
                              ]}
                              hoverCursor={"pointer"}
                              backgroundColor={"#2CACD5"}
                              color={"white"}
                              hoverColor={"white"}
                              hoverBackgroundColor={"#2CACD5"}
                              padding={"25px 30px"}
                            />
                          </Link>
                        </Box>
                      </>
                    ) : (
                      <></>
                    )}
                  </Box>
                  <Box>
                    <Text
                      fontSize={"16px"}
                      lineHeight={8}
                      padding={"30px 0px"}
                      fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                    >
                      {item?.description}
                    </Text>
                  </Box>
                </Box>
              </>
            ))}
          </Box>
          {/* Example end */}
        </Box>
      </Container>
      {/* 2nd table heading explain */}

      {/* 3rd table heading explain */}
      <Container maxW={"100%"} p={0}>
        <Box id={"b3"}>
          <ResumeHeading text={"3"} />
          {/* title */}
          <Text
            textAlign={"center"}
            fontSize={"30px"}
            fontWeight={"medium"}
            paddingBottom={"25px"}
            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
          >
            The Three Main Resume Formats
          </Text>
          {/* description */}
          <Text
            fontSize={"16px"}
            lineHeight={8}
            marginBottom={"30px"}
            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
          >
            The reverse-chronological format is the most popular and widely used
            resume format in 2023. It presents your work experience in a clear
            and easy-to-follow manner, starting with your most recent job and
            working backwards. This format is ideal for job seekers with a
            consistent work history and is preferred by most hiring managers
            because it allows them to quickly see your relevant experience and
            progression in your career.• The functional format is best suited
            for those who have gaps in their work history, changed careers or
            have transferable skills. This format focuses on your skills and
            qualifications, rather than your work experience, and is useful for
            highlighting transferable skills.
          </Text>

          <Text
            fontSize={"16px"}
            lineHeight={8}
            marginBottom={"30px"}
            fontWeight={"bold"}
          >
            Those 3 common resume formats can also be named:
          </Text>

          <UnorderedList
            fontSize={"16px"}
            lineHeight={8}
            marginBottom={"30px"}
            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
          >
            {RESUME_EXAMPLES?.commonResFormats?.map((item, index) => (
              <>
                <ListItem key={index}>{item?.text}</ListItem>
              </>
            ))}
          </UnorderedList>
          <Text
            fontSize={"16px"}
            lineHeight={8}
            marginBottom={"30px"}
            fontWeight={"bold"}
            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
          >
            That you have to know the correct order of sections on each of the
            standard resume formats.
          </Text>

          <Text
            fontSize={"16px"}
            lineHeight={8}
            marginBottom={"30px"}
            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
          >
            Have a look:
          </Text>

          <Text
            fontSize={"26px"}
            fontWeight={"medium"}
            marginBottom={"30px"}
            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
          >
            3 Resume Format Examples
          </Text>
        </Box>
      </Container>

      {/* main image */}
      <Container maxW={"100%"} p={0}>
        {/* Image */}
        <Box>
          <Image src={"/resume_formats_main.jpg"} alt={"Image Not Found"} />
        </Box>
      </Container>

      <Container maxW={"100%"} p={0}>
        <Box>
          {/* content */}
          <Box
            backgroundColor={"#fafafa"}
            background={"#f2f2f2"}
            border={"1px solid #e3e7eb"}
            borderRadius={"4px 4px"}
            margin={"10px 0px 30px 0px"}
          >
            <Text
              padding={"20px 10px"}
              textAlign={"center"}
              fontSize={"16px"}
              fontFamily={`'EuclidCircularB-Medium', sans-serif`}
            >
              The Three Standard Resume Formats: Resume Structure
            </Text>
          </Box>

          <Text
            fontSize={"16px"}
            marginBottom={"30px"}
            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
          >
            As you can see:
          </Text>

          <UnorderedList
            fontSize={"16px"}
            lineHeight={8}
            marginBottom={"30px"}
            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
          >
            {RESUME_EXAMPLES?.bestFormats?.map((item, index) => (
              <>
                <ListItem key={index}>{item?.text}</ListItem>
              </>
            ))}
          </UnorderedList>

          {/* Image */}
          <Box marginBottom={"30px"}>
            <Image src={"/best_format_resume.jpg"} alt={"Image Not Found"} />
          </Box>

          <Text
            fontSize={"16px"}
            marginBottom={"30px"}
            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
          >
            That depends on your career path so far.
          </Text>

          <UnorderedList
            fontSize={"16px"}
            lineHeight={8}
            marginBottom={"30px"}
            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
          >
            {RESUME_EXAMPLES?.careerFormats?.map((item, index) => (
              <>
                <ListItem key={index}>{item?.text}</ListItem>
              </>
            ))}
          </UnorderedList>

          {/* Examples */}
          <Box id={"b3i"}>
            <Text
              fontSize={"26px"}
              fontWeight={"medium"}
              padding={"0px 0px 30px 0px"}
              fontFamily={`'EuclidCircularB-Medium', sans-serif`}
            >
              1.&nbsp;Reverse-Chronological
            </Text>

            <Text
              fontSize={"16px"}
              marginBottom={"30px"}
              fontFamily={`'EuclidCircularB-Medium', sans-serif`}
            >
              Exactly, choosing the right format is crucial in making your
              resume stand out and effectively communicating your qualifications
              to potential employers. It is important to consider your work
              history, skills, and the job you are applying for when selecting
              the format that best highlights your qualifications and presents
              your work history in a clear and logical way. The right format can
              make a big difference in getting your resume noticed and landing
              an interview.
            </Text>

            <Text
              fontSize={"16px"}
              marginBottom={"30px"}
              fontWeight={"medium"}
              fontFamily={`'EuclidCircularB-Medium', sans-serif`}
            >
              Reverse-Chronological Resume Example
            </Text>

            {/* Image */}
            <Box marginBottom={"30px"}>
              <Image src={"/resume_format_temp1.jpg"} alt={"Image Not Found"} />
            </Box>

            {/* button */}
            <Box
              display={"flex"}
              justifyContent={"center"}
              margin={"40px 0px 30px 0px"}
            >
              <Link
                href={"/templates"}
                textDecoration={"none"}
                _hover={{
                  textDecoration: "none",
                }}
              >
                <CommonButton
                  title={"CREATE YOUR RESUME NOW"}
                  fontSize={["13px", "16px", "16px", "16px", "16px"]}
                  hoverCursor={"pointer"}
                  backgroundColor={"#2CACD5"}
                  color={"white"}
                  hoverColor={"white"}
                  hoverBackgroundColor={"#2CACD5"}
                  padding={"25px 30px"}
                />
              </Link>
            </Box>

            <Text
              fontSize={"16px"}
              marginBottom={"30px"}
              lineHeight={8}
              fontFamily={`'EuclidCircularB-Medium', sans-serif`}
            >
              Reverse chronological resume format is popular and preferred by
              recruiters as it highlights relevant information and easy to spot.
              Its also simple to use.
            </Text>

            <Text
              fontSize={"16px"}
              marginBottom={"30px"}
              lineHeight={8}
              fontWeight={"medium"}
              fontFamily={`'EuclidCircularB-Medium', sans-serif`}
            >
              The structure should include contact information,
              summary/objective, work experience in reverse order, education,
              skills and any additional sections like achievements, volunteer
              work, certifications.
            </Text>

            {/* <Text
              fontSize={"16px"}
              marginBottom={"20px"}
              lineHeight={8}
              fontWeight={"medium"}
              fontFamily={`'EuclidCircularB-Medium', sans-serif`}
            >
              Reverse-Chronological Resume Order of Sections
            </Text>

            <OrderedList
              fontSize={"16px"}
              lineHeight={8}
              marginBottom={"30px"}
              fontFamily={`'EuclidCircularB-Medium', sans-serif`}
            >
              {RESUME_EXAMPLES?.resumeOrderSection?.map((item, index) => (
                <>
                  <ListItem key={index}>
                    <Link color={"#3983fa"}>{item?.text}</Link>
                  </ListItem>
                </>
              ))}
            </OrderedList> */}

            <Text
              fontSize={"18px"}
              marginBottom={"20px"}
              lineHeight={8}
              fontWeight={"medium"}
              fontFamily={`'EuclidCircularB-Medium', sans-serif`}
            >
              Reverse-Chronological Resume: Work Experience
            </Text>

            <OrderedList
              fontSize={"16px"}
              lineHeight={8}
              marginBottom={"30px"}
              fontFamily={`'EuclidCircularB-Medium', sans-serif`}
            >
              {RESUME_EXAMPLES?.reverseResume?.map((item, index) => (
                <>
                  <ListItem key={index}>{item?.text}</ListItem>
                </>
              ))}
            </OrderedList>

            <Text
              fontSize={"16px"}
              marginBottom={"30px"}
              fontWeight={"medium"}
              fontFamily={`'EuclidCircularB-Medium', sans-serif`}
            >
              Chronological Resume Format Pros and Cons
            </Text>

            {/* table */}
            <Box width={"100%"} display={"flex"} marginBottom={"30px"}>
              {/* left box */}
              <Box width={"50%"}>
                <Box backgroundColor={"#fafafa"}>
                  <Text
                    fontSize={"16px"}
                    fontWeight={"medium"}
                    padding={"20px"}
                    fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                  >
                    PROS
                  </Text>
                </Box>
                <Text
                  fontSize={"16px"}
                  lineHeight={8}
                  padding={"20px"}
                  fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                >
                  It is the most popular and widely used format, which makes it
                  familiar to recruiters and hiring managers.
                </Text>
                <Text
                  fontSize={"16px"}
                  lineHeight={8}
                  padding={"20px"}
                  fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                >
                  It presents your work experience in a clear and easy-to-follow
                  manner, making it simple for recruiters to identify your
                  relevant experience and progression in your career.
                </Text>
                <Text
                  fontSize={"16px"}
                  lineHeight={8}
                  padding={"20px"}
                  fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                >
                  Its well-suited for job seekers with a consistent work
                  history, as it allows potential employers to see the
                  progression of your career.
                </Text>
                <Text
                  fontSize={"16px"}
                  lineHeight={8}
                  padding={"20px"}
                  fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                >
                  • Recruiters can easily identify your most recent job,
                  education, and experience.
                </Text>
              </Box>

              {/* right box */}
              <Box width={"50%"}>
                <Box backgroundColor={"#fafafa"}>
                  <Text
                    fontSize={"16px"}
                    fontWeight={"medium"}
                    padding={"20px"}
                    fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                  >
                    CONS
                  </Text>
                </Box>
                <Text
                  fontSize={"16px"}
                  lineHeight={8}
                  padding={"20px"}
                  fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                >
                  It may not be the best choice for job seekers with gaps in
                  their work history or those who have changed careers, as it
                  places emphasis on your work experience.
                </Text>
                <Text
                  fontSize={"16px"}
                  lineHeight={8}
                  padding={"20px"}
                  fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                >
                  If you have limited work experience or are just starting out,
                  it may make your resume appear less impressive.
                </Text>
                <Text
                  fontSize={"16px"}
                  lineHeight={8}
                  padding={"20px"}
                  fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                >
                  If you have held multiple positions at the same company, it
                  can make the resume appear cluttered, and the focus may be on
                  quantity of positions rather than quality of experience.
                </Text>
                <Text
                  fontSize={"16px"}
                  lineHeight={8}
                  padding={"20px"}
                  fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                >
                  Job hoppers may not look good on Chronological format as it
                  shows multiple jobs in short duration.
                </Text>
              </Box>
            </Box>
          </Box>
          {/* example 1 end */}
          {/* example 2 */}
          <Box id={"b3ii"}>
            {/* title */}
            <Text
              fontSize={"26px"}
              fontWeight={"medium"}
              padding={"0px 0px 30px 0px"}
              fontFamily={`'EuclidCircularB-Medium', sans-serif`}
            >
              2.&nbsp;Skills-Based / Functional
            </Text>

            <Text
              fontSize={"16px"}
              marginBottom={"20px"}
              fontFamily={`'EuclidCircularB-Medium', sans-serif`}
            >
              Here s a functional resume example created in our resume builder.
            </Text>

            <Text
              fontSize={"18px"}
              fontWeight={"medium"}
              marginBottom={"20px"}
              fontFamily={`'EuclidCircularB-Medium', sans-serif`}
            >
              Functional Resume Example
            </Text>

            {/* Image */}
            <Box marginBottom={"30px"}>
              <Image
                src={"/resume_format_skill1.jpg"}
                alt={"Image Not Found"}
              />
            </Box>

            <Text
              fontSize={"16px"}
              marginBottom={"30px"}
              lineHeight={8}
              fontFamily={`'EuclidCircularB-Medium', sans-serif`}
            >
              <strong>
                Want to save time and have your skills-based (functional) resume
                ready in 5 minutes?
              </strong>
              &nbsp;
              <Link color={"#3983fa"} href={"/templates"}>
                Pick from 20+ resume templates
              </Link>
              , adjust, customize, and have a stunning skills-based resume in no
              time.
            </Text>

            {/* button */}
            <Box
              display={"flex"}
              justifyContent={"center"}
              margin={"40px 0px 30px 0px"}
            >
              <Link
                href="/templates"
                textDecoration={"none"}
                _hover={{
                  textDecoration: "none",
                }}
              >
                <CommonButton
                  title={"CREATE YOUR RESUME NOW"}
                  fontSize={["13px", "16px", "16px", "16px", "16px"]}
                  hoverCursor={"pointer"}
                  backgroundColor={"#2CACD5"}
                  color={"white"}
                  hoverColor={"white"}
                  hoverBackgroundColor={"#2CACD5"}
                  padding={"25px 30px"}
                />
              </Link>
            </Box>

            <Text
              fontSize={"16px"}
              lineHeight={8}
              marginBottom={"20px"}
              fontFamily={`'EuclidCircularB-Medium', sans-serif`}
            >
              A functional resume format, also known as a skills-based resume
              format, focuses on highlighting an individual skills and abilities
              rather than their work experience.{" "}
            </Text>

            <Text
              fontSize={"16px"}
              lineHeight={8}
              marginBottom={"20px"}
              fontFamily={`'EuclidCircularB-Medium', sans-serif`}
            >
              This format is useful for job seekers who have gaps in their work
              history, have changed careers, or have transferable skills.{" "}
            </Text>

            <Text
              fontSize={"16px"}
              lineHeight={8}
              marginBottom={"20px"}
              fontWeight={"medium"}
              fontFamily={`'EuclidCircularB-Medium', sans-serif`}
            >
              Here is a suggested structure for a functional resume:
            </Text>

            <Text
              fontSize={"18px"}
              lineHeight={8}
              marginBottom={"20px"}
              fontWeight={"medium"}
              fontFamily={`'EuclidCircularB-Medium', sans-serif`}
            >
              {RESUME_EXAMPLES?.skillResumeFormats?.istContent?.title}
            </Text>

            <OrderedList
              fontSize={"16px"}
              lineHeight={8}
              marginBottom={"20px"}
              padding={"0px 20px"}
              fontFamily={`'EuclidCircularB-Medium', sans-serif`}
            >
              {RESUME_EXAMPLES?.skillResumeFormats?.istContent?.data?.map(
                (item, index) => (
                  <>
                    <ListItem key={index}>{item?.text}</ListItem>
                  </>
                )
              )}
            </OrderedList>

            <Text
              fontSize={"16px"}
              lineHeight={8}
              marginBottom={"20px"}
              fontFamily={`'EuclidCircularB-Medium', sans-serif`}
            >
              {RESUME_EXAMPLES?.skillResumeFormats?.istContent?.description}
            </Text>

            <Text
              fontSize={"18px"}
              lineHeight={8}
              marginBottom={"20px"}
              fontWeight={"medium"}
              fontFamily={`'EuclidCircularB-Medium', sans-serif`}
            >
              {RESUME_EXAMPLES?.skillResumeFormats?.secContent?.title}
            </Text>

            <OrderedList
              fontSize={"16px"}
              lineHeight={8}
              marginBottom={"20px"}
              padding={"0px 20px"}
              fontFamily={`'EuclidCircularB-Medium', sans-serif`}
            >
              {RESUME_EXAMPLES?.skillResumeFormats?.secContent?.data?.map(
                (item, index) => (
                  <>
                    <ListItem key={index}>{item?.text}</ListItem>
                  </>
                )
              )}
            </OrderedList>

            <Text
              fontSize={"16px"}
              lineHeight={8}
              marginBottom={"20px"}
              fontFamily={`'EuclidCircularB-Medium', sans-serif`}
            >
              {RESUME_EXAMPLES?.skillResumeFormats?.secContent?.description}
            </Text>

            <Text
              fontSize={"16px"}
              marginBottom={"30px"}
              fontFamily={`'EuclidCircularB-Medium', sans-serif`}
            >
              To recap, then:
            </Text>

            <Text
              fontSize={"18px"}
              marginBottom={"30px"}
              fontWeight={"medium"}
              fontFamily={`'EuclidCircularB-Medium', sans-serif`}
            >
              Pros and Cons of a Functional Resume Format
            </Text>

            {/* table */}
            <Box width={"100%"} display={"flex"} marginBottom={"30px"}>
              {/* left box */}
              <Box width={"50%"}>
                <Box backgroundColor={"#fafafa"}>
                  <Text
                    fontSize={"16px"}
                    fontWeight={"medium"}
                    padding={"20px"}
                    fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                  >
                    PROS
                  </Text>
                </Box>
                <Text
                  fontSize={"16px"}
                  lineHeight={8}
                  padding={"20px"}
                  fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                >
                  It emphasizes an individual skills and abilities, rather than
                  their work experience, which makes it a great choice for job
                  seekers with gaps in their work history, have changed careers,
                  or have transferable skills.{" "}
                </Text>
                <Text
                  fontSize={"16px"}
                  lineHeight={8}
                  padding={"20px"}
                  fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                >
                  It allows you to highlight your qualifications and
                  qualifications, and take the focus off of any gaps in your
                  work history or career changes.
                </Text>
                <Text
                  fontSize={"16px"}
                  lineHeight={8}
                  padding={"20px"}
                  fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                >
                  It puts the focus on your most relevant skills and
                  qualifications, making it easy for recruiters to see how you
                  would be a good fit for the position.
                </Text>
              </Box>

              {/* right box */}
              <Box width={"50%"}>
                <Box backgroundColor={"#fafafa"}>
                  <Text
                    fontSize={"16px"}
                    fontWeight={"medium"}
                    padding={"20px"}
                    fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                  >
                    CONS
                  </Text>
                </Box>
                <Text
                  fontSize={"16px"}
                  lineHeight={8}
                  padding={"20px"}
                  fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                >
                  It may not be as widely accepted or familiar to recruiters as
                  the chronological format, which can make it more difficult to
                  get noticed.
                </Text>
                <Text
                  fontSize={"16px"}
                  lineHeight={8}
                  padding={"20px"}
                  fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                >
                  It may not be the best choice for job seekers with a
                  consistent work history or those who are just starting out, as
                  it does not showcase their progression in their career.
                </Text>
                <Text
                  fontSize={"16px"}
                  lineHeight={8}
                  padding={"20px"}
                  fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                >
                  It can make it difficult for recruiters to see how long you
                  have been in the workforce, or how you have progressed in your
                  career.
                </Text>
                <Text
                  fontSize={"16px"}
                  lineHeight={8}
                  padding={"20px"}
                  fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                >
                  It may not be the best choice for highly specialized roles, as
                  it does not always provide a clear picture of your work
                  history and qualifications.
                </Text>
              </Box>
            </Box>
          </Box>
          {/* example 2 end */}

          {/* example 3 */}
          <Box id={"b3iii"}>
            {/* title */}
            <Text
              fontSize={"26px"}
              fontWeight={"medium"}
              padding={"0px 0px 30px 0px"}
              fontFamily={`'EuclidCircularB-Medium', sans-serif`}
            >
              3.&nbsp;Hybrid / Combination
            </Text>

            <Text
              fontSize={"16px"}
              marginBottom={"20px"}
              fontFamily={`'EuclidCircularB-Medium', sans-serif`}
            >
              The combination or hybrid resume format combines the best elements
              of a chronological resume and a skills-based resume, making it a
              versatile option for job seekers with a diverse range of skills
              and experience.
            </Text>

            <Text
              fontSize={"18px"}
              fontWeight={"medium"}
              marginBottom={"20px"}
              fontFamily={`'EuclidCircularB-Medium', sans-serif`}
            >
              Hybrid / Combination Resume Example
            </Text>

            {/* Image */}
            <Box marginBottom={"30px"}>
              <Image
                src={"/resume_format_hybird1.jpg"}
                alt={"Image Not Found"}
              />
            </Box>

            {/* button */}
            <Box
              display={"flex"}
              justifyContent={"center"}
              margin={"40px 0px 30px 0px"}
            >
              <Link
                href={"/templates"}
                textDecoration={"none"}
                _hover={{
                  textDecoration: "none",
                }}
              >
                <CommonButton
                  title={"CREATE YOUR RESUME NOW"}
                  fontSize={["13px", "16px", "16px", "16px", "16px"]}
                  hoverCursor={"pointer"}
                  backgroundColor={"#2CACD5"}
                  color={"white"}
                  hoverColor={"white"}
                  hoverBackgroundColor={"#2CACD5"}
                  padding={"25px 30px"}
                />
              </Link>
            </Box>

            <Text
              fontSize={"18px"}
              marginBottom={"20px"}
              fontWeight={"medium"}
              fontFamily={`'EuclidCircularB-Medium', sans-serif`}
            >
              Here s how to structure a hybrid resume:
            </Text>

            <Text
              fontSize={"18px"}
              marginBottom={"30px"}
              fontWeight={"medium"}
              fontFamily={`'EuclidCircularB-Medium', sans-serif`}
            >
              Hybrid (Combination) Resume Order of Sections
            </Text>

            <OrderedList
              fontSize={"16px"}
              lineHeight={8}
              marginBottom={"30px"}
              padding={"0px 15px"}
              fontFamily={`'EuclidCircularB-Medium', sans-serif`}
            >
              {RESUME_EXAMPLES?.hybridFormats?.map((item, index) => (
                <>
                  <ListItem key={index}>{item?.text}</ListItem>
                </>
              ))}
            </OrderedList>

            <Text
              fontSize={"16px"}
              lineHeight={8}
              marginBottom={"30px"}
              fontFamily={`'EuclidCircularB-Medium', sans-serif`}
            >
              This is how to write it:
            </Text>

            <UnorderedList
              fontSize={"16px"}
              lineHeight={8}
              marginBottom={"30px"}
              padding={"0px 15px"}
              fontFamily={`'EuclidCircularB-Medium', sans-serif`}
            >
              {RESUME_EXAMPLES?.hybridFormatsSection?.map((item, index) => (
                <>
                  <ListItem key={index}>{item?.text}</ListItem>
                </>
              ))}
            </UnorderedList>

            <OrderedList
              fontSize={"16px"}
              lineHeight={8}
              marginBottom={"30px"}
              padding={"0px 15px"}
              fontFamily={`'EuclidCircularB-Medium', sans-serif`}
            >
              {RESUME_EXAMPLES?.hybridFormatsSkill?.map((item, index) => (
                <>
                  <ListItem key={index}>{item?.text}</ListItem>
                </>
              ))}
            </OrderedList>

            <Text
              fontSize={"16px"}
              marginBottom={"30px"}
              fontFamily={`'EuclidCircularB-Medium', sans-serif`}
            >
              In a nutshell:
            </Text>

            <Text
              fontSize={"18px"}
              marginBottom={"40px"}
              fontWeight={"medium"}
              fontFamily={`'EuclidCircularB-Medium', sans-serif`}
            >
              Pros and Cons of a Combination Resume Format
            </Text>

            {/* table */}
            <Box width={"100%"} display={"flex"} marginBottom={"30px"}>
              {/* left box */}
              <Box width={"50%"}>
                <Box backgroundColor={"#fafafa"}>
                  <Text
                    fontSize={"16px"}
                    fontWeight={"medium"}
                    padding={"20px"}
                    fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                  >
                    PROS
                  </Text>
                </Box>
                <Text
                  fontSize={"16px"}
                  lineHeight={8}
                  padding={"20px"}
                  fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                >
                  It combines the best elements of a chronological and
                  functional resume, making it a versatile option for job
                  seekers with a diverse range of skills and experience.
                </Text>
                <Text
                  fontSize={"16px"}
                  lineHeight={8}
                  padding={"20px"}
                  fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                >
                  It allows you to emphasize your most relevant skills and
                  qualifications while also showcasing your work experience in
                  reverse chronological order.
                </Text>
                <Text
                  fontSize={"16px"}
                  lineHeight={8}
                  padding={"20px"}
                  fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                >
                  It is useful for job seekers who want to showcase their
                  relevant experience and transferable skills.
                </Text>

                <Text
                  fontSize={"16px"}
                  lineHeight={8}
                  padding={"20px"}
                  fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                >
                  It allows you to highlight your professional achievements and
                  quantify your skills with real-world examples.
                </Text>
              </Box>

              {/* right box */}
              <Box width={"50%"}>
                <Box backgroundColor={"#fafafa"}>
                  <Text
                    fontSize={"16px"}
                    fontWeight={"medium"}
                    padding={"20px"}
                    fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                  >
                    CONS
                  </Text>
                </Box>
                <Text
                  fontSize={"16px"}
                  lineHeight={8}
                  padding={"20px"}
                  fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                >
                  It can be challenging to find the right balance between
                  highlighting your skills and showcasing your work experience.
                </Text>
                <Text
                  fontSize={"16px"}
                  lineHeight={8}
                  padding={"20px"}
                  fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                >
                  It may not be as widely accepted or familiar to recruiters as
                  the chronological format, which can make it more difficult to
                  get noticed.
                </Text>
                <Text
                  fontSize={"16px"}
                  lineHeight={8}
                  padding={"20px"}
                  fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                >
                  It may not be the best choice for job seekers with a
                  consistent work history or those who are just starting out, as
                  it does not showcase their progression in their career.
                </Text>
                <Text
                  fontSize={"16px"}
                  lineHeight={8}
                  padding={"20px"}
                  fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                >
                  It can make it difficult for recruiters to see how long you
                  have been in the workforce, or how you have progressed in your
                  career.
                </Text>
                <Text
                  fontSize={"16px"}
                  lineHeight={8}
                  padding={"20px"}
                  fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                >
                  It may not be the best choice for highly specialized roles, as
                  it does not always provide a clear picture of your work
                  history and qualifications.
                </Text>
              </Box>
            </Box>
          </Box>
          {/* example 3 end */}

          {/* example 4 */}
          <Box id={"b3iv"}>
            {/* title */}
            {/* table */}

            {/* Image */}
          </Box>
          {/* example 4 end */}
        </Box>
      </Container>

      {/* resume templates container */}

      {/* resume template container end */}

      {/* 3rd table heading explain */}

      {/* 4th table heading explain */}
      <Container maxW={"100%"} p={0}>
        <Box id={"b4"}>
          <ResumeHeading text={"4"} />
          {/* title */}
          <Text
            textAlign={"center"}
            fontSize={"30px"}
            fontWeight={"medium"}
            paddingBottom={"25px"}
            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
          >
            M• Make Sure Your Resume Format Beats <br />
            the ATS Resume Test
          </Text>
          {/* description */}
          <Text
            fontSize={"16px"}
            marginBottom={"20px"}
            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
          >
            A disturbing thought:
          </Text>

          <Text
            fontSize={"16px"}
            marginBottom={"20px"}
            lineHeight={8}
            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
          >
            To ensure your resume is ATS-friendly, use keywords and phrases
            relevant to the job you are applying for, use a clean, simple
            format, and avoid using fancy formatting or graphics.
          </Text>

          <Text
            fontSize={"16px"}
            marginBottom={"25px"}
            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
          >
            Use clear headings and sections, proofread for errors and use common
            file types such as .doc, .docx or .pdf. Tailor your resume to the
            job description and make it as relevant as possible to the position
            you are applying for.
          </Text>

          <Text
            fontSize={"24px"}
            fontWeight={"medium"}
            marginBottom={"30px"}
            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
          >
            {PASS_SCAN_FORMATS?.title}
          </Text>

          <UnorderedList
            fontSize={"16px"}
            lineHeight={8}
            marginBottom={"30px"}
            padding={"0px 15px"}
            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
          >
            {PASS_SCAN_FORMATS?.data.map((item, index) => (
              <>
                <ListItem key={index}>{item?.text}</ListItem>
              </>
            ))}
          </UnorderedList>

          <Text
            fontSize={"16px"}
            marginBottom={"30px"}
            lineHeight={8}
            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
          >
            {PASS_SCAN_FORMATS?.description} &nbsp;
            <Link color={"#3983fa"}>{PASS_SCAN_FORMATS?.link}</Link>
          </Text>
        </Box>
      </Container>
      {/* 4th table heading explain */}
    </>
  );
}
