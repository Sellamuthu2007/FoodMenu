import {useState,useEffect,createContext} from "react";
import Products from "./products";
import Loading from "./assets/loading.png"
import useFetch from "./usefetch";

//export const dataContext = createContext(); 

function ProductList(){
    let [products,error] = useFetch("http://localhost:3000/foodList");
    useEffect(()=>{
        if(products){
            setProduct(products);
        }
    },[products]);

    let [prod,setProduct]=useState(products);

    function handledelete(id){
        const updatedList = prod.filter((product) => product.id != id);
        setProduct(updatedList);
    }

    if(!prod){
        return <>
            {!error && <img src={Loading}></img>}
             {error &&<h3>{error}</h3>}
        </>
    }

    const Menu = prod.map((product) => 
        <Products
        key = {product.id}
        id = {product.id}
        Name = {product.Name}
        image = {product.image}
        location = "ABC Royal,chennai"
        price = {product.price}
        combo = {product.combo}
        delete = {handledelete} 
        />
    )
    return (
       <>
         {Menu}
         
       </>
    )
}
export default ProductList;