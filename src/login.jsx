import { useContext, useState } from "react";
//import {dataContext} from './counter.jsx';
function Login(){

    const [pwd1,setPwd1] = useState("");
    const [pwd2,setPwd2] = useState("");
    const [matched,setMatched] = useState("");

    function matchPwd1(event){
        setPwd1(event.target.value);
         console.log(event.target.value);
    }
    
    function matchPwd2(event){
        setPwd2(event.target.value);
        console.log(event.target.value);
        if(pwd1 != event.target.value){
            setMatched("Passwords are not matching");
            console.log("Not same");
        }
        else {
            console.log("Same");
            setMatched("");
            
        }   
    }

    const data = useContext(dataContext);
    return (
        <>
        {/* <h2>{data}</h2> */}
           <form className="my-5"
           style={{
            width : "30%",
            margin : "auto"
           }}           
           >
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control"  aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={pwd1} onChange={(event)=> matchPwd1(event)} className="form-control"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input type="password"  onChange={matchPwd2}className="form-control"/>
                   <div id="emailHelp" className = "form-text"
                    style = {{
                        color : "red"
                    }}>{matched}</div>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox"  className="form-check-input"/>
                    <label className="form-check-label" for="exampleCheck1">I agree</label>
                </div>
                <button type="submit" className="btn btn-primary">Create account</button>
            </form>
        </>
    )
}
export default Login;