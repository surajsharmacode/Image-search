import React, { useState ,useEffect} from "react";
import axios from 'axios';
import './searchImage.css';


console.log("react env", process.env.REACT_APP_CLIENT_ID)
const SearchBar=({setInfo})=>{
    let [search,setSearch]=useState("");

     useEffect( ()=>{
        console.log("working")
       getImages()
    },[])

   
     async function getImages(){
        try{
        let request = await axios.get("https://api.unsplash.com/search/photos",{
            params: {
                query: search || "nature"
            },
            headers: {
                Authorization: 'Client-ID g1HIfABf7z0IbH_YI4G7VyAQGY-dvR9IU-_f2yQEKD8'
            }
        })
         console.log(request.data.results);
         setInfo(request.data.results)
        }
        catch(error){
        console.log("error")
        }

    }
    return (
        <div className="search-image">
         <input type="text" 
            placeholder="search images"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
         />
         <button onClick={getImages}>Search</button>
        </div>
    )
}

export default SearchBar;