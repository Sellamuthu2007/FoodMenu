import {useState,useEffect} from "react";

const useFetch = (url)=>{
    let [products,setProduct]=useState(null);
    let [error,setError] = useState(null);
    useEffect(()=>{

        // const controller = new AbortController();
        //   const signal = controller.signal;
             setTimeout(()=>{
                fetch(url)
            .then((res)=> {
                if(!res.ok){
                    throw Error("Couldn't retrieve data");
                }
                console.log(res);
                return res.json();
            })
            .then((data)=> {
                console.log(data);
                setProduct(data);
            })
            .catch(err => setError(err.message));
            },1000)
            //Cleanup function
            // return (()=>{  
            //     console.log('un Mounted!');
            //     console.log('Cleaning up!');
            // })
             },[url]);

            return [products,error];
        };
export default useFetch;