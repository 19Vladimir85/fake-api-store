import { useState } from "react";
import styles from "./StarRating.module.css";
import { FaStar } from "react-icons/fa";

function StarRating() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div className={styles.starRating}>
      {[...Array(5)].map((__, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              className={styles.starsInput}
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className={styles.starItem}
              color={ratingValue <= (hover || rating) ? "#FFD700" : "#D3D3D3"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
}

export default StarRating;
