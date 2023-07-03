 import  Button  from "./Button.jsx";

export const CardPokemon = ({cardPoke: {name,img,id}}) => {
  //console.log(name);
  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={img} alt="" />
      <p>{id}</p>
      < Button nameBtn={name} />
    </div>
  )
}
