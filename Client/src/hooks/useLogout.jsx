import { useAuthContext } from "./useAuthContext";
export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    // remove token form local storage

    localStorage.removeItem("user");

    //dispatch logout
    dispatch({ type: "LOGOUT" });
  };
  return { logout };
};
