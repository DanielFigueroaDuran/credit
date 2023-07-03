import { Rating } from "./Rating.jsx";


export const UserCard = ({ user: { name, rating, gender, job, city } }) => {
  console.log();
  return (
    <div className="card">
      <h1>{name}</h1>
        <Rating star={rating}  />
      <p>{gender}</p>
      <p>{job}</p>
      <p>{city}</p>
    </div>
  )
}