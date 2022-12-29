import React, { useEffect, useState } from "react";

const Report = () => {
  const [reports, setReports] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reports")
      .then((res) => res.json())
      .then((data) => setReports(data));
  }, []);
  return (
    <div>
      {reports.map((report) => (
        <div key={report._id}>
          <p>
            <span className="text-xl">
              SP0<sub>2</sub>:
            </span>
            <span>{report.sp02 ? report.sp02 : 0}</span>
          </p>
          <p>
            <span className="text-xl">Heartbeat:</span>
            <span>{report.heartbeat ? report.heartbeat : 0}</span>
          </p>
          <p>
            <span className="text-xl">Temperature:</span>
            <span>{report.temperature ? report.temperature : 0}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Report;
