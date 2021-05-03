import React from "react";

//types
import { Category } from "../MainMenu";

//styles
import { ListOfCategories, CategoryButton } from "./CategoryList.styles";

type Categories = {
  categories: Category[];
};

const CategoryList: React.FC<Categories> = ({ categories }) => {
  return (
    <ListOfCategories>
      {categories.map((cat) => {
        return (
          <li key={cat.id}>
            <CategoryButton value={cat.name}>{cat.name}</CategoryButton>
          </li>
        );
      })}
    </ListOfCategories>
  );
};

export default CategoryList;
