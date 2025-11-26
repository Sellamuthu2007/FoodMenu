import {Link} from "react-router-dom";

function NotFound(){
    return(
        <>
            <h3>Error : 404 Page not found</h3>
            <a className = "btn btn-primary" href="/">Back to Home</a>
            <Link className="btn btn-danger" href="/">Home</Link>
        </>
    )
}
export default NotFound;