import { useState } from "react";
import CategoryButton from "./category-button";

export default function Category() {
  const [categoryList, setCategoryList] = useState([
    { name: "전체", isClick: true },
    { name: `애니메이션`, isClick: false },
    { name: `게임`, isClick: false },
  ]);

  const handleCategoryClick = (clickedIndex: number) => {
    setCategoryList((prev) =>
      prev.map((category, index) => ({
        ...category,
        isClick: index === clickedIndex,
      }))
    );
  };
  return (
    <>
      {categoryList.map((category, idx) => (
        <CategoryButton
          key={idx}
          isClick={category.isClick}
          onClick={() => handleCategoryClick(idx)}
        >
          {category.name}
        </CategoryButton>
      ))}
    </>
  );
}
