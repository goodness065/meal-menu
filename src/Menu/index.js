import React, { useState } from "react";
import items from "../data";
import AllMenu from "./AllMenu";
import Categories from "./Categories";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const Menu = () => {
  const [menuItems, setMenuItems] = useState(items);
  const categories = allCategories;
  //   const [catergories, setCatergories] = useState(allCategories);
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <section className="menu-section">
      <div className="title">
        <h2>Our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={categories} filterItems={filterItems} />
      <AllMenu items={menuItems} />
    </section>
  );
};

export default Menu;
