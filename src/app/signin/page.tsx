'use client';
import Button from "../Button";
import Navbar from "../NavBar";
import Head from "next/head";
import Link from "next/link";
import TextInput from "../TextInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { error } from "console";

const SigninSchema = Yup.object().shape({
      email: Yup.string().email('Email Format is Invalid')
      .required('Email is Required'),
      password: Yup.string().required("Password is Required")
    });

export default function Page() { 
   const formik = useFormik({
       initialValues: {
         email: "",
         password: ""
       },
       validationSchema: SigninSchema,
       onSubmit:() => {
          alert ("yuhuuuu");
       },
       
   });
  return (
    <div>
      <Head>
        <title>Sign-In | Noobium</title>
      </Head>
      <Navbar />
      <div className="w-[400px] mx-auto py-24">
        <h1 className="font-sans text-slate-900 font-bold text-5xl text-center mb-4">
          Sign In
        </h1>
        <p className="font-sans text-slate-900 text-center mb-[37px]">
          Fill the form to Sign to your account
        </p>
        <TextInput
          name="email"
          label="Email Address"
          type="text"
          value={formik.values.email}
          placeholder="Enter Your Email Address"
          hasError={!!formik.errors.email}
          errorMessage={formik.errors.email!}
          onChange={formik.handleChange}
        />
        <div className="h-4"></div>
        <TextInput
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          placeholder="Enter Your Password"
          hasError={!!formik.errors.password}
          errorMessage={formik.errors.password!}
          onChange={formik.handleChange}
        />
        <div className="h-9"></div>
        <Button isFullWidth onClick={() => formik.handleSubmit}>Sign In</Button>
        <p className="text-slate-900 font-sans text-sm text-center mt-8">
          Don&lsquo;t have an account?{" "}
          <Link href="signup">
            <span className="text-blue-800">Sign up here</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
