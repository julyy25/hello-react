import { useNavigate } from "react-router-dom";
import axios from "axios";
import DynamicLinks from "./DynamicLinks";

function Login() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Not Recommended
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Integration with backend for login
      const url = "http://localhost:8080/auth/login";
      // const payload = { username: "cdac123", password: "cdac" };
      const payload = { username: username, password: password };
      const response = await axios.post(url, payload);

      if (response.status === 200) {
        // localStorage.setItem("token", "dummy-token");
        localStorage.setItem("token", response.data.access_token);

        // Redirect to the following page after login
        // navigate("/following", { replace: true });
        window.location.href = "/message";
      } else {
        alert("Login failed");
        return;
      }
    } catch (err) {
      alert("Login failed");
      return;
    }
  };

  return (
    <div className="row justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="col-4 ">
        <div className="h1 text-center text-success">My Instaaaaa</div>

        <div>
          <div>
            <input
              type="text"
              name=""
              className="form-control form-control-lg mb-1"
              id="username"
              placeholder="Enter username"
            />
          </div>
          <div>
            <input
              type="password"
              name=""
              className="form-control form-control-lg mb-1"
              id="password"
              placeholder="Enter password"
            />
          </div>
          <button className="btn btn-success" onClick={handleLogin}>
            Click to Login
          </button>

          <DynamicLinks />
        </div>
      </div>
    </div>
  );
}

export default Login;
