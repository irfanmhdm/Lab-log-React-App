import axios from "axios";
import React, { useEffect, useState } from "react";

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
      <h3 className="text-center mb-4">Lab Log Entries</h3>

      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Semester</th>
              <th>Course</th>
              <th>System No.</th>
              <th>Login Time</th>
              <th>Logout Time</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {data.map((entry) => (
              <tr key={entry._id}>
                <td>{entry.name}</td>
                <td>{entry.dept}</td>
                <td>{entry.sem}</td>
                <td>{entry.course}</td>
                <td>{entry.system_number}</td>
                <td>{entry.login_time}</td>
                <td>{entry.logout_time}</td>
                <td>{entry.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default View;