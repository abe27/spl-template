/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { Footer, NavBar } from "@/components";

const MainLayOut = ({
  brand=process.env.APP_NAME,
  children,
  title = process.env.APP_NAME,
  description = process.env.APP_DESCRIPTION,
}) => {
  const searchProp = (txt) => {
    console.dir(txt)
  }
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="leading-normal tracking-normal">
        <NavBar brand={brand} searchProp={searchProp}/>
        <div className="container w-full pt-16 mx-auto mt-6">
          <div className="w-full px-4 mb-16 leading-normal text-gray-800 md:px-0 md:mt-8">
            {children}
          </div>
        </div>
      </main>
      <div className="divider"></div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayOut;
