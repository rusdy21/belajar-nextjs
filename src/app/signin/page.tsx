import Button from "../Button";
import Navbar from "../NavBar";
import Head from "next/head";

export default function Page() {
  return (
    <div>
      <Head>
        <title>Sign-In | Noobium</title>
      </Head>
      <Navbar />
      <div className="w-[400px] mx-auto py-24">
         <h1 className="font-sans text-slate-900 font-bold text-5xl text-center mb-4">Sign In</h1>
         <p className="font-sans text-slate-900 text-center">Fill the form to Sign to your account</p>
         <Button isFullWidth>Sign In</Button>
      </div>
    </div>
  );
}
