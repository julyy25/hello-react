import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterComponent() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // ACTION
  const handleRegister = async () => {
    // Read data from input fields
    // const username = document.getElementById("username").value;
    // const password = document.getElementById("password").value;

    // Integration with backend for registration
    const url = "http://localhost:8080/auth/register";
    const payload = { username: username, password: password };
    const res = await axios.post(url, payload);
    alert(res.data);

    // Reset input fields
    setUsername("");
    setPassword("");

    // Redirect to login page after registration
    navigate("/login", { replace: true });
  };

  // VIEW
  return (
    <div>
      <h2>Register Component</h2>

      <div>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />
      </div>

      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
      </div>

      <div>
        <input type="button" value="Register" onClick={handleRegister} />
      </div>
    </div>
  );
}

export default RegisterComponent;
