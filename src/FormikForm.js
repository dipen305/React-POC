import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

export default function FormikForm() {
  const formik = useFormik({
    initialValues: {
      name: "testing123",
      email: "",
      profession: "",
      age: "",
    },
    onSubmit: function (values) {
      console.log(values);
      formik.setValues({ ...formik.values,name:'testsetvalues' });

      //formik.name = 'test';
      //formik.setFieldValue('name','testing')
      console.log(formik.getFieldMeta('name'));

    },
    validationSchema:Yup.object({
        name:Yup.string(),
        email:Yup.string().email("Email is not in right format").required("Email is required"),
        age:Yup.number().required("Age is required").min(15,"Minimum age should be 15 years"),
        profession:Yup.string().required("Profession is required")

    })
  });
  let profession = ["Developer", "Designer", "DevOps", "Project Manager"];
  return (
    <div className="bg-gray-100 min-h-screen w-full pt-16">
      <form
        className="max-w-md bg-white mx-auto shadow-md rounded-md p-6"
        onSubmit={formik.handleSubmit}
      >
        <div className="mb-4 flex flex-col">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="border h-8 rounded-md mt-1 focus:outline-none px-3"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <span className="text-red-500">{formik.errors.name}</span>
          )}
        </div>
        <div className="mb-4 flex flex-col">
          <label>Email</label>
          <input
            type="text"
            name="email"
            id="email"
            className="border h-8 rounded-md mt-1 focus:outline-none px-3"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <span className="text-red-500">{formik.errors.email}</span>
          )}
        </div>
        <div className="mb-4 flex flex-col">
          <label>Age</label>
          <input
            type="number"
            name="age"
            id="age"
            className="border h-8 rounded-md mt-1 focus:outline-none px-3"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.age}
          />
          {formik.touched.age && formik.errors.age && (
            <span className="text-red-500">{formik.errors.age}</span>
          )}
        </div>
        <div className="mb-4 flex flex-col">
          <label>Profession</label>
          <select
            name="profession"
            id="profession"
            className="border h-8 rounded-md mt-1 focus:outline-none px-3"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.profession}
          >
            <option value="">Please select the option</option>
            {profession.map((profession, index) => {
              return (
                <option key={index} id={profession}>
                  {" "}
                  {profession}
                </option>
              );
            })}
          </select>
          {formik.touched.profession && formik.errors.profession && (
            <span className="text-red-500">{formik.errors.profession}</span>
          )}
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-green-500 px-6 text-white py-1 rounded-md shadow-md hover:shadow-xl hover:-translate-y-1 focus:translate-y-1 transition-all"
          >
            {" "}
            Submit{" "}
          </button>
        </div>
      </form>
    </div>
  );
}
