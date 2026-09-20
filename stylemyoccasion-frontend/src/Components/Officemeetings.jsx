import OccassionStyle from "./OccassionStyle";
import {Link} from 'react-router';
import {useState, useEffect} from "react";


function OfficeMeetings() {
    const [OfficeMeetings, setOfficeMeeting] = useState(null);
    useEffect(() => {
        fetch("http://localhost:8080/api/outfits/occasion/3")
            .then((response) => response.json())
            .then((data) => setOfficeMeeting(data));
    }, []);


    return (
        <div>
            {OfficeMeetings ?

                (
                    <div className="OfficeMeetingsContent">
                        <h1 className="office-title">OfficeMettings Collection</h1>
                        <h2>An office‑meeting outfit should look professional, clean, and confident. This style focuses
                            on simple colors, neat lines, and comfortable pieces that help you feel ready to speak and
                            participate. A well‑fitted blazer, a soft blouse, and straight‑cut pants create a polished
                            look without feeling too formal. Light accessories and closed‑toe shoes keep the outfit
                            smart and tidy. This kind of outfit helps people feel prepared, organized, and confident
                            during any meeting.</h2>
                        {
                            OfficeMeetings.map((design) => (

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

export default OfficeMeetings;