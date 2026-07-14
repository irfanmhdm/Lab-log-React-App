import axios from 'axios';
import React, { useEffect, useState } from 'react';

const View = () => {
    const [data, changeData] = useState([]);

    const fetchData = () => {
        axios
            .get("http://localhost:3000/view-entry")
            .then((response) => {
                changeData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container mt-4">
            <div className="row">
                {data.map((value, index) => {
                    return (
                        <div
                            className="col-12 col-md-6 col-lg-4 mb-4"
                            key={index}
                        >
                            <div className="card shadow h-100">
                                <div className="card-body">

                                    <h4 className="card-title text-center mb-3">
                                        {value.name}
                                    </h4>

                                    <p className="card-text">
                                        <strong>Department:</strong> {value.dept}
                                    </p>

                                    <p className="card-text">
                                        <strong>Semester:</strong> {value.sem}
                                    </p>

                                    <p className="card-text">
                                        <strong>Course:</strong> {value.course}
                                    </p>

                                    <p className="card-text">
                                        <strong>System Number:</strong> {value.system_number}
                                    </p>

                                    <p className="card-text">
                                        <strong>Login Time:</strong> {value.login_time}
                                    </p>

                                    <p className="card-text">
                                        <strong>Logout Time:</strong> {value.logout_time}
                                    </p>

                                    <p className="card-text">
                                        <strong>Date:</strong> {value.date}
                                    </p>

                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default View;