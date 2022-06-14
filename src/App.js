import React from "react";
import './App.css';
import Header from './components/Header';
import Menu from "./components/Menu";
import data from "./data.js";
import Categories from "./components/Categories";

const allCategories = ["all", ...new Set(data.map(item => item.category))];
function App() {
  const [items, setItems] = React.useState(data);
  const [categories, setCategories] = React.useState(allCategories);
  const filterCategories = (category) => {
    if (category === "all") {
      setItems(data);
      //return;
    }
    else {
      const newMenus = data.filter(item => item.category === category);
      setItems(newMenus);
    }
  }
  return (
    <div className="App">
      <Header />
      <Categories categories={categories} filterCategories={filterCategories} />
      <Menu items={items} />
    </div>
  );
}

export default App;
