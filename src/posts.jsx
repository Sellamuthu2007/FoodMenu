import {useParams} from "react-router-dom";
import useFetch from "./usefetch";

function Post(){

    const {id} = useParams();

    const [product,err]=useFetch("http://localhost:3000/foodList/"+id)

    return(
        <>
            {product && <div className="card">
                <img src={product.image} alt="" />
                <p>Name : {product.Name}</p>
                <p>Price : {product.price}</p>
                <p>Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex recusandae voluptatum reiciendis ducimus rem, ipsa voluptatem beatae veritatis eius mollitia illum at nesciunt aut fugiat laborum inventore asperiores nobis ea.</p>
            </div>}
             
        </>
    )

}
export default Post;