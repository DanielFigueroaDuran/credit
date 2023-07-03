import  ButtonEjer4  from "./ButtonEjer4";




const ButtonList = ({num}) => {
  //console.log(num); 
  
 
    return (
            <div className="col">     
                {<ButtonEjer4 number={num}/>}
                             
            </div>
              
  )
}

export default ButtonList