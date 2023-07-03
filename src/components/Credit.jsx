import React from 'react'

export const Credit = ({ card: { type,number,expirationMonth,expirationYear, bank,owner,cssClass } }) => {
  //console.log(number);
  return (
    <div className={`card ${cssClass ? cssClass  : "green"  }`}>
      <h1>{type}</h1>
      <p>{'**** **** ****' + number.slice(14)}</p>
      <div className='date'>          
          <p>Expires {expirationMonth} / {expirationYear}</p>        
          <p>{bank}</p>
      </div>
      <p>{owner}</p>
    </div>
  )
}