import React from 'react'
import {useWorkoutContext} from '../hooks/useWorkoutsContext'
import {useAuthContext} from '../hooks/useAuthContext'


export default function WorkoutDetails({ _id, title, reps, load, createdAt}) {
  const {user} = useAuthContext()
  const {dispatch} = useWorkoutContext()
  const handleClick = async() => {
    if(!user) return
    const response = await fetch(`${API_NAME}/api/workouts` +  _id, 
    {method: 'DELETE',
    headers: {
      'AUTHORIZATION': `Bearer ${user.token}`
    }}
    
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
