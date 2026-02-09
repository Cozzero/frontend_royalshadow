import { useEffect, useState } from "react";
import api from "../api/axios";

function Employee() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("employee/")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Employee</h2>

      {data.map(emp => (
        <p key={emp.id}>{emp.name}</p>
      ))}
    </div>
  );
}

export default Employee;
