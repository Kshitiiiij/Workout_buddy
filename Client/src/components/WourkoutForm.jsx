import { useFormik } from "formik";
import { useState } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutsContext";
import {useAuthContext} from '../hooks/useAuthContext'


const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = "Required";
  }
  if (!values.reps) {
    errors.reps = "Required";
  } else if (values.reps != typeof Number) {
    errors.reps = "Must be a number";
  }

  if (!values.load) {
    errors.load = "Required";
  } else if (values.load != typeof Number) {
    errors.reps = "Must be a number";
  }
};
export default function WourkoutForm() {
  const {user} = useAuthContext()
  const [error, setError] = useState(null);
  const { dispatch } = useWorkoutContext();
  const formik = useFormik({
    initialValues: {
      title: "",
      reps: "",
      load: "",
    },
    validate,
    onSubmit: async (values) => {
      if(!user) {
        setError('You must be logged in to create a workout')
        return
      }
      const response = await fetch(`${process.env.API_NAME}/api/workouts`, { 
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
          'AUTHORIZATION': `Bearer ${user.token}`
        },
        
      });
      const json = await response.json();
      if (!response.ok) {
        setError(json.error);
      }
      if (response.ok) {
        dispatch({ type: "CREATE_WORKOUT", payload: json });
        formik.resetForm();
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="create">
      <label htmlFor="title">Add a new Workout:</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
      />

      <label htmlFor="reps">Reps: </label>
      <input
        id="reps"
        name="reps"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.reps}
      />

      <label htmlFor="load">Load: </label>
      <input
        id="load"
        name="load"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.load}
      />
      <button type="submit">Submit</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}
