import React from 'react'
import {useWorkoutContext} from '../hooks/useWorkoutsContext'

export default function WorkoutDetails({ _id, title, reps, load, createdAt}) {
  const {dispatch} = useWorkoutContext()
  const handleClick = async() => {
    const response = await fetch("http://localhost:3000/api/workouts/" +  _id, 
    {method: 'DELETE'}
    )
    const json = await response.json()

    if(response.ok){
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }
  return (
    <div className='workout-details' >
        <h4>{title}</h4>
        <p><strong>Load:  </strong>{load}</p>
        <p><strong>Reps:  </strong>{reps}</p>
        <p>{createdAt}</p>
        <span onClick={handleClick}>Delete</span>

      
    </div>
  )
}
