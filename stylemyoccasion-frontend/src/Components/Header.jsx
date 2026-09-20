import {Link, useNavigate, useLocation} from 'react-router';
import {useState, useEffect} from "react";

function header() {

    const location = useLocation();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");


    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));

        setUsername(user ? user.user.name : "");
    }, [location.pathname]);


    const handleLogout = () => {
        setUsername("");
        localStorage.removeItem("user");
        navigate("/");   // redirect to login page
    };


    return (
        <div>
            <header>

                <h1 className="headerLogo">
                    <img src="images/logo.png" alt="SMO" className="occasion-img" title="StyleMyOccasion"
                         style={{width: "55px", height: "55px", borderRadius: "50%"}}/>
                    StyleMyOccasion
                </h1>

                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/aboutUs">About&nbsp;&nbsp;Us</Link>
                    <Link to="/feedback" state={{trigger: Date.now()}}>Feedback</Link>


                </nav>

                <div className="right-links">
                    {username ? (
                        <>
                            <span style={{fontWeight: "bold"}}>Welcome, {username}</span>
                            <button onClick={handleLogout} className="logout-btn">Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" state={{from: location.pathname}}>Login</Link>
                            <Link to="/signup">Signup</Link>
                        </>
                    )}
                </div>


            </header>
        </div>
    );


}


export default header;