import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");
    function handleSubmit(event){
        event.preventDefault();
        // alert(`Searching for ${keyword}`); 
        //documentation: https://dictionaryapi.dev/
        const apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en";
        axios
        .get(`${apiUrl}/${keyword}`)
        .then(handleResponse);
    }

    function handleSearch(event){
        event.preventDefault();
        // console.log(event.target.value);
        setKeyword(event.target.value);
    }

    function handleResponse(response){
        console.log(response.data[0]);
    }
    return(
        <div className="Dictionary">
            <form onSubmit={handleSubmit}>
                <input type="search" onChange={handleSearch}/>
            </form>
        </div>
    );
}