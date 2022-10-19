import { MainContainer } from "../containers";
import Format from "../layout/layout";
import Head from "next/head";
import "@fontsource/poppins";

export default function Home() {
  return (
    <>
      <Head>
        <title>Design</title>
      </Head>
      <Format>
        <MainContainer />
      </Format>
    </>
  );
}
