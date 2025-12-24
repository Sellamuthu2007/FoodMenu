import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './App.css';

export default function AddList(){
    let navigate = useNavigate();
    let [Name,setName] = useState("");
    let [image,setImage] = useState("");
    let [imagePreview, setImagePreview] = useState("");
    let [price,setPrice] = useState("");
    let [combo,setCombo] = useState("");

    // Handle file selection and convert to base64 or preview
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Create preview URL
            const previewUrl = URL.createObjectURL(file);
            setImagePreview(previewUrl);
            
            // Convert to base64 (for storing directly in JSON - not recommended for production)
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result); // This is base64 string
            };
            reader.readAsDataURL(file);
            
            // For production: upload to server/cloud and get URL
            // uploadToServer(file);
        }
    };

    // Example upload function for production (you'll need a backend endpoint)
    const uploadToServer = async (file) => {
        const formData = new FormData();
        formData.append('image', file);
        
        try {
            const response = await axios.post('http://localhost:3000/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            setImage(response.data.imageUrl); // URL returned from server
        } catch (err) {
            console.error('Upload failed:', err);
        }
    };

    const submit = async ()=>{
        try{
            await axios.post('http://localhost:3000/foodList',{
            "Name" : Name,
            "image" : image,
            "price" : price,
            "combo" : combo
            })
            navigate('/')
        }
        catch(err){
            throw new Error(err.message)
        }
    }
    return (
    <>
    
        <div className="addList">
            <div className="addListElements"><p>Name  </p><input type="text"  placeholder = "Mutton Briyani" onChange={(e)=>setName(e.target.value)}/></div>
            <div className="addListElements">
                <p>Image </p>
                <input type="file" accept="image/*" onChange={handleImageChange}/>
                {imagePreview && <img src={imagePreview} alt="Preview" style={{width: '100px', marginTop: '10px'}}/>}
            </div>
            <div className="addListElements"><p>Price</p><input type="text" placeholder="399" onChange={(e)=>setPrice(e.target.value)}/></div>
            <div className="addListElements"><p>Combo</p><input type="text" placeholder="Bread Halwa,Onion Rita,Redbull(200ml),Fishfry" onChange={(e)=>setCombo(e.target.value)}/></div>
            <div><button className="btn btn-primary" onClick={submit}>Add</button></div>
        </div>
    
    </>
    )
}