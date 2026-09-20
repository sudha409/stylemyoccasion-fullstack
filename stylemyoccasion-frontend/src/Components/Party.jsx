import OccassionStyle from "./OccassionStyle";
import {Link} from 'react-router';
import {useState, useEffect} from "react";
import '../party.css';


function party() {
    const [party, setparty] = useState(null);
    useEffect(() => {
        fetch("http://localhost:8080/api/outfits/occasion/4")
            .then((response) => response.json())
            .then((data) => setparty(data));
    }, []);
    return (

        <div>

            {party ?

                (
                    <div className="party">
                        <h1 className="party-text">Partys Collection</h1>
                        <h2>A party outfit should feel fun, confident, and full of personality. This style focuses on
                            bright colors, trendy cuts, and eye‑catching details that make you stand out in a happy way.
                            A stylish top, comfortable fitted pants or a chic dress, and bold accessories create a look
                            that feels ready for celebration. Light makeup and fun shoes add the final touch. A good
                            party outfit helps people feel relaxed, excited, and confident while enjoying the moment.
                        </h2>
                        {
                            party.map((design) => (

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

export default party;