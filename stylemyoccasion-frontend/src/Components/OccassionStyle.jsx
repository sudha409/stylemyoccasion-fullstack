import BirthDayimage from '../assets/sudha.jpg'
import '../occasionstyle.css';
import { Link,useLocation } from 'react-router';


function occassionStyle() {

  const location = useLocation();
  const { item } = location.state;

    
    return (

        <div>
            <div className="occasion-container">

                <div className="imageStyle">
                    <img src={item.img} alt="Birthday" className="occasion-img" />

                </div>


                <div className="description">
                    <h1 className="rainbow-text">Style Description</h1>
                    <p>
                        {item.description}
                    </p>

                    <div className="descriptionStyle-buttons">
                        <button className="btn-addtocart">Add To Cart</button>
                        <Link to="/feedback"  state={{ itemStyle : item  }}  key={ item.name } ><button className="btn-feedback"   >Feedback</button></Link> 
                      
                    </div>
                </div>
  
            </div>


        </div>
    )
}
export default occassionStyle;