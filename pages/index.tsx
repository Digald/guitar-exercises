import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import KeySelect from "../components/KeySelect";
import ScaleType from "../components/ScaleType";
import Scale from "../components/Scale";
import Script from "next/script";

const Home: NextPage = () => {
  const [scaleType, setScaleType] = useState("major");
  const [key, setKey] = useState("f");
  return (
    <div className={styles.container}>
      <Script src="https://unpkg.com/vextab@3.0.6/releases/main.dev.js"></Script>
      <Head>
        <title>Guitar Exercises</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* Choose type of scale here */}
        <ScaleType setScaleType={setScaleType} />
        {/* Choose key here */}
        <KeySelect setKey={setKey} />
        {/* Render scale here */}
        <Scale scaleKey={key} scaleType={scaleType} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/Digald"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Mark Alaniz
        </a>
      </footer>
    </div>
  );
};

export default Home;
