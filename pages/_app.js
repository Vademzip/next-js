import '../styles/globals.scss';
import Layout from "./components/Layout";
import Image from "next/image"
import YTbackground from "../public/youtube.png"

const MyApp = ({Component, pageProps}) => (
  <Layout>
    <main>
      <Component {...pageProps} />
    </main>
    <Image src = {YTbackground} width = '500' height = {350} alt = "preview" placeholder = "blur" />
  </Layout>
);

export default MyApp;
