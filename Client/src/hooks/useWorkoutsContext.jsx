import {WorkoutContext} from '../context/WorkoutContex'
import { useContext } from 'react'

export const useWorkoutContext = () => {
    const context = useContext(WorkoutContext)

    if(!context){
        throw Error('use context must be used inside WorkoutCntextProvider')
    }
    return context
}