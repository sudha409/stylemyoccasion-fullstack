
import OccassionStyle from "./OccassionStyle";

import { Link } from 'react-router';

import { useState, useEffect } from "react";


function weddingPage(){
    const [weddingPage, setwedding] = useState(null);
    useEffect(() => {
            fetch("http://localhost:8080/api/outfits/occasion/2")
                .then((response) => response.json())
                .then((data) => setwedding(data));
        }, []);
        return(
    <div>
        
                    { weddingPage ?
        
                        (
                            <div className="weddingContent">
                                <h1 className="rainbow-text" >Wedding Collection</h1>
                                <h2>StyleMyOccasion helps people discover the perfect outfit for any celebration. We educate users with simple tips, clear suggestions, and easy style guides that match each event. Whether it’s a birthday, wedding, or casual party, we help you choose outfits that make you feel confident and comfortable. If you have a dream outfit, tell us — we can help you bring it to life.</h2>
                                {
                                    weddingPage.map((design) => (
                                         
                                        <Link to={design.link} className="occasion-box" state={{ item : design  }}  key={design.name} >
                                        <img src={design.img } alt={design.name} className="occasion-img"title={design.title} />
                                         
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
export default weddingPage;