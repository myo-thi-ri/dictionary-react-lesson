import React, {useState} from "react";
import "./Dictionary.css";

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");
    function handleSubmit(event){
        event.preventDefault();
        alert(`Searching for ${keyword}`); 
    }

    function handleSearch(event){
        event.preventDefault();
        console.log(event.target.value);
        setKeyword(event.target.value);
    }
    return(
        <div className="Dictionary">
            <form onSubmit={handleSubmit}>
                <input type="search" onChange={handleSearch}/>
            </form>
        </div>
    );
}