
const Button = ({ nameBtn }) => {
  //console.log(nameBtn);
    const handleClick = (Event) => {
      console.log(nameBtn);
  }
  
  return (
    <div className='button'>
      <button className="btn" onClick={handleClick}>{nameBtn}</button>
    </div>
  )
}

export default Button