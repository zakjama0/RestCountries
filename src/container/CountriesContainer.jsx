import { useEffect, useState } from "react";
import CountryList from "../components/CountryList";
import "./Container.css"

const CountriesContainer = () => {
   const [countries, setCountries] = useState(null);
   const [visitedCountries , setVisitedCountries] = useState(null)
   const [isChecked, setIsChecked] = useState(false)
   
 const loadCountries = async () =>{
    const response = await fetch ("https://restcountries.com/v3.1/all");
    const jsonData = await response.json();
    setCountries(jsonData);
 }
   
   useEffect (() =>{
    console.log(`${countries}`)
   }, [])

   useEffect(() =>{
    loadCountries()
   },[])
   

   const addCheckedCountry= (visitedCountry) => {
    removeCountryFromCountries(visitedCountry)
    if(visitedCountries === null){
        setVisitedCountries([visitedCountry]);
    }
    else{
    setVisitedCountries([...visitedCountries, visitedCountry]);
    }
}
const removeCountryFromCountries = (countryToRemove) => {
    const indexOfCountry = countries.indexOf(countryToRemove);
    countries.splice(indexOfCountry, 1);
    setCountries([...countries]);
}
   return ( <>
    
    {/* {JSON.stringify(countries)} */}
    <div className="container">

    <div >
        <h1>Countries: </h1>
        { countries ? 
     <CountryList countries={countries}  addCheckedCountry ={addCheckedCountry}  />
     : <p>Loading</p>
    }
    </div>

    <div>
        <h1>Visited Countries:</h1>
        { visitedCountries ?
        <CountryList countries={visitedCountries} addCheckedCountry ={addCheckedCountry} />
    : <p>Loading</p>}
    </div>

    </div>
    </> );
}
 
export default CountriesContainer;
