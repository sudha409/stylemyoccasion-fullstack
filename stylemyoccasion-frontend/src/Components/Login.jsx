import { useState } from "react";
import { useNavigate,useLocation } from "react-router";

function Login() {
const location = useLocation();
const from = location.state?.from || "/";

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

 const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    })
      .then(async (res) => {
       const data = await res.json();

       if (res.status === 200) {
         localStorage.setItem("user", JSON.stringify(data));
         navigate(from, { replace: true });
         return;
       }
       alert(data?.message || "Login failed");
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="about-container">
            <h1 className="about-title">Welcome to StyleMyOccation</h1>

            <h2 className="about-subtitle">Login</h2>
<div className="about-subtitle">
      <h2></h2>

      <form onSubmit={handleSubmit}>
          <div className="form-row">
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={form.email}
          onChange={handleChange}
          required
        /></div>
   <div className="form-row">
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={form.password}
          onChange={handleChange}
          required
        /></div>
 <div className="form-row">
        <button type="submit">Login</button></div>
      </form>
      </div>
    </div>
  );
}

export default Login;