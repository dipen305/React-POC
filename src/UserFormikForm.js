import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function UserFormikForm() {
  const userForm = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      addressLine1: "",
      addressLine2: "",
      zipCode: "",
      state: "",
      city: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: function (values) {
      console.log(values);
      userForm.resetForm();
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Please enter the first name."),
      lastName: Yup.string().required("Please enter the last name."),
      addressLine1: Yup.string().required("Please enter the addressLine 1."),
      zipCode: Yup.number()
        .required("Please enter the zip code.")
        .test(
          "zip code validator",
          "zip Code shold be of 6 digit",
          (values) => {
            return values?.toString().length == 6;
          }
        ),
      state: Yup.string().required("Please select the state."),
      city: Yup.string().required("Please enter the city."),
      phoneNumber: Yup.string().required("Please enter the phone number."),
      password: Yup.string()
        .required()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must contain one uppercase, one lowercase"
        ),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords don't match")
        .required("Confirm password is required"),
    }),
  });
  return (
    <div className=" min-h-screen w-full pt-16 ml-12">
      <h1 className="text-4xl font-bold">Shipping</h1>
      <h2 className="text-xl font-bold mt-10 pb-2">Shipping address</h2>

      <form
        className="max-w-sm pb-2 rounded-md"
        onSubmit={userForm.handleSubmit}
      >
        <hr />
        <div className="mb-2 flex flex-col">
          <label htmlFor="firstName" className="font-bold">
            First name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={userForm.handleChange}
            onBlur={userForm.handleBlur}
            value={userForm.values.firstName}
            className={`border h-10 ${
              userForm.touched.firstName && userForm.errors.firstName
                ? "border-red-400"
                : ""
            }`}
          />
          {userForm.touched.firstName && userForm.errors.firstName && (
            <span className="text-red-500">{userForm.errors.firstName}</span>
          )}
        </div>
        <div className="mb-2 flex flex-col">
          <label className="font-bold">Last name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={userForm.handleChange}
            onBlur={userForm.handleBlur}
            value={userForm.values.lastName}
            className={`border h-10 ${
              userForm.touched.lastName && userForm.errors.lastName
                ? "border-red-400"
                : ""
            }`}
          />
          {userForm.touched.lastName && userForm.errors.lastName && (
            <span className="text-red-500">{userForm.errors.lastName}</span>
          )}
        </div>
        <div className="mb-2 flex flex-col">
          <label className="font-bold">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={userForm.handleChange}
            onBlur={userForm.handleBlur}
            value={userForm.values.password}
            className={`border h-10 ${
              userForm.touched.password && userForm.errors.password
                ? "border-red-400"
                : ""
            }`}
          />
          {userForm.touched.password && userForm.errors.password && (
            <span className="text-red-500">{userForm.errors.password}</span>
          )}
        </div>
        <div className="mb-2 flex flex-col">
          <label className="font-bold">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            onChange={userForm.handleChange}
            onBlur={userForm.handleBlur}
            value={userForm.values.confirmPassword}
            className={`border h-10 ${
              userForm.touched.confirmPassword &&
              userForm.errors.confirmPassword
                ? "border-red-400"
                : ""
            }`}
          />
          {userForm.touched.confirmPassword &&
            userForm.errors.confirmPassword && (
              <span className="text-red-500">
                {userForm.errors.confirmPassword}
              </span>
            )}
        </div>
        <div className="mb-2 flex flex-col">
          <label className="font-bold">Address line 1</label>
          <input
            type="text"
            name="addressLine1"
            id="addressLine1"
            onChange={userForm.handleChange}
            onBlur={userForm.handleBlur}
            value={userForm.values.addressLine1}
            className={`border h-10 ${
              userForm.touched.addressLine1 && userForm.errors.addressLine1
                ? "border-red-400"
                : ""
            }`}
          />
          {userForm.touched.addressLine1 && userForm.errors.addressLine1 && (
            <span className="text-red-500">{userForm.errors.addressLine1}</span>
          )}
        </div>
        <div className="mb-2 flex flex-col">
          <label className="font-bold">Address line 2(optional)</label>
          <input
            type="text"
            name="addressLine2"
            id="addressLine2"
            placeholder="Apt, Suite, Bldg, Floor, etc"
            onChange={userForm.handleChange}
            onBlur={userForm.handleBlur}
            value={userForm.values.addressLine2}
            className={`border h-10 ${
              userForm.touched.addressLine2 && userForm.errors.addressLine2
                ? "border-red-400"
                : ""
            }`}
          />
          {userForm.touched.addressLine2 && userForm.errors.addressLine2 && (
            <span className="text-red-500">{userForm.errors.addressLine2}</span>
          )}
        </div>
        <div className="mb-2 flex">
          <div className="mb-2">
            <label className="font-bold">Zip code</label>
            <input
              type="number"
              name="zipCode"
              id="zipCode"
              onChange={userForm.handleChange}
              onBlur={userForm.handleBlur}
              value={userForm.values.zipCode}
              className={`border h-10 ${
                userForm.touched.zipCode && userForm.errors.zipCode
                  ? "border-red-400"
                  : ""
              }`}
            />
            {userForm.touched.zipCode && userForm.errors.zipCode && (
              <span className="text-red-500">{userForm.errors.zipCode}</span>
            )}
          </div>
          <div className="mb-2">
            <label className="font-bold">State</label>
            <select
              name="state"
              id="state"
              className={`border h-10 w-full${
                userForm.touched.state && userForm.errors.state
                  ? "border-red-400"
                  : ""
              }`}
              onChange={userForm.handleChange}
              onBlur={userForm.handleBlur}
              value={userForm.values.state}
            >
              <option value="">select</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Maharashtra">Maharashtra</option>
            </select>
            {userForm.touched.state && userForm.errors.state && (
              <span className="text-red-500">{userForm.errors.state}</span>
            )}
          </div>
        </div>
        <div className="mb-2 flex flex-col">
          <label className="font-bold">City</label>
          <input
            type="text"
            name="city"
            id="city"
            onChange={userForm.handleChange}
            onBlur={userForm.handleBlur}
            value={userForm.values.city}
            className={`border h-10 ${
              userForm.touched.city && userForm.errors.city
                ? "border-red-400"
                : ""
            }`}
          />
          {userForm.touched.city && userForm.errors.city && (
            <span className="text-red-500">{userForm.errors.city}</span>
          )}
        </div>
        <div className="mb-2 flex flex-col">
          <label className="font-bold">Phone number</label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            onChange={userForm.handleChange}
            onBlur={userForm.handleBlur}
            value={userForm.values.phoneNumber}
            className={`border h-10 ${
              userForm.touched.phoneNumber && userForm.errors.phoneNumber
                ? "border-red-400"
                : ""
            }`}
          />
          {userForm.touched.phoneNumber && userForm.errors.phoneNumber && (
            <span className="text-red-500">{userForm.errors.phoneNumber}</span>
          )}
        </div>
        <div className="text-center">
          <button
            type="submit"
            className='className=" rounded-md h-8 mt-10 pt-1 mb-20  px-10 py-15 bg-blue-600 shadow-md text-white'
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
}
