import { useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WourkoutForm from "../components/WourkoutForm";
import {useWorkoutContext} from '../hooks/useWorkoutsContext'
export default function Home() {
  const {workouts, dispatch} = useWorkoutContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:3000/api/workouts");
      const json = await response.json();

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
    
      }
    };
    fetchWorkouts();
  }, []);
  return (
    <>
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => 
          <WorkoutDetails
           key= {workout._id} 
          _id={workout._id}
          title={workout.title}
          reps={workout.reps}
          load={workout.load}
          createdAt={workout.createdAt}
          />  
          )}
      </div>
          <WourkoutForm />
    </div>
    </>
  );
}
