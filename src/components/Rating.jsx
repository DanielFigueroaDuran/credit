
export const Rating = ({star}) => {
  console.log(star);

  let numStar = [];

       for (let i = 1; i <= 5; i++) {
         //console.log(i); 
        i <= star ? numStar.push(<i className="fa-solid fa-star"></i>) : numStar.push(<i className="fa-regular fa-star"></i>)

       }

  return (

    <div>     
      {numStar}    
        
    </div>
    
      
      
    
  )
}