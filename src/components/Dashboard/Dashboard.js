import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import auth from "../Firebase/firebase.init";

import "./Dashboard.css";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const { patientUsers } = useSelector((store) => store.patient);
  const { doctorUsers } = useSelector((store) => store.patient);
  const check = patientUsers.find((patient) => patient.email === user.email);

  return (
    <div>
      <div className="report">
        {check
          ? doctorUsers.map((doctor) => (
              <div key={doctor._id} className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img
                    src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=996&t=st=1676618204~exp=1676618804~hmac=8479c23df741992f3cf757f6847e7a0beb9c7ef93a6ca67deb4b3b7c8f5ccc1e"
                    alt="avatar"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{doctor.name}</h2>

                  <p>Email:{doctor.email}</p>
                  <div className="card-actions">
                    <Link to="/status" className="btn btn-primary">
                      Apply
                    </Link>
                  </div>
                </div>
              </div>
            ))
          : patientUsers.map((patient) => (
              <div
                key={patient._id}
                className="card w-96 bg-base-100 shadow-xl"
              >
                <figure className="px-10 pt-10">
                  <img
                    src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=996&t=st=1676618204~exp=1676618804~hmac=8479c23df741992f3cf757f6847e7a0beb9c7ef93a6ca67deb4b3b7c8f5ccc1e"
                    alt="avatar"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{patient.name}</h2>
                  <p>BedId:{patient.bedId}</p>
                  <p>Email:{patient.email}</p>
                  <div className="card-actions">
                    <Link to="/status" className="btn btn-primary">
                      Status
                    </Link>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Dashboard;
