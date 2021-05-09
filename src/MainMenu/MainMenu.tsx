import React, { useState, useEffect } from "react";

//components
import Heading from "../components/Heading";
import ActionButton from "../components/ActionButton";
import CategoryList from "./CategoryList/CategoryList";
import DifficultyList from "./DiffitcultyList/DifficultyList";

//router
import { useHistory } from "react-router-dom";

//API calls
import { fetchCategories } from "../API";

//styles
import { SharedLayout } from "../shared_styles";
import { InsideWrapper } from "./MainMenu.styles";

//types
export type Category = {
  id: number;
  name: string;
};

//----------------------------------------------------------------------//
const MainMenu: React.FC = (props) => {
  //states
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const history = useHistory();

  //fetching effect
  useEffect(() => {
    fetchCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  const handleStart = () => {
    console.log("start it");
  };

  const handleCategorySelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selectedCat = e.currentTarget.value;

    const selectedCatID = categories.find((cat) => cat.name === selectedCat);
    console.log(selectedCatID?.id);

    setSelectedCategory(selectedCat);
  };

  const handleDifficultySelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    const dif = e.currentTarget.value;

    setDifficulty(dif);
  };

  console.log(difficulty, selectedCategory);

  return (
    <SharedLayout>
      <Heading text={"How much do you know?"} />
      <InsideWrapper>
        <CategoryList
          categories={categories}
          handleCategorySelect={handleCategorySelect}
          selectedCategory={selectedCategory}
        ></CategoryList>
        <DifficultyList
          handleDifficultySelect={handleDifficultySelect}
          difficulty={difficulty}
        >
          <h1>Choose Difficulty</h1>
        </DifficultyList>
      </InsideWrapper>

      <ActionButton text={"Start"} callback={handleStart} />
    </SharedLayout>
  );
};

export default MainMenu;
