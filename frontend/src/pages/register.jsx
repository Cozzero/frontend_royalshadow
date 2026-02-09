import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
    role: "employee",
    company: 1,
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const register = async () => {
    try {
      await api.post("register/", form);
      setMsg("User created successfully!");
      navigate("/login");
    } catch (err) {
      setMsg("Error creating user");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Register User</h2>

      <input name="username" placeholder="Username" onChange={handleChange} />
      <br /><br />

      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <br /><br />

      <select name="role" onChange={handleChange}>
        <option value="employee">Employee</option>
        <option value="hr">HR</option>
        <option value="admin">Admin</option>
      </select>
      <br /><br />

      <button onClick={register}>Create User</button>

      <p>{msg}</p>
    </div>
  );
}

export default Register;
