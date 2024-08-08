import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return (
      item.category === selectedCategory || item.category === selectedCategory
    );
  });

  const itemsToShow = itemsToDisplay.filter((item) => {
    if (search === "") return true;

    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter
        search={search}
        onCategoryChange={handleCategoryChange}
        onSearchChange={setSearch}
      />
      <ul className="Items">
        {itemsToShow.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
