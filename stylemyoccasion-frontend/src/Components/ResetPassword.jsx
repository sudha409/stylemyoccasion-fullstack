import {useState, useEffect} from "react";
import {useLocation, Link, useNavigate} from "react-router";


export default function ResetPassword() {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");


    const submit = (e) => {
        e.preventDefault();
        fetch("http://localhost:8080/api/users/password-reset", {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email, password})
        })
            .then(async (r) => {
                const data = await r.json();
                if (r.status === 200) {
                    alert(data.message || "Password reset");
                    navigate("/login");
                    return;
                }
                setMsg(data.message || "Failed to reset password");
            })
            .catch(() => setMsg("Network error"));
    };

    return (
        <div className="about-container">
            <h2>Reset password</h2>
            <form onSubmit={submit}>
                <div className="form-row">
                    <input
                        type="email"
                        value={email}
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    /></div>
                <div className="form-row">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="New password"
                        required
                    />
                </div>
                <div className="form-row">
                    <button type="submit">Reset password</button>
                </div>
            </form>
            {msg && <p>{msg}</p>}
            <p>
                <Link to="/login">Back to login</Link>
            </p>
        </div>
    );
}
