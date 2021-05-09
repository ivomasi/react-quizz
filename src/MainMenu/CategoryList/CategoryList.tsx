import React from "react";

//types
import { Category } from "../MainMenu";

//styles
import { ListOfCategories, CategoryButton } from "./CategoryList.styles";

type Categories = {
  categories: Category[];
  handleCategorySelect: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const CategoryList: React.FC<Categories> = ({
  categories,
  handleCategorySelect,
}) => {
  return (
    <ListOfCategories>
      {categories.map((cat) => {
        return (
          <li key={cat.id}>
            <CategoryButton value={cat.id} onClick={handleCategorySelect}>
              {cat.name}
            </CategoryButton>
          </li>
        );
      })}
    </ListOfCategories>
  );
};

export default CategoryList;
