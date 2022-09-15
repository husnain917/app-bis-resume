import Head from "next/head";
import Image from "next/image";
import CallToAction from "../src/components/CallToAction";
import styles from "../styles/Index.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bis Resume App</title>
        <meta name="description" content="Create resume with ease!" />
      </Head>
      <div>
        <CallToAction />
      </div>
      <div>
      <div style={{ width: "100%", height: "100vh",marginTop:100, display: "flex" ,paddingLeft:"4%"}}>
        <div style={{ width: "50%" }}>
          <div
            style={{width:30,margin:20,marginLeft:"75%"}}
          >
            <h1 style={{backgroundColor:'#51E2C2',padding:80,color:'white',borderRadius:20,height:100}}>
              1
            </h1>
          </div>
          <div
            style={{ backgroundColor: "grey", wdith: 400, height: 340,borderRadius:30 }}
          ></div>
        </div>
        <div
          style={{  width: "50%", height: 500 }}
        >
<Image src="/one.jpg" width={550} height={550} />
        </div>
      </div>
      </div>

    </div>
  );
}
