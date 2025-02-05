"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string().required(),
  fullname: Yup.string().required(),
  password: Yup.string().required().min(7),
});

const SignUpPage = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      fullname: "",
      password: "",
    },

    validationSchema: schema,
    onSubmit: async ({ name, fullname, password }) => {
      console.log(
        "🚀 ~ onSubmit: ~ name, fullname, password:",
        name,
        fullname,
        password
      );
    },
  });

  // Destructure the formik object
  const { errors, touched, values, handleChange, handleBlur, handleSubmit } =
    formik;
  console.log("🚀 ~ SignUpPage ~ errors:", errors, "touched: ", touched);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="fullname"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          fullname
        </label>
        <input
          type="text"
          name="fullname"
          id="fullname"
          className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
            touched.fullname && errors.fullname ? "border-red-500" : ""
          }`}
          placeholder="name@company.com"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.fullname}
          //   required=""
        />
        {touched.fullname && errors.fullname && (
          <div className="text-red-500 text-sm mt-2">{errors.fullname}</div>
        )}
      </div>

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        id="password"
      />
      {errors.password && touched.password && <span>{errors.password}</span>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUpPage;
