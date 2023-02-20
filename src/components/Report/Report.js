import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTemp } from "../../features/patient/patientSlice";

const Report = ({ id }) => {
  const dispatch = useDispatch();
  const temp = Math.floor(Math.random() * (110 - 90)) + 90;
  useEffect(() => {
    dispatch(addTemp(temp));
  }, []);

  return (
    <div className="card w-96 bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title">Last {id} Hour Report</h2>

        <div className="card-actions justify-end">
          <button className="btn btn-ghost">
            SP0<sub>2</sub>
          </button>
          <button className="btn btn-ghost">Temp</button>
          <button className="btn btn-ghost">BPM</button>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-ghost">
            {Math.floor(Math.random() * (100 - 60)) + 60}
          </button>
          <button className="btn btn-ghost">{temp}</button>
          <button className="btn btn-ghost">
            {Math.floor(Math.random() * (100 - 40)) + 40}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Report;
