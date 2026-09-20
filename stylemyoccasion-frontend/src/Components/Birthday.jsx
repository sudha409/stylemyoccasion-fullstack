import OccassionStyle from "./OccassionStyle";
import BirthDayimage from '../assets/sudha.jpg';
import {Link} from 'react-router';

import {useState, useEffect} from "react";
import '../birthday.css';

function birthday() {
    // State to store the JSON data after fetching
    const [birthday, setBirthday] = useState(null);
    // Fetch birthday JSON data when component load
    useEffect(() => {
        fetch("http://localhost:8080/api/outfits/occasion/1")
            .then((response) => response.json())// Convert response to JSON
            .then((data) => setBirthday(data));// Save JSON data into state
    }, []);// Empty array → runs only once


    return (
        <div>

            {birthday ?

                (
                    <div className="birthdayContent">
                        <h1 className="birthday-text">Birthdays Collection</h1>
                        <h2>A birthday outfit should feel fun, bright, and full of celebration. This design focuses on
                            soft colors, playful patterns, and comfortable pieces that make the birthday person feel
                            special.The look blends style with joy, using light fabrics, cheerful accessories, and a
                            touch of sparkle to create a perfect birthday vibe,A good outfit does more than make someone
                            look nice — it actually helps people feel better, act more confidently, and express who they
                            are,</h2>
                        {
                            birthday.map((design) => (
                                // Link to design page with design data passed via state
                                <Link to={design.link} className="occasion-box" state={{item: design}}
                                      key={design.name}>
                                    <img src={design.img} alt={design.name} className="occasion-img"
                                         title={design.title}/>

                                </Link>

                            ))

                        }
                    </div>


                )
                : (
                    <p>Loading...</p>
                )}
        </div>
    );
}

export default birthday;