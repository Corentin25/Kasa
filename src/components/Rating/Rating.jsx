import starFull from "../../assets/star-full.png";
import starEmpty from "../../assets/star-empty.png";
import "./rating.scss";

export function Rating({ rating }) {
  const ratingsArray = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {ratingsArray.map((element, index) => (
        <img
          key={index}
          src={rating >= element ? starFull : starEmpty}
          alt="Note"
        />
      ))}
    </div>
  );
}