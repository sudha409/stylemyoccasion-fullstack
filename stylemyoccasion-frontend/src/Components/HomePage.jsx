import React from 'react';
import {Link} from 'react-router';


import {useState, useEffect} from "react";

function homePage() {

    const [homepage, setHomePage] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8080/api/occasion")
            .then((response) => response.json())
            .then((data) => setHomePage(data));
    }, []);


    return (
        <div>

            {homepage ?

                (
                    <div className="homeContent">
                        <h1 className="homepage-header">StyleMyOccasion</h1>
                        <h3>Welcome to StyleMyOccasion — your space to explore, create, and design outfits for every
                            special moment. Share your ideas, discover your occasion style, and let us turn your dream
                            outfit into reality. Your thoughts and feedback are always our first priority. Each page
                            shows stylish designs, helpful descriptions, and easy tips so users can understand what
                            looks good and why. My goal is to make outfit selection stress‑free and enjoyable. Users can
                            also share their own ideas or dream outfits, and we design styles based on their
                            vision.</h3>

                        <div className="four-grid">
                            {
                                homepage.map(category => (

                                    <Link to={category.link} className="occasion-box" key={category.name}>
                                        <img src={category.img} alt={category.name} className="occasion-img"
                                             title={category.title}/>
                                    </Link>
                                ))

                            }
                        </div>
                    </div>


                )
                : (
                    <p>Loading...</p>
                )}
        </div>
    );
}

export default homePage;