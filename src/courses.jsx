//prop-types module used to check datatypes of variables
import {useState} from 'react';
import PropTypes from "prop-types";



function Courses( props) {
    let [purchased,setPurchased] = useState(false);
    function BuyCourse(discount,e){
        console.log(`${props.Name} purchased with ${discount}% discount`);
        //console.log(e);
        setPurchased(true);
    }

    return(         
          props.Name && <div className="card">
            <img src={props.image} alt="Image not found" />
            <h3>{props.Name}</h3>
            <p>Duration :{props.timing} Hours</p>
            <p>Price : ${props.price}</p>
            <button onClick={(event) => BuyCourse(30,event)}>Buy Course</button>
            <button onClick={ () => props.delete(props.id)}>Delete</button>
            <p>{purchased  ? "Already Purchased" : "Get It Now"}</p>

        </div>
    );
} 

// Courses.defaultProps={  
//     Name : "HTML Courses",
//     img : react,
//     price : 99,
//     timing : 3

// };
Courses.propTypes={
    Name : PropTypes.string,
    price : PropTypes.number,
    timing : PropTypes.number,
}

export default Courses;