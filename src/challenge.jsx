import { useState,useEffect } from "react";
import './App.css';

export default function Challenge(){
    let [background,setBackground] = useState("white");
    let [color,setColor] = useState("white");
    let [size,setSize] = useState("16");
    let [item,setItem] = useState("");
    let [t,setT] = useState("");
    let [isAdd,setAdd] = useState(false);
    let [isSearch,setSearch] = useState(false);
    let [itemList, setItemList] = useState([
        {
            "name" : "Apple"
        },
    ])
    useEffect(()=>{
        setBackground(color)
        setSize(size)
    },[size , color]);

    useEffect(()=>{
        if(isAdd && item.trim() !== ""){
            setItemList([
                ...itemList,
                {
                    "name" : item
                },
            ])
            setItem("")
            setAdd(false)
        }
    },[isAdd])

    // Filter items based on search term

    useEffect(()=>{
        console.log(t);
        
        t.trim() !== "" ? (
            setItemList(
                itemList.filter((item)=> item.name.toLowerCase().startsWith(t.toLowerCase()))
            )
        ):
        ( 
            setItemList([...itemList])
        )
        setSearch(false)
    },[isSearch])  
        

    return (
        <>
            <div className="challenge">
                <div>
                    <div><h4>Theme configuration</h4></div>
                <div><input type="checkbox" name={background} id="" />Color</div>
                <div>Background Color <input type="color" onChange={(e)=>{
                    setColor(e.target.value)
                }}/></div>
                <div>Font Size <input type="range" onChange={(e)=>{
                    setSize(e.target.value)
                    console.log(e.target.value);
                    
                }}/></div>
                <div style={{
                    "border":"2px solid #222",
                    "backgroundColor":background,
                    "fontSize":`${size}px`
                }}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos est expedita corporis quidem non labore ipsum distinctio porro veniam, omnis ducimus illum officia nobis et vel nulla excepturi fugiat mollitia?</p>                </div >
                </div>
                <div>
                    <div className="searchTop">
                        <div><input type="text" placeholder = "eg.Apple" value = {item} onChange={(e)=> {setItem(e.target.value)}} />
                        <button className="btn btn-primary" style = {{"size":"10px"}}
                        onClick={() => {setAdd(true)}}>Add Items</button>
                        </div>
                        <div><input type="text" placeholder = "eg.Banana" value = {t} onChange={(e)=> {
                            setT(e.target.value);
                            setSearch(true);                           

                            }}/>
                        <button className="btn btn-secondary" style = {{"size":"0px" , "backgroundColor" : "red"}}>Search</button>
                        </div>
                    </div>
                    
                        {itemList.length > 0 ? (                        
                                <div>
                                    {
                                        itemList.map((items, index)=>{
                                            return (
                                                <ul key={index}>
                                                    <li>{items.name}</li>
                                                </ul>
                                            )
                                        })
                                    }
                                </div>
                        ):(
                            <p>No items found</p>
                        )}
                    
                </div>
            </div>
        
        
        </>
    )
}