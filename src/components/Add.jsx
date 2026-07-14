import axios from 'axios';
import React, { useState } from 'react';

const Add = () => {

    const [input, changeInput] = useState({
        name: "",
        dept: "",
        sem: "",
        course: "",
        system_number: "",
        login_time: "",
        logout_time: "",
        date: ""
    });

    const inputHandler = (event) => {
        changeInput({
            ...input,
            [event.target.name]: event.target.value
        });
    };

    const readValue = () => {
        console.log(input);

        axios
            .post("http://localhost:3000/add_entry", input)
            .then((response) => {
                console.log(response.data);
                alert("Entry Added Successfully!");

                changeInput({
                    name: "",
                    dept: "",
                    sem: "",
                    course: "",
                    system_number: "",
                    login_time: "",
                    logout_time: "",
                    date: ""
                });
            })
            .catch((error) => {
                console.log(error);
                alert("Something went wrong!");
            });
    };

    return (
        <div className="container border border-2 rounded shadow p-5 mt-5 bg-secondary">

            <div className="form text-center p-5"><h1>REGISTRATION FORM </h1></div>
            <div className="row">
                <div className="col-12">
                    <div className="row g-3">

                        <div className="col-md-6">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={input.name}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Department</label>
                            <select name="dept" id="" className="form-select"
                                value={input.dept}
                                onChange={inputHandler}>
                                <option value="">Select Department</option>
                                <option value="MCA">MCA</option>
                                <option value="MBA">MBA</option>
                                <option value="CS">CS</option>
                                <option value="EC">EC</option>
                            </select>
                            
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Semester</label>
                            <input
                                type="text"
                                className="form-control"
                                name="sem"
                                value={input.sem}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Course</label>
                            <select name="course" id="" className="form-select"
                                value={input.course}
                                onChange={inputHandler}>
                                <option value="">Select Course</option>
                                <option value="Python">Python</option>
                                <option value="Java">Java</option>
                                <option value="Cloud">Cloud</option>
                                <option value="React">React</option>
                            </select>
                            
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">System Number</label>
                            <input
                                type="text"
                                className="form-control"
                                name="system_number"
                                value={input.system_number}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Login Time</label>
                            <input
                                type="time"
                                className="form-control"
                                name="login_time"
                                value={input.login_time}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Logout Time</label>
                            <input
                                type="time"
                                className="form-control"
                                name="logout_time"
                                value={input.logout_time}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Date</label>
                            <input
                                type="date"
                                className="form-control"
                                name="date"
                                value={input.date}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="col-12 text-center mt-4">
                            <button
                                className="btn btn-primary px-5"
                                onClick={readValue}
                            >
                                Add Entry
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Add;