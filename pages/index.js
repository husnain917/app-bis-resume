import Head from "next/head";
import CallToAction from "../src/components/CallToAction";
import HintSection from "../src/components/hintSection/HintSection";
import styles from "../styles/Index.module.css";
import { Text } from "@chakra-ui/react";
import Layout from "../src/Layout";
import { FaMinus } from "react-icons/fa";
export default function Home() {
  return (
    <>
      <Head>
        <title>Bis Resume App</title>
        <meta name="description" content="Create resume with ease!" />
      </Head>
      <Layout>
        <CallToAction />

        <div style={{ marginTop: "5%", marginBottom: "5%" }}>
          <Text
            fontSize={["2rem", "2rem", "2.3rem"]}
            color="#313B47"
            fontWeight="bold"
            textAlign="center"
            pl={["7%", "14%"]}
            pr={["14%"]}
          >
            Build Your Resume Fast and Easy.
          </Text>
          <div className={styles.hrLine}>
            <FaMinus
              style={{
                color: "#1dbfaf",
                fontSize: "30px",
                backgroundColor: "#1dbfaf",
                paddingLeft: "5%",
                paddingRight: "5%",
                borderRadius: 50,
                height: 5,
                textAlign: "center",
                marginLeft: "45%",
                marginTop: "2%",
              }}
            />
          </div>
          <Text
            color="#313B47"
            fontSize={["1rem", "1.5rem"]}
            fontWeight={["400", "400"]}
            align="center"
            pl={["7%", "14%"]}
            pr={["14%"]}
            mt="3%"
          >
            ` Novoresume is lightning fast. There is no software to download. No
            multi-part sign-up form. No long-winded tutorials. Just a
            straightforward process.`
          </Text>
          <HintSection
            number="1"
            message="Pick a Template"
            description="`Dont sabotage your job search before it has even begun. Choose from our ATS-friendly, hand-crafted resume templates`"
            imgSrc="/one.png"
            isRight={true}
            paddingBottom="30px"
          />
          <HintSection
            number="2"
            message="Customize Your Layout"
            description="`Make the resume template truly your own. Customize the layout based on your experience level.`"
            imgSrc="/two.png"
            isRight={false}
            paddingBottom="20px"
          />
          <HintSection
            number="3"
            message="Fill in the Blanks"
            description="`Fill in your resume information, let our AI content analyzer do its job, and see your resume changes dynamically in real time.`"
            imgSrc="/three.png"
            isRight={true}
            paddingBottom="20px"
          />
          <HintSection
            number="4"
            message="Hit Download!'"
            description="`And yes, its free! We dont hit you with a paywall once you have completed your resume in the Basic Account. If you use any of our premium features, the software will let you know about it`."
            imgSrc="/four.jpg"
            isRight={false}
            paddingBottom="5px"
          />
          <div></div>
        </div>
      </Layout>
    </>
  );
}
