import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";

function Products(Props){

    const navigate = useNavigate();

    return(
        <div className="card" onClick = {()=> navigate('/posts/'+Props.id)}>
            <img src={Props.image} alt="Image not found" />
            <h3>{Props.Name}</h3>
            <p>Made in :{Props.location}</p>
            <p>Price : {Props.price}</p>
            <p>Combo : {Props.combo}</p>
            <button>Buy Now</button>
            <button onClick = {()=>Props.delete(Props.id)}>Delete Order</button>
        </div>
    )
}
export default Products;