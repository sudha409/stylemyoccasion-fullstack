import {useState} from "react";
import {useNavigate} from "react-router";

function Signup() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        role: " "
    });

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:8080/api/users/signup", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form)
        })
            .then((res) => res.json())
            .then((data) => {
                navigate("/login");
            })
            .catch((err) => console.error(err));
    };



    return (
        <div className="about-container">
            <h1 className="about-title">Welcome to StyleMyOccation</h1>

            <h2 className="about-subtitle">Signup</h2>
            <div className="about-subtitle">
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter name"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
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
                        />
                    </div>
                    <div className="form-row">
                        <button type="submit">Signup</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Signup;