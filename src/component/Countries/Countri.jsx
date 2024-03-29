import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";


const Countri = () => {
    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    },[])
    
    return (
        <div>
            <h3>Counties: {countries.length}</h3>
            {
                countries.map(country => <Country
                country={country}
                ></Country>)
            }
        </div>
    );
};

export default Countri;