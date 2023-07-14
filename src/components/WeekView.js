import React from "react";
import { Link } from "react-router-dom";
import DayView from "./DayView";
import Navbar from "./Navbar";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

const WeekView = () => {
  // call use selector hook for getting state from reducer
  let habitsState = useSelector((state) => state.habits);

  //getting habit from habits state according to localstorage id and set it on habit
  let habit = {};
  for (let i = 0; i < habitsState.length; i++) {
    if (habitsState[i].id === Number(localStorage.getItem("id"))) {
      habit = habitsState[i];
    }
  }
  return (
    <>
      <Navbar name="Week View" />
      <h1 className="text-center" style={{ textTransform: "capitalize" }}>
        {habit.name}
      </h1>
      <div className="days-container">
        {habit.weekLog.map((day, index) => (
          <DayView day={day} key={index} />
        ))}
      </div>
      <div className="d-grid gap-2 col-6 mx-auto mt-5">
        <button className="btn btn-primary" type="button">
          <Link to="/">Go to Home</Link>
        </button>
      </div>
    </>
  );
};
export default WeekView;
