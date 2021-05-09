import React, { useState, useEffect, useContext } from "react";

//context
import { AppContext } from "../AppContext";

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

  const history = useHistory();

  const ctx = useContext(AppContext);

  //fetching effect
  useEffect(() => {
    fetchCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  const handleStart = () => {
    if (!ctx.selectedCategory || !ctx.difficulty || !ctx.name) {
      alert("Choose variations");
      // create something meaningfull
    } else {
      const categoryID = categories.find(
        (cat) => ctx.selectedCategory === cat.name
      );

      history.push({
        pathname: "/5454/quiz",
        state: {
          id: categoryID?.id,
        },
      });
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.currentTarget.value;

    ctx.setName(input);
  };

  return (
    <SharedLayout>
      <Heading text={"How much do you know?"} />
      <InsideWrapper>
        <CategoryList categories={categories}></CategoryList>
        <DifficultyList>
          <h1>Choose Difficulty</h1>
        </DifficultyList>
      </InsideWrapper>
      <input type="text" onChange={handleInput} />
      <ActionButton text={"Start"} callback={handleStart} />
    </SharedLayout>
  );
};

export default MainMenu;
