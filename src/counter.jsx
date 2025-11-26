import { useState , createContext,useRef,useEffect} from "react";
import Login from './login.jsx';
import ProductList from "./productList.jsx";
//export   const dataContext = createContext();
function Counter(){

     const [count,setCount] = useState(0);
    // const data = "Hi I'm here by datacontext";

    let refCount = useRef(0);    

    useEffect(()=>{
        console.log(count);
    },[count]);

    function inc(){
        // setCount(preCount => preCount+1);
        //the setCount is executed as batchprocessing
        //when we print the count value it is only increment by one
        // setCount(preCount => preCount+1);
        // console.log(count);
        refCount.current +=1;
         console.log('refCount:'+refCount.current);
        console.log('count'+count);
    }

    return (
        <>
            {/* <dataContext.Provider value = {data}>                
                <ProductList/>                
            </dataContext.Provider> */}
             <h2 className="m-5">{refCount.current}</h2>
             <button className = "btn btn-primary" onClick = {inc}>Up</button>
             <button className="btn btn-secondary" onClick = {()=>setCount(refCount.current)}>Update</button>
        
        </>
    )
}
export default Counter;