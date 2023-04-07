import { useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WourkoutForm from "../components/WourkoutForm";
import {useWorkoutContext} from '../hooks/useWorkoutsContext'
import {useAuthContext} from '../hooks/useAuthContext'
export default function Home() {
  const {workouts, dispatch} = useWorkoutContext()
  const {user} = useAuthContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(`${process.env.VERCEL_API}/api/workouts`, {
        headers: {
          'AUTHORIZATION': `Bearer ${user.token}`
        }
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
    
      }
    };
    if(user) {
    fetchWorkouts();
    }
  }, [dispatch, user]);
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
