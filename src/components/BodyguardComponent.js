import { Navigate } from "react-router-dom";

function BodyguardComponent({ children }) {
  let token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" replace={true} />;
}

export default BodyguardComponent;
