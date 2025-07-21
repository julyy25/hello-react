import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");

    // navigate("/login", { replace: true });
    window.location.href = "/login";
  };

  return (
    <div>
      <h1>Logout </h1>
      <button onClick={handleLogout}>Click to Logout</button>
    </div>
  );
}

export default Logout;
