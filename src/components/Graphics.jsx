

const Graphics = ({graphicsCountry: {country, population}}) => {
  
  const percentagePpulation = Math.round((population/7693165599)*100) 
  
  
  let newCountry = country.toUpperCase();
  const newPopulation = population.toLocaleString().replaceAll('.',',')
  console.log();

  if (country === "United States of America" ) {
      newCountry = "USA"
  } else if (country === "Russian Federation") 
    newCountry = "RUSSIA";
  
  

  
  //console.log(country);
  return (
    <>
      <div className="country">
          <p>{newCountry}</p>                    
          <div className="percentage" style={{ width: `${percentagePpulation}%` }}></div>
          <p>{newPopulation}</p>          
      </div>
     
    </>
  )
}

export default Graphics