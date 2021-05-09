import React, { useContext } from "react";

//types
import { Category } from "../MainMenu";

//components
import ChoosingButton from "../../components/ChoosingButton";

//context

//context
import { AppContext } from "../../AppContext";

//styles
import { ListOfCategories } from "./CategoryList.styles";

type Categories = {
  categories: Category[];
};

const CategoryList: React.FC<Categories> = ({ categories }) => {
  const ctx = useContext(AppContext);

  const handleSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    const category = e.currentTarget.value;

    ctx.setSelectedCategory(category);
  };

  console.log(ctx);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>Category</h2>
      <ListOfCategories>
        {categories.map((cat) => {
          return (
            <li key={cat.id}>
              {/* <CategoryButton value={cat.id} onClick={handleCategorySelect}>
              {cat.name}
            </CategoryButton> */}
              <ChoosingButton
                value={cat.name}
                callback={handleSelect}
                currentlySelected={ctx.selectedCategory}
              />
            </li>
          );
        })}
      </ListOfCategories>
    </div>
  );
};

export default CategoryList;
