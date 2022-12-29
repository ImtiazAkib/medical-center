import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../Firebase/firebase.init";
import Report from "../Report/Report";
import ReportForm from "../ReportForm/ReportForm";
import "./Dashboard.css";

const Dashboard = () => {
  const { register, handleSubmit, reset } = useForm();

  const [drugs, setDrugs] = useState([]);
  const [users, setUsers] = useState([]);
  const [client, setClient] = useState({});

  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch("http://localhost:5000/prescriptions")
      .then((res) => res.json())
      .then((data) => setDrugs(data));
  }, [drugs.length]);

  useEffect(() => {
    fetch("http://localhost:5000/staffs")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    const client = users.filter((client) => client?.email === user?.email);
    setClient(client[0]);
  }, [user, users]);

  const onSubmit = (data) => {
    fetch("http://localhost:5000/prescriptions", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        drugName: data.drugName,
        dosage: data.dosage,
        time: data.time,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        reset();
      });
    data.insertedId && window.alert("Drug Added Successfully");
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(
        (data) =>
          data.deletedCount && window.alert("Drug Delleted Successfully")
      );
  };
  return (
    <div>
      <form className="prescription-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("drugName", { required: true })}
          placeholder="DrugName"
        />

        <input
          {...register("dosage", { required: true })}
          placeholder="Dosage"
        />

        <input
          {...register("time", { required: true })}
          placeholder="Time(0+0+0)"
        />
        {client?.type === "doctor" ? (
          <input className="add-btn" type="submit" value="Add" />
        ) : (
          <input
            className="add-btn"
            type="submit"
            value="Add"
            disabled={true}
          />
        )}
      </form>

      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>DrugName</th>
              <th>Dosage</th>
              <th>Time</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {drugs?.map((drug) => (
              <tr key={drug._id}>
                <td>{drug.drugName}</td>
                <td>{drug.dosage}</td>
                <td>{drug.time}</td>
                <td>
                  {client?.type === "doctor" ? (
                    <button
                      className="btn ml-2"
                      onClick={() => handleDelete(drug._id)}
                    >
                      Delete
                    </button>
                  ) : (
                    <button
                      className="btn ml-2"
                      onClick={() => handleDelete(drug._id)}
                      disabled
                    >
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ReportForm />
      {/* ---report---- */}
      <div className="report">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Last 1 Hour Report:</h2>
            <Report />
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Last 2 Hour Report:</h2>
            <Report />
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Last 3 Hour Report:</h2>
            <Report />
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Last 4 Hour Report:</h2>
            <Report />
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Last 5 Hour Report:</h2>
            <Report />
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Last 6 Hour Report:</h2>
            <Report />
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Last 7 Hour Report:</h2>
            <Report />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
