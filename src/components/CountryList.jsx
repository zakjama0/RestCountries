import Country from "./Country";

const CountryList = ({countries, addCheckedCountry}) => {
    
    const mappedCountries = countries.map(country =>{
        return <Country country = {country} addCheckedCountry={addCheckedCountry} />
    })
    
    return ( <>
    
    {mappedCountries}
    
    </> );
}
 
export default CountryList;