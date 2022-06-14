import React from "react";

function Categories({ categories, filterCategories }) {
  return (
    <>
      <div className="container-buttons">
        {categories.map((category, index) => {
          return (
            <button
              type="submit"
              className="filter-btn"
              key={index}
              onClick={() => filterCategories(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default Categories;
