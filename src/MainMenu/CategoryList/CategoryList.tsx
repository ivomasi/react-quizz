import React from "react";

//types
import { Category } from "../MainMenu";

//components
import ChoosingButton from "../../components/ChoosingButton";

//styles
import { ListOfCategories, CategoryButton } from "./CategoryList.styles";

type Categories = {
  categories: Category[];
  selectedCategory: string;
  handleCategorySelect: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const CategoryList: React.FC<Categories> = ({
  categories,
  selectedCategory,
  handleCategorySelect,
}) => {
  return (
    <ListOfCategories>
      {categories.map((cat) => {
        return (
          <li key={cat.id}>
            {/* <CategoryButton value={cat.id} onClick={handleCategorySelect}>
              {cat.name}
            </CategoryButton> */}
            <ChoosingButton
              value={cat.name}
              callback={handleCategorySelect}
              currentlySelected={selectedCategory}
            />
          </li>
        );
      })}
    </ListOfCategories>
  );
};

export default CategoryList;
