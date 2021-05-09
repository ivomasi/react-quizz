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
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const history = useHistory();

  //fetching effect
  useEffect(() => {
    setLoading((prev) => !prev);

    fetchCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  const handleStart = () => {
    console.log("start it");
  };

  const handleCategorySelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    const cat = e.currentTarget.value;
    console.log(e.currentTarget);

    setSelectedCategory(cat);
  };

  const handleDifficultySelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    const dif = e.currentTarget.value;
    console.log(dif);

    setDifficulty(dif);
  };

  return (
    <SharedLayout>
      <Heading text={"How much do you know?"} />
      <InsideWrapper>
        <CategoryList
          categories={categories}
          handleCategorySelect={handleCategorySelect}
        />
        <DifficultyList
          handleDifficultySelect={handleDifficultySelect}
          difficulty={difficulty}
        />
      </InsideWrapper>

      <ActionButton text={"Start"} callback={handleStart} />
    </SharedLayout>
  );
};

export default MainMenu;
