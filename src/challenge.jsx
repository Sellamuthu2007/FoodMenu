import { useState,useEffect } from "react";


export default function Challenge(){
    let [background,setBackground] = useState("white");
    let [color,setColor] = useState("white");
    let [size,setSize] = useState("16");

    useEffect(()=>{
        setBackground(color)
        setSize(size)
    },[size , color]);

    return (
        <>
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
        
        
        </>
    )
}