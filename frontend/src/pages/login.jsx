import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = async () => {
    try {
      const res = await api.post("login/", {
        username,
        password,
      });

      localStorage.setItem("token", res.data.access);

      navigate("/");
    } catch {
      setError("Invalid credentials");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Login</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <br /><br />

      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <br /><br />

      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
