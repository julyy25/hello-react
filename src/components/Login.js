import { useNavigate } from "react-router-dom";
import axios from "axios";

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
        window.location.href = "/following";
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
    <div>
      <div>
        <input type="text" name="" id="username" placeholder="Enter username" />
      </div>
      <div>
        <input type="password" name="" id="password" placeholder="Enter password" />
      </div>
      <button onClick={handleLogin}>Click to Login</button>
    </div>
  );
}

export default Login;
