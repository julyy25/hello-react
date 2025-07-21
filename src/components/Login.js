import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Integration with backend for login
      const url = "http://localhost:8080/auth/login";
      const payload = { username: "cdac123", password: "cdac" };
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
      <h1>Login</h1>
      <button onClick={handleLogin}>Click to Login</button>
    </div>
  );
}

export default Login;
