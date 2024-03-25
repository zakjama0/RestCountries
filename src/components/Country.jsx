import './Country.css'

const Country = ({country, addCheckedCountry}) => {
    // const countryName = country.map( name => {
    //     return <h1>{name}</h1>
    // })
  const checkedCountry = () => {
    addCheckedCountry(country)
  }

    return (    <>

        <h1 id="country-name">{country.name.common} || {country.translations.ara.common}</h1>
        <h3 id="capital">Capital City: {country.capital}</h3>
        <h3>Continent: {country.region} </h3>
        <img src = {country.flags.png} alt="" />
        <button onClick={checkedCountry}>Visited</button>

    </>  );
}
 
export default Country;