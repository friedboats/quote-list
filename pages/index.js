import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Quote List</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Header title='You get a bone job!!!' />
        <p className='description'>Add some quotes...</p>
      </main>

      <Footer />
    </div>
  );
}
