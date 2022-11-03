import React, { useState } from "react";

export default function UserForm() {
    let [userForm, setUserForm] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
    });

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setUserForm({ ...userForm, [name]: value });
    }
    function handleFromSubmit(event) {
        event.preventDefault();
        console.log("Form is submitted!");
        console.log("userForm ", userForm);
    }
    return (
        <div className=" max-w-md mx-auto shadow-md rounded mt-16 p-8">
            <form className="flex flex-col">
                <h2 className="text-center">Enter details to signup</h2>
                <label className="text-sm">Enter your name:</label>
                <input
                    type="text"
                    name="name"
                    value={userForm.name}
                    id="name"
                    onChange={handleChange}
                    className="border border-gray-500 h-8 px-2 rounded-md focus:outline-none focus:border-blue-500"
                ></input>
                <label className="text-sm">Enter your Email:</label>
                <input
                    type="email"
                    name="email"
                    value={userForm.email}
                    id="email"
                    onChange={handleChange}
                    className="border border-gray-500 h-8 px-2 rounded-md focus:outline-none focus:border-blue-500"
                ></input>
                <label className="text-sm">Enter your password:</label>
                {/* <input type='password' name="password" value={userForm.password} id="password" onChange={(e) => { setUserForm({ ...userForm, password: e.target.value }) }} className='border border-gray-500 h-8 px-2 rounded-md focus:outline-none focus:border-blue-500'></input> */}
                <input
                    type="password"
                    name="password"
                    value={userForm.password}
                    id="password"
                    onChange={handleChange}
                    className="border border-gray-500 h-8 px-2 rounded-md focus:outline-none focus:border-blue-500"
                ></input>
                <label className="text-sm">Gender:</label>
                <select
                    name="gender"
                    onChange={handleChange}
                    className="border border-gray-500 h-8 px-2 rounded-md focus:outline-none focus:border-blue-500"
                >
                    <option value="">select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                </select>
                <button
                    type="submit"
                    onClick={handleFromSubmit}
                    className="px-6 py-1 rounded-md h-8 mt-10 bg-blue-600 shadow-md text-white"
                >
                    Submit
                </button>
                {userForm.name && <p>User name is : {userForm.name}</p>}
                {userForm.email && <p>User Email is : {userForm.email}</p>}
                {userForm.password && <p>User Password is : {userForm.password}</p>}
                {userForm.gender && <p>User Gender is : {userForm.gender}</p>}
            </form>
        </div>
    );
}
