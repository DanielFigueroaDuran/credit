
function primo(numero) {

  for (let i = 2; i < numero; i++) {

    if (numero % i === 0) {
      return false;
    }

  }

  return numero !== 1;
}


const ButtonEjer4 = (props) => {
  //console.log(props.number);
  let newNum = [];

  for (let i = 1; i <= props.number; i++) {
    if (primo(i)) {
      newNum.push(<button onClick={() => console.log(i)} key={i} className="col red btnList ">{i}</button>)
    } else {
      i % 2 === 0
        ? newNum.push(<button onClick={() => console.log(i)} key={i} className="col green btnList ">{i}</button>)
        : newNum.push(<button onClick={() => console.log(i)} key={i} className="col yellow btnList ">{i}</button>);
    }
   
    
  }
  

  return (
   
    <div className="container">
      <h1>30 Days Of React</h1>
      <p>Number Generator</p>
      <div className="col">
          {newNum}
      </div>
   </div>
  )
}

export default ButtonEjer4