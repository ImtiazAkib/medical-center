import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import auth from "../Firebase/firebase.init";
import Report from "../Report/Report";
import "./PatientStatus.css";

const PatientStatus = () => {
  const [user] = useAuthState(auth);
  const { patientUsers } = useSelector((store) => store.patient);
  const { temperature } = useSelector((store) => store.patient);
  const [drugs, setDrugs] = useState([]);
  const buttonRef = useRef(null);
  const check = patientUsers.find((patient) => patient.email === user?.email);
  // const [users, setUsers] = useState([]);
  // const [client, setClient] = useState({});
  const { register, handleSubmit, reset } = useForm();

  // useEffect(() => {
  //   const client = users.filter((client) => client?.email === user?.email);
  //   setClient(client[0]);
  // }, [user, users]);

  useEffect(() => {
    fetch("https://medical-server.onrender.com/prescriptions")
      .then((res) => res.json())
      .then((data) => setDrugs(data));
  }, [drugs.length]);

  useEffect(() => {
    if (temperature.find((temp) => temp > 100)) {
      buttonRef.current.click();
    }
  }, []);

  const onSubmit = (data) => {
    fetch("https://medical-server.onrender.com/prescriptions", {
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

  return (
    <div>
      {!check && (
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

          <input className="add-btn" type="submit" value="Add" />
        </form>
      )}
      <label htmlFor="my-modal-4" className="btn hidden" ref={buttonRef}>
        open modal
      </label>

      <div className="overflow-x-auto mt-8">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>DrugName</th>
              <th>Dosage</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {drugs?.map((drug) => (
              <tr key={drug._id}>
                <td>{drug.drugName}</td>
                <td>{drug.dosage}</td>
                <td>{drug.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="status">
        <Report id="1" />
        <Report id="2" />
        <Report id="3" />
        <Report id="4" />
        <Report id="5" />
        <Report id="6" />
        <Report id="7" />
        <Report id="8" />
        <Report id="9" />
        <Report id="10" />
        <Report id="11" />
        <Report id="12" />
        <Report id="13" />
        <Report id="14" />
        <Report id="15" />
        <Report id="16" />
        <Report id="17" />
        <Report id="18" />
        <Report id="19" />
        <Report id="20" />
        <Report id="21" />
        <Report id="22" />
        <Report id="23" />
        <Report id="24" />
      </div>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">Alert!!!</h3>
          <p className="py-4">Call the Doctor emergency!!!</p>
        </label>
      </label>
    </div>
  );
};

export default PatientStatus;
