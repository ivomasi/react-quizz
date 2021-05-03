import React, { useState, useEffect } from "react";

//components
import Heading from "../components/Heading";
import ActionButton from "../components/ActionButton";
import CategoryList from "./CategoryList/CategoryList";

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
  const history = useHistory();

  const handleStart = () => {
    console.log("start it");
  };

  //fetching effect
  useEffect(() => {
    setLoading((prev) => !prev);

    fetchCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  return (
    <SharedLayout>
      <Heading text={"How much do you know?"} />
      <InsideWrapper>
        <CategoryList categories={categories} />
      </InsideWrapper>

      <ActionButton text={"Start"} callback={handleStart} />
    </SharedLayout>
  );
};

export default MainMenu;
