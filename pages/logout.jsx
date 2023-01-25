/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const LogOutPage = () => {
  const router = useRouter()
  const [countDown, setCountDown] = useState(5)

  useEffect(() => {
    if (countDown <= 0) {
      // call function signOut
      router.push("/login")
    }

    const timer = setTimeout(() => {
      setCountDown(countDown - 1)
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [countDown])
  return (
    <>
      <Head>
        <title>ออกจากระบบ</title>
        <meta name="description" content="กำลังออกจากระบบ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen">
        <div className="m-auto">
          <span className="flex justify-center font-mono text-6xl countdown text-rose-600">
            <span style={{ "--value": countDown }}></span>
          </span>
          <p>กำลังออกจากระบบ</p>
        </div>
      </div>
    </>
  );
};

export default LogOutPage;
