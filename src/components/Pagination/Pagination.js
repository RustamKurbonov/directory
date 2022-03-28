import React from "react";

export const Pagination = ({ total, count, paginationFunction }) => {
  const numder = [];

  for (let i = 1; i <= Math.ceil(total / count); i++) {
    numder.push(i);
  }

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {numder.map((i) => (
          <li
            onClick={() => paginationFunction(i)}
            className="pagination__link"
            key={i}
          >
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
