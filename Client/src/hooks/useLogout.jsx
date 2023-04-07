import { useAuthContext } from "./useAuthContext";
import { useWorkoutContext } from "./useWorkoutsContext";
export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: dispatchWorkouts } = useWorkoutContext();

  const logout = () => {
    // remove token form local storage

    localStorage.removeItem("user");

    //dispatch logout
    dispatch({ type: "LOGOUT" });
    dispatchWorkouts({ type: "LOGOUT_WORKOUT" });
    
  };
  return { logout };
};
