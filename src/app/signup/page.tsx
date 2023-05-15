"use client";
import Button from "../components/Button";
import Navbar from "../components/NavBar";
import Head from "next/head";
import Link from "next/link";
import TextInput from "../components/TextInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { error } from "console";

const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email Format is Invalid")
    .required("Email is Required"),
  password: Yup.string()
    .min(8, "Password should have 8 characters")
    .max(50, "Password should have maximum 50 characters")
    .required("Password is Required"),
  fullname: Yup.string()
    .min(8, "Fullname should have 8 characters")
    .max(30, "Fullname should have maximum 30 characters")
    .required("Fullname is Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Confirm password is missmatch ")
    .required("Confirm Password is required"),
});

export default function Page() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      fullname: "",
      confirmPassword: "",
    },
    validationSchema: SigninSchema,
    onSubmit: () => {
      alert("yuhuuuu");
    },
  });
  return (
    <div>
      <Head>
        <title>Sign-Up | Noobium</title>
      </Head>
      <Navbar />
      <div className="w-[400px] mx-auto py-24">
        <h1 className="font-sans text-slate-900 font-bold text-5xl text-center mb-4">
          Sign Up
        </h1>
        <p className="font-sans text-slate-900 text-center mb-[37px]">
          Fill the form to create an account
        </p>
        <TextInput
          name="fullname"
          label="Enter Your Fullname"
          type="text"
          value={formik.values.fullname}
          placeholder="Enter Your Fullname"
          hasError={!!formik.errors.fullname}
          errorMessage={formik.errors.fullname!}
          onChange={formik.handleChange}
        />
        <div className="h-4"></div>
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
        <div className="h-4"></div>
        <TextInput
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          value={formik.values.confirmPassword}
          placeholder="Enter Your Password Again"
          hasError={!!formik.errors.confirmPassword}
          errorMessage={formik.errors.confirmPassword!}
          onChange={formik.handleChange}
        />
        <div className="h-9"></div>
        <Button isFullWidth onClick={formik.handleSubmit}>
          Sign Up
        </Button>
        <p className="text-slate-900 font-sans text-sm text-center mt-8">
          Already have an account?{" "}
          <Link href="signin">
            <span className="text-blue-800">Sign in here</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
