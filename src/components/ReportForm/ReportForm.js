import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../Firebase/firebase.init";

const ReportForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [reports, setReports] = useState([]);
  const [client, setClient] = useState({});
  const [users, setUsers] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const client = users.filter((client) => client?.email === user?.email);
    setClient(client[0]);
  }, [user, users]);

  useEffect(() => {
    fetch("https://medical-server.onrender.com/staffs")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    fetch("https://medical-server.onrender.com/reports")
      .then((res) => res.json())
      .then((data) => setReports(data));
  }, []);

  const onSubmit = (data) => {
    fetch(`https://medical-server.onrender.com/reports/${reports[0]._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sp02: data.sp02,
        heartbeat: data.heartbeat,
        temperature: data.temperature,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        reset();
        window.alert("Operation successfull");
      });
  };
  return (
    <div>
      <form className="prescription-form" onSubmit={handleSubmit(onSubmit)}>
        <p className="text-3xl mb-3">Report Input:</p>
        {/* <input {...register("id", { required: true })} placeholder="id" /> */}

        <input {...register("sp02", { required: true })} placeholder="sp02" />

        <input
          {...register("heartbeat", { required: true })}
          placeholder="heartbeat"
        />

        <input
          {...register("temperature", { required: true })}
          placeholder="temperature"
        />
        {client?.type === "doctor" ? (
          <input className="add-btn" type="submit" value="Update" />
        ) : (
          <input
            className="add-btn"
            type="submit"
            value="Update"
            disabled={true}
          />
        )}
      </form>
    </div>
  );
};

export default ReportForm;
