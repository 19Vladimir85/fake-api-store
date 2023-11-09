import React, { useState } from "react";
import styles from "./StarRating.module.css";
import { YELLOW, ACTIVE } from "../../utils/consts";
import { StarFilled } from "@ant-design/icons";

function StarRating({ rate }) {
  const [rating, setRating] = useState(rate);
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

            <StarFilled
              className={styles.starItem}
              style={{
                color: ratingValue <= (hover || rating) ? YELLOW : ACTIVE,
              }}
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
